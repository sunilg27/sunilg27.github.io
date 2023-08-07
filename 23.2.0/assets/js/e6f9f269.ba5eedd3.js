"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},i="Context",l={unversionedId:"api/nuc/contexts/context",id:"api/nuc/contexts/context",title:"Context",description:"Gathers models, collections, or plain objects to be shared among multiple",source:"@site/articles/api/nuc/contexts/context.md",sourceDirName:"api/nuc/contexts",slug:"/api/nuc/contexts/context",permalink:"/23.2.0/next/api/nuc/contexts/context",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Overview - 23.2.0",permalink:"/23.2.0/next/api_overview"},next:{title:"Context Fragment",permalink:"/23.2.0/next/api/nuc/contexts/fragment/context.fragment"}},c={},s=[{value:"Factory",id:"factory",level:2},{value:"Fetchable Factory",id:"fetchable-factory",level:2},{value:"Configurable Factory",id:"configurable-factory",level:2},{value:"Detached Objects",id:"detached-objects",level:2},{value:"Permanent Objects",id:"permanent-objects",level:2},{value:"Temporary Objects",id:"temporary-objects",level:2},{value:"Factory Life-Cycle",id:"factory-life-cycle",level:2},{value:"Methods",id:"methods",level:2},{value:"getObject(factory, options): object",id:"getobjectfactory-options-object",level:3},{value:"getCollection(factory, options): object",id:"getcollectionfactory-options-object",level:3},{value:"getModel(factory, options): object",id:"getmodelfactory-options-object",level:3},{value:"hasObject(factory, options): boolean",id:"hasobjectfactory-options-boolean",level:3},{value:"hasCollection(factory, options): boolean",id:"hascollectionfactory-options-boolean",level:3},{value:"hasModel(factory, options): boolean",id:"hasmodelfactory-options-boolean",level:3},{value:"clear(options): void",id:"clearoptions-void",level:3},{value:"fetch(options): Promise",id:"fetchoptions-promise",level:3},{value:"suppressFetch(): boolean",id:"suppressfetch-boolean",level:3},{value:"Properties",id:"properties",level:2},{value:"fetching: Promise",id:"fetching-promise",level:3},{value:"fetched: boolean",id:"fetched-boolean",level:3},{value:"error: Error",id:"error-error",level:3},{value:"Events",id:"events",level:2},{value:"&#39;before:clear&#39;, context",id:"beforeclear-context",level:3},{value:"&#39;clear&#39;, context",id:"clear-context",level:3},{value:"&#39;request&#39;, context",id:"request-context",level:3},{value:"&#39;sync&#39;, context",id:"sync-context",level:3},{value:"&#39;error&#39;, error, context",id:"error-error-context",level:3},{value:"&#39;add:factory&#39;, context, propertyName, factory",id:"addfactory-context-propertyname-factory",level:3},{value:"&#39;remove:factory&#39;, context, propertyName, factory",id:"removefactory-context-propertyname-factory",level:3}],d={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context"},"Context"),(0,a.kt)("p",null,"Gathers models, collections, or plain objects to be shared among multiple\nscenarios and fetch them together.  Objects in context are managed by their\n",(0,a.kt)("em",{parentName:"p"},"factories"),"."),(0,a.kt)("p",null,"This is a base class. ",(0,a.kt)("inlineCode",{parentName:"p"},"PageContext"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PortalContext"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowsingContext")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"PerspectiveContext")," are classes to create instances of."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Create a new context.\nvar context = new PageContext();\n// Get the (main contextual) authenticated user\nvar currentUser = context.getModel(UserModelFactory);\n")),(0,a.kt)("h2",{id:"factory"},"Factory"),(0,a.kt)("p",null,"Is the \"overlord\" of objects in the context.  The parent class returned from\n'nuc/contexts/factories/factory' is usually called by different names\nlike ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectFactory"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelFactory")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectionFactory")," to express what\nthe descended factory will take care of."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creates an instance of the object, which will be returned to the caller."),(0,a.kt)("li",{parentName:"ul"},"Assigns a unique prefix to the object, so that the same object can be\nobtained using the factory at different places."),(0,a.kt)("li",{parentName:"ul"},"Can override how the model or collection is fetched.")),(0,a.kt)("p",null,"A factory has to specify a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"propertyPrefix")," in the prototype and set\nthe object managed by it to ",(0,a.kt)("inlineCode",{parentName:"p"},"this.property"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var TestObjectFactory = ObjectFactory.extend({\n\n  propertyPrefix: 'test',\n\n  constructor: function TestObjectFactory(context, options) {\n    ObjectFactory.prototype.constructor.apply(this, arguments);\n\n    this.property = new TestObject();\n  }\n\n});\n\n// Request an object with the default identifier\n// (internally stored with prefix 'test')\nvar test = context.getObject(TestObjectFactory);\n")),(0,a.kt)("p",null,"Objects are stored using ",(0,a.kt)("inlineCode",{parentName:"p"},"propertyPrefix"),"  in the context.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"propertyPrefix"),"\nis used alone for globally unique objects, or as a base for multiple objects\nhaving the same factory, but different attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Request a separate object with a specific identifier\n// (internally stored with prefix 'test-id-1')\nvar test = context.getObject(TestObjectFactory, {\n  attributes: {id: 1}\n});\n")),(0,a.kt)("p",null,"Factory can be used just for the object creation, if you don't want to learn\nabout its constructor parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Request a standalone object, not shareable by the context\nvar test = context.getObject(TestObjectFactory, {\n  unique: true,\n  temporary: true,\n  detached: true\n});\n")),(0,a.kt)("h2",{id:"fetchable-factory"},"Fetchable Factory"),(0,a.kt)("p",null,"Exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," method, which should fetch its model. Whenever the context\nis fetched, this method will be called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var FavoriteCollectionFactory = CollectionFactory.extend({\n\n  propertyPrefix: 'favorites',\n\n  constructor: function FavoritesCollectionFactory(context, options) {\n    CollectionFactory.prototype.constructor.apply(this, arguments);\n\n    var connector = context.getObject(ConnectorFactory, options);\n    this.property = new FavoritesCollection(undefined, {\n      connector: connector,\n      autoreset: true\n    });\n  },\n\n  fetch: function (options) {\n    return this.property.fetch(options);\n  }\n\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isFetchable")," method can be added to be able to check dynamically, if\nthe object is fetchable or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var NodeModelFactory = ModelFactory.extend({\n\n  propertyPrefix: 'node',\n\n  constructor: function NodeModelFactory(context, options) {\n    ModelFactory.prototype.constructor.apply(this, arguments);\n\n    var connector = context.getObject(ConnectorFactory, options);\n    this.property = new NodeModel(undefined, {connector: connector});\n  },\n\n  isFetchable: function () {\n    return this.property.isFetchable();\n  },\n\n  fetch: function (options) {\n    return this.property.fetch(options);\n  }\n\n});\n")),(0,a.kt)("h2",{id:"configurable-factory"},"Configurable Factory"),(0,a.kt)("p",null,"Factories are usually created once per object type, but they need to be able\nto create multiple object instances.  With just the factory provided, the\nobject will be constructed with default options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Get the (main contextual) node\nvar currentNode = context.getModel(NodeModelFactory);\n")),(0,a.kt)("p",null,"With the second argument, additional options can be passed to control the\nobject creation.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes")," will be used to uniquely stamp the new\nobject, so future calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"getObject")," with the same attributes will return\nthe same object. Also the ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes")," will be passed to the constructor of\nthe object, if it is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Backbone.Model"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Get original where the (main contextual) node points to, if it is\n// a shortcut\nvar originalId = currentNode.get('original_id'),\n    original = context.getModel(NodeModelFactory, {\n      attributes: {id: originalId}\n    });\n")),(0,a.kt)("p",null,"Below the property called like the factory prefix you can pass additional\noptions to the newly created object's constructor by the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Get original where the (main contextual) node points to, if it is\n// a shortcut and make it fetchable by the connector\nvar originalId = currentNode.original.get('id'),\n    original = context.getModel(NodeModelFactory, {\n      attributes: {id: originalId},\n      node: {\n        options: {connector: currentNode.connector}\n      }\n    });\n")),(0,a.kt)("p",null,"If the new object is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Backbone.Model"),", you can specify different attributes\nfor the constructor, than the attributes, which control the unique stamp of\nthe object.  While the former should be as minimum as to compose the unique\nstamp, the latter could be more complete to pre-initialize the new object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Get original where the (main contextual) node points to, if it is\n// a shortcut, make it fetchable by the connector, but pre-initialize\n// it will all properties available so far\nvar originalId = node.original.get('id'),\n    original = context.getModel(NodeModelFactory, {\n      attributes: {id: originalId},\n      node: {\n        attributes: node.original.attributes,\n        options: {connector: currentNode.connector}\n      }\n    });\n")),(0,a.kt)("p",null,"Finally, if you already have the new object created and you only need the\ncontext to make it shareable, you can pass it to the property called like\nthe factory as-is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Get original where the (main contextual) node points to, if it is\n// a shortcut, and share the same object, which has been obtained\n// with the contextual node\nvar originalId = node.original.get('id'),\n    original = context.getModel(NodeModelFactory, {\n      attributes: {id: originalId},\n      node: node.original\n    });\n")),(0,a.kt)("h2",{id:"detached-objects"},"Detached Objects"),(0,a.kt)("p",null,"Objects, which are added to the context after the context was fetched are\nneeded to be fetched manually, if they need fetching at all.  Also, as\nmanually fetched objects, when the context is re-fetched, they are not\nre-fetched again.  Their users decide, when they should be re-fetched."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// User information, which does not refresh automatically and will be\n// discarded, when clear() is called on the context\nvar ownerId = node.get('owner_user_id'),\n    owner = context.getModel(MemberModelFactory, {\n      attributes: {id: ownerId},\n      detached: true\n    });\n")),(0,a.kt)("p",null,"Detached objects should merge the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fetchable")," mixin, which allows fetching\nonly once on demand by ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureFetched"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Make sure, that the model was fetched once, before accessing\n// its properties\nowner\n    .ensureFetched()\n    .done(function () {\n      console.log('Login:', owner.get('name'));\n    });\n")),(0,a.kt)("h2",{id:"permanent-objects"},"Permanent Objects"),(0,a.kt)("p",null,"Objects like the authenticated user need not be re-created during the\napplication lifecycle.  After being requested for the first time, they should\nremain in the context for all scenarios.  (The only way how to re-create them\nis to reload the entire application - the application page.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// User information, which does not refresh automatically and will not be\n// discarded, when clear() or fetch() is called on the context\nvar ownerId = node.get('owner_user_id'),\n    owner = context.getModel(MemberModelFactory, {\n    attributes: {id: ownerId},\n    permanent: true,\n    detached: true\n  });\n")),(0,a.kt)("p",null,"Permanent objects are usually detached too, unless they should be re-fetched with\nevery context re-fetch."),(0,a.kt)("h2",{id:"temporary-objects"},"Temporary Objects"),(0,a.kt)("p",null,"Objects like the original node need to be shared across function scopes and\nobject boundaries, but should not be re-created and re-fetched multiple times.\nWhen the lifecycle of the current (main contextual) node ends, they should be\ndiscarded from the context, so that they would not get re-fetched with the new\ncontext content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Shareable original node information, which will be discarded, as soon\n// as clear() or fetch() is called on the context\nvar originalId = shortcut.original.get('id'),\n    original = context.getModel(NodeModelFactory, {\n      attributes: {id: originalId},\n      temporary: true\n    });\n")),(0,a.kt)("h2",{id:"factory-life-cycle"},"Factory Life-Cycle"),(0,a.kt)("p",null,"The context is a single-instance object that lives as long as the web page\nlives. (There may be multiple contexts, if parts of the page were supposed\nto work separately, but that would be a rare case.) The web page serves\ndifferent purposes during its life. Having just single context instance\nmeans that the content of the context has to be able to be exchanged\nto reflect the current page content."),(0,a.kt)("p",null,"The context supports two changes of the page content:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"refresh  - the page (views) will be reused, only the data will be reloaded"),(0,a.kt)("li",{parentName:"ul"},"exchange - the page will be rebuilt (current views will be destroyed and new\nones will be created) and new data wil be loaded")),(0,a.kt)("p",null,"These changes can be induced by the following methods of the context: ",(0,a.kt)("inlineCode",{parentName:"p"},"clear"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," removes the factories and thus their data from the\ncontext. The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," reloads (or loads, initially) the data by letting the\nfactories fetch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// render a new page    <----------------------------------+\ncontext.getObject(...) // get objects from the context     |\ncontext.fetch()        // fetch collected factories  <--+  |\n// work with the page                                   |  |\n// open another object on the same page  ---------------+  |\ncontext.clear()        // prepare for the next page        |\n// navigate to other page  --------------------------------+\n")),(0,a.kt)("p",null,"If the page has to show a different scenario (exchange), the ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," will be\ncalled, then the page will be rebuilt and eventually the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," will be\ncalled to load the data. If the page should show the same scenario with\ndifferent data (refresh), just ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," will be called."),(0,a.kt)("p",null,"Factories together with the objects that they maintain can be removed from\nthe context when ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," are called to allow some objects to stay\nforever and the other objects temporarily only after new data are to be loaded.\nWhen factories are used to request objects from context, they can be passed\noptions, or these options can be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"this.options")," in the factory's\nconstructor: ",(0,a.kt)("inlineCode",{parentName:"p"},"permanent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"temporary")," take care of the life-cycle,\n",(0,a.kt)("inlineCode",{parentName:"p"},"detached")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unique")," have other purposes."),(0,a.kt)("p",null,"How factories are removed from the context when ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," are called:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"operation / flag"),(0,a.kt)("th",{parentName:"tr",align:"center"},"refresh (fetch)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"exchange (clear + fetch)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"permanent"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"normal"),(0,a.kt)("td",{parentName:"tr",align:"center"},"stay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"drop")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"temporary"),(0,a.kt)("td",{parentName:"tr",align:"center"},"drop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"drop")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"detached")," flag does not affect the factory's life. It prevents the factory\never getting fetched. The ",(0,a.kt)("inlineCode",{parentName:"p"},"unique")," flag appends a unique number to the factory\nprefix, so that one factory can be put to the context multiple times to maintain\ndifferent objects."),(0,a.kt)("p",null,"Declarative options control what factories are allowed to fetch when ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),"\nis called. In addition to the static rules below, the actual fetchability is\nchecked by the ",(0,a.kt)("inlineCode",{parentName:"p"},"isFetchable")," method of the context:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"method / flag"),(0,a.kt)("th",{parentName:"tr",align:"center"},"fetch"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"permanent"),(0,a.kt)("td",{parentName:"tr",align:"center"},"allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"normal"),(0,a.kt)("td",{parentName:"tr",align:"center"},"allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"temporary"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N/A (*)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"detached"),(0,a.kt)("td",{parentName:"tr",align:"center"},"forbidden")))),(0,a.kt)("p",null,"(*) Temporary factories are removed from the context when the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," method\nstarts executing. It does not make sense to discuss their fetchability."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getobjectfactory-options-object"},"getObject(factory, options): object"),(0,a.kt)("p",null,"Returns an object maintained by the specified factory.  If the object has not\nexisted yet, it will be created, otherwise the previously created instance\nwill be returned."),(0,a.kt)("p",null,"The object existence is made unique by the property prefix defined by the\nfactory.  The full unique property stamp consists of this prefix and of the\ncontext ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes"),", which can be passed in the second argument."),(0,a.kt)("p",null,"If the object is to be created, the second argument can carry parameters for\nits constructor under the property named by the factory's property prefix;\nusually ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," for a model or ",(0,a.kt)("inlineCode",{parentName:"p"},"models")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," for\na collection.  Instead of constructor parameters, this property can point to\nan already created object, so that the factory just stores it as-is."),(0,a.kt)("p",null,"The second argument can contain boolean flags to control how the context\nwill handle the object: ",(0,a.kt)("inlineCode",{parentName:"p"},"detached"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"permanent"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"temporary")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unique"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Create a favorite node collection pre-initialized with some nodes\n// until it gets fetched with the context\nvar favorites = context.getCollection(FavoriteCollectionFactory, {\n  favorites: {\n    models: [{type: 141}, {type: 142}]\n  }\n});\n")),(0,a.kt)("h3",{id:"getcollectionfactory-options-object"},"getCollection(factory, options): object"),(0,a.kt)("p",null,"Behaves just like ",(0,a.kt)("inlineCode",{parentName:"p"},"getObject"),", but looks more intuitive, if the expected\nresult is Backbone.Collection."),(0,a.kt)("h3",{id:"getmodelfactory-options-object"},"getModel(factory, options): object"),(0,a.kt)("p",null,"Behaves just like ",(0,a.kt)("inlineCode",{parentName:"p"},"getObject"),", but looks more intuitive, if the expected\nresult is Backbone.Model."),(0,a.kt)("h3",{id:"hasobjectfactory-options-boolean"},"hasObject(factory, options): boolean"),(0,a.kt)("p",null,"Returns if there is an object maintained by the specified factory."),(0,a.kt)("h3",{id:"hascollectionfactory-options-boolean"},"hasCollection(factory, options): boolean"),(0,a.kt)("p",null,"Behaves just like ",(0,a.kt)("inlineCode",{parentName:"p"},"hasObject"),", but looks more intuitive, if the expected\nobject is Backbone.Collection."),(0,a.kt)("h3",{id:"hasmodelfactory-options-boolean"},"hasModel(factory, options): boolean"),(0,a.kt)("p",null,"Behaves just like ",(0,a.kt)("inlineCode",{parentName:"p"},"hasObject"),", but looks more intuitive, if the expected\nobject is Backbone.Model."),(0,a.kt)("h3",{id:"clearoptions-void"},"clear(options): void"),(0,a.kt)("p",null,"Discards all objects from the context, which are not permanent.\nWhen ",(0,a.kt)("inlineCode",{parentName:"p"},"options.all")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", all objects will be discarded."),(0,a.kt)("h3",{id:"fetchoptions-promise"},"fetch(options): Promise"),(0,a.kt)("p",null,"Fetches all objects in the context, which are not detached.  Discards all\ntemporary objects before that. The options will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),"\nmethods in factories that take care of the fetchable objects."),(0,a.kt)("h3",{id:"suppressfetch-boolean"},"suppressFetch(): boolean"),(0,a.kt)("p",null,"Aborts fetching started by the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," method. You can interrupt a running\n",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),"in order to start another one, because the earlier result has become\nirrelevant. (Because a navigation got interrupted by yet another navigation,\nfor example.)"),(0,a.kt)("p",null,"Error event on the context will be never triggered and the returned promise\nwill be never resolved. Sync event will be triggered immediately\nas the ",(0,a.kt)("inlineCode",{parentName:"p"},"suppressFetch")," method is called to balance the earlier triggered\n",(0,a.kt)("inlineCode",{parentName:"p"},"request")," event. Events on the models and and collection will be triggered\neventually, as their AJAX calls will finish."),(0,a.kt)("p",null,"This method does not abort the operation. It only allows another call\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," be made and replace the one in progress."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"fetching-promise"},"fetching: Promise"),(0,a.kt)("p",null,"The promise returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," during fetching or ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if no fetching is\nin progress."),(0,a.kt)("h3",{id:"fetched-boolean"},"fetched: boolean"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the most recent ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," succeeded, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if the context has not\nbeen fetched yet, or fetching is in progress, or it failed."),(0,a.kt)("h3",{id:"error-error"},"error: Error"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," if the most recent ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," succeeded, or fetching is in progress, or\nthe context has not been fetched yet, an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," if the most\nrecent ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," failed."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"beforeclear-context"},"'before:clear', context"),(0,a.kt)("p",null,"The context is going to be cleared."),(0,a.kt)("h3",{id:"clear-context"},"'clear', context"),(0,a.kt)("p",null,"The context has been cleared."),(0,a.kt)("h3",{id:"request-context"},"'request', context"),(0,a.kt)("p",null,"The context is going to be fetched."),(0,a.kt)("h3",{id:"sync-context"},"'sync', context"),(0,a.kt)("p",null,"Fetching the context succeeded."),(0,a.kt)("h3",{id:"error-error-context"},"'error', error, context"),(0,a.kt)("p",null,"Fetching the context failed."),(0,a.kt)("h3",{id:"addfactory-context-propertyname-factory"},"'add:factory', context, propertyName, factory"),(0,a.kt)("p",null,"A new factory has been added to the context."),(0,a.kt)("h3",{id:"removefactory-context-propertyname-factory"},"'remove:factory', context, propertyName, factory"),(0,a.kt)("p",null,"A factory has been destroyed and will be removed from the context."))}h.isMDXComponent=!0}}]);