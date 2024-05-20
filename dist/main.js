(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(601),r=n.n(a),o=n(314),i=n.n(o)()(r());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ndiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\ndiv:not(:last-child) {\n  margin-bottom: 30px;\n}\n\ndiv > h1 {\n  max-width: 70ch;\n  margin: 8px;\n}\n\n#content {\n  padding-top: 6px;\n\n  p {\n    max-width: 340px;\n  }\n  h1 {\n    text-align: center;\n  }\n}\n\n.menu-header {\n  margin: 8px;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 10px;\n}\n\nnav button {\n  padding: 8px 16px;\n  margin: 0 16px;\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);a&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,a);a.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var u=n(o[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"384ed75b047d2f91bf58.png";function t(){const t=document.getElementById("content"),n=document.createElement("div");t.textContent="";const a=document.createElement("h1"),r=document.createElement("img"),o=document.createElement("p");a.textContent="Welcome to Random's Chaos Kitchen!",r.src=e,r.width="340",r.height="190",r.alt="chaos kitchen logo",o.textContent="You won't find more chaos and mayhem then here at the Chaos Kitchen! We whip you up storms of meals that even the gods themselves would find hard to quell!",n.append(a,r,o),t.appendChild(n)}const a=[{img:n.p+"f78639a9d9a659eb2383.jpg",imgAlt:"mozzarella stuffed mealball burgers",name:"Mayhem meatball burgers",description:"The mayhem caused by these mozzarella stuffed meatball burgers is sure to be worth the justification of causing a little bit of a mess! Just don't ask what the meatballs are stuffed with!"},{img:n.p+"09cd47142c76efaecbde.jpeg",imgAlt:"frenzy tuna melt",name:"Frenzy Tuna Melt",description:"The frenzy tuna melt will leave your mouth questioning why you even tried it! The frenzy part is the surprise: you get different vegetables mixed in every time!"},{img:n.p+"ee705ee6bce8eb7e4b0f.jpg",imgAlt:"mixed greek chaos tacos",name:"Chaos Greek tacos",description:"What beef? What sauce? What vegetables? We don't even know! The beef changes daily and the sauce is hourly! You getting mayonaise? Horse radish? Our special sauce? The vegetables can be brussel sprouts today and seaweed tomorrow!"}],r=n.p+"dafdbcf467fb5c2af35c.png",o=n.p+"55c0eafaab8296237075.gif";var i=n(72),c=n.n(i),s=n(825),d=n.n(s),u=n(659),l=n.n(u),p=n(56),m=n.n(p),h=n(540),f=n.n(h),g=n(113),v=n.n(g),y=n(365),b={};b.styleTagTransform=v(),b.setAttributes=m(),b.insert=l().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=f(),c()(y.A,b),y.A&&y.A.locals&&y.A.locals,t();const x=document.getElementById("restaurant-home"),w=document.getElementById("restaurant-menu"),E=document.getElementById("restaurant-about");x.addEventListener("click",(()=>{t()})),w.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");e.textContent="";const t=document.createElement("header"),n=document.createElement("h1");n.textContent="You were expecting a menu, BUT-",e.appendChild(t),t.appendChild(n);const a=document.createElement("img");a.src=o,a.width="340",e.appendChild(a);const i=document.createElement("img");i.src=r,i.width="340",i.alt="about page logo",e.appendChild(i);const c=document.createElement("p");c.style.fontWeight="bold",c.textContent="Here at the Chaos Kitchen we leave you wanting more and not less! The taste combinations that will sweep your sensations will be beyond catastrophic as the flavors cause pandemonium in your mouth! Thanks to the way we mix up the ingredients in all our dishes it's guaranteed to cause disorder in the best possible way!",e.appendChild(c)}()})),E.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");e.textContent="";const t=document.createElement("h1");t.textContent="The most chaotic menu in existence!",e.appendChild(t);for(let t=0;t<a.length;t++){const n=document.createElement("div"),r=document.createElement("img"),o=document.createElement("h2"),i=document.createElement("p");r.src=a[t].img,r.width="340",r.height="190",r.alt=a[t].imgAlt,o.textContent=a[t].name,o.classList.add("menu-header"),i.textContent=a[t].description,n.append(r,o,i),e.appendChild(n)}}()}))})()})();