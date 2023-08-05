"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2.05},i="Add D2-REST controller support to a plugin project",l={unversionedId:"general/ws_assistant/2_05_add.rest.controller",id:"general/ws_assistant/2_05_add.rest.controller",title:"Add D2-REST controller support to a plugin project",description:"If a D2SV plugin intends to deploy new D2-REST endpoints in addition to the factory endpoints, then",source:"@site/articles/general/ws_assistant/2_05_add.rest.controller.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_05_add.rest.controller",permalink:"/23.4.0/general/ws_assistant/2_05_add.rest.controller",draft:!1,tags:[],version:"current",sidebarPosition:2.05,frontMatter:{sidebar_position:2.05},sidebar:"general",previous:{title:"Remove a plugin from workspace",permalink:"/23.4.0/general/ws_assistant/2_04_remove.plugin"},next:{title:"Build all plugins in the workspace",permalink:"/23.4.0/general/ws_assistant/2_06_build.plugins"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-d2-rest-controller-support-to-a-plugin-project"},"Add D2-REST controller support to a plugin project"),(0,o.kt)("p",null,"If a D2SV plugin intends to deploy new D2-REST endpoints in addition to the factory endpoints, then\nthis option of the workspace assistant comes in handy."),(0,o.kt)("p",null,"Upon successful execution, this option, can add a boilerplate REST controller definition\nto the plugin such that the controller handles HTTP GET(Retrieve), POST(Create), DELETE(Delete) operation on the specified\nendpoint resource matching part of the CRUD style transaction."),(0,o.kt)("p",null,"The complete URL path of the endpoint created is represented as -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/D2-Smartview/repositories/<repo_name>/<group_name>/<endpoint_name>\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select plugin to add REST support"),(0,o.kt)("p",null,"Specify the plugin project where to add boilerplate for this controller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Group name of controller"),(0,o.kt)("p",null,"Group name for the service that this REST controller implements. Used as ",(0,o.kt)("code",null,"<group_name>")," part of the URL format mentioned above. Usually same group name is used across multiple services if they all happen to be correlated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Endpoint name of controller"),(0,o.kt)("p",null,"A meaningful name that should uniquely identify this endpoint in the group of correlated services. This name is used as ",(0,o.kt)("code",null,"<endpoint_name>")," part of the URL format mentioned above.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Service name to use against the controller"),(0,o.kt)("p",null,"Name of the service that this endpoint represents. This name is used to form the name of Java classes and interfaces which are finally going to implement the service."))))}d.isMDXComponent=!0}}]);