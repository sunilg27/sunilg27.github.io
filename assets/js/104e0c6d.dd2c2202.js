"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Overview - versioned 23.2.0",l={unversionedId:"api_overview",id:"version-23.2.0/api_overview",title:"Overview - versioned 23.2.0",description:"The API includes classes, objects, methods & extension points that could be used to enhance/alter existing components",source:"@site/versioned_docs/version-23.2.0/api_overview.md",sourceDirName:".",slug:"/api_overview",permalink:"/api_overview",draft:!1,tags:[],version:"23.2.0",frontMatter:{}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview---versioned-2320"},"Overview - versioned 23.2.0"),(0,a.kt)("p",null,"The API includes classes, objects, methods & extension points that could be used to enhance/alter existing components\nof D2SV runtime or write brand new components for it."),(0,a.kt)("p",null,"The D2SV runtime is comprised of"),(0,a.kt)("admonition",{title:"front-end",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  Runs on Internet browsers, written using Javascript, HTML, CSS. "),(0,a.kt)("p",{parentName:"admonition"},"  Components of the application are loaded using RequireJS framwork that comes bundled with the runtime.\nA bunch of other open-source libraries are pre-packed as part of the runtime. Below is a list of libraries\nand their RequireJS module dependency path - "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"BackboneJS (nuc/lib/backbone)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MarionetteJS (nuc/lib/marionette)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"UnderscoreJS (nuc/lib/underscore) ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"jQyery (nuc/lib/jquery)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MomentJS (nuc/lib/moment)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"jQuery Fancy tree (d2/lib/fancytree/jquery.fancytree)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"D3 JS (csui/lib/d3)"),(0,a.kt)("p",{parentName:"li"},"Available requirejs plugins -"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"i18n - Loads a localization module"),(0,a.kt)("li",{parentName:"ul"},"hbs - Loads handlebar template files (*.hbs)"),(0,a.kt)("li",{parentName:"ul"},"json - Loads JSON files (*.json)"),(0,a.kt)("li",{parentName:"ul"},"css - Loads CSS files (*.css)"))))),(0,a.kt)("admonition",{title:"back-end",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  Runs on Web application container, Written in Java.")))}m.isMDXComponent=!0}}]);