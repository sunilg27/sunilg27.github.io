"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),m=s,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,a[1]=r;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6798:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(7462),s=(n(7294),n(3905));const o={},a=void 0,r={unversionedId:"api/d2/utils/session",id:"api/d2/utils/session",isDocsHomePage:!1,title:"session",description:"Session : d2/sdk/utils/session",source:"@site/articles/api/d2/utils/session.md",sourceDirName:"api/d2/utils",slug:"/api/d2/utils/session",permalink:"/api/d2/utils/session",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"server.query.utils",permalink:"/api/d2/utils/server.query.utils"},next:{title:"common.mock",permalink:"/api/d2/utils/test/common.mock"}},l=[{value:"Session : <code>d2/sdk/utils/session</code>",id:"session--d2sdkutilssession",children:[{value:"session.isInitialized() \u21d2 <code>Boolean</code>",id:"sessionisinitialized--boolean",children:[]},{value:"session.isActive() \u21d2 <code>Boolean</code>",id:"sessionisactive--boolean",children:[]},{value:"session.getContext() \u21d2 <code>*</code>",id:"sessiongetcontext--",children:[]},{value:"&quot;init&quot;",id:"init",children:[]},{value:"&quot;begin&quot;",id:"begin",children:[]},{value:"&quot;end&quot;",id:"end",children:[]},{value:"Session.get() \u21d2 <code>Session</code>",id:"sessionget--session",children:[]}]}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"module_Session"}),(0,s.kt)("h2",{id:"session--d2sdkutilssession"},"Session : ",(0,s.kt)("code",null,"d2/sdk/utils/session")),(0,s.kt)("p",null,"Session utility. It is a singleton entity in D2SV runtime, used to check state of D2SV session and avail the authenticated connector instance\nassociated with the session.\nCan also return a reference to the application state data holder a.k.a context associated with the D2SV runtime."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Extends"),": ",(0,s.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.object.html"},(0,s.kt)("code",null,"Marionette.Object")),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Emits"),": ",(0,s.kt)("a",{parentName:"p",href:"#module_Session+event_init"},(0,s.kt)("code",null,"init")),", ",(0,s.kt)("a",{parentName:"p",href:"#module_Session+event_begin"},(0,s.kt)("code",null,"begin")),", ",(0,s.kt)("a",{parentName:"p",href:"#module_Session+event_end"},(0,s.kt)("code",null,"end")),"  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session"},"Session")," : ",(0,s.kt)("code",null,"d2/sdk/utils/session"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"instance"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session+isInitialized"},".isInitialized()")," \u21d2 ",(0,s.kt)("code",null,"Boolean")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session+isActive"},".isActive()")," \u21d2 ",(0,s.kt)("code",null,"Boolean")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session+getContext"},".getContext()")," \u21d2 ",(0,s.kt)("code",null,"*")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session+event_init"},'"init"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session+event_begin"},'"begin"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session+event_end"},'"end"')))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"static"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#module_Session.get"},".get()")," \u21d2 ",(0,s.kt)("code",null,"Session"))))))),(0,s.kt)("a",{name:"module_Session+isInitialized"}),(0,s.kt)("h3",{id:"sessionisinitialized--boolean"},"session.isInitialized() \u21d2 ",(0,s.kt)("code",null,"Boolean")),(0,s.kt)("p",null,"Check if the session is initialized or not. Right after a session object is instantiated, it is put to an un-initialized state.\nThe uninitialized state represents that the session is still setting up context, connector and an appropriate authenticator."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,s.kt)("a",{parentName:"p",href:"#module_Session"},(0,s.kt)("code",null,"Session")),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Returns"),": ",(0,s.kt)("code",null,"Boolean")," - Whether the session is initialized.  "),(0,s.kt)("a",{name:"module_Session+isActive"}),(0,s.kt)("h3",{id:"sessionisactive--boolean"},"session.isActive() \u21d2 ",(0,s.kt)("code",null,"Boolean")),(0,s.kt)("p",null,"Checks if the session is active or not. An ",(0,s.kt)("inlineCode",{parentName:"p"},"initialized")," session automatically tries to validate itself against an authenticated\nconnection. If the validation goes through, then the session becomes an ",(0,s.kt)("inlineCode",{parentName:"p"},"active")," seesion otherwise it stays ",(0,s.kt)("inlineCode",{parentName:"p"},"inactive")," and waits\nfor the end user to login into D2SV."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,s.kt)("a",{parentName:"p",href:"#module_Session"},(0,s.kt)("code",null,"Session")),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Returns"),": ",(0,s.kt)("code",null,"Boolean")," - Whether the session is active  "),(0,s.kt)("a",{name:"module_Session+getContext"}),(0,s.kt)("h3",{id:"sessiongetcontext--"},"session.getContext() \u21d2 ",(0,s.kt)("code",null,"*")),(0,s.kt)("p",null,"Get a reference to the application data holder associated with this session. The context can be used to create or access\ndata created by different data factories."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,s.kt)("a",{parentName:"p",href:"#module_Session"},(0,s.kt)("code",null,"Session")),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Returns"),": ",(0,s.kt)("code",null,"*")," - Returns the session context.",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"See"),": ",(0,s.kt)("a",{parentName:"p",href:"./contexts/context.utils#Context"},"Context"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Example")," ",(0,s.kt)("em",{parentName:"p"},"(Code sample to get the connector instance inside any module)"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"\ndefine([\n 'd2/sdk/utils/session',\n 'd2/sdk/utils/contexts/factories/connector',\n 'd2/sdk/models/node.model'\n], function(Session, ConnectorFactory, NodeModel){\n 'use strict';\n\n var context;\n\n function createNodeModel(attributes) {\n   if(!context) {\n     context = Session.get().getContext();\n   }\n   return new NodeModel(attributes, {connector: context.getObject(ConnectorFactory)});\n }\n\n return {\n   cteateNodeModel: createNodeModel\n };\n});\n")),(0,s.kt)("a",{name:"module_Session+event_init"}),(0,s.kt)("h3",{id:"init"},'"init"'),(0,s.kt)("p",null,"Marks the initialization of a session. The event is emitted when the session has created\nits pre-requisite objects and it's ready to check authentication status"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,s.kt)("a",{parentName:"p",href:"#module_Session"},(0,s.kt)("code",null,"Session")),"  "),(0,s.kt)("a",{name:"module_Session+event_begin"}),(0,s.kt)("h3",{id:"begin"},'"begin"'),(0,s.kt)("p",null,"Marks the beginning of a session. The event is emitted when session reaches validated state\nafter fresh login or page reload."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,s.kt)("a",{parentName:"p",href:"#module_Session"},(0,s.kt)("code",null,"Session")),"  "),(0,s.kt)("a",{name:"module_Session+event_end"}),(0,s.kt)("h3",{id:"end"},'"end"'),(0,s.kt)("p",null,"Marks the end of a session. The event is emitted when session couldn't reach a validated state\nafter page reload or the underlying connection authneticator has detected logout or session expiry."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kind"),": event emitted by ",(0,s.kt)("a",{parentName:"p",href:"#module_Session"},(0,s.kt)("code",null,"Session")),"  "),(0,s.kt)("a",{name:"module_Session.get"}),(0,s.kt)("h3",{id:"sessionget--session"},"Session.get() \u21d2 ",(0,s.kt)("code",null,"Session")),(0,s.kt)("p",null,"Get a reference to the singleton instance."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,s.kt)("a",{parentName:"p",href:"#module_Session"},(0,s.kt)("code",null,"Session")),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Returns"),": ",(0,s.kt)("code",null,"Session")," - Returns the session instance."))}c.isMDXComponent=!0}}]);