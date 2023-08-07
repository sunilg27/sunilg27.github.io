"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="StateCarrierMixin",s={unversionedId:"api/nuc/models/mixins/state.carrier/state.carrier.mixin",id:"api/nuc/models/mixins/state.carrier/state.carrier.mixin",title:"StateCarrierMixin",description:"Provides support for maintaining the state properties as introduced by the api/v2/nodes/id/nodes (V2) resources.",source:"@site/articles/api/nuc/models/mixins/state.carrier/state.carrier.mixin.md",sourceDirName:"api/nuc/models/mixins/state.carrier",slug:"/api/nuc/models/mixins/state.carrier/state.carrier.mixin",permalink:"/23.2.0/next/api/nuc/models/mixins/state.carrier/state.carrier.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"RulesMatchingMixin",permalink:"/23.2.0/next/api/nuc/models/mixins/rules.matching/rules.matching.mixin"},next:{title:"StateRequestorMixin",permalink:"/23.2.0/next/api/nuc/models/mixins/state.requestor/state.requestor.mixin"}},l={},p=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeStateCarrier(options) : this",id:"makestatecarrieroptions--this",level:2},{value:"state : Backbone.Model",id:"state--backbonemodel",level:2},{value:"parseState(response, role) : void",id:"parsestateresponse-role--void",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"statecarriermixin"},"StateCarrierMixin"),(0,i.kt)("p",null,"Provides support for maintaining the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," properties as introduced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id/nodes")," (V2) resources."),(0,i.kt)("p",null,"Server responses may contain not only data, but also state properties, which may be needed for evaluation on either client or server sides. The ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata_token"),", for example."),(0,i.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeFieldsV2(options)\n      .makeStateCarrier(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource');\n    var query = Url.combineQueryString(\n      this.getResourceFieldsUrlQuery(),\n      this.getStateEnablingUrlQuery()\n    );\n    return Url.appendQuery(url, query);\n  },\n\n  parse: function (response, options) {\n    var results = response.results || response;\n    this.parseState(results, 'properties');\n    return results.data.properties;\n  }\n});\n\nConnectableMixin.mixin(MyModel.prototype);\nFieldsV2Mixin.mixin(MyModel.prototype);\nStateCarrierMixin.mixin(MyModel.prototype);\n")),(0,i.kt)("p",null,"This mixin us usually combined together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectableMixin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldsV2Mixin")," or with another cumulated mixin which includes them. This mixin includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"StateRequestorMixin")," and applieas it automatically."),(0,i.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,i.kt)("p",null,"Get or set properties in te ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," object as you need them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Get the metadata toklen to pass it to a modification server call\nvar metadataToken = model.state.get('metadata_token');\n\n// Set the metadatan token from a response of a server call\nmodel.state.set('metadata_token', results.state.properties.metadata_token);\n")),(0,i.kt)("p",null,"Simplify parsing the state properties from a standard V2 API response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Support retrieving the attributes when fetching either collection or model.\nvar results = response.results || response;\nvar data = results.data;\nthis.parseState(data, results, 'properties');\n")),(0,i.kt)("h2",{id:"makestatecarrieroptions--this"},"makeStateCarrier(options) : this"),(0,i.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality. Expects the ",(0,i.kt)("inlineCode",{parentName:"p"},"Backbone.Model")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Backbone.Collection")," constructor options passed in."),(0,i.kt)("h2",{id:"state--backbonemodel"},"state : Backbone.Model"),(0,i.kt)("p",null,"Maintains the object state properties (empty by default)."),(0,i.kt)("h2",{id:"parsestateresponse-role--void"},"parseState(response, role) : void"),(0,i.kt)("p",null,"Parses a standard V2 response and sets the state properties to the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," object on the instance. The ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," parameter is an object with a response object; either a complete response, or just the ",(0,i.kt)("inlineCode",{parentName:"p"},"results")," sub-object, if it is present in the response as a wrapper. The ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," parameter is a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," choosing the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),' role, which the state should be received for; the default value is "properties".'),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StateRequestorMixin"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldsV2Mixin")))}u.isMDXComponent=!0}}]);