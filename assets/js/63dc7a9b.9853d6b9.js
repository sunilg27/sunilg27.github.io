"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5040],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(t),m=i,u=g["".concat(s,".").concat(m)]||g[m]||p[m]||r;return t?o.createElement(u,a(a({ref:n},d),{},{components:t})):o.createElement(u,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1993:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(7462),i=(t(7294),t(3905));const r={},a=void 0,l={unversionedId:"api/d2/controls/dialogs/generic/dialog.content.view",id:"api/d2/controls/dialogs/generic/dialog.content.view",isDocsHomePage:!1,title:"dialog.content.view",description:"DialogContentView : d2/sdk/controls/dialogs/generic/dialog.content.view",source:"@site/articles/api/d2/controls/dialogs/generic/dialog.content.view.md",sourceDirName:"api/d2/controls/dialogs/generic",slug:"/api/d2/controls/dialogs/generic/dialog.content.view",permalink:"/api/d2/controls/dialogs/generic/dialog.content.view",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"dialog.actions",permalink:"/api/d2/controls/dialogs/generic/dialog.actions"},next:{title:"dialog.content.views",permalink:"/api/d2/controls/dialogs/generic/dialog.content.views"}},s=[{value:"DialogContentView : <code>d2/sdk/controls/dialogs/generic/dialog.content.view</code>",id:"dialogcontentview--d2sdkcontrolsdialogsgenericdialogcontentview",children:[]}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"module_DialogContentView"}),(0,i.kt)("h2",{id:"dialogcontentview--d2sdkcontrolsdialogsgenericdialogcontentview"},"DialogContentView : ",(0,i.kt)("code",null,"d2/sdk/controls/dialogs/generic/dialog.content.view")),(0,i.kt)("p",null,"DialogContentView. Base class for defining handler of dialog content view in a D2SV generic dialog screen. All derived classes should override the\n",(0,i.kt)("inlineCode",{parentName:"p"},"resolveView()")," method to return appropriate view content. The ",(0,i.kt)("inlineCode",{parentName:"p"},"resolveView()")," method can be synchronous or asynchronous.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"resolveView()")," method must return either instance object of 'Marionette View' (or) Marionette View Class."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends"),": ",(0,i.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.object.html"},(0,i.kt)("code",null,"Marionette.Object")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"See"),": ",(0,i.kt)("a",{parentName:"p",href:"./dialog.content.views"},"DialogContentViews"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(A sample dialog content view implementation(dialog.content.view.a.js) that returns the Marionette View instance for generic dialog asynchronously)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import DialogContentView from 'd2/sdk/controls/dialogs/generic/dialog.content.view';\nimport CustomFormView from 'mybundle/generic.dialog/custom.form.view';\n\nclass DialogContentViewA extends DialogContentView {\n constructor(options={}) {\n   super(options);\n }\n\n async resolveView(options = {}) {\n   let customFormView = new CustomFormView({...options});\n   return customFormView;\n }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(A sample dialog content view implementation(dialog.content.view.a.js) that returns the Marionette View instance for generic dialog synchronously)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import DialogContentView from 'd2/sdk/controls/dialogs/generic/dialog.content.view';\nimport CustomFormView from 'mybundle/generic.dialog/custom.form.view';\n\nclass DialogContentViewA extends DialogContentView {\n constructor(options={}) {\n   super(options);\n }\n\n resolveView(options = {}) {\n   let customFormView = new CustomFormView({...options});\n   return customFormView;\n }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(To associate this dialog content view with binding rule, an extension(generic.dialog.content.view.js) could be defined as)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import DialogContentViewA from \'mybundle/generic.dialog/dialog.content.view.a\';\nimport DialogContentViewB from \'mybundle/generic.dialog/dialog.content.view.b\';\n\nconst dialogContentViewRules = [\n  {equals: {"formName": "FormA"}, viewClass: DialogContentViewA},\n  {equals: {"formName": "FormB"}, viewClass: DialogContentViewB}\n];\n\nexport default dialogContentViewRules;\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," ",(0,i.kt)("em",{parentName:"p"},"(To finally register the extension, in extensions.json)"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n "d2/sdk/controls/dialogs/generic/dialog.content.views": {\n   "extensions": {\n     "mybundle": [\n       "mybundle/extensions/generic.dialog.content.view"\n     ]\n   }\n }\n}\n')))}d.isMDXComponent=!0}}]);