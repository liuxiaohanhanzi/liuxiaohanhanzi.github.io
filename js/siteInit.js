import{a as U,c as G,d as Pe,e as Be,f as De,g as Ue,h as je,j as ee}from"./chunk-KREVYDVD.js";import{a as g,b}from"./chunk-4OVPKHYB.js";import{$ as qe,A as m,B as pe,C as E,D as P,E as B,F as ge,G as D,H as K,J as Q,K as ve,L as we,O as ye,P as Ee,Q as be,R as Le,S as Ce,T as Se,U as Te,V as xe,W as He,X as _e,Y as ke,Z as Ae,_ as Ie,a as f,aa as Oe,ba as Me,c as H,ca as Re,da as Ne,e as _,f as de,k as O,l as ue,m as h,n as V,o as M,p as R,q as me,r as he,s as N,t as j,u as fe,v as S,w,x as z,y as T,z as J}from"./chunk-MQ4ZOWGO.js";import"./chunk-UDRCFUEY.js";import{c as u}from"./chunk-5WZTVUUC.js";u();u();u();ue();var k=(e,t)=>{m.hasClass("on")?(m.removeClass("on"),T.removeClass("close"),t?m.style="":g(m,"slideRightOut")):t?m.style="":g(m,"slideRightIn",()=>{m.addClass("on"),T.addClass("close")})},ze=()=>{let e=m.querySelector(".inner");m.querySelector(".tab")&&e.removeChild(m.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let n=m.querySelector(".panel."+s);if(n.innerHTML.trim().length<1){s==="contents"&&O(D,"none");return}s==="contents"&&O(D,"");let a=document.createElement("li"),c=document.createElement("span"),i=document.createTextNode(n.getAttribute("data-title"));c.appendChild(i),a.appendChild(c),a.addClass(s+" item"),o?(n.addClass(o),a.addClass(o)):n.removeClass("active"),a.addEventListener("click",r=>{let l=r.currentTarget;l.hasClass("active")||(m.find(".tab .item").forEach(d=>{d.removeClass("active")}),m.find(".panel").forEach(d=>{d.removeClass("active")}),m.querySelector(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(a),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),m.querySelector(".panels").style.paddingTop=""):m.querySelector(".panels").style.paddingTop=".625rem"},Ge=()=>{let e=i=>{let r=t[i];if(!r||r.hasClass("current"))return;f.each(".toc .active",d=>{d&&d.removeClass("active current")}),o.forEach(d=>{d&&d.removeClass("active")}),r.addClass("active current"),o[i]&&o[i].addClass("active");let l=r.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let d=document.getElementById(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href").replace("#","")));d&&d.addClass("active")}l=l.parentNode}getComputedStyle(m).display!=="none"&&n.hasClass("active")&&b(n,r.offsetTop-n.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((i,r)=>{let l=i.querySelector("a.toc-link"),d=document.getElementById(decodeURI(l.getAttribute("href").replace("#","")));if(!d)return null;let I=d.querySelector("a.anchor"),q=C=>{C.preventDefault();let ht=document.getElementById(decodeURI(C.currentTarget.getAttribute("href").replace("#","")));s=r,b(ht,null,()=>{e(r),s=null})};return l.addEventListener("click",q),I&&I.addEventListener("click",C=>{q(C),Be(h.hostname+"/"+LOCAL.path+C.currentTarget.getAttribute("href"))}),d});let n=m.querySelector(".contents.panel"),a=i=>{let r=0,l=i[r];if(l.boundingClientRect.top>0)return r=o.indexOf(l.target),r===0?0:r-1;for(;r<i.length;r++)if(i[r].boundingClientRect.top<=0)l=i[r];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let i=new IntersectionObserver(r=>{let l=a(r)+(R<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(r=>{r&&i.observe(r)})})()},te=()=>{b(0)},Fe=()=>{b(parseInt(String(_(fe))))},$e=()=>{b(document.getElementById("comments"))},Ye=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),a=!t.onclick&&t.hostname===location.hostname&&(s||n);e.toggleClass("active",a),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};u();var v={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),S.setAttribute("style","display:block"),v.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){v.lock||(h.loader.start&&g(S,0),document.body.addClass("loaded"),v.lock=!0)}};function oe(){f.each(".overview .menu > .item",t=>{w.querySelector(".menu").appendChild(t.cloneNode(!0))}),S.addEventListener("click",v.vanish),T.addEventListener("click",k),document.querySelector(".dimmer").addEventListener("click",k),J.querySelector(".down").addEventListener("click",Fe),J.querySelector(".up").addEventListener("click",te),E||Re(H(z,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),Ie(E.querySelector(".player")),qe(E.querySelector(".back-to-top")),Oe(E.querySelector(".chat")),Me(E.querySelector(".contents")),B.addEventListener("click",te),ge.addEventListener("click",$e),D.addEventListener("click",k),Ue(P),document.querySelector("main").addEventListener("click",()=>{P.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}u();u();var We=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};u();u();var y=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(j.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(j.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Xe=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?y("dark"):y())},se=e=>{j.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Ze=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?y("dark"):y()});let e=U.get("theme");e?y(e):h.darkmode&&y("dark")};var ft=document.getElementById("waves"),F=()=>{Ee(_(w)),be(_(z)),Le(Q+_(ft)),we!==window.innerWidth&&k(null,1),Ce(window.innerHeight),Se(window.innerWidth)},Ve=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>Q,n=window.scrollY>0;s?se("#FFF"):se("#222"),w.toggleClass("show",s),E.toggleClass("affix",n),pe.toggleClass("affix",n),m.toggleClass("affix",window.scrollY>ve&&document.body.offsetWidth>=991),typeof M.y>"u"&&(M.y=window.scrollY),Te(M.y-window.scrollY),R<0?(w.removeClass("up"),w.toggleClass("down",s)):R>0&&(w.removeClass("down"),w.toggleClass("up",s)),M.y=window.scrollY;let a=Math.round(Math.min(100*window.scrollY/o,100))+"%";B.querySelector("span").innerText!==a&&(B.querySelector("span").innerText=a),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&de(document.querySelector(".percent"),a)},Je=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",V+h.favicon.hidden),document.title=LOCAL.favicon.hide,h.loader.switch&&v.show(),clearTimeout(he);break;case"visible":e.setAttribute("href",V+h.favicon.normal),document.title=LOCAL.favicon.show,h.loader.switch&&v.hide(1e3),xe(setTimeout(()=>{document.title=me},2e3));break}},{passive:!0})};u();u();u();var pt=new Uint8Array(128);for(let e=0;e<83;e++)pt["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".charCodeAt(e)]=e;var gt=Math.PI,ho=gt*2;var Ke=32,Qe="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";var et=typeof window>"u",tt=!et&&"loading"in HTMLImageElement.prototype,ot=!et&&(!("onscroll"in window)||/(?:gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function vt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function wt(e){let t=Date.now();return Qe.replace(/\s/,` data-id='${t}-${e}' `)}function yt(e,t){let o;return function(...s){o!=null&&clearTimeout(o),o=setTimeout(()=>{e(...s),o=void 0},t)}}function ie(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Ke,updateSizesOnResize:n=!1,onImageLoad:a}={}){let c=new Set;for(let[i,r]of vt(e).entries()){let l=re(r,{updateOnResize:n});if(n&&l&&c.add(l),!r.dataset.src&&!r.dataset.srcset)continue;if(ot||!tt){st(r),W(r),Y(r);continue}if(r.src||(r.src=wt(i)),r.complete&&r.naturalWidth>0){ne(r,a);continue}let d=()=>ne(r,a);r.addEventListener("load",d,{once:!0}),c.add(()=>r.removeEventListener("load",d))}return()=>{for(let i of c)i();c.clear()}}function ne(e,t){if(rt(e)){st(e),W(e),Y(e),t?.(e);return}let o=new Image,{srcset:s,src:n,sizes:a}=e.dataset;if(a==="auto"){let c=nt(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),n&&(o.src=n),o.addEventListener("load",()=>{W(e),Y(e),t?.(e)},{once:!0})}var $=new WeakMap;function re(e,t){if(e.dataset.sizes!=="auto")return;let o=nt(e);if(o&&(e.sizes=`${o}px`),rt(e)&&t?.processSourceElements)for(let s of[...e.parentElement.getElementsByTagName("source")])re(s,{processSourceElements:!0});if(t?.updateOnResize){if(!$.has(e)){let s=yt(()=>re(e),500),n=new ResizeObserver(s);$.set(e,n),n.observe(e)}return()=>{let s=$.get(e);s&&(s.disconnect(),$.delete(e))}}}function Y(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function W(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function st(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(W),[...t.querySelectorAll("source[data-src]")].forEach(Y))}function nt(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}function rt(e){return e.parentElement?.tagName.toLowerCase()==="picture"}var it=()=>{G(),m.hasClass("on")&&g(m,0,()=>{m.removeClass("on"),T.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(S.lastChild.cloneNode(!0)),b(0)},ae=async e=>{He(0),_e(window.location.href),ee("katex"),await import("./copy-tex-55RLRICM.js"),ee("mermaid");let t=new IntersectionObserver(function(s,n){s.forEach(a=>{if(a.isIntersecting){let c=a.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),n.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&f.each("script[data-pjax]",je),Ae(document.title),F(),Ye(),ze(),Ge(),import("./post-SDJPSXAQ.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&(import("./tcomments-R6BU7JD7.js").then(({twikooComment:c})=>{c()}),s.disconnect())})},{root:null,threshold:.2});s.observe(o)}ie(),import("./tcomments-R6BU7JD7.js").then(async({twikooRecentComments:s})=>{await s()}),De(),P.player.load(LOCAL.audio||h.audio||{}),v.hide(100),setTimeout(()=>{Pe()},500),We()};u();function ce(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}ce();u();function x(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var dt=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function le(e,t,o,s){dt(t,n=>{x(e,a=>{a.addEventListener(n,o,s)})})}function A(e,t,o={}){dt(t,s=>{let n=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});x(e,a=>{a.dispatchEvent(n)})})}function at(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,o!==""&&(n.src=o,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),s.appendChild(n),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(n)&&s.removeChild(n),!0)}function Et(e){e.tagName.toLowerCase()==="script"&&at(e),x(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),at(o))})}function bt(e,t,o,s=document){e.forEach(n=>{x(s.querySelectorAll(n),t,o)})}var X=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function ut(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function Lt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function ct(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function Ct({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:n=!0,scrollTo:a=0,scrollRestoration:c=!0,cacheBust:i=!0,timeout:r=0,currentUrlFullReload:l=!1}={}){let d={elements:e,selectors:t,switches:o,switchesOptions:s,history:n,scrollTo:a,scrollRestoration:c,cacheBust:i,timeout:r,currentUrlFullReload:l};return d.switches.head||(d.switches.head=ct),d.switches.body||(d.switches.body=ct),d}var Z="data-pjax-state";function lt(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=St(e,t);if(s){e.setAttribute(Z,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(Z,"reload"),this.reload();return}e.setAttribute(Z,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function St(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Tt(e){e.setAttribute(Z,""),le(e,"click",t=>lt.call(this,e,t)),le(e,"keyup",t=>{let o=t;o.keyCode===13&&lt.call(this,e,o)})}function xt(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){A(document,"pjax:complete pjax:error",s);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||X(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let a=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=a;let i=c.hash;c.href=o,i&&!c.hash&&(c.hash=i,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(r){return A(document,"pjax:error",s),console.error("Pjax switch fail: ",r),this.latestChance(o)}}function Ht(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function _t(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+n+t+"="+o}function kt(e,t={},o){let s=t.requestOptions||{},n=(s.requestMethod||"GET").toUpperCase(),a=s.requestParams||null,c=null,i=new XMLHttpRequest,r=t.timeout;if(i.onreadystatechange=()=>{i.readyState===4&&(i.status===200?o(i.responseText,i,e,t):i.status!==0&&o(null,i,e,t))},i.onerror=l=>{console.error(l),o(null,i,e,t)},i.ontimeout=()=>{o(null,i,e,t)},a&&a.length){let l=a.map(d=>d.name+"="+d.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":c=l;break}}return t.cacheBust&&(e=_t(e,"t",Date.now())),i.open(n,e,!0),i.timeout=r,i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("X-PJAX","true"),i.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),i.send(c),i}function At(e,t,o,s,n,a){let c=[];o.forEach(i=>{let r=s.querySelectorAll(i),l=n.querySelectorAll(i);if(r.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${i}' - new ${r.length}, old ${l.length}`);x(r,(d,I)=>{let q=l[I],C=e[i]?e[i].bind(this,q,d,a,t[i]):ut.bind(this,q,d,a);c.push(C)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(i=>{i()})}function It(e,t,o){for(let s of t){let n=e.querySelectorAll(s);for(let a=0;a<n.length;a++)if(n[a].contains(o))return!0}return!1}var L=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Ct(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=X(),this.parseDOM(document),le(window,"popstate",o=>{let s=o;if(s.state){let n={...this.options};n.url=s.state.url,n.title=s.state.title,n.history=!1,n.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?n.backward=!0:n.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,n)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){x(this.getElements(t),Ht,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return bt.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,n){return At.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,n)}latestChance(t){window.location=t}onSwitch(){A(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){A(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),n=/<html[^>]+>/gi,a=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(n);if(c&&c.length&&(c=c[0].match(a),c.length&&(c.shift(),c.forEach(i=>{let r=i.trim().split("=");r.length===1?s.documentElement.setAttribute(r[0],"true"):s.documentElement.setAttribute(r[0],r[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&It(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),A(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(a=>{x(document.querySelectorAll(a),c=>{Et(c)})});let n=this.state;if(!((t=n.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=X(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=X(),window.history.pushState({url:n.href,title:n.options.title,uid:this.maxUid,scrollPos:[0,0]},n.options.title,n.href)),this.forEachSelectors(a=>{this.parseDOM(a)},this),A(document,"pjax:complete pjax:success",n.options),!((o=n.options)===null||o===void 0)&&o.history){let a=document.createElement("a");if(a.href=this.state.href,a.hash){let c=a.hash.slice(1);c=decodeURIComponent(c);let i=0,r=document.getElementById(c)||document.getElementsByName(c)[0];if(r&&r.offsetParent)do i+=r.offsetTop,r=r.offsetParent;while(r);window.scrollTo(0,i)}else n.options.scrollTo!==!1&&(Array.isArray(n.options.scrollTo)?window.scrollTo(n.options.scrollTo[0],n.options.scrollTo[1]):window.scrollTo(0,n.options.scrollTo))}else!((s=n.options)===null||s===void 0)&&s.scrollRestoration&&n.options.scrollPos&&window.scrollTo(n.options.scrollPos[0],n.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};L.prototype.attachLink=Tt;L.prototype.doRequest=kt;L.prototype.handleResponse=xt;L.switches={innerHTML:Lt,outerHTML:ut};u();function mt(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=H(N,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{g(s,{delay:2500,opacity:0},()=>{N.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),y("dark"),U.set("theme","dark"),n()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),y(),U.set("theme","light"),n()}),g(s,1,()=>{setTimeout(t,210)},()=>{O(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var qt=async()=>{mt(),oe(),ke(new L({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-5WRCF53G.js").then(({listen:e})=>{e(h.quicklink)}),Xe(),Je(),Ze(),document.querySelector("li.item.search > i").addEventListener("click",()=>{h.search!==null&&(K||Ne(H(N,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-ALFGGYMB.js").then(({algoliaSearch:e})=>{e(ye)}),f.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",g(K,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-P24Q5NOE.js").then(e=>{e.default(h.fireworks)}),window.addEventListener("scroll",Ve,{passive:!0}),window.addEventListener("resize",F,{passive:!0}),window.addEventListener("pjax:send",it,{passive:!0}),window.addEventListener("pjax:success",ae,{passive:!0}),window.addEventListener("beforeunload",()=>{G()}),await ae(1)};ce();window.addEventListener("DOMContentLoaded",qt,{passive:!0});console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
