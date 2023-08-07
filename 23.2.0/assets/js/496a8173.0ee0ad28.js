"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2411],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(f,c(c({ref:n},s),{},{components:t})):o.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={},c="NodeModel",i={unversionedId:"api/nuc/models/node/node.model",id:"api/nuc/models/node/node.model",title:"NodeModel",description:"Provides read/write access to CS nodes.  When creating a new instance, you",source:"@site/articles/api/nuc/models/node/node.model.md",sourceDirName:"api/nuc/models/node",slug:"/api/nuc/models/node/node.model",permalink:"/23.2.0/next/api/nuc/models/node/node.model",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"NodeAddableTypeCollection",permalink:"/23.2.0/next/api/nuc/models/node/node.addable.type"},next:{title:"NodeChildren2Collection",permalink:"/23.2.0/next/api/nuc/models/node.children2/"}},l={},d=[{value:"Examples",id:"examples",level:3}],s={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodemodel"},"NodeModel"),(0,r.kt)("p",null,"Provides read/write access to CS nodes.  When creating a new instance, you\nneed to pass an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector")," to the constructor to connect it\nto the server."),(0,r.kt)("p",null,"Nodes can be fetched single or within a collection like container children,\nfor example.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeModel")," supports initialization from the server\nresponses, which have the same response format as the core CS REST API.\nfinishes."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Fetch a concrete node and print its name on the console\nvar connector = new Connector({\n      connection: {\n        url: '//server/instance/cs/api/v1',\n        supportPath: '/instancesupport'\n      }\n    }),\n    node = new NodeModel({\n      id: 12345\n    }, {\n      connector: connector\n    });\nnode.fetch()\n    .done(function () {\n      console.log(node.get('name'));\n    });\n\n// Create a model for the Enterprise Volume by its subtype\nvar enterpriseVolume = new NodeModel({\n      id: 'volume',\n      type: 141\n    }, {\n      connector: connector\n    });\n")))}u.isMDXComponent=!0}}]);