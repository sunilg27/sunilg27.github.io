"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2076],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return i?n.createElement(m,o(o({ref:t},c),{},{components:i})):n.createElement(m,o({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},6347:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={sidebar_position:2.1},o="Add smartview list tile",l={unversionedId:"general/ws_assistant/2_10_add.sv.tile.list",id:"version-23.2.0/general/ws_assistant/2_10_add.sv.tile.list",title:"Add smartview list tile",description:"Using this option of the assistant, a new list type of tile a.k.a widget tile definition could be",source:"@site/versioned_docs/version-23.2.0/general/ws_assistant/2_10_add.sv.tile.list.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_10_add.sv.tile.list",permalink:"/23.2.0/general/ws_assistant/2_10_add.sv.tile.list",draft:!1,tags:[],version:"23.2.0",sidebarPosition:2.1,frontMatter:{sidebar_position:2.1}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-smartview-list-tile"},"Add smartview list tile"),(0,r.kt)("p",null,"Using this option of the assistant, a new list type of tile a.k.a widget tile definition could be\nadded."),(0,r.kt)("p",null,"All widget tiles shown in D2 Smartview landing perspective are visually similar, however they are backed\nby different type of widget conifiguration and display data evaluated in the context of that\nwidget."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This shortcut goes to plugin"),(0,r.kt)("p",null,"To select the plugin project where to create boilerplate associated with creating a widget tile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name of Widget type to associate"),(0,r.kt)("p",null,"Specify which type of widget configuration will drive this list tile data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CSS class name for the icon"),(0,r.kt)("p",null,"CSS class selector to put in the HTML element hosting the icon for this widget tile. Later this same class name could be used to render a specific icon for this tile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Directory name where generated code will be put into"),(0,r.kt)("p",null,"Relative location of the boilerplate code w.r.t selected plugin projects widget source directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Default title of this tile"),(0,r.kt)("p",null,"Specifies an optional default name for the tile which is shown at the header region of this tile incase the underlying widget configuration is not able to provide a name for it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How would you describe this tile?"),(0,r.kt)("p",null,"Description metadata for this tile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Will it expand to own perspective?"),(0,r.kt)("p",null,"Whether this tile will expand to its own application scope perspective. If anwered with ",(0,r.kt)("code",null,"yes")," then a bunch of followup question related to the application scope perspective are asked.",(0,r.kt)("a",{href:"./2_02_add.sv.app.scope.perspective"}," Add smartview application scope perspective")," can be referred for meaning of such questions."))))}u.isMDXComponent=!0}}]);