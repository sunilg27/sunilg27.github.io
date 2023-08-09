"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?o.createElement(k,a(a({ref:t},m),{},{components:n})):o.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},a="ToolItemMaskCollection",l={unversionedId:"api/nuc/models/tool.item.mask/tool.item.mask.collection",id:"api/nuc/models/tool.item.mask/tool.item.mask.collection",title:"ToolItemMaskCollection",description:"Lists all registered tool item masks. The models are initialized with the id",source:"@site/articles/api/nuc/models/tool.item.mask/tool.item.mask.collection.md",sourceDirName:"api/nuc/models/tool.item.mask",slug:"/api/nuc/models/tool.item.mask/tool.item.mask.collection",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/tool.item.mask/tool.item.mask.collection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"NodeColumn2Collection",permalink:"/d2sv-sdk/23.4.0/api/nuc/models/node.columns2"},next:{title:"Authenticators",permalink:"/d2sv-sdk/23.4.0/api/nuc/utils/authenticators/"}},s={},c=[],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"toolitemmaskcollection"},"ToolItemMaskCollection"),(0,r.kt)("p",null,"Lists all registered tool item masks. The models are initialized with the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\nattribute pointing to the module name, which provides the tool item mask\nand accepts Require.js configuration to populate the mask."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var toolItemMasks = new ToolItemMaskCollection();\ntoolItemMasks.each(function (mask) {\n  console.log(mask.id);\n});\n")),(0,r.kt)("p",null,"The collection is populated by Require.js configuration from the extension\nconfiguratoin (",(0,r.kt)("inlineCode",{parentName:"p"},"prefix-extension.json")," files)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nuc/models/tool.item.mask/tool.item.mask.collection": {\n    "masks": {\n      "csui": [\n        "csui/widgets/nodestable/toolbaritems.masks",\n        "csui/widgets/nodestable/headermenuitems.mask"\n      ],\n      "conws": [\n        "conws/widgets/related.workspaces/toolbaritems.masks"\n      ]\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);