"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||h[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Context Fragment",c={unversionedId:"api/nuc/contexts/fragment/context.fragment",id:"api/nuc/contexts/fragment/context.fragment",title:"Context Fragment",description:"The context fragment can be used to fetch data for a dynamically added widget, instead of fetching the whole context, which would re-fetch data for widget created earlier.",source:"@site/articles/api/nuc/contexts/fragment/context.fragment.md",sourceDirName:"api/nuc/contexts/fragment",slug:"/api/nuc/contexts/fragment/context.fragment",permalink:"/23.2.0/api/nuc/contexts/fragment/context.fragment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Context",permalink:"/23.2.0/api/nuc/contexts/context"},next:{title:"PageContext",permalink:"/23.2.0/api/nuc/contexts/page/page.context"}},l={},d=[{value:"Details",id:"details",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor(context)",id:"constructorcontext",level:3},{value:"fetch(options): Promise",id:"fetchoptions-promise",level:3},{value:"clear(): void",id:"clear-void",level:3},{value:"destroy(): void",id:"destroy-void",level:3},{value:"Properties",id:"properties",level:2},{value:"fetching: Promise?",id:"fetching-promise",level:3},{value:"fetched: boolean",id:"fetched-boolean",level:3},{value:"error: Error",id:"error-error",level:3},{value:"Events",id:"events",level:2},{value:"&#39;request&#39;, context",id:"request-context",level:3},{value:"&#39;sync&#39;, context",id:"sync-context",level:3},{value:"&#39;error&#39;, error, context",id:"error-error-context",level:3},{value:"&#39;add:factory&#39;, context, propertyName, factory",id:"addfactory-context-propertyname-factory",level:3},{value:"&#39;before:clear&#39;, context",id:"beforeclear-context",level:3},{value:"&#39;clear&#39;, context",id:"clear-context",level:3},{value:"&#39;destroy&#39;, context",id:"destroy-context",level:3}],p={toc:d},s="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context-fragment"},"Context Fragment"),(0,a.kt)("p",null,"The context fragment can be used to fetch data for a dynamically added widget, instead of fetching the whole context, which would re-fetch data for widget created earlier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Subscribe a context fragment to the context, before\n// a new widget is constructed and rendered.\ncontextFragment = new ContextFragment(context);\n// Create the widget and render it to get the new models\n// added to the context and to the context fragment too.\n...\n// Fetch only the new models. The new widget will update\n// the displayed information as it is needed.\ncontextFragment.fetch();\n// Unsubscribe the context fragment from the context,\n// when it is not needed any more.\ncontextFragment.destroy() // Unsubscribe the fragment.\n")),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"The context supports two scenarios for changing the page content:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"refresh  - the page (views) will be reused, only the data will be reloaded"),(0,a.kt)("li",{parentName:"ul"},"exchange - the page will be rebuilt (current views will be destroyed and new\nones will be created) and new data wil be loaded")),(0,a.kt)("p",null,"There is one more scenario, which you may see on the page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"grow     - new content (views) will be added to the page, which needs to\nload a new data, but the old data do not need to be reloaded")),(0,a.kt)("p",null,"New views usually load the new data by ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureFetched")," and the context does not\nneed to be involved in fetching the data. However, shared components might be\nused to add the new content, which depend in the context to load their data.\nBecause only the owning view knows what part of the context will have to be\nfetched, it is responsible for collecting a fragment of factories for fetching:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// render a new page\ncontext.getObject(...) // get objects from the context\ncontext.fetch()        // fetch collected factories\n// work with the page   <--------------------------------+\n// introduce new content to the page                     |\nnew ContextFragment(context) // remember new objects     |\ncontext.getObject(...)       // add other objects        |\ncontextFragment.fetch()      // load new data            |\ncontextFragment.destroy()    // stop context watching  --+\n")),(0,a.kt)("p",null,"No factories are removed, when a context fragment is fetched and destroyed:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"operation / flag"),(0,a.kt)("th",{parentName:"tr",align:"center"},"refresh (fetch)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"exchange (clear + fetch)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"grow (fragment fetch + destroy)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"permanent"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"normal"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"drop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"temporary"),(0,a.kt)("td",{parentName:"tr",align:"center"},"drop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"drop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay")))),(0,a.kt)("p",null,"The fetchability of factories follows the rules which the context declared.\nIn addition to the static rules below, the actual fetchability is checked by\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"isFetchable")," method of the context:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"method / flag"),(0,a.kt)("th",{parentName:"tr",align:"center"},"fetch"),(0,a.kt)("th",{parentName:"tr",align:"center"},"fragment fetch"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"permanent"),(0,a.kt)("td",{parentName:"tr",align:"center"},"allowed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"normal"),(0,a.kt)("td",{parentName:"tr",align:"center"},"allowed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"temporary"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N/A (*)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"forbidden")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"detached"),(0,a.kt)("td",{parentName:"tr",align:"center"},"forbidden"),(0,a.kt)("td",{parentName:"tr",align:"center"},"forbidden")))),(0,a.kt)("p",null,"(*) Temporary factories are removed from the context when the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," method\nstarts executing. It does not make sense to discuss their fetchability."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"constructorcontext"},"constructor(context)"),(0,a.kt)("p",null,"Start watching the original context for new factories."),(0,a.kt)("h3",{id:"fetchoptions-promise"},"fetch(options): Promise"),(0,a.kt)("p",null,"Fetches all objects in the context fragment, which are fetchable by their\noriginating context.  The options will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," methods in\nfactories that take care of the fetchable objects."),(0,a.kt)("h3",{id:"clear-void"},"clear(): void"),(0,a.kt)("p",null,"Discards all objects from the context fragment. The context fragment\nremains subscribed to the context."),(0,a.kt)("h3",{id:"destroy-void"},"destroy(): void"),(0,a.kt)("p",null,"Stops watching the original context for new factories. The context fragment\nwill not be usable any more."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"fetching-promise"},"fetching: Promise?"),(0,a.kt)("p",null,"The promise returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," during fetching or ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if no fetching is\nin progress."),(0,a.kt)("h3",{id:"fetched-boolean"},"fetched: boolean"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the most recent ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," succeeded, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if the context has not\nbeen fetched yet, or fetching is in progress, or it failed."),(0,a.kt)("h3",{id:"error-error"},"error: Error"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," if the most recent ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," succeeded, or fetching is in progress, or\nthe context has not been fetched yet, an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," if the most\nrecent ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," failed."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"request-context"},"'request', context"),(0,a.kt)("p",null,"The context fragment is going to be fetched. This event is triggered on the\noriginal context too. The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetching"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fetched")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," properties on the\noriginal context are not modified."),(0,a.kt)("h3",{id:"sync-context"},"'sync', context"),(0,a.kt)("p",null,"Fetching the context fragment succeeded. This event is triggered on the\noriginal context too. The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetching"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fetched")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," properties on the\noriginal context are not modified."),(0,a.kt)("h3",{id:"error-error-context"},"'error', error, context"),(0,a.kt)("p",null,"Fetching the context fragment failed. This event is triggered on the original\ncontext too. The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetching"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fetched")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," properties on the original\ncontext are not modified."),(0,a.kt)("h3",{id:"addfactory-context-propertyname-factory"},"'add:factory', context, propertyName, factory"),(0,a.kt)("p",null,"A new factory has been added to the context fragment."),(0,a.kt)("h3",{id:"beforeclear-context"},"'before:clear', context"),(0,a.kt)("p",null,"The context fragment is going to be cleared."),(0,a.kt)("h3",{id:"clear-context"},"'clear', context"),(0,a.kt)("p",null,"The context fragment has been cleared."),(0,a.kt)("h3",{id:"destroy-context"},"'destroy', context"),(0,a.kt)("p",null,"The context fragment has been destroyed."))}h.isMDXComponent=!0}}]);