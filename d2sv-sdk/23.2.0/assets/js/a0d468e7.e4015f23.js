"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2.11},o="Add smartview shortcut tile",s={unversionedId:"general/ws_assistant/2_11_add.sv.tile.shortcut",id:"general/ws_assistant/2_11_add.sv.tile.shortcut",title:"Add smartview shortcut tile",description:"Using this option of the assistant, a shortcut type of tile definition could be created.",source:"@site/articles/general/ws_assistant/2_11_add.sv.tile.shortcut.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_11_add.sv.tile.shortcut",permalink:"/d2sv-sdk/23.2.0/general/ws_assistant/2_11_add.sv.tile.shortcut",draft:!1,tags:[],version:"current",sidebarPosition:2.11,frontMatter:{sidebar_position:2.11},sidebar:"general",previous:{title:"Add smartview list tile",permalink:"/d2sv-sdk/23.2.0/general/ws_assistant/2_10_add.sv.tile.list"},next:{title:"Add D2FS dialog to a plugin",permalink:"/d2sv-sdk/23.2.0/general/ws_assistant/2_12_add.d2fs.dialog"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-smartview-shortcut-tile"},"Add smartview shortcut tile"),(0,i.kt)("p",null,"Using this option of the assistant, a shortcut type of tile definition could be created."),(0,i.kt)("p",null,"D2 Smartview has a bunch of shortcut tile implemenation on its own. Visually all the shortcuts\nlook similar except their representation icon. However, each type of shortcut has its own\nmechanism to react to click event."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This shortcut goes to plugin"),(0,i.kt)("p",null,"To select the plugin project where to create boilerplate associated with creating a widget tile.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type of this shortcut"),(0,i.kt)("p",null,"Declare the type of this shortcut tile definition.",(0,i.kt)("a",{href:"./../howto/1_03_custom.widget.type"}," Creating custom widget type")," can be referred for more information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CSS class name for the icon"),(0,i.kt)("p",null,"CSS class selector to put in the HTML element hosting the icon for this shortcut tile. Later this same class name could be used to render a specific icon for this tile.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Does it require a widget config?"),(0,i.kt)("p",null,"Shortcut tiles can optionally be backed by a widget config(E.g. Doclist type of shortcut requires a ",(0,i.kt)("code",null,"DoclistWidget")," config). Answering with ",(0,i.kt)("code",null,"yes")," associates this shortcut with a widget config.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What this shortcut should do on click?"),(0,i.kt)("p",null,"Defines what happens when end user clicks on this tile. Can be one of -"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Execute inline handler ",(0,i.kt)("br",null),"A JS callback function will implement the action."),(0,i.kt)("li",{parentName:"ul"},"Execute a behavior ",(0,i.kt)("br",null),"The action is delegated to a shortcut behavior implementaion. The actual definition of the beahvior is to be coded into the boilerplate created."),(0,i.kt)("li",{parentName:"ul"},"Expand to perspective",(0,i.kt)("br",null),"The action is to open an application scope perspective. Further questions are asked for creating the application scope perspective.",(0,i.kt)("a",{href:"./2_02_add.sv.app.scope.perspective"}," Add smartview application scope perspective")," can be referred for meanings of such questions.")))))}d.isMDXComponent=!0}}]);