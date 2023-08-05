"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||c[f]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2.12},i="Add D2FS dialog to a plugin",l={unversionedId:"general/ws_assistant/2_12_add.d2fs.dialog",id:"version-23.2.0/general/ws_assistant/2_12_add.d2fs.dialog",title:"Add D2FS dialog to a plugin",description:"If a D2SV plugin intends to define a property-page like form then this assistant option could be used to create the boilerplate",source:"@site/versioned_docs/version-23.2.0/general/ws_assistant/2_12_add.d2fs.dialog.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_12_add.d2fs.dialog",permalink:"/general/ws_assistant/2_12_add.d2fs.dialog",draft:!1,tags:[],version:"23.2.0",sidebarPosition:2.12,frontMatter:{sidebar_position:2.12}},s={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-d2fs-dialog-to-a-plugin"},"Add D2FS dialog to a plugin"),(0,o.kt)("p",null,"If a D2SV plugin intends to define a property-page like form then this assistant option could be used to create the boilerplate\nassociated with such form, which is also known as D2FS dialog."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select plugin to add new D2FS dialog",(0,o.kt)("p",null,"Specify the plugin project where to add boilerplate for this dialog")),(0,o.kt)("li",{parentName:"ul"},"Enter name of the dialog",(0,o.kt)("p",null,"A unique name of the dialog. It is also used as an ID to refer to the dialog from other part of D2SV runtime.")),(0,o.kt)("li",{parentName:"ul"},"Title of the dialog",(0,o.kt)("p",null,"The title to be displayed when the dialog is visible on screen. It defaults to the given name of the dialog.")),(0,o.kt)("li",{parentName:"ul"},"Create a menu to open the dialog?",(0,o.kt)("p",null,"Whether to also define a menu item in D2SV context menu so that clicking that menu would show the dialog. Defaults to ",(0,o.kt)("code",null,"Yes"),".")),(0,o.kt)("li",{parentName:"ul"},"Label for the menu",(0,o.kt)("p",null,"Define an English label for the menu. This question is asked only if the previous question was answered with an ",(0,o.kt)("code",null,"Yes"),".")),(0,o.kt)("li",{parentName:"ul"},"Pick a toolbar to add this menu to",(0,o.kt)("p",null,"D2-Smartview UI shows different type of menu bars depending on the application context. By answering this option we can specify the menubar where this menu is going to be added. This question is asked only if 'Create menu to open the dialog?' was answered with ",(0,o.kt)("code",null,"Yes"),"."))))}c.isMDXComponent=!0}}]);