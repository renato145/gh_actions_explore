use super::{utils, Config, Headline, SiteConfig};
use anyhow::Result;
use scraper::{Html, Selector};
use std::{
    fs::File,
    io::BufReader,
    path::{Path, PathBuf},
};

async fn scrape_web(url: &str, selector: &str) -> Result<Vec<Headline>> {
    let body = reqwest::get(url).await?.text().await?;
    let document = Html::parse_document(&body);
    let selector = Selector::parse(selector).unwrap();

    let data: Vec<_> = document
        .select(&selector)
        .map(Headline::from_element)
        .filter_map(|o| o)
        .map(|headline| headline.add_baseurl(url))
        .collect();

    Ok(data)
}

fn save_results(data: Vec<Headline>, path: &PathBuf) -> Result<usize> {
    let (n, data) = if path.exists() {
        let file = File::open(path)?;
        let rdr = BufReader::new(file);
        let mut current_data: Vec<Headline> = serde_json::from_reader(rdr)?;
        let urls: Vec<_> = (&current_data).into_iter().map(|o| o.url.clone()).collect();
        let mut new_data: Vec<_> = data
            .into_iter()
            .filter(|o| !urls.contains(&o.url))
            .collect();
        let n = new_data.len();
        current_data.append(&mut new_data);
        (n, current_data)
    } else {
        (data.len(), data)
    };

    let file = File::create(path)?;
    serde_json::to_writer_pretty(file, &data)?;
    Ok(n)
}

pub async fn scrape_all(config: Config) -> Result<()> {
    let time = utils::get_peru_time().format("%Y%m%d").to_string();
    let path = Path::new(&config.out_path).join(time);
    std::fs::create_dir_all(&path).unwrap();
    println!("Scrapping into folder: {:?}", path.display());

    let handlers = config.sources.into_iter().map(
        |SiteConfig {
             name,
             url,
             selector,
         }| {
            let filename = format!("{}.json", &name);
            let path_out = path.join(filename);
            tokio::spawn(async move {
                match scrape_web(&url, &selector).await {
                    Ok(data) => {
                        print!("{} ({}) => Found {} headlines", name, url, data.len());
                        match save_results(data, &path_out) {
                            Ok(n) => println!(" ({} new ones)", n),
                            Err(err) => println!(", error saving new records: {}", err),
                        }
                    }
                    Err(err) => eprintln!("{} ({}) => Error scrapping: {}", name, url, err),
                };
            })
        },
    );

    futures::future::join_all(handlers).await;
    println!("Done! :)");
    Ok(())
}
