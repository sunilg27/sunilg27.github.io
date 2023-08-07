"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[1316],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||l;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,c=new Array(l);c[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const l={},c="NodeColumn2Collection",i={unversionedId:"api/nuc/models/node.columns2",id:"api/nuc/models/node.columns2",title:"NodeColumn2Collection",description:"Collects schemas of node properties:",source:"@site/articles/api/nuc/models/node.columns2.md",sourceDirName:"api/nuc/models",slug:"/api/nuc/models/node.columns2",permalink:"/23.2.0/next/api/nuc/models/node.columns2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"NodeChildren2Collection",permalink:"/23.2.0/next/api/nuc/models/node.children2/"},next:{title:"ToolItemMaskCollection",permalink:"/23.2.0/next/api/nuc/models/tool.item.mask/tool.item.mask.collection"}},a={},p=[],u={toc:p},s="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodecolumn2collection"},"NodeColumn2Collection"),(0,o.kt)("p",null,"Collects schemas of node properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "column_key": "...",\n  "name": "...",\n  "type" ...,\n  "sort": ...\n}\n')),(0,o.kt)("p",null," or keys of custom columns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "column_key": "..."\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"node.definitions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node.columns")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeModel"),"."))}m.isMDXComponent=!0}}]);