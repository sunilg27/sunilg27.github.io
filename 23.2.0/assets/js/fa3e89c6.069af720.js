"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[3906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>x});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,x=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(x,o(o({ref:n},s),{},{components:t})):r.createElement(x,o({ref:n},s))}));function x(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={},o="ExpandableMixin",l={unversionedId:"api/nuc/models/mixins/expandable/expandable.mixin",id:"api/nuc/models/mixins/expandable/expandable.mixin",title:"ExpandableMixin",description:"Provides support for the setting expand URL query parameter as introduced by the",source:"@site/articles/api/nuc/models/mixins/expandable/expandable.mixin.md",sourceDirName:"api/nuc/models/mixins/expandable",slug:"/api/nuc/models/mixins/expandable/expandable.mixin",permalink:"/23.2.0/api/nuc/models/mixins/expandable/expandable.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"DelayedCommandableMixin",permalink:"/23.2.0/api/nuc/models/mixins/delayed.commandable/delayed.commandable.mixin"},next:{title:"FetchableMixin",permalink:"/23.2.0/api/nuc/models/mixins/fetchable/fetchable.mixin"}},p={},d=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",level:3},{value:"How to use the mixin",id:"how-to-use-the-mixin",level:3},{value:"makeExpandable(options) : this",id:"makeexpandableoptions--this",level:2},{value:"expand",id:"expand",level:2},{value:"setExpand(name) : void",id:"setexpandname--void",level:2},{value:"resetExpand(name) : void",id:"resetexpandname--void",level:2},{value:"getExpandableResourcesUrlQuery() : string",id:"getexpandableresourcesurlquery--string",level:2},{value:"See Also",id:"see-also",level:2}],s={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expandablemixin"},"ExpandableMixin"),(0,a.kt)("p",null,"Provides support for the setting ",(0,a.kt)("inlineCode",{parentName:"p"},"expand")," URL query parameter as introduced by the\n",(0,a.kt)("inlineCode",{parentName:"p"},"api/v1/nodes/:id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api/v1/nodes/:id/nodes")," (V1) resources."),(0,a.kt)("p",null,"Server responses can contain references to other resources; typically IDs or URLs.\nThe ",(0,a.kt)("em",{parentName:"p"},"expansion")," means replacing them with object literals containing the resource\ninformation, so that the caller does not have to request every associated resource\nby an additional server call."),(0,a.kt)("p",null,"Expandable resource types:"),(0,a.kt)("p",null,"node\n: nodes and volumes (",(0,a.kt)("inlineCode",{parentName:"p"},"original_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"parent_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"volume_id")," etc.)"),(0,a.kt)("p",null,"user\n: users or user groups (",(0,a.kt)("inlineCode",{parentName:"p"},"create_user_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"modify_user_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"owner_user_id")," etc.)"),(0,a.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeExpandable(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource'),\n        query = Url.combineQueryString(\n          this.getExpandableResourcesUrlQuery()\n        );\n    return query ? url + '?' + query : url;\n  }\n  \n});\n\nConnectableMixin.mixin(MyModel.prototype);\nExpandableMixin.mixin(MyModel.prototype);\n")),(0,a.kt)("p",null,"This mixin us usually combined together with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,a.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,a.kt)("p",null,"Set up the URL parameters by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"setExpand")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resetExpand")," and fetch the model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Set the expansion when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      expand: ['node', 'user']\n    });\nmodel.fetch();\n\n// Set the expansion after creating the model\nmodel.setExpand(['node', 'user']);\nmodel.fetch();\n")),(0,a.kt)("h2",{id:"makeexpandableoptions--this"},"makeExpandable(options) : this"),(0,a.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,a.kt)("p",null,"Recognized option properties:"),(0,a.kt)("p",null,"expand\n: One or more resource types expanded.  The value is handled the same way as the\n",(0,a.kt)("inlineCode",{parentName:"p"},"setExpand")," method does it.  An empty array is the default."),(0,a.kt)("h2",{id:"expand"},"expand"),(0,a.kt)("p",null,"Resource types to get expanded in the response (array of strings, empty by default,\nread-only)."),(0,a.kt)("h2",{id:"setexpandname--void"},"setExpand(name) : void"),(0,a.kt)("p",null,"Makes one or more resource types expanded.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," parameter can be either\nstring, or an array of strings.  The string can contain a comma-delimited list,\nin which case it will be split to an array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Have two resource types expanded, option 1\nmodel.setExpand(['node', 'user']);\n// Have two resource types expanded, option 2\nmodel.setExpand('node');\nmodel.setExpand('user');\n// Have two resource types expanded, option 3\nmodel.setExpand('node,user');\n")),(0,a.kt)("h2",{id:"resetexpandname--void"},"resetExpand(name) : void"),(0,a.kt)("p",null,"Prevents one or more resource types from being expanded.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," parameter can be either\nstring, or an array of strings, or nothing.  The string can contain a comma-delimited list,\nin which case it will be split to an array.  If nothing is specified, all expansions will\nbe removed (disabled)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Cancel all expansions and fetch the fresh data\nmodel.resetExpand();\nmodel.fetch();\n")),(0,a.kt)("h2",{id:"getexpandableresourcesurlquery--string"},"getExpandableResourcesUrlQuery() : string"),(0,a.kt)("p",null,"Formats the URL query parameters for the resource expansion.  They can be concatenated\nwith other URL query parts (both object literals and strings) by ",(0,a.kt)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var url = ...,\n    query = Url.combineQueryString(\n      ...,\n      this.getExpandableResourcesUrlQuery()\n    );\nif (query) {\n  url = Url.appendQuery(url, query);\n}\n")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceMixin")))}u.isMDXComponent=!0}}]);