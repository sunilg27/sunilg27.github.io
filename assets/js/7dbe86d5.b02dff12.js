"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[8972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,w=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(w,l(l({ref:t},p),{},{components:n})):a.createElement(w,l({ref:t},p))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2.13},l="Add new metadata view to plugin",s={unversionedId:"general/ws_assistant/2_13_add.metadata.view",id:"general/ws_assistant/2_13_add.metadata.view",title:"Add new metadata view to plugin",description:"If a D2SV plugin intends to define new views like properties, versions, permissions, task performers then this assistant option could be used to create the boilerplate code",source:"@site/articles/general/ws_assistant/2_13_add.metadata.view.md",sourceDirName:"general/ws_assistant",slug:"/general/ws_assistant/2_13_add.metadata.view",permalink:"/23.4.0/general/ws_assistant/2_13_add.metadata.view",draft:!1,tags:[],version:"current",sidebarPosition:2.13,frontMatter:{sidebar_position:2.13},sidebar:"general",previous:{title:"Add D2FS dialog to a plugin",permalink:"/23.4.0/general/ws_assistant/2_12_add.d2fs.dialog"},next:{title:"Add new task details view to plugin",permalink:"/23.4.0/general/ws_assistant/2_14_add.task.details.view"}},o={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-new-metadata-view-to-plugin"},"Add new metadata view to plugin"),(0,i.kt)("p",null,"If a D2SV plugin intends to define new views like properties, versions, permissions, task performers then this assistant option could be used to create the boilerplate code\nassociated with such views, which is also known as metadata panel."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Use this option when at least one plugin project exists in the workspace.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Associated questions and their meanings")," -"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select plugin to add new metadata view"),(0,i.kt)("p",null,"Specify the plugin project where to add boilerplate code for the new metadata view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter name for the view"),(0,i.kt)("p",null,"A unique name for the new metadata view."),(0,i.kt)("p",null,"This will be the option name shown in the dropdown by default."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Associated generated boilerplate files and their use")," -"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The generated files would be present under ",(0,i.kt)("inlineCode",{parentName:"p"},"<Plugins Directory>\\<Selected Plugin>\\src\\main\\smartview\\src\\widgets\\metadata\\panels\\<View Name>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"impl")," folder"),(0,i.kt)("p",null,"This folder contains the handlebar template file and the style sheet file used by the view."),(0,i.kt)("p",null,"It also contains the ",(0,i.kt)("code",null,"nls")," folder which contains the lang files used for the translation strings."),(0,i.kt)("p",null,"The option name shown in the dropdown could be changed by changing the translation string value for viewName in ",(0,i.kt)("code",null,"lang.js")," file under ",(0,i.kt)("code",null,"nls/root")," folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"metadata.<View Name>.view.js")),(0,i.kt)("p",null,"This is the main view file for the new metadata view created."),(0,i.kt)("p",null,"This will have code for a simple helloworld view."),(0,i.kt)("p",null,"The template file, style sheet and lang file used by this view are already loaded."),(0,i.kt)("p",null,"A wrapper class name for this view, ui, regions and events are defined in this view for reference."),(0,i.kt)("p",null,"Modify this view based on the usecase."),(0,i.kt)("p",null,"Incase of complex view, break it into smaller independent views and keep them under ",(0,i.kt)("code",null,"impl")," folder, specify regions in the main view and show these smaller views using regions."),(0,i.kt)("p",null,"By default, this view will be shown for all metadata dropdowns. Add conditions in enabled function to restrict this view based on the usecase."))))}c.isMDXComponent=!0}}]);