"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=i(n),k=l,m=u["".concat(s,".").concat(k)]||u[k]||p[k]||r;return n?o.createElement(m,d(d({ref:t},c),{},{components:n})):o.createElement(m,d({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,d=new Array(r);d[0]=k;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:l,d[1]=a;for(var i=2;i<r;i++)d[i]=n[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var o=n(7462),l=(n(7294),n(3905));const r={},d=void 0,a={unversionedId:"api/d2/models/node.model",id:"api/d2/models/node.model",title:"node.model",description:"NodeModel : d2/sdk/models/node.model",source:"@site/articles/api/d2/models/node.model.md",sourceDirName:"api/d2/models",slug:"/api/d2/models/node.model",permalink:"/api/d2/models/node.model",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"node.collection",permalink:"/api/d2/models/node.collection"},next:{title:"column.collection",permalink:"/api/d2/models/table/column.collection"}},s={},i=[{value:"NodeModel : <code>d2/sdk/models/node.model</code>",id:"nodemodel--d2sdkmodelsnodemodel",level:2},{value:"NodeModel \u23cf",id:"nodemodel-",level:3},{value:"new NodeModel(attributes, options)",id:"new-nodemodelattributes-options",level:4}],c={toc:i},u="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"module_NodeModel"}),(0,l.kt)("h2",{id:"nodemodel--d2sdkmodelsnodemodel"},"NodeModel : ",(0,l.kt)("code",null,"d2/sdk/models/node.model")),(0,l.kt)("p",null,"NodeModel. Represents a Documentum object. Holds data attriutes that correspond to equivalent Documentum object properties."),(0,l.kt)("p",null,"Smartview core framework uses a similar interface. See ",(0,l.kt)("a",{parentName:"p",href:"../../nuc/models/node/node.model"},"NodeModel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("a",{parentName:"p",href:"https://backbonejs.org/#Model"},(0,l.kt)("code",null,"Backbone.Model")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"define([\n   'd2/sdk/models/node.model',\n   'd2/sdk/utils/contexts/context.utils',\n   'd2/sdk/utils/contexts/factories/factory'\n], function(NodeModel, contextUtils, ConnectorFactory){\n 'use strict';\n\n //To instantiate a NodeModel and fetch details of a Documentum object with id '090015fa8000441a'\n var context = contextUtils.getPerspectiveContext(),\n   connector = context.getObject(ConnectorFactory);\n\n var node = new NodeModel({id: '090015fa8000441a'}, {connector: connector});\n //connector instance must be passed in the constructor options for all fetchable nodes.\n\n node.fetch().done(function(){\n   console.log('Node name: ' + node.get('name');\n }).fail(function(){\n   console.log('Failed fetching node with id:' + node.get('id'));\n });\n\n\n //NodeModel could also be extended to suit particular Docuemntum type specific usage\n var TaskModel = NodeModel.extend({\n   constructor: function TaskModel(attr, options) {\n     TaskModel.__super__.constructor.call(this, attr, options);\n   },\n\n   parse: function(response, options) {\n     var data = TaskModel.__super__.parse.call(this, response, options);\n\n     //Custom logic to parse task specific attributes\n\n     return data;\n   }\n });\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_NodeModel"},"NodeModel")," : ",(0,l.kt)("code",null,"d2/sdk/models/node.model"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#exp_module_NodeModel--NodeModel"},"NodeModel")," \u23cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new_module_NodeModel--NodeModel_new"},"new NodeModel([attributes], [options])"))))))),(0,l.kt)("a",{name:"exp_module_NodeModel--NodeModel"}),(0,l.kt)("h3",{id:"nodemodel-"},"NodeModel \u23cf"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": Exported class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Mixes"),": ",(0,l.kt)("a",{parentName:"p",href:"./mixins/resource.mixin"},(0,l.kt)("code",null,"ResourceMixin")),", ",(0,l.kt)("a",{parentName:"p",href:"./mixins/commandable.mixin"},(0,l.kt)("code",null,"CommandableMixin")),"  "),(0,l.kt)("a",{name:"new_module_NodeModel--NodeModel_new"}),(0,l.kt)("h4",{id:"new-nodemodelattributes-options"},"new NodeModel(","[attributes]",", ","[options]",")"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"[attributes]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"An object hash containing set of initial attributes for the NodeModel."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"object")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Constructor options. Mixin specific options are supported as-is through constructor options."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options.connector]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Connector")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Mandatory if the NodeModel is to be synced with server."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options.ignoreObjectData]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Boolean")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Whether to fetch additional data like menu actions, favorited status etc. when this node syncs with server. Defaults to ",(0,l.kt)("code",null,"false"),". This flag acts as a master flag for other addtional data specific flags like ",(0,l.kt)("code",null,"fetchAction"),", ",(0,l.kt)("code",null,"fetchFavorites"),", ",(0,l.kt)("code",null,"fetchPreviewFormats"),",",(0,l.kt)("code",null,"fetchRelationsCount")," & ",(0,l.kt)("code",null,"fetchExternalShare"),"."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options.fetchActions]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Boolean")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Whether to fetch menu actions after this node syncs with server. Defaults to ",(0,l.kt)("code",null,"true"),"."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options.fetchFavorites]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Boolean")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Whether to fetch 'favorited' status for this nodes after sync with server. Defaults to ",(0,l.kt)("code",null,"true"),"."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options.fetchPreviewFormats]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Boolean")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Whether to fetch preview formats for the node after it has synced with server. Defautls to ",(0,l.kt)("code",null,"true"),"."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options.fetchRelationsCount]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Boolean")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Whether to fetch relations count for the node after it has synced with server. Defaults to ",(0,l.kt)("code",null,"true"),"."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[options.fetchExternalShare]"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Boolean")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Whether to fetch external share status for the node after it has synced with server. Defaults to ",(0,l.kt)("code",null,"true"),"."))),"  ")))}p.isMDXComponent=!0}}]);