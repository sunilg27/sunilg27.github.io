"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),a=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=a(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=a(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,s(s({ref:n},l),{},{components:t})):o.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var a=2;a<i;a++)s[a]=t[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(7462),r=(t(7294),t(3905));const i={},s=void 0,c={unversionedId:"api/d2/controls/icon.sprites/node.icon.sprites",id:"api/d2/controls/icon.sprites/node.icon.sprites",title:"node.icon.sprites",description:"NodeIconSprites : d2/sdk/controls/icon.sprites/node.icon.sprites",source:"@site/articles/api/d2/controls/icon.sprites/node.icon.sprites.md",sourceDirName:"api/d2/controls/icon.sprites",slug:"/api/d2/controls/icon.sprites/node.icon.sprites",permalink:"/api/d2/controls/icon.sprites/node.icon.sprites",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"globalmessage",permalink:"/api/d2/controls/globalmessage/"},next:{title:"tree.icon.sprites",permalink:"/api/d2/controls/icon.sprites/tree.icon.sprites"}},p={},a=[{value:"NodeIconSprites : <code>d2/sdk/controls/icon.sprites/node.icon.sprites</code>",id:"nodeiconsprites--d2sdkcontrolsiconspritesnodeiconsprites",level:2}],l={toc:a},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_NodeIconSprites"}),(0,r.kt)("h2",{id:"nodeiconsprites--d2sdkcontrolsiconspritesnodeiconsprites"},"NodeIconSprites : ",(0,r.kt)("code",null,"d2/sdk/controls/icon.sprites/node.icon.sprites")),(0,r.kt)("p",null,"Node icons collection. Used to visually represent a ",(0,r.kt)("a",{parentName:"p",href:"../../models/node.model"},"NodeModel")," within a ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeIconView"),"."),(0,r.kt)("p",null,"The collection can be looked up to discover possible represenation or it can be augmented by extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("a",{parentName:"p",href:"https://backbonejs.org/#Collection"},(0,r.kt)("code",null,"Backbone.Collection")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(To extend the node icons collection)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//In mybundle/extensions/node.icons.js\ndefine([], function(){\n 'use strict';\n\n return [\n   {\n     decides: function(node) {\n       return node.get('type') === 'group';\n     },\n     className: 'csui-icon d2-icon-type-group-user',\n     mimeType: 'Group',\n     sequence: 20\n   },\n   {\n     decides: function(node) {\n       return node.get('type') === 'user';\n     },\n     className: 'csui-icon d2-icon-type-single-user',\n     mimeType: 'User',\n     sequence: 20\n   }\n ];\n});\n\n//To register the extension, put in extensions.json\n \"d2/sdk/controls/icon.sprites/node.icon.sprites\": {\n   \"extensions\": {\n     \"mybundle\": [\n       \"mybundle/extensions/node.icons\"\n     ]\n   }\n }\n")))}u.isMDXComponent=!0}}]);