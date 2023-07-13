"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||c;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const c={},i="SynchronizedContext",a={unversionedId:"api/nuc/contexts/synchronized.context",id:"api/nuc/contexts/synchronized.context",title:"SynchronizedContext",description:"A specialized derivation of Context. SynchronizedContext synchronizes",source:"@site/articles/api/nuc/contexts/synchronized.context.md",sourceDirName:"api/nuc/contexts",slug:"/api/nuc/contexts/synchronized.context",permalink:"/api/nuc/contexts/synchronized.context",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"PageContext",permalink:"/api/nuc/contexts/page/page.context"},next:{title:"I18n",permalink:"/api/nuc/lib/i18n"}},s={},l=[],d={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"synchronizedcontext"},"SynchronizedContext"),(0,r.kt)("p",null,"A specialized derivation of Context. SynchronizedContext synchronizes\nthe process of setting (set/reset) the fetched data on the participating\nobjects (models or collections)."),(0,r.kt)("p",null,"The fetches are performed on cloned models or collections, to which\nno marionette views listen for changes and therefore render is not\ntriggered when these fetch calls return with new data from the server.\nWhen all fetches are completed, the data from the cloned models or\ncollections are \"copied\" to the original models or collections by calling\n'set' or 'reset'. This happens in a synchronous loop for all models and\ncollections. This also means that views bound to the participating models\nor collections are rendered in a single javascript thread (as long as none of the views do something\nasynchronously - marionette views don't) and when that is finished the\nbrowser gets back control and starts displaying the updated DOM."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," due to the fact that the original models or collections are not\nfetched, it must not expected that 'request' or 'sync' gets triggered.\nViews must rely only on set/change/reset events."),(0,r.kt)("p",null,"It is also important that the clone method of the participating models or\ncollections clone all necessary attributes to be able to fetch the correct\ndata from the server."),(0,r.kt)("p",null,"For backward compatibility reason it is possible to enable\ntriggering 'request' and 'sync' on the source context, which\nmakes it easier for example to enable and disable blocking view."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  var context = new PageContext();\n  var container = context.getModel(NodeModelFactory, {node: {attributes: {id: 2000}}});\n  var childrenCollection = context.getCollection(Children2CollectionFactory, \n      {options: {node: container}}\n  );\n\n// Create a new synchronized context:\n// Specify the source context, which has already the models or collections\n// that are listed in the second parameter.\n// options in the third parameter:\n// triggerEventsOnSourceContext: if true, request and sync are triggered\n// on the \'source\' context (the context specified in the first parameter)\n  synchronizedContext = new SynchronizedContext(\n      context,\n      [container, childrenCollection], \n      {triggerEventsOnSourceContext: true});\n\n  synchronizedContext.fetch()\n      .then(function () {\n        console.log("Context fetched - all models/collections are fetched");\n      })\n      .catch(function (reason) {\n        console.log("Context fetch failed:");\n        console.log(reason);\n      })\n\n')),(0,r.kt)("p",null,"A complete working example is `",(0,r.kt)("inlineCode",{parentName:"p"},"pages/debug/synchronized_context.html````.\n")))}h.isMDXComponent=!0}}]);