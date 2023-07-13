"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const s={},i="BrowsableV2ResponseMixin",a={unversionedId:"api/nuc/models/browsable/v2.response.mixin",id:"api/nuc/models/browsable/v2.response.mixin",title:"BrowsableV2ResponseMixin",description:"Deserializes the collection state maintained by BrowsableMixin and the",source:"@site/articles/api/nuc/models/browsable/v2.response.mixin.md",sourceDirName:"api/nuc/models/browsable",slug:"/api/nuc/models/browsable/v2.response.mixin",permalink:"/api/nuc/models/browsable/v2.response.mixin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"BrowsableV1ResponseMixin",permalink:"/api/nuc/models/browsable/v1.response.mixin"},next:{title:"AutoFetchableMixin",permalink:"/api/nuc/models/mixins/autofetchable/autofetchable.mixin"}},l={},p=[{value:"Example",id:"example",level:3},{value:"makeBrowsableV2Response(options) : this",id:"makebrowsablev2responseoptions--this",level:2},{value:"parseBrowsedState(response, options) : nothing",id:"parsebrowsedstateresponse-options--nothing",level:2},{value:"parseBrowsedItems(response, options) : array of object literals",id:"parsebrowseditemsresponse-options--array-of-object-literals",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"browsablev2responsemixin"},"BrowsableV2ResponseMixin"),(0,r.kt)("p",null,"Deserializes the collection state maintained by ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowsableMixin")," and the\ncollection of items from the server response according to the V1 of the\nREST API (",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v2/members/favorites"),"), for example).  The ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowsableMixin"),"\nor a mixin including it must be applied with this mixin together."),(0,r.kt)("p",null,"Browsing implementation and response parsing is supposed to be added\nby other mixins, according to the specifics of the server resource."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var MyCollection = Backbone.Collection.extend({\n\n  constructor: function MyCollection(models, options) {\n    Backbone.Collection.prototype.constructor.apply(this, arguments);\n\n    this\n      .makeClientSideBrowsable(options)\n      .makeBrowsableV1Request(options)\n      .makeBrowsableV2Response(options);\n  },\n\n  url: function () {\n    // use `getBrowsableUrlQuery` to format the URL query or its part\n  },\n\n  parse: function (response, options) {\n    // use `parseBrowsedState` to update the browsing properties\n    // according to the server response and return the received part\n    // of the collection by calling `parseBrowsedItems`\n  }\n\n});\n\nClientSideBrowsableMixin.mixin(MyCollection.prototype);\nBrowsableV1RequestMixin.mixin(MyCollection.prototype);\nBrowsableV2ResponseMixin.mixin(MyCollection.prototype);\n")),(0,r.kt)("h2",{id:"makebrowsablev2responseoptions--this"},"makeBrowsableV2Response(options) : this"),(0,r.kt)("p",null,"Must be called in the constructor to initialize the mixin functionality.\nExpects the Backbone.Collection constructor options passed in.  It calls\n",(0,r.kt)("inlineCode",{parentName:"p"},"makeBrowsable")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowsableMixin")," too."),(0,r.kt)("h2",{id:"parsebrowsedstateresponse-options--nothing"},"parseBrowsedState(response, options) : nothing"),(0,r.kt)("p",null,"Updates the browsing state from the server response.  It expects the arguments\npassed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," method, where this method should be called."),(0,r.kt)("h2",{id:"parsebrowseditemsresponse-options--array-of-object-literals"},"parseBrowsedItems(response, options) : array of object literals"),(0,r.kt)("p",null,"Gathers the items from the server response and returns them as an array,\nwhich can be used initialized the collection of models with."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClientSideBrowsableMixin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowsableV1RequestMixin")))}u.isMDXComponent=!0}}]);