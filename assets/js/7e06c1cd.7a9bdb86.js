"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[9053],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),d=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(a,".").concat(m)]||p[m]||c[m]||l;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=p;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1631:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var n=t(7462),o=(t(7294),t(3905));const l={},i=void 0,s={unversionedId:"api/d2/integration/folder.browser.id.rules",id:"api/d2/integration/folder.browser.id.rules",isDocsHomePage:!1,title:"folder.browser.id.rules",description:"FolderBrowserIDRules : d2/sdk/integration/folder.browser.id.rules",source:"@site/articles/api/d2/integration/folder.browser.id.rules.md",sourceDirName:"api/d2/integration",slug:"/api/d2/integration/folder.browser.id.rules",permalink:"/api/d2/integration/folder.browser.id.rules",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"tree.view",permalink:"/api/d2/controls/tree/tree.view"},next:{title:"browsable.collection.mixin",permalink:"/api/d2/models/mixins/browsable.collection.mixin"}},a=[{value:"FolderBrowserIDRules : <code>d2/sdk/integration/folder.browser.id.rules</code>",id:"folderbrowseridrules--d2sdkintegrationfolderbrowseridrules",children:[{value:"FolderBrowserIDRules~IDRuleFetcher \u21d2 <code>jQuery.Promise</code>",id:"folderbrowseridrulesidrulefetcher--jquerypromise",children:[]}]}],d={toc:a};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_FolderBrowserIDRules"}),(0,o.kt)("h2",{id:"folderbrowseridrules--d2sdkintegrationfolderbrowseridrules"},"FolderBrowserIDRules : ",(0,o.kt)("code",null,"d2/sdk/integration/folder.browser.id.rules")),(0,o.kt)("p",null,"A rule collection that defines how to parse id attribute for the FolderBrowser widget in D2SV embedded mode."),(0,o.kt)("p",null,"This collection allows extension registrations and each of those extensions are treated as root object's id provider\nfor the FolderBrowser widget."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends"),": ",(0,o.kt)("code",null,"Array"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Note"),": Each rule is supposed to define a ",(0,o.kt)("inlineCode",{parentName:"p"},"fetcher")," callback function that should return a ",(0,o.kt)("inlineCode",{parentName:"p"},"jquery.Promise")," object. See ",(0,o.kt)("inlineCode",{parentName:"p"},"IDRuleFetcher")," below.\nThe returned promise should be resolved with a Documentum ID which will be used as the root container for FolderBrowser. Or, alternatively\nthe returned promise could be rejected to inidate an error.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"See"),": ",(0,o.kt)("a",{parentName:"p",href:"../../nuc/models/mixins/rules.matching/rules.matching.mixin"},"RulesMatchingMixin")," for a complete guide on how to write rules.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(To register a new type of id provider)"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//in src/extensions/embed/folder.browser.id.rules.js\ndefine([\n 'nuc/lib/jquery'\n], function($){\n 'use strict';\n\n return [{\n   equals: {\n     id_source: 'abcd' //Match this rule when id_source=abcd is present as part of query parameters while accessing FolderBrowser widget using iURL\n   },\n   fetcher: function(options) {\n     var dfd = $.Deferred();\n\n     var nodeId = options.params.my_id;\n     if(!!nodeId) {\n       dfd.resolve(nodeId);\n       //This example shows a very trivial case where 'my_id' parameter itself holds the Documentum ID.\n       //However, depending on requirement complex business integration logic could also be written here to\n       //retrieve the Documentum ID from an external system\n     } else {\n       dfd.reject('my_id is missing from url');\n     }\n\n     return dfd.promise();\n   }\n }];\n});\n")),(0,o.kt)("a",{name:"module_FolderBrowserIDRules..IDRuleFetcher"}),(0,o.kt)("h3",{id:"folderbrowseridrulesidrulefetcher--jquerypromise"},"FolderBrowserIDRules~IDRuleFetcher \u21d2 ",(0,o.kt)("code",null,"jQuery.Promise")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,o.kt)("a",{parentName:"p",href:"#module_FolderBrowserIDRules"},(0,o.kt)("code",null,"FolderBrowserIDRules")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"jQuery.Promise")," - The promise should be either resolved with a Documentum ID(r_object_id) or rejected with an error string.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Properties")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"options"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Object")),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,"options.params"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Object")),(0,o.kt)("td",null,(0,o.kt)("p",null,"JSON object representing query params."))),"  ")))}u.isMDXComponent=!0}}]);