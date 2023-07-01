"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[5020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?l.createElement(b,r(r({ref:t},p),{},{components:n})):l.createElement(b,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var c=2;c<i;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3718:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var l=n(7462),o=(n(7294),n(3905));const i={},r=void 0,a={unversionedId:"api/d2/models/mixins/browsable.collection.mixin",id:"api/d2/models/mixins/browsable.collection.mixin",isDocsHomePage:!1,title:"browsable.collection.mixin",description:"BrowsableCollectionMixin : d2/sdk/models/mixins/browsable.collection.mixin",source:"@site/articles/api/d2/models/mixins/browsable.collection.mixin.md",sourceDirName:"api/d2/models/mixins",slug:"/api/d2/models/mixins/browsable.collection.mixin",permalink:"/api/d2/models/mixins/browsable.collection.mixin",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"folder.browser.id.rules",permalink:"/api/d2/integration/folder.browser.id.rules"},next:{title:"collection.delayed.data.mixin",permalink:"/api/d2/models/mixins/collection.delayed.data.mixin"}},s=[{value:"BrowsableCollectionMixin : <code>d2/sdk/models/mixins/browsable.collection.mixin</code>",id:"browsablecollectionmixin--d2sdkmodelsmixinsbrowsablecollectionmixin",children:[{value:"browsableCollectionMixin.makeBrowsableCollection(options) \u21d2 <code>*</code>",id:"browsablecollectionmixinmakebrowsablecollectionoptions--",children:[]},{value:"BrowsableCollectionMixin.mixin(prototype) \u21d2 <code>void</code>",id:"browsablecollectionmixinmixinprototype--void",children:[]}]}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_BrowsableCollectionMixin"}),(0,o.kt)("h2",{id:"browsablecollectionmixin--d2sdkmodelsmixinsbrowsablecollectionmixin"},"BrowsableCollectionMixin : ",(0,o.kt)("code",null,"d2/sdk/models/mixins/browsable.collection.mixin")),(0,o.kt)("p",null,"BrowsableCollection mixin. Can be mixed with any ",(0,o.kt)("inlineCode",{parentName:"p"},"Backbone.Collection")," to make it paginated. Pagination happens on the client\nside by slicing & maintaining the models in it. But when it syncs to the server, it always fetches the full list of available objects."),(0,o.kt)("p",null,"Besides pagination it also enables sorting & filtering."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("code",null,"Object"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"See"),": ",(0,o.kt)("a",{parentName:"p",href:"../../../nuc/models/browsable/browsable"},"Browsable Support"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(A typical usage infuses the mixin with a collection prototype)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/backbone',\n 'd2/sdk/models/mixins/browsable.collection.mixin'\n], function(Backbone, BrowsableCollectionMixin){\n 'use strict';\n\n var MyCollection = Backbone.Collection.extend({\n   constructor: function MyCollection(models, options) {\n     options = options || {};\n     MyCollection.__super__.constructor.call(this, models, options);\n\n     this.makeBrowsableCollection(options);\n   }\n });\n\n BrowsableCollectionMixin.mixin(MyCollection.ptototype);\n\n return MyCollection;\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_BrowsableCollectionMixin"},"BrowsableCollectionMixin")," : ",(0,o.kt)("code",null,"d2/sdk/models/mixins/browsable.collection.mixin"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"instance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_BrowsableCollectionMixin+makeBrowsableCollection"},".makeBrowsableCollection(options)")," \u21d2 ",(0,o.kt)("code",null,"*")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"static"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_BrowsableCollectionMixin.mixin"},".mixin(prototype)")," \u21d2 ",(0,o.kt)("code",null,"void"))))))),(0,o.kt)("a",{name:"module_BrowsableCollectionMixin+makeBrowsableCollection"}),(0,o.kt)("h3",{id:"browsablecollectionmixinmakebrowsablecollectionoptions--"},"browsableCollectionMixin.makeBrowsableCollection(options) \u21d2 ",(0,o.kt)("code",null,"*")),(0,o.kt)("p",null,"Does the necessary setup so that a ",(0,o.kt)("inlineCode",{parentName:"p"},"Backbone.Collection")," instance could become client-side paginated along with support for property based sorting & filtering."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_BrowsableCollectionMixin"},(0,o.kt)("code",null,"BrowsableCollectionMixin")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"*")," - the collection instance itself.  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"options"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The options hash."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.skip]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Number of elements to skip from original collection. Needs to be set only if the collection needs to start from a page other the page-1."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.top"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Number of elements per page."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.filter]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Any filter expression that the collection should begin with. Can be changed later with ",(0,o.kt)("code",null,"setFilter"),"."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"[options.orderBy]"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Any sorting criteria that the collection should begin with. Can be changed later with ",(0,o.kt)("code",null,"serOrderBy"),"."))),"  ")),(0,o.kt)("a",{name:"module_BrowsableCollectionMixin.mixin"}),(0,o.kt)("h3",{id:"browsablecollectionmixinmixinprototype--void"},"BrowsableCollectionMixin.mixin(prototype) \u21d2 ",(0,o.kt)("code",null,"void")),(0,o.kt)("p",null,"Fuse the mixin methods to a prototype"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"#module_BrowsableCollectionMixin"},(0,o.kt)("code",null,"BrowsableCollectionMixin")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Mixes"),": ",(0,o.kt)("a",{parentName:"p",href:"../../../nuc/models/browsable/client-side.mixin"},(0,o.kt)("code",null,"ClientSideBrowsableMixin")),", ",(0,o.kt)("a",{parentName:"p",href:"../../../nuc/models/browsable/browsable.mixin"},(0,o.kt)("code",null,"BrowsableMixin")),", ",(0,o.kt)("code",null,"module:DelayedCollectionDataMixin"),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"prototype"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The target prototype where the mixin methods will be fused."))),"  ")))}p.isMDXComponent=!0}}]);