(this.webpackJsonpperu_news=this.webpackJsonpperu_news||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(16),o=n.n(s),i=n(5),u=n(34),l=n(15),d=n(7),f=n.n(d),j=n(12),b=n(13),m=n.n(b),p={enabled:!1,retry:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,cacheTime:36e5},O=function(){var e=Object(j.a)(f.a.mark((function e(t){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.github.com/repos/renato145/peru_news/contents/data/summary?ref=main",{});case 2:if(n=e.sent,r=n.data,200===(c=n.status)){e.next=7;break}throw new Error("status: ".concat(c));case 7:return e.abrupt("return",r.map((function(e){return{download_url:e.download_url,name:e.name.split(".json")[0]}})).sort((function(e,t){return t.name.localeCompare(e.name)})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(62),x=n(61),v=n(8),g=function(e){return Object.entries(e).map((function(e){var t=Object(v.a)(e,2),n=t[0],r=t[1];return[n,Object.entries(r)]}))},w=function(){var e=Object(j.a)(f.a.mark((function e(t,n){var r,c,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,console.log("fetching summary data ".concat(t," ").concat(r)),e.next=4,m.a.get(r);case 4:if(c=e.sent,a=c.data,200===(s=c.status)){e.next=9;break}throw new Error("status: ".concat(s));case 9:return e.abrupt("return",g(a));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=n(33),N=Object(y.a)((function(e,t){return{data:[],selectedWord:"",add:function(t){return e((function(e){return e.data.indexOf(t)>-1?{}:{data:e.data.concat(t)}}))},remove:function(t){return e((function(e){return e.data.indexOf(t)>-1?{data:e.data.filter((function(e){return e!==t}))}:{}}))},isActive:function(e){return t().data.indexOf(e)>-1},setSelectedWord:function(t){return e({selectedWord:t})}}})),k=function(e){return Object(h.a)(Object(x.a)(e,"yyyyMMdd",new Date),"dd/MM/Y")},C=function(e){var t=e.date,n=e.url,a=e.load,s=e.className,o=void 0===s?"":s,u=function(e){return Object(i.d)(["data",{url:e}],w,p)}(n),l=u.isError,d=u.isLoading,f=u.isSuccess,j=u.refetch,b=N(function(e){return function(t){return{addDate:function(){return t.add(e)},removeDate:function(){return t.remove(e)},isActive:t.isActive(e)}}}(n)),m=b.addDate,O=b.removeDate,h=b.isActive,x=Object(c.useCallback)((function(){h||l?O():f&&m()}),[h,l,O,f,m]),v=Object(c.useCallback)((function(){if(f)x();else{if(d)return;j().then((function(e){e&&m()}))}}),[m,d,f,j,x]);return Object(c.useEffect)((function(){a&&v()}),[a]),l?null:Object(r.jsx)("div",{className:"".concat(o," p-2 transition cursor-pointer ").concat(h?"bg-green-600 text-gray-50":"bg-gray-300"," ").concat(d?"animate-pulse":""),onClick:function(){return v()},children:Object(r.jsx)("p",{className:"font-semibold pointer-events-none",children:k(t)})})},M=function(e){var t=e.className,n=null!==t&&void 0!==t?t:"h-5 w-5";return Object(r.jsxs)("svg",{className:"animate-spin mr-3 ".concat(n),fill:"none",viewBox:"0 0 24 24",children:[Object(r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},E=function(e){e.n;var t=e.loadN,n=Object(i.d)("files",O,Object(l.a)(Object(l.a)({},p),{},{enabled:!0,retry:!0})),c=n.data,a=n.error,s=n.status;return Object(r.jsx)("div",{className:"-mt-2 -ml-2 flex flex-wrap",children:s===i.b.Error?Object(r.jsxs)("p",{children:["Couldn't load files: ",Object(r.jsx)("span",{children:String(a)})]}):s===i.b.Success&&c?c.map((function(e,n){var c=e.download_url,a=e.name;return Object(r.jsx)(C,{className:"mt-2 ml-2",date:a,url:c,load:n<t},n)})):Object(r.jsx)("div",{className:"w-full flex justify-center",children:Object(r.jsx)(M,{className:"h-10 w-10"})})})},W=function(){var e=Object(j.a)(f.a.mark((function e(t){var n,r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://raw.githubusercontent.com/renato145/peru_news/main/settings.json",{});case 2:if(n=e.sent,r=n.data,200===(c=n.status)){e.next=7;break}throw new Error("status: ".concat(c));case 7:return a=new Map,r.sources.forEach((function(e){var t=e.name,n=e.url;return a.set(t,n)})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){return Object(i.d)("name2url",W,Object(l.a)(Object(l.a)({},p),{},{enabled:!0,retry:!0}))},_=function(e){return{selectedWord:e.selectedWord,setSelectedWord:e.setSelectedWord}},D=function(e){var t=e.data,n=N(_),a=n.selectedWord,s=n.setSelectedWord,o=Object(c.useMemo)((function(){return t.map((function(e){var t=Object(v.a)(e,2);t[0];return t[1]})).reduce((function(e,t){return Math.max(e,t)}))}),[t]);return Object(r.jsx)("div",{className:"flex flex-col space-y-1",children:t.map((function(e,t){var n=Object(v.a)(e,2),c=n[0],i=n[1];return Object(r.jsxs)("div",{className:"relative flex items-center h-8",onClick:function(){return function(e){s(a!==e?e:"")}(c)},children:[Object(r.jsxs)("p",{className:"absolute pl-2  cursor-pointer ".concat(a===c?"font-semibold":""),children:[c," (",i,")"]}),Object(r.jsx)("div",{className:"h-full transition-all duration-300 cursor-pointer ".concat(a===c?"bg-blue-400":"bg-blue-200"),style:{width:"".concat(100*i/o,"%")}})]},t)}))})},A=function(e){return e.data},F=function(e){var t=e.topk,n=N(A),a=Object(i.e)(),s=S().data;S();var o=Object(c.useMemo)((function(){var e=new Map;return n.map((function(e){return a.getQueryData(["data",{url:e}])})).forEach((function(t){t&&t.forEach((function(t){var n,r=Object(v.a)(t,2),c=r[0],a=r[1],s=null!==(n=e.get(c))&&void 0!==n?n:new Map;a.forEach((function(e){var t,n=Object(v.a)(e,2),r=n[0],c=n[1];s.set(r,(null!==(t=s.get(r))&&void 0!==t?t:0)+c)})),e.set(c,s)}))})),Array.from(e).map((function(e){var n=Object(v.a)(e,2),r=n[0],c=n[1];return[r,Array.from(c).sort((function(e,t){return t[1]-e[1]})).slice(0,t)]}))}),[a,n,t]);return Object(r.jsx)("div",{className:"mt-2",children:0===o.length?Object(r.jsx)("div",{className:"mt-10 flex justify-center",children:Object(r.jsx)(M,{className:"h-14 w-14"})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{className:"font-semibold",children:["Loaded data: ",n.length]}),Object(r.jsx)("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4",children:o.map((function(e,t){var n=Object(v.a)(e,2),c=n[0],a=n[1];return Object(r.jsxs)("div",{className:"px-4 py-2 bg-blue-50",children:[Object(r.jsx)("a",{className:"capitalize text-lg font-semibold",href:null===s||void 0===s?void 0:s.get(c),target:"_black",rel:"noopener",children:c.replace("_"," ")}),Object(r.jsx)("div",{className:"my-2",children:Object(r.jsx)(D,{data:a})})]},t)}))})]})})},L=new i.a,z=function(){return Object(r.jsxs)(i.c,{queryCache:L,children:[Object(r.jsxs)("div",{className:"m-4",children:[Object(r.jsx)(E,{n:10,loadN:5}),Object(r.jsx)(F,{topk:10})]}),Object(r.jsx)(u.ReactQueryDevtools,{initialIsOpen:!0})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(58);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root")),B()}},[[59,1,2]]]);
//# sourceMappingURL=main.cea4e3c9.chunk.js.map