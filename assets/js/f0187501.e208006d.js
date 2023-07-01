"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4829:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Base",l={unversionedId:"api/nuc/utils/base",id:"api/nuc/utils/base",isDocsHomePage:!1,title:"Base",description:"This module holds miscellaneous static functions.",source:"@site/articles/api/nuc/utils/base.md",sourceDirName:"api/nuc/utils",slug:"/api/nuc/utils/base",permalink:"/api/nuc/utils/base",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Authenticators",permalink:"/api/nuc/utils/authenticators/authenticators"},next:{title:"Module nuc/util/connector",permalink:"/api/nuc/utils/connector"}},c=[{value:"autoAlignDropDowns(inputElement, dropdownContainer, applyWidth, view, callback)",id:"autoaligndropdownsinputelement-dropdowncontainer-applywidth-view-callback",children:[]}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"base"},"Base"),(0,o.kt)("p",null,"This module holds miscellaneous static functions."),(0,o.kt)("h3",{id:"autoaligndropdownsinputelement-dropdowncontainer-applywidth-view-callback"},"autoAlignDropDowns(inputElement, dropdownContainer, applyWidth, view, callback)"),(0,o.kt)("p",null,"Align drop-downs either top or bottom for the inputElement based on available space."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"inputElement: The element object relative to which the drop-dwon will be shown"),(0,o.kt)("p",null,"dropdownContainer: The drop-down container element object"),(0,o.kt)("p",null,"applyWidth: True for applying inputElement width to drop-down elements, false for applying custom specific width"),(0,o.kt)("p",null,"view: inputElement view"),(0,o.kt)("p",null,"callback: Is used to perform any actions in the view after form scroll / window scroll"))}u.isMDXComponent=!0}}]);