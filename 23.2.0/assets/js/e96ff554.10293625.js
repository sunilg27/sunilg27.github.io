"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2138],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(i),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return i?a.createElement(h,s(s({ref:t},c),{},{components:i})):a.createElement(h,s({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4979:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=i(7462),n=(i(7294),i(3905));const r={sidebar_position:2.02},s="Add Smartview application scope perspective",o={unversionedId:"general/ws_assistant/2_02_add.sv.app.scope.perspective",id:"version-23.2.0/general/ws_assistant/2_02_add.sv.app.scope.perspective",title:"Add Smartview application scope perspective",description:"A perspective in D2 Smartview is loosely defined as something similar to a web-page in case",source:"@site/versioned_docs/version-23.2.0/general/ws_assistant/2_02_add.sv.app.scope.perspective.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_02_add.sv.app.scope.perspective",permalink:"/23.2.0/general/ws_assistant/2_02_add.sv.app.scope.perspective",draft:!1,tags:[],version:"23.2.0",sidebarPosition:2.02,frontMatter:{sidebar_position:2.02}},p={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-smartview-application-scope-perspective"},"Add Smartview application scope perspective"),(0,n.kt)("p",null,"A perspective in D2 Smartview is loosely defined as something similar to a web-page in case\nof multi page web application. A perspective renders a view of semantically similar data\nwith relevant UI controls and interactions to operate on the data. D2 Smartview switches from\none perspective to another based on user interaction. "),(0,n.kt)("p",null,"D2 Smartview has several perspective implementations like Landing, Doclist, Virtual Documents, Tasks & Workflows etc. Out\nof all these the ",(0,n.kt)("strong",{parentName:"p"},"Landing persepctive")," is the default and shown immediately after user login, unless\nthe URL in browser's address bar points to a different hint."),(0,n.kt)("p",null,"The Landing perspective shows a collection of widget & shortcut tiles, some of them, upon click, opens up\nanother persepctive with a more specialized representation of the corresponding data. The semantic associated\nwith the data in such perspective is generally termed as ",(0,n.kt)("strong",{parentName:"p"},"application scope"),". All such application scope perspectives (tied\nto different widget tiles in Landing perspective) visually look similar irrespective of the data semantic\nthat they represent."),(0,n.kt)("p",null,"This ",(0,n.kt)("strong",{parentName:"p"},"Add smartview application scope perspective")," option of workspace assistant, helps create the boilerplate\nif we want to define a new data semantic in addition to those already defined by D2 Smartview."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This perspective goes to plugin"),(0,n.kt)("p",null,"Select a plugin project, inside which this boilerplate will be created.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name of the widget type to associate"),(0,n.kt)("p",null,"Which landing page widget this perspective will associate itself with. Each landing page widget tile is configured with a `type` attribute, the possible values that can go against the `type` attribute can be used here.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name of the default smartview widget type(from landing config) to associate"),(0,n.kt)("p",null,"The Smartview landing page has a bunch of default widget configuration name defined. When an end-user navigates directly to an application scope using URL, the widget configuration data might be missin in the URL, in thsoe cases the default widget configuration is used to resolve the metadata requirement while opening the perspective.",(0,n.kt)("br",null),"Answer to this question specifies which default widget configuration from the landing page is to be associated with the application scope being defined.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Application scope of this perspective(also used as URL fragment)"),(0,n.kt)("p",null,"Name of this application scope. Also used as base part of the URL when this perspective is activated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Directory name where generated code will be put into"),(0,n.kt)("p",null,"Relative location of the boilerplate code w.r.t selected plugin projects widget source directory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Default title of this perspective"),(0,n.kt)("p",null,"Default displayable label when this perspective is active.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"How would you describe this perspective?"),(0,n.kt)("p",null,"Description associated wtih this perspective"))))}u.isMDXComponent=!0}}]);