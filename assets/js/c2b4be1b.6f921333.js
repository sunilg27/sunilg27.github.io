"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8042:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"api/d2/controls/alerts/customizable.content.modal.alert",id:"api/d2/controls/alerts/customizable.content.modal.alert",isDocsHomePage:!1,title:"customizable.content.modal.alert",description:"CustomizableContentModalAlert : d2/sdk/controls/customizable.content.modal.alert",source:"@site/articles/api/d2/controls/alerts/customizable.content.modal.alert.md",sourceDirName:"api/d2/controls/alerts",slug:"/api/d2/controls/alerts/customizable.content.modal.alert",permalink:"/api/d2/controls/alerts/customizable.content.modal.alert",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"action.icons",permalink:"/api/d2/controls/action.icons/action.icons"},next:{title:"modal.alert",permalink:"/api/d2/controls/alerts/modal.alert"}},s=[{value:"CustomizableContentModalAlert : <code>d2/sdk/controls/customizable.content.modal.alert</code>",id:"customizablecontentmodalalert--d2sdkcontrolscustomizablecontentmodalalert",children:[]}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_CustomizableContentModalAlert"}),(0,r.kt)("h2",{id:"customizablecontentmodalalert--d2sdkcontrolscustomizablecontentmodalalert"},"CustomizableContentModalAlert : ",(0,r.kt)("code",null,"d2/sdk/controls/customizable.content.modal.alert")),(0,r.kt)("p",null,"Shows a modal alert with customized body content."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter can contain a property ",(0,r.kt)("inlineCode",{parentName:"p"},"contentView")," that is used as the modal's body. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentView")," is not present then\nin it's all sense it behaves like a regular ",(0,r.kt)("a",{parentName:"p",href:"./modal.alert"},"ModalAlert")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("a",{parentName:"p",href:"./modal.alert"},(0,r.kt)("code",null,"ModalAlert")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"See"),": ",(0,r.kt)("a",{parentName:"p",href:"./modal.alert"},"ModalAlert")," for a list of static methods available to instantiate a modal alert with custom content.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(To show a ModalAlert with another Marionette.View as content)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/marionette',\n 'd2/controls/alerts/customizable.content.modal.alert'\n], function(Marionette, ModalAlert){\n 'use strict';\n\n var ContentView = Marionette.LayoutView.extend({\n   template: false,\n   className: 'sample-modal-content',\n   constructor: function ContentView(options) {\n     options = options || {};\n     ContentView.__super__.constructor.call(this, options);\n   },\n\n   onRender: function() {\n     this.$el.text('Hello World!');\n   }\n });\n\n ModalAlert.showInformation(function(result){\n   console.log(result);\n }, '' , 'Greetings', {\n   buttons: {\n     showYes: true,\n     labelYes: 'OK',\n     showNo: false,\n     showCancel: false\n   },\n   contentView: new ContentView(),\n   modalClass: 'my-sample-greeting-modal'\n });\n});\n")))}p.isMDXComponent=!0}}]);