"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[190],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?o.createElement(h,l(l({ref:n},s),{},{components:t})):o.createElement(h,l({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(7462),i=(t(7294),t(3905));const r={},l="NodeConnectableMixin",a={unversionedId:"api/nuc/models/mixins/node.connectable/node.connectable.mixin",id:"api/nuc/models/mixins/node.connectable/node.connectable.mixin",title:"NodeConnectableMixin",description:"Provides support for the server connection via a node, represented by NodeModel,",source:"@site/articles/api/nuc/models/mixins/node.connectable/node.connectable.mixin.md",sourceDirName:"api/nuc/models/mixins/node.connectable",slug:"/api/nuc/models/mixins/node.connectable/node.connectable.mixin",permalink:"/api/nuc/models/mixins/node.connectable/node.connectable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"NodeAutoFetchableMixin",permalink:"/api/nuc/models/mixins/node.autofetchable/node.autofetchable.mixin"},next:{title:"NodeResourceMixin",permalink:"/api/nuc/models/mixins/node.resource/node.resource.mixin"}},c={},d=[{value:"Remarks",id:"remarks",level:2},{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How use the mixin",id:"how-use-the-mixin",level:3},{value:"makeNodeConnectable(options) : this",id:"makenodeconnectableoptions--this",level:2},{value:"node",id:"node",level:2},{value:"connector",id:"connector",level:2},{value:"See Also",id:"see-also",level:2}],s={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodeconnectablemixin"},"NodeConnectableMixin"),(0,i.kt)("p",null,"Provides support for the server connection via a node, represented by ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeModel"),",\nits descendant or by other class with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectableMixin")," applied."),(0,i.kt)("p",null,"Many resources are associated with a node, which can be a parent, for example, or\nin other relation.  The node provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," to update the target model\nor collection and its identifier usually takes part in the resource URL."),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This mixin overrides the ",(0,i.kt)("inlineCode",{parentName:"p"},"_prepareModel")," method and calls the original\nimplementation afterwards.  If you supply your own custom implementation\nof this method, or use another mixin which overrides it, you should apply\nthis mixin after yours."),(0,i.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var MyCollection = Backbone.Collection.extend({\n\n  constructor: function MyCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n    this.makeNodeConnectable(options);\n  },\n\n  url: function () {\n    return Url.combine(this.node.urlBase(), 'mysubresources');\n  }\n  \n});\n\nNodeConnectableMixin.mixin(MyCollection.prototype);\n")),(0,i.kt)("h3",{id:"how-use-the-mixin"},"How use the mixin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Specify the connector when creating the model\nvar connector = new Connector(...),\n    node = new NodeModel({id: 2000}, {connector: connector}),\n    collection = new MyCollection(undefined, {node: node});\ncollection.fetch();\n")),(0,i.kt)("h2",{id:"makenodeconnectableoptions--this"},"makeNodeConnectable(options) : this"),(0,i.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,i.kt)("p",null,"Recognized option properies:"),(0,i.kt)("p",null,"node\n: The ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeModel")," instance to use (object, mandatory)"),(0,i.kt)("h2",{id:"node"},"node"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeModel")," instance assigned to this model or collection in the constructor\n(object, read-only)"),(0,i.kt)("h2",{id:"connector"},"connector"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," instance assigned to this model or collection via the related node\n(object, read-only)"),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NodeResourceMixin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeModel")))}u.isMDXComponent=!0}}]);