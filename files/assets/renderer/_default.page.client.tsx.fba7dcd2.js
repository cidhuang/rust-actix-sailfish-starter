import{t as e,c as t,g as r,i as s,s as o,u as i,h as n,r as l}from"../vendor.06c74fdb.js";const a=e('<a class="navitem" href="/">Home</a>'),d=e('<a class="navitem" href="/about">About</a>'),y=e("<div></div>"),c=e('<div><a href="/"><img height="64" width="64" alt="logo"></a></div>'),p=e=>t(h,{get children(){return[t(g,{get children(){return[t(m,{}),r(a),r(d)]}}),t(P,{get children(){return e.children}})]}}),h=e=>(()=>{const t=r(y);return t.style.setProperty("display","flex"),t.style.setProperty("max-width","900px"),t.style.setProperty("margin","auto"),s(t,(()=>e.children),void 0,Array.prototype.slice.call(t.childNodes,0)),t})(),g=e=>(()=>{const t=r(y);return t.style.setProperty("padding","20px"),t.style.setProperty("flex-shrink",0),t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("align-items","center"),t.style.setProperty("line-height","1.8em"),s(t,(()=>e.children),void 0,Array.prototype.slice.call(t.childNodes,0)),t})(),P=e=>(()=>{const t=r(y);return t.style.setProperty("padding","20px"),t.style.setProperty("padding-bottom","50px"),t.style.setProperty("border-left","2px solid #eee"),t.style.setProperty("min-height","100vh"),s(t,(()=>e.children),void 0,Array.prototype.slice.call(t.childNodes,0)),t})(),m=()=>(()=>{const e=r(c),t=e.firstChild.firstChild;return e.style.setProperty("margin-top","20px"),e.style.setProperty("margin-bottom","10px"),o(t,"src","/assets/logo.bebe2e90.svg"),e})();let u;const{hydrationPromise:f}=i({render(e){const r=document.getElementById("page-view"),{Page:s,pageProps:o}=e;u&&u(),e.isHydration?u=n((()=>t(p,{get children(){return t(s,o)}})),r):l((()=>t(p,{get children(){return t(s,o)}})),r)},onTransitionStart:function(){console.log("Page transition start")},onTransitionEnd:function(){console.log("Page transition end")}});f.then((e=>{console.log("Hydration finished; page is now interactive.")}));