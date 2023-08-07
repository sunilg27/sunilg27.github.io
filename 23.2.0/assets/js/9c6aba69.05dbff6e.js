"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7484],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,f=d["".concat(s,".").concat(u)]||d[u]||h[u]||l;return t?o.createElement(f,r(r({ref:n},p),{},{components:t})):o.createElement(f,r({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<l;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=t(7462),i=(t(7294),t(3905));const l={},r="Browsable Support for Backbone.Collections",a={unversionedId:"api/nuc/models/browsable/browsable",id:"api/nuc/models/browsable/browsable",title:"Browsable Support for Backbone.Collections",description:"Browsing means paging, sorting and filtering through a collection of items.",source:"@site/articles/api/nuc/models/browsable/browsable.md",sourceDirName:"api/nuc/models/browsable",slug:"/api/nuc/models/browsable/",permalink:"/23.2.0/next/api/nuc/models/browsable/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"RequireJS",permalink:"/23.2.0/next/api/nuc/lib/require"},next:{title:"BrowsableMixin",permalink:"/23.2.0/next/api/nuc/models/browsable/browsable.mixin"}},s={},c=[{value:"Browsing Support Modules",id:"browsing-support-modules",level:2},{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:c},d="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"browsable-support-for-backbonecollections"},"Browsable Support for Backbone.Collections"),(0,i.kt)("p",null,'Browsing means paging, sorting and filtering through a collection of items.\nThese can be large and thus the Backbone.Collection might contain only a part\nof it in memory at a time.  The Backbone.View showing the collection is\nsupposed to use an extended interface to get the right "window" on the\nfull collection.'),(0,i.kt)("p",null,"Paging can be ",(0,i.kt)("em",{parentName:"p"},"discreet"),', where the window is limited by a starting item\nindex and an item count.  The view usually presents a pagination control\nto set up the browsing state, dealing either in items or pages - "batches"\nof items with the same size.'),(0,i.kt)("p",null,"Paging can also be ",(0,i.kt)("em",{parentName:"p"},"continuous"),', which starts at the beginning and\ncontinues by loading a specified item count at a time and appending the\nitems to the growing in-memory collection.  The view usually calls the\nnext fetch when the scrollbar hits the item threshold, performing an\napparent "infinite scrolling".'),(0,i.kt)("p",null,"The collection browsing support provided by the modules below works like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up the browsing state"),(0,i.kt)("li",{parentName:"ol"},"Listen for the standard Backbone Collection and Model events to get notified\nwhen the (part of the) collection has been fetched"),(0,i.kt)("li",{parentName:"ol"},"Fetch the collection; the specified part will be placed in the collection"),(0,i.kt)("li",{parentName:"ol"},"Adjust the browsing state and repeat the step 3")),(0,i.kt)("p",null,"This browsing support is based on the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," method and the\nstandard events (",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reset"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sync"),").  Depending on the server\ncapabilities, the fetched items may or may not be up-to-date when the fetch\nfinishes.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"reload: true")," option can be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," call if\nfresh data are needed and the possible performance penalty is acceptable."),(0,i.kt)("p",null,"Samples of discreet fetching; if your collection uses concept of pages,\nyou have to convert them to item indexes for the collection interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Fetch the first page of 10 items\ncollection.setSkip(0, false);\ncollection.setTop(10, false);\ncollection.fetch();\n\n// Fetch only the second page of 10 items\ncollection.setSkip(10, false);\ncollection.fetch();\n\n// Fetch only another page of 10 items\ncollection.setSkip(collection.skipCount + 10, false);\ncollection.fetch();\n\n// Fetch only another page of top items\ncollection.setSkip(collection.skipCount + collection.topCount, false);\ncollection.fetch();\n\n// Check if more pages are available for fetching\nif (collection.length < collection.totalCount) {\n  ...\n}\n\n// Reload the collection and start browsing from the beginning\ncollection.setSkip(0, false);\ncollection.fetch({reload: true});\n")),(0,i.kt)("p",null,"Samples of continuous fetching:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Fetch the first 10 items\ncollection.setSkip(0, false);\ncollection.setTop(10, false);\ncollection.fetch();\n\n// Fetch and append the second 10 items\ncollection.setSkip(10, false);\ncollection.fetch({\n  remove: false,\n  merge: false\n});\n\n// Fetch and append another 10 items\ncollection.setSkip(collection.skipCount + 10, false);\ncollection.fetch({\n  remove: false,\n  merge: false\n});\n\n// Fetch and append another top items\ncollection.setSkip(collection.skipCount + collection.topCount, false);\ncollection.fetch({\n  remove: false,\n  merge: false\n});\n\n// Check if more items are available for fetching\nif (collection.length < collection.totalCount) {\n  ...\n}\n\n// Reload the collection and start from the first 10 items again\ncollection.setSkip(0, false);\ncollection.fetch({reload: true});\n")),(0,i.kt)("h2",{id:"browsing-support-modules"},"Browsing Support Modules"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nuc/models/browsable/browsable.mixin"),"\n: extends the interface of Backbone.Collection with properties and methods\nsupporting the browsing functionality"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nuc/models/browsable/client-side.mixin"),"\n: overrides the interface of Backbone.Collection, which can be fetched\nonly completely, to support the browsing functionality on the client side"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nuc/models/browsable/v1.request.mixin"),"\n: provides serialization of the URL parameters for the browsing functionality\nusing the concepts of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/nodes/:id/nodes")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nuc/models/browsable/v1.response.mixin"),"\n: provides deserialization of the collection state and collection items\nusing the concepts of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/nodes/:id/nodes")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nuc/models/browsable/v2.response.mixin"),"\n: provides deserialization of the collection state and collection items\nusing the concepts of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v2/members/favorites")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Collection of node (container) children returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/nodes/:id/nodes"),",\nwhich supports paging, sorting and filtering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var NodeChildrenCollection = Backbone.Collection.extend(_.defaults({\n\n  model: NodeModel,\n\n  constructor: function NodeChildrenCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n\n    this.makeNodeResource(options)\n        .makeBrowsable(options)\n        .makeBrowsableV1Request(options)\n        .makeBrowsableV1Response(options);\n  },\n\n  url: function () {\n    var query = this.getBrowsableUrlQuery();\n    return Url.combine(this.node.urlBase(),\n        query ? '/nodes?' + query : '/nodes');\n  },\n\n  parse: function (response, options) {\n    this.parseBrowsedState(response, options);\n    return response.data;\n  }\n\n}, NodeResourceModel(Backbone.Collection)));\n\nBrowsableMixin.mixin(NodeChildrenCollection.prototype);\nBrowsableV1RequestMixin.mixin(NodeChildrenCollection.prototype);\nBrowsableV1ResponseMixin.mixin(NodeChildrenCollection.prototype);\n")),(0,i.kt)("p",null,"Collection of favourite nodes returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v2/members/favorites"),",\nwhich does not support paging, sorting and filtering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var FavoritesCollection = Backbone.Collection.extend(_.defaults({\n\n  model: NodeModel,\n\n  constructor: function FavoritesCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n\n    this.makeConnectable(options)\n        .makeFetchable(options)\n        .makeClientSideBrowsable(options);\n  },\n\n  url: function () {\n    var url = this.connector.connection.url.replace('/v1', '/v2');\n    return Url.combine(url, 'members/favorites');\n  },\n\n  parse: function (response, options) {\n    return response.results;\n  }\n\n}, ConnectableModel(Backbone.Collection), FetchableModel(Backbone.Collection)));\n\nClientSideBrowsableMixin.mixin(NodeChildrenCollection.prototype);\nBrowsableV2ResponseMixin.mixin(NodeChildrenCollection.prototype);\n")),(0,i.kt)("p",null,'Continuous paging through favorites by "batches" of 10 items and\nlogging the current collection length:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var connector = ...,\n    favorites = new FavoriteNodeCollection(undefined, {\n      connector: connector,\n      top: 10\n    });\n\n// The top parameter can be set by `favorites.setTop(10, false)` too\n\nfavorites\n  .fetch()\n  .then(fetchNext);\n\nfunction fetchNext() {\n  console.log(favorites.length);\n  if (favorites.length < favorites.totalCount) {\n    return favorites\n      .fetch({\n        remove: false,\n        merge: false\n      })\n      .then(fetchNext);\n  }\n}\n")),(0,i.kt)("p",null,"Loading 10 children from the position 20 in their parent container\nand logging the actual collection length:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var node = ...,\n    children = new NodeChildrenCollection(undefined, {\n      node: node,\n      skip: 20,\n      top: 10\n    });\n\n// The skip and top parameters can be set by `children.setSkip(20, false)`\n// and `children.setTop(10, false)` too\n\nchildren\n  .fetch()\n  .done(function () {\n    console.log(children.length);\n  });\n\n// Other "window" to the collection can be fetched by adjusting the limit\n// using `children.setSkip(..., false)` and `children.setTop(..., false)`\n// and repeating the `fetch` call.\n')),(0,i.kt)("p",null,"Getting the most recent 5 documents from a folder, which means filtering\nthe node (container) children by type including only documents and e-mails,\nsorting them by the last modification time in the descending direction (and\nby name, ascending if multiple were modified at the same time), limiting\nthem just to the first 5 and logging their names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var node = ...,\n    children = new NodeChildrenCollection(undefined, {\n      node: node,\n      filter: {\n        type: [144, 748]\n      },\n      orderBy: 'modify_date desc, name'\n      top: 5\n    });\n\n// The parameters can be set by `setFilter, `setOrder` and `setTop` too\n\nchildren\n  .fetch()\n  .done(function () {\n    console.log(children.pluck('name').join(', '));\n  });\n\n// Another 5 items can be fetched by `fetch({remove: false, merge: false})`.  The\n// item count to fetch can be adjusted by `children.setTop(..., false)` before it.\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Collections extended by either ",(0,i.kt)("inlineCode",{parentName:"p"},"BrowsableMixin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientSideBrowsableMixin"),"\noffer the same interface for both discreet and continuous paging.  You can use them\ninterchangingly without knowing which one you have."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClientSideBrowsableMixin")," fetches the complete collection to an internal\nbuffer at first, then it populates the collection according to the browsing\nstate properties.  Following fetches are served from the internal buffer.\n",(0,i.kt)("inlineCode",{parentName:"p"},"BrowsableMixin")," needs to be supported by the REST API on the server side.\nIf you need to refresh the collection from the server independently on the\nclient-side and server-side collection, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"reload: true")," option to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," method.  You usually start from the beginning too, by calling\n",(0,i.kt)("inlineCode",{parentName:"p"},"setSkip(0, false)")," right before the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch({reload: true})"),"."))}h.isMDXComponent=!0}}]);