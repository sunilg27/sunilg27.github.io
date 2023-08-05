"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||c;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const c={},a="PageContext",i={unversionedId:"api/nuc/contexts/page/page.context",id:"api/nuc/contexts/page/page.context",title:"PageContext",description:"The simplest context, which can include and fetch models and collections, but",source:"@site/articles/api/nuc/contexts/page/page.context.md",sourceDirName:"api/nuc/contexts/page",slug:"/api/nuc/contexts/page/page.context",permalink:"/23.4.0/api/nuc/contexts/page/page.context",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Context Fragment",permalink:"/23.4.0/api/nuc/contexts/fragment/context.fragment"},next:{title:"SynchronizedContext",permalink:"/23.4.0/api/nuc/contexts/synchronized.context"}},l={},s=[{value:"Plugins",id:"plugins",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pagecontext"},"PageContext"),(0,o.kt)("p",null,"The simplest context, which can include and fetch models and collections, but\ndoes not provide any other functionality. If you use it with widgets, which\nexpect changes based on their context-changing models, you will have to\nhandle these changes yourself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"csui.require([\n  'nuc/widgets/shortcut/shortcut.view',\n  'nuc/contexts/page/page.context',\n  'nuc/contexts/factories/next.node',\n  'nuc/lib/marionette'\n], function (ShortcutView, PageContext, NextNodeModelFactory, Marionette) {\n  'use strict';\n\n  var context = new PageContext(),\n      nextNode = context.getModel(NextNodeModelFactory),\n\n      region = new Marionette.Region({\n        el: '#content'\n      }),\n      view = new ShortcutView({\n        context: context,\n        data: {\n          type: 141\n        }\n      });\n\n  // Perform some action if the widget triggered contextual node change\n  nextNode.on('change:id', function () {\n    alert('Node ID:' + nextNode.get('id'));\n  });\n\n  region.show(view);\n  context.fetch();\n\n});\n")),(0,o.kt)("h2",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Plugins descended from ",(0,o.kt)("inlineCode",{parentName:"p"},"ContextPlugin")," (nuc/contexts/context.plugin) can be registered. They will be constructed and stored with the context instance. They can override the constructor and the method ",(0,o.kt)("inlineCode",{parentName:"p"},"isFetchable(factory)"),"."))}d.isMDXComponent=!0}}]);