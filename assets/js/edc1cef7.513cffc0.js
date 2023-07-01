"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4411],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3780:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o="ExpandableV2Mixin",l={unversionedId:"api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",id:"api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",isDocsHomePage:!1,title:"ExpandableV2Mixin",description:"Provides support for the setting expand URL query parameter as introduced by the",source:"@site/articles/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin.md",sourceDirName:"api/nuc/models/mixins/v2.expandable",slug:"/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",permalink:"/api/nuc/models/mixins/v2.expandable/v2.expandable.mixin",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"DelayedCommandableV2Mixin",permalink:"/api/nuc/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin"},next:{title:"FieldsV2Mixin",permalink:"/api/nuc/models/mixins/v2.fields/v2.fields.mixin"}},p=[{value:"How to apply the mixin to a model",id:"how-to-apply-the-mixin-to-a-model",children:[]},{value:"How to use the mixin",id:"how-to-use-the-mixin",children:[]},{value:"makeExpandableV2(options) : this",id:"makeexpandablev2options--this",children:[]},{value:"expand",id:"expand",children:[]},{value:"hasExpand(role) : boolean",id:"hasexpandrole--boolean",children:[]},{value:"setExpand(role, names) : void",id:"setexpandrole-names--void",children:[]},{value:"resetExpand(role, names) : void",id:"resetexpandrole-names--void",children:[]},{value:"getExpandableResourcesUrlQuery() : string",id:"getexpandableresourcesurlquery--string",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expandablev2mixin"},"ExpandableV2Mixin"),(0,a.kt)("p",null,"Provides support for the setting ",(0,a.kt)("inlineCode",{parentName:"p"},"expand")," URL query parameter as introduced by the\n",(0,a.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api/v2/nodes/:id/nodes")," (V2) resources."),(0,a.kt)("p",null,"Server responses can contain references to other resources; typically IDs or URLs.\nThe ",(0,a.kt)("em",{parentName:"p"},"expansion")," means replacing them with object literals containing the resource\ninformation, so that the caller does not have to request every associated resource\nby an additional server call."),(0,a.kt)("p",null,"Expanding needs the role to expand from (",(0,a.kt)("inlineCode",{parentName:"p"},"properties"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"versions")," etc.)\nand optionally the name or names of properties to expand (",(0,a.kt)("inlineCode",{parentName:"p"},"parent_id"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"create_user_id")," etc.)."),(0,a.kt)("h3",{id:"how-to-apply-the-mixin-to-a-model"},"How to apply the mixin to a model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var MyModel = Backbone.Model.extend({\n\n  constructor: function MyModel(attributes, options) {\n    Backbone.Model.prototype.constructor.apply(this, arguments);\n    this\n      .makeConnectable(options)\n      .makeExpandableV2(options);\n  },\n\n  url: function () {\n    var url = Url.combine(this.connector.connection.url, 'myresource'),\n        query = Url.combineQueryString(\n          this.getExpandableResourcesUrlQuery()\n        );\n    return query ? url + '?' + query : url;\n  }\n  \n});\n\nConnectableMixin.mixin(MyModel.prototype);\nExpandableV2Mixin.mixin(MyModel.prototype);\n")),(0,a.kt)("p",null,"This mixin us usually combined together with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),"\nor with another cumulated mixin which includes it."),(0,a.kt)("h3",{id:"how-to-use-the-mixin"},"How to use the mixin"),(0,a.kt)("p",null,"Set up the URL parameters by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"setExpand")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resetExpand")," and fetch the model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Set the expansion when creating the model\nvar model = new MyModel(undefined, {\n      connector: connector,\n      expand: {\n        properties: ['parent_id', 'create_user_id']\n      }\n    });\nmodel.fetch();\n\n// Set the expansion after creating the model\nmodel.setExpand('properties', ['parent_id', 'create_user_id']);\nmodel.fetch();\n")),(0,a.kt)("h2",{id:"makeexpandablev2options--this"},"makeExpandableV2(options) : this"),(0,a.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Model or Backbone.Collection constructor options passed in."),(0,a.kt)("p",null,"Recognized option properties:"),(0,a.kt)("p",null,"expand\n: One or more resources to expand.  Keys and values from the object literal\nare handled the same way as the ",(0,a.kt)("inlineCode",{parentName:"p"},"setExpand")," method does the key and value\n(role and properties).  An empty object literal is the default."),(0,a.kt)("h2",{id:"expand"},"expand"),(0,a.kt)("p",null,"Resources to get expanded in the response (object literal of strings pointing\nto arrays of strings, empty by default, read-only)."),(0,a.kt)("h2",{id:"hasexpandrole--boolean"},"hasExpand(role) : boolean"),(0,a.kt)("p",null,"Checks if a specific or any resource will be expanded.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"role")," parameter\nis a string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Checks if any resource is expanded\nvar anythingExpanded = model.hasExpand();\n// Checks if any common properties are expancded\nvar propertiesExpanded = model.hasExpand('properties');\n")),(0,a.kt)("h2",{id:"setexpandrole-names--void"},"setExpand(role, names) : void"),(0,a.kt)("p",null,"Makes one or more resources expanded.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"role")," parameter is a string.  The\n",(0,a.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of strings.  The string can\ncontain a comma-delimited list, in which case it will be split to an array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Have two resources expanded, option 1\nmodel.setExpand('properties', ['parent_id', 'create_user_id']);\n// Have two resources expanded, option 2\nmodel.setExpand('properties', 'parent_id');\nmodel.setExpand('properties', 'create_user_id');\n// Have two resource types expanded, option 3\nmodel.setExpand('properties', 'parent_id,create_user_id');\n")),(0,a.kt)("h2",{id:"resetexpandrole-names--void"},"resetExpand(role, names) : void"),(0,a.kt)("p",null,"Prevents one or more resources from being expanded.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"role")," parameter is a\nstring.  If nothing is specified, all roles will be removed (disabled).  The\n",(0,a.kt)("inlineCode",{parentName:"p"},"names")," parameter can be either string, or an array of strings.  The string can\ncontain a comma-delimited list, in which case it will be split to an array.  If\nnothing is specified, all properties from the role  will be removed (disabled)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Cancel all expansions and fetch the fresh data\nmodel.resetExpand();\nmodel.fetch();\n")),(0,a.kt)("h2",{id:"getexpandableresourcesurlquery--string"},"getExpandableResourcesUrlQuery() : string"),(0,a.kt)("p",null,"Formats the URL query parameters for the resource expansion.  They can be concatenated\nwith other URL query parts (both object literals and strings) by ",(0,a.kt)("inlineCode",{parentName:"p"},"Url.combineQueryString"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var url = ...,\n    query = Url.combineQueryString(\n      ...,\n      this.getExpandableResourcesUrlQuery()\n    );\nif (query) {\n  url = Url.appendQuery(url, query);\n}\n")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConnectableMixin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceMixin")))}d.isMDXComponent=!0}}]);