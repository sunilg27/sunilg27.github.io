"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2.04},i="Remove a plugin from workspace",s={unversionedId:"general/ws_assistant/2_04_remove.plugin",id:"general/ws_assistant/2_04_remove.plugin",title:"Remove a plugin from workspace",description:"This option is used to remove a plugin project from the corresponding workspace.",source:"@site/articles/general/ws_assistant/2_04_remove.plugin.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_04_remove.plugin",permalink:"/general/ws_assistant/2_04_remove.plugin",draft:!1,tags:[],version:"current",sidebarPosition:2.04,frontMatter:{sidebar_position:2.04},sidebar:"general",previous:{title:"Add smartview UI support to an existing plugin project",permalink:"/general/ws_assistant/2_03_add.sv.ui"},next:{title:"Add D2-REST controller support to a plugin project",permalink:"/general/ws_assistant/2_05_add.rest.controller"}},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remove-a-plugin-from-workspace"},"Remove a plugin from workspace"),(0,o.kt)("p",null,"This option is used to remove a plugin project from the corresponding workspace."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select plugin to remove from workspace"),(0,o.kt)("p",null,"Select which plugin project is to be removed from the workspace.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Remove it completely from file system?"),(0,o.kt)("p",null,"Whether to remove the project completely from filesystem. In case of a soft removal, the project is left intact on the disk, however its entry from the aggregator POM in workspace is removed to exclude it from build order."))))}m.isMDXComponent=!0}}]);