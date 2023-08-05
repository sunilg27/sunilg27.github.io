"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="Architecture",c={unversionedId:"general/architecture-23",id:"version-23.2.0/general/architecture-23",title:"Architecture",description:"A simplified representation of the D2 Smartview(D2SV) runtime.",source:"@site/versioned_docs/version-23.2.0/general/architecture-23.md",sourceDirName:"general",slug:"/general/architecture-23",permalink:"/general/architecture-23",draft:!1,tags:[],version:"23.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1}},l={},u=[{value:"Technology",id:"technology",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"A simplified representation of the D2 Smartview(D2SV) runtime."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"D2 Architecture",src:r(9695).Z,width:"3386",height:"1820"})),(0,a.kt)("p",null,"A central component of the runtime is D2 Plugins a.k.a D2FS Plugins.\nA D2 Plugin is loaded dynamically in the D2SV Ecosystem and it can primarily augment\nfunctions of D2 Foundation Services(D2FS)."),(0,a.kt)("p",null,"The D2SV SDK API is built around the same D2 Plugins architecture and additionally\nit can augment functions of D2SV UI & D2FS-REST runtime."),(0,a.kt)("p",null,"The SDK deals with hybrid Maven + NodeJS project which has both Java & Javascript code\nalong with other static resources organized in a certain structure. Upon build,\nthe SDK compiles and packages the built output into a Jar. This Jar file can then be dropped\ninside the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," folder of a D2 Smartview runtime. The D2SV runtime loads the pluggable components\nfrom within the Jar dynamically."),(0,a.kt)("h2",{id:"technology"},"Technology"),(0,a.kt)("p",null,"The D2 Smartview is a web application and requires a hybrid middleware runtime. JVM runs the Java written\nback-end code and an Internet browser's Javascript VM runs the front-end. All the communication\nbetween FE & BE happens through AJAX request-response."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Java based back-end uses the Spring WebMVC Framework, configured to run in an\napplication container, along with other proprietary and open-source libraries."),(0,a.kt)("li",{parentName:"ul"},"The Javascript front-end uses Backbone & Marionette UI framework along with jQuery,\nRequireJS, Underscore, Handlebars etc. libraries.")))}d.isMDXComponent=!0},9695:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-d2-16c41b68ec54e8c5b293a6cb36f6b242.png"}}]);