"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7392],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6141:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:2.1},o="Add smartview list tile",s={unversionedId:"general/ws_assistant/2_10_add.sv.tile.list",id:"general/ws_assistant/2_10_add.sv.tile.list",isDocsHomePage:!1,title:"Add smartview list tile",description:"Using this option of the assistant, a new list type of tile a.k.a widget tile definition could be",source:"@site/articles/general/ws_assistant/2_10_add.sv.tile.list.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_10_add.sv.tile.list",permalink:"/general/ws_assistant/2_10_add.sv.tile.list",tags:[],version:"current",sidebarPosition:2.1,frontMatter:{sidebar_position:2.1},sidebar:"general",previous:{title:"Add smartview shortcut behavior",permalink:"/general/ws_assistant/2_09_add.sv.shortcut.behavior"},next:{title:"Add smartview shortcut tile",permalink:"/general/ws_assistant/2_11_add.sv.tile.shortcut"}},l=[],p={toc:l};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-smartview-list-tile"},"Add smartview list tile"),(0,a.kt)("p",null,"Using this option of the assistant, a new list type of tile a.k.a widget tile definition could be\nadded."),(0,a.kt)("p",null,"All widget tiles shown in D2 Smartview landing perspective are visually similar, however they are backed\nby different type of widget conifiguration and display data evaluated in the context of that\nwidget."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Use this option when at least one plugin project exists in the workspace."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This shortcut goes to plugin"),(0,a.kt)("p",null,"To select the plugin project where to create boilerplate associated with creating a widget tile.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Name of Widget type to associate"),(0,a.kt)("p",null,"Specify which type of widget configuration will drive this list tile data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CSS class name for the icon"),(0,a.kt)("p",null,"CSS class selector to put in the HTML element hosting the icon for this widget tile. Later this same class name could be used to render a specific icon for this tile.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Directory name where generated code will be put into"),(0,a.kt)("p",null,"Relative location of the boilerplate code w.r.t selected plugin projects widget source directory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default title of this tile"),(0,a.kt)("p",null,"Specifies an optional default name for the tile which is shown at the header region of this tile incase the underlying widget configuration is not able to provide a name for it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"How would you describe this tile?"),(0,a.kt)("p",null,"Description metadata for this tile.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Will it expand to own perspective?"),(0,a.kt)("p",null,"Whether this tile will expand to its own application scope perspective. If anwered with ",(0,a.kt)("code",null,"yes")," then a bunch of followup question related to the application scope perspective are asked.",(0,a.kt)("a",{href:"./add.sv.app.scope.perspective"}," Add smartview application scope perspective")," can be referred for meaning of such questions."))))}c.isMDXComponent=!0}}]);