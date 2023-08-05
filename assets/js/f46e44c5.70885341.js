"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2792],{3905:(t,e,l)=>{l.d(e,{Zo:()=>k,kt:()=>m});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},k=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),d=s(l),c=r,m=d["".concat(u,".").concat(c)]||d[c]||p[c]||o;return l?n.createElement(m,a(a({ref:e},k),{},{components:l})):n.createElement(m,a({ref:e},k))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,a=new Array(o);a[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:r,a[1]=i;for(var s=2;s<o;s++)a[s]=l[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},6964:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=l(7462),r=(l(7294),l(3905));const o={},a=void 0,i={unversionedId:"api/d2/utils/utils",id:"api/d2/utils/utils",title:"utils",description:"Utils : d2/sdk/utils/utils",source:"@site/articles/api/d2/utils/utils.md",sourceDirName:"api/d2/utils",slug:"/api/d2/utils/",permalink:"/api/d2/utils/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"column.preference",permalink:"/api/d2/models/table/column.preference"},next:{title:"commandhelper",permalink:"/api/d2/utils/commandhelper"}},u={},s=[{value:"Utils : <code>d2/sdk/utils/utils</code>",id:"utils--d2sdkutilsutils",level:2},{value:"Utils.getAppContext() \u21d2 <code>string</code>",id:"utilsgetappcontext--string",level:3},{value:"Utils.getStoreKey(key) \u21d2 <code>string</code>",id:"utilsgetstorekeykey--string",level:3},{value:"Utils.getLocalStore(key) \u21d2 <code>NamedStorage</code>",id:"utilsgetlocalstorekey--namedstorage",level:3},{value:"Utils.getSessionStore(key) \u21d2 <code>NamedStorage</code>",id:"utilsgetsessionstorekey--namedstorage",level:3},{value:"Utils.isMobile() \u21d2 <code>boolean</code>",id:"utilsismobile--boolean",level:3},{value:"Utils.isAppworks() \u21d2 <code>boolean</code>",id:"utilsisappworks--boolean",level:3},{value:"Utils.openUrlInWindow(url, wnd, focus, keepLink) \u21d2 <code>void</code>",id:"utilsopenurlinwindowurl-wnd-focus-keeplink--void",level:3},{value:"Utils.makeBatchAjaxCall(options) \u21d2 <code>jQuery.Promise</code>",id:"utilsmakebatchajaxcalloptions--jquerypromise",level:3},{value:"Utils.buildLinkUrl(link, isTemplate) \u21d2 <code>string</code>",id:"utilsbuildlinkurllink-istemplate--string",level:3},{value:"Utils.parseAjaxError(xhr, textStatus, errorThrown, includeDetails) \u21d2 <code>ParsedErrorType</code>",id:"utilsparseajaxerrorxhr-textstatus-errorthrown-includedetails--parsederrortype",level:3},{value:"Utils.parseAjaxErrorAsString(xhr, textStatus, errorThrown, includeDetails) \u21d2 <code>string</code>",id:"utilsparseajaxerrorasstringxhr-textstatus-errorthrown-includedetails--string",level:3},{value:"Utils.parseError(responseType, responseData) \u21d2 <code>ParsedErrorType</code>",id:"utilsparseerrorresponsetype-responsedata--parsederrortype",level:3},{value:"Utils.parseErrorAsString(responseType, responseData) \u21d2 <code>string</code>",id:"utilsparseerrorasstringresponsetype-responsedata--string",level:3},{value:"Utils.copyToClipboard(clipboardText) \u21d2 <code>boolean</code>",id:"utilscopytoclipboardclipboardtext--boolean",level:3},{value:"Utils.isJqueryPromise(value) \u21d2 <code>boolean</code>",id:"utilsisjquerypromisevalue--boolean",level:3},{value:"Utils.isNonEmptyString(str) \u21d2 <code>boolean</code>",id:"utilsisnonemptystringstr--boolean",level:3},{value:"Utils.areSameFunctions(fn1, fn2) \u21d2 <code>boolean</code>",id:"utilsaresamefunctionsfn1-fn2--boolean",level:3}],k={toc:s},d="wrapper";function p(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_Utils"}),(0,r.kt)("h2",{id:"utils--d2sdkutilsutils"},"Utils : ",(0,r.kt)("code",null,"d2/sdk/utils/utils")),(0,r.kt)("p",null,"Utility functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("code",null,"Object"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils"},"Utils")," : ",(0,r.kt)("code",null,"d2/sdk/utils/utils"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.getAppContext"},".getAppContext()")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.getStoreKey"},".getStoreKey(key)")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.getLocalStore"},".getLocalStore(key)")," \u21d2 ",(0,r.kt)("code",null,"NamedStorage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.getSessionStore"},".getSessionStore(key)")," \u21d2 ",(0,r.kt)("code",null,"NamedStorage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.isMobile"},".isMobile()")," \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.isAppworks"},".isAppworks()")," \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.openUrlInWindow"},".openUrlInWindow(url, [wnd], [focus], [keepLink])")," \u21d2 ",(0,r.kt)("code",null,"void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.makeBatchAjaxCall"},".makeBatchAjaxCall(options)")," \u21d2 ",(0,r.kt)("code",null,"jQuery.Promise")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.buildLinkUrl"},".buildLinkUrl(link, isTemplate)")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.parseAjaxError"},".parseAjaxError(xhr, [textStatus], [errorThrown], [includeDetails])")," \u21d2 ",(0,r.kt)("code",null,"ParsedErrorType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.parseAjaxErrorAsString"},".parseAjaxErrorAsString(xhr, [textStatus], [errorThrown], [includeDetails])")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.parseError"},".parseError(responseType, responseData)")," \u21d2 ",(0,r.kt)("code",null,"ParsedErrorType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.parseErrorAsString"},".parseErrorAsString(responseType, responseData)")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.copyToClipboard"},".copyToClipboard(clipboardText)")," \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.isJqueryPromise"},".isJqueryPromise(value)")," \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.isNonEmptyString"},".isNonEmptyString(str)")," \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Utils.areSameFunctions"},".areSameFunctions(fn1, fn2)")," \u21d2 ",(0,r.kt)("code",null,"boolean"))))),(0,r.kt)("a",{name:"module_Utils.getAppContext"}),(0,r.kt)("h3",{id:"utilsgetappcontext--string"},"Utils.getAppContext() \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Get context path name of D2 Smart View deployment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - the context path name  "),(0,r.kt)("a",{name:"module_Utils.getStoreKey"}),(0,r.kt)("h3",{id:"utilsgetstorekeykey--string"},"Utils.getStoreKey(key) \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Get a properly namespaced storage name for the given key. Used while creating a boundary within ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionStorage"),".\nSee ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocalStore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSessionStore")," below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - namespaced key name  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"key"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"original key name"))),"  ")),(0,r.kt)("a",{name:"module_Utils.getLocalStore"}),(0,r.kt)("h3",{id:"utilsgetlocalstorekey--namedstorage"},"Utils.getLocalStore(key) \u21d2 ",(0,r.kt)("code",null,"NamedStorage")),(0,r.kt)("p",null,"Get a local storage area identified by the given key. A new storage area gets created if doesn't exist already."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"NamedStorage")," - local store instance  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"key"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Storage identifier"))),"  ")),(0,r.kt)("a",{name:"module_Utils.getSessionStore"}),(0,r.kt)("h3",{id:"utilsgetsessionstorekey--namedstorage"},"Utils.getSessionStore(key) \u21d2 ",(0,r.kt)("code",null,"NamedStorage")),(0,r.kt)("p",null,"Get a session storage area identified by the given key. A new storage area gets created if doesn't exist already."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"NamedStorage")," - session store instance  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"key"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Storage identifier"))),"  ")),(0,r.kt)("a",{name:"module_Utils.isMobile"}),(0,r.kt)("h3",{id:"utilsismobile--boolean"},"Utils.isMobile() \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Detects whether the D2 Smart View runtime platform is a mobile"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if it's being run on mobile, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise.  "),(0,r.kt)("a",{name:"module_Utils.isAppworks"}),(0,r.kt)("h3",{id:"utilsisappworks--boolean"},"Utils.isAppworks() \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Detects whether the D2 Smart View runtime platform is appworks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if it's Appworks.  "),(0,r.kt)("a",{name:"module_Utils.openUrlInWindow"}),(0,r.kt)("h3",{id:"utilsopenurlinwindowurl-wnd-focus-keeplink--void"},"Utils.openUrlInWindow(url, ","[wnd]",", ","[focus]",", ","[keepLink]",") \u21d2 ",(0,r.kt)("code",null,"void")),(0,r.kt)("p",null,"Open the given URL in window."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"url"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"The URL to open"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[wnd]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Window")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"The window where ",(0,r.kt)("code",null,"url")," will be opened. Defaults to current global ",(0,r.kt)("code",null,"window")," object."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[focus]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Whether to focus the window"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[keepLink]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Whether to keep the ",(0,r.kt)("code",null,"opener")," reference. ",(0,r.kt)("code",null,"true")," keeps it."))),"  ")),(0,r.kt)("a",{name:"module_Utils.makeBatchAjaxCall"}),(0,r.kt)("h3",{id:"utilsmakebatchajaxcalloptions--jquerypromise"},"Utils.makeBatchAjaxCall(options) \u21d2 ",(0,r.kt)("code",null,"jQuery.Promise")),(0,r.kt)("p",null,"Make a single D2-REST AJAX call with a batch of operations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"jQuery.Promise")," - The returned promise fails on AJAX error. It resolves otherwise invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchDoneCallback")," as documented below.  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"options"),(0,r.kt)("td",null,(0,r.kt)("code",null,"object")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"Holder of different options"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"options.connector"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Connector")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"Transport for the AJAX call. See ",(0,r.kt)("a",{href:"./contexts/factories/connector"},"Connector"),"."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"options.operations"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Array.<BatchOperationRequest>")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"Operations to be perfomred in this batch."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.transactional]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Whether this batch is to be executed as a transaction. A transactional batch operates with 'Either all or none' paradigm."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.sequential]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,(0,r.kt)("p",null,"For a non-transactional batch, whether the operations are to be run sequentially or parrallely."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.continueOnError]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Whether remaining operations are to be run if one fails."))),"  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"define([\n   'd2/sdk/utils/contexts/context.utils',\n   'd2/sdk/utils/utils',\n   'd2/sdk/utils/contexts/factories/connector'\n], function(contextUtil, util, ConnectorFactory){\n   'use strict';\n\n   // Retrieve document menu actions and favorited status for object '0c0015fa8000291e' in a single batch call\n   util.makeBatchAjaxCall({\n     connector: contextUtil.getPerspectiveContext().getObject(ConnectorFactory),\n     continueOnError: true,\n     operations: [\n       {\n         id: 'favorites',\n         request: {\n           method: 'GET',\n           uri: '/repositories/d2repo/favorites-checker?object-ids=0c0015fa8000291e'\n         }\n       },\n       {\n         id: 'actions',\n         request: {\n           method: 'GET',\n           uri: '/repositories/d2repo/actions?type=MenuContext&widgetType=DoclistWidget&include-subtype=true&object-ids=0c0015fa8000291e'\n         }\n       }\n     ]\n   })\n     .done(function(){\n       console.log('batch call success');\n     })\n     .fail(function(){\n       console.log('batch call failed');\n     });\n});\n")),(0,r.kt)("a",{name:"module_Utils.buildLinkUrl"}),(0,r.kt)("h3",{id:"utilsbuildlinkurllink-istemplate--string"},"Utils.buildLinkUrl(link, isTemplate) \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Build complete URL from a D2-REST link"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - the complete URL.  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"link"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Object")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The link as is from a D2-REST response"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"isTemplate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Is this D2-REST link a templated one or regular."))),"  ")),(0,r.kt)("a",{name:"module_Utils.parseAjaxError"}),(0,r.kt)("h3",{id:"utilsparseajaxerrorxhr-textstatus-errorthrown-includedetails--parsederrortype"},"Utils.parseAjaxError(xhr, ","[textStatus]",", ","[errorThrown]",", ","[includeDetails]",") \u21d2 ",(0,r.kt)("code",null,"ParsedErrorType")),(0,r.kt)("p",null,"Parse AJAX error happened as a result of D2-REST API call and return a normalized error structure."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"ParsedErrorType")," - the parsed error  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"xhr"),(0,r.kt)("td",null,(0,r.kt)("code",null,"external:XMLHttpRequest")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"The XHR transport"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[textStatus]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"Textual status associated with the error"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[errorThrown]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"Custom error message in case the XHR response could not be parsed."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[includeDetails]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Whether to include a ",(0,r.kt)("code",null,"errorDetails")," field in the prased error structure."))),"  ")),(0,r.kt)("a",{name:"module_Utils.parseAjaxErrorAsString"}),(0,r.kt)("h3",{id:"utilsparseajaxerrorasstringxhr-textstatus-errorthrown-includedetails--string"},"Utils.parseAjaxErrorAsString(xhr, ","[textStatus]",", ","[errorThrown]",", ","[includeDetails]",") \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Parse AJAX error happened as a result of D2-REST API call and return a compact string representing it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - the parsed error  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"xhr"),(0,r.kt)("td",null,(0,r.kt)("code",null,"external:XMLHttpRequest")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"The XHR transport"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[textStatus]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"Textual status associated with the error"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[errorThrown]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null),(0,r.kt)("td",null,(0,r.kt)("p",null,"Custom error message in case the XHR response could not be parsed."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[includeDetails]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Whether to include a ",(0,r.kt)("code",null,"errorDetails")," field in the prased error structure."))),"  ")),(0,r.kt)("a",{name:"module_Utils.parseError"}),(0,r.kt)("h3",{id:"utilsparseerrorresponsetype-responsedata--parsederrortype"},"Utils.parseError(responseType, responseData) \u21d2 ",(0,r.kt)("code",null,"ParsedErrorType")),(0,r.kt)("p",null,"Extract error from custom object and format it similar to return format of ",(0,r.kt)("inlineCode",{parentName:"p"},"parseAjaxError"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"ParsedErrorType")," - the parsed error  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"responseType"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Hint of how to parse ",(0,r.kt)("code",null,"responseData"),". Can be any of 'xml', 'json' or 'object'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"responseData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"JSON")," | ",(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"If ",(0,r.kt)("code",null,"responseType")," is 'object' then a JSON object, otherwise a string serilized error structure. Irrespective of its type, every input is expected to have a ",(0,r.kt)("code",null,"code"),", ",(0,r.kt)("code",null,"message")," and ",(0,r.kt)("code",null,"details")," field in it."))),"  ")),(0,r.kt)("a",{name:"module_Utils.parseErrorAsString"}),(0,r.kt)("h3",{id:"utilsparseerrorasstringresponsetype-responsedata--string"},"Utils.parseErrorAsString(responseType, responseData) \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Extract error from custom object and return a compact string representing it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - the parsed error  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"responseType"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Hint of how to parse ",(0,r.kt)("code",null,"responseData"),". Can be any of 'xml', 'json' or 'object'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"responseData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"JSON")," | ",(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"If ",(0,r.kt)("code",null,"responseType")," is 'object' then a JSON object, otherwise a string serilized error structure. Irrespective of its type, every input is expected to have a ",(0,r.kt)("code",null,"code"),", ",(0,r.kt)("code",null,"message")," and ",(0,r.kt)("code",null,"details")," field in it."))),"  ")),(0,r.kt)("a",{name:"module_Utils.copyToClipboard"}),(0,r.kt)("h3",{id:"utilscopytoclipboardclipboardtext--boolean"},"Utils.copyToClipboard(clipboardText) \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Set some text content to the browser clipboard"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," indicates the copy is successful.  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"clipboardText"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The content to be copied."))),"  ")),(0,r.kt)("a",{name:"module_Utils.isJqueryPromise"}),(0,r.kt)("h3",{id:"utilsisjquerypromisevalue--boolean"},"Utils.isJqueryPromise(value) \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Checks whether a given value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"jQuery.Promise")," instance or not"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if it's a ",(0,r.kt)("inlineCode",{parentName:"p"},"jQuery.Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise.  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"*")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The test value"))),"  ")),(0,r.kt)("a",{name:"module_Utils.isNonEmptyString"}),(0,r.kt)("h3",{id:"utilsisnonemptystringstr--boolean"},"Utils.isNonEmptyString(str) \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Checks whether a given value is a non-empty ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if it's a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"str"),(0,r.kt)("td",null,(0,r.kt)("code",null,"*")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The test value"))),"  ")),(0,r.kt)("a",{name:"module_Utils.areSameFunctions"}),(0,r.kt)("h3",{id:"utilsaresamefunctionsfn1-fn2--boolean"},"Utils.areSameFunctions(fn1, fn2) \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Compare two functions for equality"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Utils"},(0,r.kt)("code",null,"Utils")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," only if Left hand side is equal to right hand side.  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"fn1"),(0,r.kt)("td",null,(0,r.kt)("code",null,"function")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Left hand side"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fn2"),(0,r.kt)("td",null,(0,r.kt)("code",null,"function")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Right hand side"))),"  ")))}p.isMDXComponent=!0}}]);