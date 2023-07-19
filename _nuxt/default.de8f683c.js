import{_ as V}from"./nuxt-link.75efb3b0.js";import{h as F,i as z,j as p,k as Y,l as q,m as X,q as g,s as $,v as G,g as J,o as b,c as y,a as n,b as u,w as v,n as K,x as L,y as I,z as P,d as x,p as Q,e as Z,_ as O,f as H,r as ee,F as te}from"./entry.96c138b1.js";const se=""+globalThis.__publicAssetsURL("images/logo-solid-blue.png");function W(e){return F()?(z(e),!0):!1}function A(e){return typeof e=="function"?e():p(e)}const B=typeof window<"u",T=()=>{},C=oe();function oe(){var e;return B&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}const D={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function ne(...e){if(e.length!==1)return Y(...e);const t=e[0];return typeof t=="function"?q(X(()=>({get:t,set:T}))):g(t)}function S(e){var t;const s=A(e);return(t=s==null?void 0:s.$el)!=null?t:s}const M=B?window:void 0;function E(...e){let t,s,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,o,r]=e,t=M):[t,s,o,r]=e,!t)return T;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const f=[],_=()=>{f.forEach(m=>m()),f.length=0},a=(m,k,l,i)=>(m.addEventListener(k,l,i),()=>m.removeEventListener(k,l,i)),c=$(()=>[S(t),A(r)],([m,k])=>{_(),m&&f.push(...s.flatMap(l=>o.map(i=>a(m,l,i,k))))},{immediate:!0,flush:"post"}),d=()=>{c(),_()};return W(d),d}let N=!1;function R(e,t,s={}){const{window:o=M,ignore:r=[],capture:f=!0,detectIframe:_=!1}=s;if(!o)return;C&&!N&&(N=!0,Array.from(o.document.body.children).forEach(l=>l.addEventListener("click",T)));let a=!0;const c=l=>r.some(i=>{if(typeof i=="string")return Array.from(o.document.querySelectorAll(i)).some(h=>h===l.target||l.composedPath().includes(h));{const h=S(i);return h&&(l.target===h||l.composedPath().includes(h))}}),m=[E(o,"click",l=>{const i=S(e);if(!(!i||i===l.target||l.composedPath().includes(i))){if(l.detail===0&&(a=!c(l)),!a){a=!0;return}t(l)}},{passive:!0,capture:f}),E(o,"pointerdown",l=>{const i=S(e);i&&(a=!l.composedPath().includes(i)&&!c(l))},{passive:!0}),_&&E(o,"blur",l=>{setTimeout(()=>{var i;const h=S(e);((i=o.document.activeElement)==null?void 0:i.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&t(l)},0)})].filter(Boolean);return()=>m.forEach(l=>l())}const j={[D.mounted](e,t){const s=!t.modifiers.bubble;if(typeof t.value=="function")e.__onClickOutside_stop=R(e,t.value,{capture:s});else{const[o,r]=t.value;e.__onClickOutside_stop=R(e,o,Object.assign({capture:s},r))}},[D.unmounted](e){e.__onClickOutside_stop()}};function U(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const s=e.parentNode;return!s||s.tagName==="BODY"?!1:U(s)}}function le(e){const t=e||window.event,s=t.target;return U(s)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}function ae(e,t=!1){const s=g(t);let o=null,r;$(ne(e),a=>{if(a){const c=a;r=c.style.overflow,s.value&&(c.style.overflow="hidden")}},{immediate:!0});const f=()=>{const a=A(e);!a||s.value||(C&&(o=E(a,"touchmove",c=>{le(c)},{passive:!1})),a.style.overflow="hidden",s.value=!0)},_=()=>{const a=A(e);!a||!s.value||(C&&(o==null||o()),a.style.overflow=r,s.value=!1)};return W(_),G({get(){return s.value},set(a){a?f():_()}})}function ie(){let e=!1;const t=g(!1);return(s,o)=>{if(t.value=o.value,e)return;e=!0;const r=ae(s,o.value);$(t,f=>r.value=f)}}ie();const w=e=>(Q("data-v-0974c555"),e=e(),Z(),e),re={class:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"},ce={class:"container flex flex-wrap items-center justify-between mx-auto p-4"},de={class:"flex items-center"},ue=w(()=>n("button",{type:"button",class:"menu-toggle"},[n("i-mdi-hamburger-menu",{class:"icon"})],-1)),fe=[ue],me=w(()=>n("img",{src:se,alt:"THAU",class:"h-12"},null,-1)),pe=w(()=>n("div",{class:"flex items-center md:order-2"},[n("nav",{class:"inline-flex items-center space-x-2"},[n("a",{class:"text-slate-500 hover:text-slate-900"},"EN"),n("span",null,"|"),n("a",{class:"text-slate-500 hover:text-slate-900"},"ES")])],-1)),_e={class:"menu-list"},he=w(()=>n("li",{class:"menu-item"},"PURPOSE",-1)),ve={class:"relative"},we=w(()=>n("span",null,"SERVICES",-1)),xe=w(()=>n("i-mdi-chevron-down",{class:"icon"},null,-1)),ge=[we,xe],be={class:"dropdown-list"},ye={class:"relative"},ke=w(()=>n("span",null,"ARTICLES",-1)),Se=w(()=>n("i-mdi-chevron-down",{class:"icon"},null,-1)),Ee=[ke,Se],Ae={class:"dropdown-list"},Oe=w(()=>n("li",{class:"menu-item"},"CONTACT",-1)),Ce=J({__name:"Header",setup(e){let t=g(!1),s=g(!1),o=g(!1);const r=()=>t.value=!1,f=()=>s.value=!1,_=()=>o.value=!o.value;return(a,c)=>{const d=V;return b(),y("nav",re,[n("div",ce,[n("div",de,[n("div",{onClick:_,class:"flex md:hidden mr-4"},fe),u(d,{to:"/"},{default:v(()=>[me]),_:1})]),pe,n("div",{class:K(["items-center w-full md:flex md:w-auto md:order-1",p(o)?"flex":"hidden"])},[n("ul",_e,[he,n("li",null,[n("div",ve,[n("button",{onClick:c[0]||(c[0]=m=>L(s)?s.value=!p(s):s=!p(s)),class:"dropdown-toggle"},ge),I((b(),y("div",be,[u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Data Science")]),_:1}),u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Software Development")]),_:1}),u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Platform Engineering")]),_:1}),u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Expert Onboard")]),_:1})])),[[P,p(s)],[p(j),f]])])]),n("li",null,[n("div",ye,[n("button",{onClick:c[1]||(c[1]=m=>L(t)?t.value=!p(t):t=!p(t)),class:"dropdown-toggle"},Ee),I((b(),y("div",Ae,[u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Data Science")]),_:1}),u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Software Development")]),_:1}),u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Platform Engineering")]),_:1}),u(d,{to:"/",class:"dropdown-item"},{default:v(()=>[x("Expert Onboard")]),_:1})])),[[P,p(t)],[p(j),r]])])]),Oe])],2)])])}}});const $e=O(Ce,[["__scopeId","data-v-0974c555"]]),Te={},Le={class:"body-font bg-slate-600 text-slate-200"},Ie=H('<div class="container px-4 py-16 mx-auto"><div class="flex flex-wrap md:text-left text-center order-first"><div class="lg:w-2/4 md:w-1/2 w-full sm:mb-0 mb-8"><h2 class="title-font font-medium tracking-widest text-sm mb-3">ABOUT</h2><p class="pr-12"> Our purpose is to make the world a better place through technology. We believe that empowered people and knowledge-driven systems are drivers of smarter attitudes. We are a lean and agile company operating globally online. </p></div><div class="lg:w-1/4 md:w-1/2 w-full sm:mb-0 mb-8"><h2 class="title-font font-medium tracking-widest text-sm mb-3">CONTACT</h2><nav class="list-none"><li class="mb-2"><a class="hover:text-white"><i-mdi-email-outline class="inline-block text-lg align-middle mr-2"></i-mdi-email-outline><span>info@thau.tech</span></a></li><li class="mb-2"><a class="hover:text-white"><i-mdi-whatsapp class="inline-block text-lg align-middle mr-2"></i-mdi-whatsapp><span>+34 677 470 860</span></a></li><li><a class="hover:text-white"><i-mdi-map-marker-outline class="inline-block text-lg align-middle mr-2"></i-mdi-map-marker-outline><span>Barcelona, Spain</span></a></li></nav></div><div class="lg:w-1/4 md:w-1/2 w-full"><h2 class="title-font font-medium tracking-widest text-sm mb-3">NEWSLETTER</h2><div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap items-end md:justify-start"><div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2"><label for="footer-field" class="leading-7 text-sm">Professional Email</label><input type="text" id="footer-field" name="footer-field" class="w-full bg-slate-100 rounded border border-gray-300 focus:ring-2 focus:ring-slate-200 focus:border-slate-500 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded">Subscribe</button></div><p class="text-slate-400 text-sm mt-2 md:text-left">Monthly updates and no spam. </p></div></div></div>',1),Pe=[Ie];function De(e,t){return b(),y("section",Le,Pe)}const Ne=O(Te,[["render",De]]),Re=""+globalThis.__publicAssetsURL("images/logo-solid-white.png"),je={},He={class:"body-font bg-slate-800"},We=H('<div class="container px-4 py-6 mx-auto flex items-center sm:flex-row flex-col"><a class="flex items-center md:justify-start justify-center"><img src="'+Re+'" alt="THAU" class="h-3"><span class="font-bold text-white ml-2">© 2023 </span></a><nav class="inline-flex items-center sm:ml-8 space-x-2 text-slate-500"><a class="hover:text-slate-200">Privacy Policy</a><span>|</span><a class="hover:text-slate-200">Terms of Use</a></nav><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a href="https://github.com/thautech" target="_blank"><i-mdi-github class="inline-block text-2xl text-slate-400"></i-mdi-github></a><a class="ml-4" href="https://www.linkedin.com/company/thautech" target="_blank"><i-mdi-linkedin class="inline-block text-2xl text-slate-400"></i-mdi-linkedin></a></span></div>',1),Be=[We];function Me(e,t){return b(),y("footer",He,Be)}const Ue=O(je,[["render",Me]]),Ve={};function Fe(e,t){const s=$e,o=Ne,r=Ue;return b(),y(te,null,[u(s),ee(e.$slots,"default"),u(o),u(r)],64)}const qe=O(Ve,[["render",Fe]]);export{qe as default};
