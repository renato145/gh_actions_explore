(this.webpackJsonpperu_news=this.webpackJsonpperu_news||[]).push([[0],{202:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),i=n(72),s=n.n(i),o=n(205),l=n(74),u=n(73),d=n(9),f=n.n(d),j=n(22),b=n(23),m=n.n(b),v=n(208),O=function(){var e=Object(j.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.github.com/repos/renato145/peru_news/contents/data/summary?ref=main",{});case 2:if(t=e.sent,n=t.data,200===(a=t.status)){e.next=7;break}throw new Error("status: ".concat(a));case 7:return e.abrupt("return",n.map((function(e){return{download_url:e.download_url,name:e.name.split(".json")[0]}})).sort((function(e,t){return t.name.localeCompare(e.name)})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=n(17),x=n(207),h=function(){var e=Object(j.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching summary data from ".concat(t)),e.next=3,m.a.get(t);case 3:if(n=e.sent,a=n.data,200===(r=n.status)){e.next=8;break}throw new Error("status: ".concat(r));case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(8),w=n(75),D=function(e,t,n,a){var r=new Map;return t.forEach((function(t){var n=e[t];void 0!==n&&Object.entries(n).forEach((function(e){var t,n=Object(g.a)(e,2),c=n[0],i=n[1],s=null!==(t=r.get(c))&&void 0!==t?t:new Map;Object.entries(i).forEach((function(e){var t,n=Object(g.a)(e,2),r=n[0],c=n[1];-1===a.indexOf(r)&&s.set(r,(null!==(t=s.get(r))&&void 0!==t?t:0)+c)})),r.set(c,s)}))})),Array.from(r).map((function(e){var t=Object(g.a)(e,2),a=t[0],r=t[1];return[a,Array.from(r).sort((function(e,t){return t[1]-e[1]})).slice(0,n)]}))},N=Object(w.a)((function(e,t){var n,a;return{data:{},topk:0,activeDates:[],activeData:[],selectedWord:"",filters:null!==(n=null===(a=localStorage.getItem("filters"))||void 0===a?void 0:a.split(","))&&void 0!==n?n:[],wordData:null,add:function(t){e((function(e){var n=e.data;return{data:Object.assign(n,t)}}))},addActiveDate:function(t){e((function(e){var n=e.data,a=e.activeDates,r=e.topk,c=e.filters;if(a.indexOf(t)>-1)return{};var i=a.concat(t);return 0===r?{activeDates:i}:{activeDates:i,activeData:D(n,i,r,c)}}))},rmActiveDate:function(t){e((function(e){var n=e.data,a=e.activeDates,r=e.topk,c=e.filters;if(a.indexOf(t)>-1){var i=a.filter((function(e){return e!==t}));return 0===r?{activeDates:i}:{activeDates:i,activeData:D(n,i,r,c)}}return{}}))},isActiveDate:function(e){return t().activeDates.indexOf(e)>-1},setSelectedWord:function(n){var a=new Map;""!==n&&Object.entries(t().data).forEach((function(e){var t=Object(g.a)(e,2),r=t[0],c=t[1];Object.entries(c).forEach((function(e){var t,c,i=Object(g.a)(e,2),s=i[0],o=i[1];a.has(s)||a.set(s,[]),null===(t=a.get(s))||void 0===t||t.push([r,null!==(c=o[n])&&void 0!==c?c:0])}))})),e({selectedWord:n,wordData:a})},setTopK:function(t){e((function(){return{topk:t}}))},addFilter:function(t){e((function(e){var n=e.data,a=e.activeDates,r=e.topk,c=e.filters;if(c.indexOf(t)>-1)return{};var i=c.concat(t);return localStorage.setItem("filters",i.join()),{activeData:D(n,a,r,i),filters:i}}))},rmFilter:function(t){e((function(e){var n=e.data,a=e.activeDates,r=e.topk,c=e.filters;if(c.indexOf(t)>-1){var i=c.filter((function(e){return e!==t}));return localStorage.setItem("filters",i.join()),{activeData:D(n,a,r,i),filters:i}}return{}}))},getTimelineData:function(e){var n;return null===(n=t().wordData)||void 0===n?void 0:n.get(e)}}})),y=n(206),k=function(e){return Object(y.a)(e,"yyyyMMdd",new Date)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/Y";return Object(x.a)(e,t)},S=function(e){return Object(x.a)(k(e),"dd/MM/Y")},C=function(e){var t=e.date,n=e.url,c=e.load,i=e.className,s=void 0===i?"":i,o=function(e){return Object(v.a)(["data",{url:e}],(function(){return h(e)}),{enabled:!1,retry:!1})}(n),l=o.isError,u=o.isLoading,d=o.isSuccess,f=o.refetch,j=N(function(e){return function(t){return{add:t.add,addDate:function(){return t.addActiveDate(e)},removeDate:function(){return t.rmActiveDate(e)},isActive:t.isActiveDate(e)}}}(t)),b=j.add,m=j.addDate,O=j.removeDate,x=j.isActive,g=Object(r.useCallback)((function(){x||l?O():d&&m()}),[x,l,O,d,m]),w=Object(r.useCallback)((function(){if(d)g();else{if(u)return;f().then((function(e){var n=e.data;n&&(b(Object(p.a)({},t,n)),m())}))}}),[b,m,u,d,f,g,t]);return Object(r.useEffect)((function(){c&&w()}),[c]),l?null:Object(a.jsx)("div",{className:"".concat(s," p-2 transition cursor-pointer ").concat(x?"bg-green-600 text-gray-50":"bg-gray-300"," ").concat(u?"animate-pulse":""),onClick:function(){return w()},children:Object(a.jsx)("p",{className:"font-semibold pointer-events-none",children:S(t)})})},F=function(e){var t=e.className,n=null!==t&&void 0!==t?t:"h-5 w-5";return Object(a.jsxs)("svg",{className:"animate-spin mr-3 ".concat(n),fill:"none",viewBox:"0 0 24 24",children:[Object(a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},W=function(e){var t=e.n,n=e.loadN,r=Object(v.a)("files",(function(){return O()})),c=r.data,i=r.error,s=r.status;return Object(a.jsx)("div",{className:"-mt-2 -ml-2 flex flex-wrap",children:"error"===s?Object(a.jsxs)("p",{children:["Couldn't load files: ",Object(a.jsx)("span",{children:String(i)})]}):"success"===s&&c?c.slice(0,t).map((function(e,t){var r=e.download_url,c=e.name;return Object(a.jsx)(C,{className:"mt-2 ml-2",date:c,url:r,load:t<n},t)})):Object(a.jsx)("div",{className:"w-full flex justify-center",children:Object(a.jsx)(F,{className:"h-10 w-10"})})})},E=function(){var e=Object(j.a)(f.a.mark((function e(){var t,n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://raw.githubusercontent.com/renato145/peru_news/main/settings.json",{});case 2:if(t=e.sent,n=t.data,200===(a=t.status)){e.next=7;break}throw new Error("status: ".concat(a));case 7:return r=new Map,n.sources.forEach((function(e){var t=e.name,n=e.url;return r.set(t,n)})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=n(26),T=n(37),_=function(e){return{rmFilter:e.rmFilter}},I=function(e){var t=e.word,n=e.className,r=void 0===n?"":n,c=Object(T.a)(e,["word","className"]),i=N(_).rmFilter;return Object(a.jsx)("div",Object(A.a)(Object(A.a)({className:"px-2 rounded-md bg-red-400 hover:bg-red-600 text-sm text-white font-medium transition-colors cursor-pointer ".concat(r),onClick:function(){i(t)}},c),{},{children:t}))},K=n(78),L=n(76),z=n(19),B=function(e){var t=e.data,n=e.xScale,c=Object(L.a)({polyfill:K.a}),i=Object(g.a)(c,2),s=i[0],o=i[1].width,l=o/3,u=Object(r.useMemo)((function(){var e,a=[0,null!==(e=Object(z.d)(t.map((function(e){return e[1]}))))&&void 0!==e?e:0],r=Object(z.e)().domain(a).range([l-10,10]),c=n.range([5,o-5]),i=t.map((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return[c(k(n)),r(a)]}));return{values:i,path:Object(z.c)().curve(z.a)(i),timeScale:c,yScale:r}}),[n,o,l,t]),d=u.values,f=u.path,j=u.timeScale,b=u.yScale;return Object(a.jsx)("svg",{ref:s,className:"w-full my-1 bg-white rounded",height:o/3,children:f&&d?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("path",{fill:"none",className:"stroke-current text-blue-700 stroke-2 transition-all",d:f}),d.map((function(e,t){var n=Object(g.a)(e,2),r=n[0],c=n[1];return Object(a.jsx)("circle",{cx:r,cy:c,className:"scatter hover:scatter-lg fill-current text-blue-700 hover:text-blue-400 transition-all",children:Object(a.jsx)("title",{children:"".concat(Math.round(b.invert(c))," (").concat(M(j.invert(r),"dd MMM"),")")})},t)}))]}):null})},P=function(e){return{selectedWord:e.selectedWord,setSelectedWord:e.setSelectedWord,addFilter:e.addFilter}},J=function(e){var t=e.data,n=N(P),c=n.selectedWord,i=n.setSelectedWord,s=n.addFilter,o=Object(r.useMemo)((function(){return t.map((function(e){var t=Object(g.a)(e,2);t[0];return t[1]})).reduce((function(e,t){return Math.max(e,t)}))}),[t]);return Object(a.jsx)("div",{className:"flex flex-col space-y-1",children:t.map((function(e,t){var n=Object(g.a)(e,2),r=n[0],l=n[1];return Object(a.jsxs)("div",{className:"group relative flex items-center h-8",onClick:function(){return function(e){i(c!==e?e:"")}(r)},children:[Object(a.jsxs)("div",{className:"absolute flex w-full justify-between pl-2",children:[Object(a.jsxs)("p",{className:"pointer-events-none ".concat(c===r?"font-semibold":""),children:[r," (",l,")"]}),Object(a.jsx)("p",{className:"mr-2 font-bold text-xs cursor-pointer text-gray-400 hover:text-gray-900",onClick:function(e){return function(e,t){e.stopPropagation(),c===t&&i(""),s(t)}(e,r)},children:"X"})]}),Object(a.jsx)("div",{className:"h-full transition-all duration-300 cursor-pointer group-hover:bg-blue-300 ".concat(c===r?"bg-blue-400":"bg-blue-200"),style:{width:"".concat(100*l/o,"%")}})]},t)}))})},R=function(e){return{selectedWord:e.selectedWord,getTimelineData:e.getTimelineData}},Y=function(e){var t=e.name2url,n=e.name,c=e.wc,i=e.xScale,s=Object(T.a)(e,["name2url","name","wc","xScale"]),o=N(R),l=o.selectedWord,u=o.getTimelineData,d=Object(r.useMemo)((function(){return u(n)}),[u,n,l]);return Object(a.jsxs)("div",Object(A.a)(Object(A.a)({},s),{},{children:[d&&null!==i&&""!==l?Object(a.jsx)(B,{data:d,xScale:i}):null,Object(a.jsx)("a",{className:"capitalize text-lg font-semibold",href:null===t||void 0===t?void 0:t.get(n),target:"_black",rel:"noopener",children:n.replace("_"," ")}),Object(a.jsx)("div",{className:"my-2",children:Object(a.jsx)(J,{data:c})})]}))},q=function(e){return{activeData:e.activeData,activeDates:e.activeDates,setTopK:e.setTopK,filters:e.filters}},H=function(e){var t=e.topk,n=N(q),c=n.activeData,i=n.activeDates,s=n.setTopK,o=n.filters,l=Object(v.a)("name2url",(function(){return E()})).data,u=Object(r.useMemo)((function(){var e=Object(z.b)(i.map(k));return e[0]?Object(z.f)().domain(e):null}),[i]);return Object(r.useEffect)((function(){s(t)}),[s,t]),Object(a.jsx)("div",{className:"mt-2",children:0===c.length?Object(a.jsx)("div",{className:"mt-10 flex justify-center",children:Object(a.jsx)(F,{className:"h-14 w-14"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{className:"font-semibold",children:["Loaded data: ",i.length]}),Object(a.jsx)("div",{className:"flex flex-wrap -ml-1",children:o.map((function(e,t){return Object(a.jsx)(I,{className:"ml-1 mt-0.5",word:e},t)}))}),Object(a.jsx)("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4",children:c.sort((function(e,t){var n=Object(g.a)(e,1)[0],a=Object(g.a)(t,1)[0];return n.localeCompare(a)})).map((function(e,t){var n=Object(g.a)(e,2),r=n[0],c=n[1];return Object(a.jsx)(Y,{className:"px-4 py-2 bg-blue-50",name2url:l,name:r,wc:c,xScale:u},t)}))})]})})},Q=new o.a({defaultOptions:{queries:{refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,cacheTime:36e5}}}),V=function(){return Object(a.jsxs)(l.a,{client:Q,children:[Object(a.jsxs)("div",{className:"m-4",children:[Object(a.jsx)(W,{n:10,loadN:5}),Object(a.jsx)(H,{topk:10})]}),Object(a.jsx)(u.ReactQueryDevtools,{initialIsOpen:!0})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(202);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),X()}},[[203,1,2]]]);
//# sourceMappingURL=main.fa949a89.chunk.js.map