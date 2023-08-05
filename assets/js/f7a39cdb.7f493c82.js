"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="StateRequestorMixin",l={unversionedId:"api/nuc/models/mixins/state.requestor/state.requestor.mixin",id:"api/nuc/models/mixins/state.requestor/state.requestor.mixin",title:"StateRequestorMixin",description:"Provides support for setting the state URL query parameter as introduced by the api/v2/nodes/id/nodes (V2) resources.",source:"@site/articles/api/nuc/models/mixins/state.requestor/state.requestor.mixin.md",sourceDirName:"api/nuc/models/mixins/state.requestor",slug:"/api/nuc/models/mixins/state.requestor/state.requestor.mixin",permalink:"/23.4.0/api/nuc/models/mixins/state.requestor/state.requestor.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"StateCarrierMixin",permalink:"/23.4.0/api/nuc/models/mixins/state.carrier/state.carrier.mixin"},next:{title:"SyncableFromMultipleSourcesMixin",permalink:"/23.4.0/api/nuc/models/mixins/syncable.from.multiple.sources/"}},s={},p=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeFieldsV2(options) : this",id:"makefieldsv2options--this",level:2},{value:"stateEnabled : boolean",id:"stateenabled--boolean",level:2},{value:"enableState() : void",id:"enablestate--void",level:2},{value:"disableState() : void",id:"disablestate--void",level:2},{value:"getStateEnablingUrlQuery() : object",id:"getstateenablingurlquery--object",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"staterequestormixin"},"StateRequestorMixin"),(0,i.kt)("p",null,"Provides support for setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," URL query parameter as introduced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id/nodes")," (V2) resources."),(0,i.kt)("p",null,"Server responses may contain not only data, but also state properties, which would reduce the performce of the request, if they were always returned."),(0,i.kt)("p",null,"The state can be enabled or disabled. Enabling the state will include state properties for the enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," in the response."),(0,i.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeFieldsV2(options)\n      .makeStateRequestor(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource');\n    var query = Url.combineQueryString(\n      this.getResourceFieldsUrlQuery(),\n      this.getStateEnablingUrlQuery()\n    );\n    return Url.appendQuery(url, query);\n  }\n  });\n\nConnectableMixin.mixin(MyModel.prototype);\nFieldsV2Mixin.mixin(MyModel.prototype);\nStateRequestorMixin.mixin(MyModel.prototype);\n")),(0,i.kt)("p",null,"This mixin us usually combined together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectableMixin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldsV2Mixin")," or with another cumulated mixin which includes them."),(0,i.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,i.kt)("p",null,"Enabkle or disable retrieval of the state by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"enableState")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"disableState")," and fetch the model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Set the expansion when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      fields: {\n        properties: ['parent_id', 'create_user_id']\n      }\n    });\nmodel.fetch();\n\n// Set the expansion after creating the model\nmodel.setFields('properties', ['parent_id', 'create_user_id']);\nmodel.fetch();\n")),(0,i.kt)("h2",{id:"makefieldsv2options--this"},"makeFieldsV2(options) : this"),(0,i.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality. Expects the ",(0,i.kt)("inlineCode",{parentName:"p"},"Backbone.Model")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Backbone.Collection")," constructor ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," passed in."),(0,i.kt)("p",null,"Recognized option properties:"),(0,i.kt)("p",null,"stateEnabled\n: If the state retrieval should be enabled or not (boolean, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," by default)."),(0,i.kt)("h2",{id:"stateenabled--boolean"},"stateEnabled : boolean"),(0,i.kt)("p",null,"If the state retrieval should be enabled or not (",(0,i.kt)("inlineCode",{parentName:"p"},"false")," by default, read-only)."),(0,i.kt)("h2",{id:"enablestate--void"},"enableState() : void"),(0,i.kt)("p",null,"Enables retrieval of the object state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Enable retrieval of the object state\nmodel.enableState();\n")),(0,i.kt)("h2",{id:"disablestate--void"},"disableState() : void"),(0,i.kt)("p",null,"Disables retrieval of the object state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Disable retrieval of the object state\nmodel.enableState();\n")),(0,i.kt)("h2",{id:"getstateenablingurlquery--object"},"getStateEnablingUrlQuery() : object"),(0,i.kt)("p",null,"Returns an object with URL query parameters for the request URL construction. They can be concatenated with other URL query parts (both object literals and strings) by ",(0,i.kt)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var url = ...,;\nvar query = Url.combineQueryString(\n  ...,\n  this.getStateEnablingUrlQuery()\n);\nurl = Url.appendQuery(url, query);\n")),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StateCarrierMixin"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldsV2Mixin")))}c.isMDXComponent=!0}}]);