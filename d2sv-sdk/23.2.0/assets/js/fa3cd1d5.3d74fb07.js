"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2.03},s="Add smartview UI support to an existing plugin project",o={unversionedId:"general/ws_assistant/2_03_add.sv.ui",id:"general/ws_assistant/2_03_add.sv.ui",title:"Add smartview UI support to an existing plugin project",description:"This options of the workspace assistant can be used to add Smartview UI support to an existing",source:"@site/articles/general/ws_assistant/2_03_add.sv.ui.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_03_add.sv.ui",permalink:"/d2sv-sdk/23.2.0/general/ws_assistant/2_03_add.sv.ui",draft:!1,tags:[],version:"current",sidebarPosition:2.03,frontMatter:{sidebar_position:2.03},sidebar:"general",previous:{title:"Add Smartview application scope perspective",permalink:"/d2sv-sdk/23.2.0/general/ws_assistant/2_02_add.sv.app.scope.perspective"},next:{title:"Remove a plugin from workspace",permalink:"/d2sv-sdk/23.2.0/general/ws_assistant/2_04_remove.plugin"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-smartview-ui-support-to-an-existing-plugin-project"},"Add smartview UI support to an existing plugin project"),(0,a.kt)("p",null,"This options of the workspace assistant can be used to add Smartview UI support to an existing\nD2SV plugin project, if the project was created initially without Smartview support."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add D2SV UI to plugin"),(0,a.kt)("p",null,"Select the D2SV plugin project, from the list of options, where Smartview UI code will be injected.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Selected plugin seems to have D2SV UI support enabled already, overwrite it ?"),(0,a.kt)("p",null,"Confirm whether to overwrite the boilerplate code related to enabling D2SV UI support for the plugin. This question is asked only when the assistant detects that the selected plugin project already has D2SV UI support enabled in it."))))}d.isMDXComponent=!0}}]);