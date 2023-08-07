"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={},a="BrowsableMixin",l={unversionedId:"api/nuc/models/browsable/browsable.mixin",id:"api/nuc/models/browsable/browsable.mixin",title:"BrowsableMixin",description:"Defines the interface of collection paging, sorting and filtering and",source:"@site/articles/api/nuc/models/browsable/browsable.mixin.md",sourceDirName:"api/nuc/models/browsable",slug:"/api/nuc/models/browsable/browsable.mixin",permalink:"/23.4.0/23.4.0/api/nuc/models/browsable/browsable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Browsable Support for Backbone.Collections",permalink:"/23.4.0/23.4.0/api/nuc/models/browsable/"},next:{title:"ClientSideBrowsableMixin",permalink:"/23.4.0/23.4.0/api/nuc/models/browsable/client-side.mixin"}},s={},p=[{value:"Example",id:"example",level:3},{value:"makeBrowsable(options) : this",id:"makebrowsableoptions--this",level:2},{value:"Browsing State Properties",id:"browsing-state-properties",level:2},{value:"Browsing State Changing Methods",id:"browsing-state-changing-methods",level:2},{value:"fetch(options) : promise",id:"fetchoptions--promise",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"browsablemixin"},"BrowsableMixin"),(0,i.kt)("p",null,"Defines the interface of collection paging, sorting and filtering and\nprovides an implementation of the collection state supporting them."),(0,i.kt)("p",null,"Using the browsing state properties to populate the collection is\nsupposed to be added on your own or provided by other mixins."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var MyCollection = Backbone.Collection.extend({\n\n  constructor: function MyCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n\n    this.makeBrowsable(options);\n  }\n\n  // use the browsing properties to maintain the collection content\n\n});\n\nBrowsableMixin.mixin(MyCollection.prototype);\n")),(0,i.kt)("h2",{id:"makebrowsableoptions--this"},"makeBrowsable(options) : this"),(0,i.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Collection constructor options passed in."),(0,i.kt)("h2",{id:"browsing-state-properties"},"Browsing State Properties"),(0,i.kt)("p",null,"skipCount\n: how many items should be skipped from the beginning of the collection;\nzero-based index of the first item (integer, 0 by default)"),(0,i.kt)("p",null,"topCount\n: how many items should be fetched from top of the collection, starting\nfrom the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipCount"),"; all the rest of the collection will be returned\nif not specified (integer, undefined by default)"),(0,i.kt)("p",null,"orderBy\n: how to sort the fetched items; comma-delimited list of space-delimited\nsort criteria consisting of the property name and an optional\nsort direction, which defaults to ascending: ",(0,i.kt)("inlineCode",{parentName:"p"},"<name> [asc|desc], ..."),"\n(string, undefined by default)"),(0,i.kt)("p",null,"filters\n: how to filter the fetched items; map of filer criteria with property names\nas keys and filert operands as values (object literal; empty by default)\nname: 'pro', type: ","[144, 848]",")"),(0,i.kt)("p",null,"actualSkipCount\n: how many items were actually skipped when the server handled the request\nthe caller should check this value and optionally correct the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipCount"),"\nfor future calls (integer, output only, set after fetching)"),(0,i.kt)("p",null,"totalCount\n: how many total items are available for paging through (integer, output only,\nset after fetching)"),(0,i.kt)("p",null,"totalCountComputed\n: set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the exact total count is not available, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"totalCount"),"\nwas computed only to allow random pagination and rounded to the page size\nboundary (may not be supported by all server adaptors)"),(0,i.kt)("h2",{id:"browsing-state-changing-methods"},"Browsing State Changing Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"setSkip(skip, fetch)            : boolean\nsetTop(top, fetch)              : boolean\nsetLimit(skip, top, fetch)      : boolean\nresetLimit(fetch)               : boolean\nsetOrder(orderBy, fetch)        : boolean\nresetOrder(fetch)               : boolean\nsetFilter(name, value, options) : boolean\nclearFilter(fetch)              : boolean\n")),(0,i.kt)("p",null,"Set the browsing state properties to the specified value or reset it to\ntheir default.  The last ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," argument makes the collection fetch\nautomatically if not set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (",(0,i.kt)("inlineCode",{parentName:"p"},"true")," is the  default).  If the\nnew browsing state requires calling a ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," to update  the collection,\n",(0,i.kt)("inlineCode",{parentName:"p"},"true")," is returned, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setLimit")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"resetLimit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setOrder")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"resetOrder")," work\nas pairs - the first sets (or overwrites) the current value, the second\nresets it to the default one.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"setFilter")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"clearFilter")," work\nas a pair - the first sets (adds or overwrites) a property to the filter,\nthe second clears all filters.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," parameter in ",(0,i.kt)("inlineCode",{parentName:"p"},"setFilter"),"\ncan be either a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," with the meaning of the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," parameter of the\nother methods, or an object literal with ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"clear")," properties.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"clear")," property clears the existing filters beforeit sets the new."),(0,i.kt)("h1",{id:"browsing-methods"},"Browsing Methods"),(0,i.kt)("p",null,"These methods are supposed to be reused from Backbone, implemented on your\nown or by other mixin, like ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientSideBrowsableMixin"),"."),(0,i.kt)("h2",{id:"fetchoptions--promise"},"fetch(options) : promise"),(0,i.kt)("p",null,"Populates the collection according to the current browsing state.  If the\n",(0,i.kt)("inlineCode",{parentName:"p"},"reload: true")," option is set, the fresh content is ensured by forcing a\nserver call, if the method did not need to perform one."),(0,i.kt)("p",null,"A special scenario - continuously fetching the next page - can be implemented\nby incrementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipCount")," and fetching the items for appending them\nto the collection only:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"collection.setSkip(collection.skipCount + collection.topCount, false);\ncollection.fetch({\n  remove: false,\n  merge: false\n});\n")),(0,i.kt)("p",null,"If the continuous fetching reached its end should be checked by testing the\ncollection length, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"if (collection.length < collection.totalCount) {\n  ... // fetch the next page\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"totalCount")," is available first after the very first ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," call."),(0,i.kt)("p",null,"If you want to start fresh from the beginning in the middle of continuous\nfetching, change paging, sorting and filtering parameters and force removing\nthe existing models:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"collection.setSkip(0, false);\ncollection.fetch({\n  remove: true,\n  merge: false\n});\n")),(0,i.kt)("p",null,"You could add ",(0,i.kt)("inlineCode",{parentName:"p"},"reset: true")," to optimize UI refresh; instead of multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),"\nevents you would get a single ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," event.  You would drop the ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," parameters then, because the collection would be emptied."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClientSideBrowsableMixin")))}u.isMDXComponent=!0}}]);