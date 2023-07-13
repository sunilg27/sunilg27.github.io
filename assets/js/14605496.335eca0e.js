"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[6338],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>m});var i=l(7294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,i)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function r(t,e){if(null==t)return{};var l,i,n=function(t,e){if(null==t)return{};var l,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)l=o[i],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)l=o[i],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var s=i.createContext({}),d=function(t){var e=i.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},u=function(t){var e=d(t.components);return i.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},k=i.forwardRef((function(t,e){var l=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),p=d(l),k=n,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||o;return l?i.createElement(m,a(a({ref:e},u),{},{components:l})):i.createElement(m,a({ref:e},u))}));function m(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=l.length,a=new Array(o);a[0]=k;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[p]="string"==typeof t?t:n,a[1]=r;for(var d=2;d<o;d++)a[d]=l[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}k.displayName="MDXCreateElement"},9449:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=l(7462),n=(l(7294),l(3905));const o={},a=void 0,r={unversionedId:"api/d2/widgets/list.tile/list.tile.view",id:"api/d2/widgets/list.tile/list.tile.view",title:"list.tile.view",description:"ListTileView : d2/sdk/widget/list.tile/list.tile.view",source:"@site/articles/api/d2/widgets/list.tile/list.tile.view.md",sourceDirName:"api/d2/widgets/list.tile",slug:"/api/d2/widgets/list.tile/list.tile.view",permalink:"/api/d2/widgets/list.tile/list.tile.view",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"widget.constants",permalink:"/api/d2/utils/widget.constants"},next:{title:"nodestable.view",permalink:"/api/d2/widgets/nodestable/nodestable.view"}},s={},d=[{value:"ListTileView : <code>d2/sdk/widget/list.tile/list.tile.view</code>",id:"listtileview--d2sdkwidgetlisttilelisttileview",level:2},{value:"listTileView.getFactoryParam() \u21d2 <code>string</code>",id:"listtileviewgetfactoryparam--string",level:3},{value:"listTileView.onClickItem(target) \u21d2 <code>void</code>",id:"listtileviewonclickitemtarget--void",level:3},{value:"listTileView.onClickHeader() \u21d2 <code>void</code>",id:"listtileviewonclickheader--void",level:3},{value:"ListTileView.extend(protoProperties, staticProperties) \u21d2 <code>function</code>",id:"listtileviewextendprotoproperties-staticproperties--function",level:3},{value:"ListTileView~ListTileView",id:"listtileviewlisttileview",level:3},{value:"new ListTileView(options)",id:"new-listtileviewoptions",level:4},{value:"ListTileView~ListTileData : <code>Object</code>",id:"listtileviewlisttiledata--object",level:3}],u={toc:d},p="wrapper";function c(t){let{components:e,...l}=t;return(0,n.kt)(p,(0,i.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_ListTileView"}),(0,n.kt)("h2",{id:"listtileview--d2sdkwidgetlisttilelisttileview"},"ListTileView : ",(0,n.kt)("code",null,"d2/sdk/widget/list.tile/list.tile.view")),(0,n.kt)("p",null,"Base class for all list type of tiles in D2 Smart View landing perspective."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends"),": ",(0,n.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.collectionview.html"},(0,n.kt)("code",null,"Marionette.CollectionView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(A minimum sample list derivative may look like)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"//In mybundle/widgets/my.tile/my.tile.view.js\ndefine([\n 'd2/sdk/widgets/list.tile/list.tile.view',\n 'mybundle/utils/contexts/factories/sample.tile.collection.factory'\n], function(ListTileView, SampleTileCollectionFactory){\n   'use strict';\n\n   var SampleListTileView = ListTileView.extend({\n     constructor: function SampleListTileView(options) {\n       options = options || {};\n       options.collectionFactory = SampleTileCollectionFactory;\n\n       SampleListTileView.__super__.constructor.call(this, options);\n     }\n   });\n\n   return SampleListTileView;\n});\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(To link this definition to the list of tiles looked up at landing page resolution time)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"//in mybundle/extensions/landing.tiles.js\ndefine([], function(){\n 'use strict';\n\n return [{\n   ...\n   tileView: 'mybundle/widgets/my.tile/my.tile.view',\n   ...\n }];\n});\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Then finally the extension is registered in extension.json as)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "d2/sdk/utils/landingpage/tiles": {\n     "extensions": {\n        "mybundle": {\n           "mybundle/extensions/landing.tiles"\n        }\n     }\n   }\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_ListTileView"},"ListTileView")," : ",(0,n.kt)("code",null,"d2/sdk/widget/list.tile/list.tile.view"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"instance"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_ListTileView+getFactoryParam"},".getFactoryParam()")," \u21d2 ",(0,n.kt)("code",null,"string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_ListTileView+onClickItem"},".onClickItem(target)")," \u21d2 ",(0,n.kt)("code",null,"void")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_ListTileView+onClickHeader"},".onClickHeader()")," \u21d2 ",(0,n.kt)("code",null,"void")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"static"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_ListTileView.extend"},".extend(protoProperties, staticProperties)")," \u21d2 ",(0,n.kt)("code",null,"function")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"inner"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_ListTileView..ListTileView"},"~ListTileView"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_ListTileView..ListTileView_new"},"new ListTileView(options)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_ListTileView..ListTileData"},"~ListTileData")," : ",(0,n.kt)("code",null,"Object"))))))),(0,n.kt)("a",{name:"module_ListTileView+getFactoryParam"}),(0,n.kt)("h3",{id:"listtileviewgetfactoryparam--string"},"listTileView.getFactoryParam() \u21d2 ",(0,n.kt)("code",null,"string")),(0,n.kt)("p",null,"Get the name of factory param if this list view is backed by a collection factory.\nFor easy coupling factory param should be given a name same as the ",(0,n.kt)("inlineCode",{parentName:"p"},"propertyPrefix")," of the backing collection facatory."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.kt)("code",null,"ListTileView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"string")," - Should return the factory param name.  "),(0,n.kt)("a",{name:"module_ListTileView+onClickItem"}),(0,n.kt)("h3",{id:"listtileviewonclickitemtarget--void"},"listTileView.onClickItem(target) \u21d2 ",(0,n.kt)("code",null,"void")),(0,n.kt)("p",null,"Handles what happens when a list item is clicked or equivalne user interaction happens.\nThe default implementation executes default action associated with the list item."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.kt)("code",null,"ListTileView")),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"target"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Marionette.View")),(0,n.kt)("td",null,(0,n.kt)("p",null,"View instance associated with the item being clicked."))),"  ")),(0,n.kt)("a",{name:"module_ListTileView+onClickHeader"}),(0,n.kt)("h3",{id:"listtileviewonclickheader--void"},"listTileView.onClickHeader() \u21d2 ",(0,n.kt)("code",null,"void")),(0,n.kt)("p",null,"Handles what happens when the tile's header is clicked. The default implementation tries to open\nup linked application scope perspective, if any. Setting a special constructor option ",(0,n.kt)("inlineCode",{parentName:"p"},"avoidOpenPerspectiveOnHeader")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," prevents the\ndefault behavior from happening."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.kt)("code",null,"ListTileView")),"  "),(0,n.kt)("a",{name:"module_ListTileView.extend"}),(0,n.kt)("h3",{id:"listtileviewextendprotoproperties-staticproperties--function"},"ListTileView.extend(protoProperties, staticProperties) \u21d2 ",(0,n.kt)("code",null,"function")),(0,n.kt)("p",null,"To define a derived type from ",(0,n.kt)("inlineCode",{parentName:"p"},"ListTileView"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.kt)("code",null,"ListTileView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"function")," - The derived type.  "),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"protoProperties"),(0,n.kt)("td",null,(0,n.kt)("code",null,"object")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Properties attached to the prototype of derived type."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"protoProperties.constructor"),(0,n.kt)("td",null,(0,n.kt)("code",null,"function")),(0,n.kt)("td",null,(0,n.kt)("p",null,"The function to be used to construct instance of the derived type."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"staticProperties"),(0,n.kt)("td",null,(0,n.kt)("code",null,"object")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Properties statically attached to the derived type."))),"  ")),(0,n.kt)("a",{name:"module_ListTileView..ListTileView"}),(0,n.kt)("h3",{id:"listtileviewlisttileview"},"ListTileView~ListTileView"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,n.kt)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.kt)("code",null,"ListTileView")),"  "),(0,n.kt)("a",{name:"new_module_ListTileView..ListTileView_new"}),(0,n.kt)("h4",{id:"new-listtileviewoptions"},"new ListTileView(options)"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"options"),(0,n.kt)("td",null,(0,n.kt)("code",null,"object")),(0,n.kt)("td",null,(0,n.kt)("p",null,"constructor options"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.data]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ListTileData")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Generic purpose data. Defaults to nothing."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.collectionFactory]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Factory")),(0,n.kt)("td",null,(0,n.kt)("p",null,"A collection factory reference that will be used to create the collection that holds the data for this tile. See ",(0,n.kt)("a",{href:"../../utils/contexts/factories/factory"},"Factory")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.collection]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Backbone.Collection")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Reference to a collection instance to be used as data holder. Either one of ",(0,n.kt)("code",null,"collectionFactory")," or ",(0,n.kt)("code",null,"collection")," is required If both are present in ",(0,n.kt)("code",null,"options")," then precedence is given to ",(0,n.kt)("code",null,"collection"),"."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.lang]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"object")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Translation keys to be used for displaying labels associated with this tile."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.orderBy]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Default sorting order for the data to be displayed in this tile. Defaults to ",(0,n.kt)("code",null,"name asc")," i.e sort by item names in ascending order."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.showTitleIcon]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to show/hide icon for this tile. Defaults to ",(0,n.kt)("code",null,"true"),"."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.context]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Context")),(0,n.kt)("td",null,(0,n.kt)("p",null,"The application context. See ",(0,n.kt)("a",{href:"../../utils/contexts/context.utils#Context"},"Context")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.showInlineActionBar]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to show menu actions on this tile's items. Defaults to ",(0,n.kt)("code",null,"true"),". However, actual display of menu depends on ",(0,n.kt)("code",null,"toolbarItems")," configuration and availability of actions against each list item."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.toolbarItems]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ToolItemsFactory")),(0,n.kt)("td",null,(0,n.kt)("p",null,"The menu configuration for this tile's items. Default to Doclist menu configuration. See ",(0,n.kt)("a",{href:"../../controls/toolbar/toolitems.factory"},"ToolItemsFactory")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.applicationScope]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Name of the application scope perspective which this tile may expand into. The value for this property will be matched against all the registered application scopes. The relevant header button is enabled only if a match is found."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.hideOpenPerspective]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to hide the header button that makes this tile expand into the linked application scope perspective. Defaults to ",(0,n.kt)("code",null,"false"),"."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"[options.hideSearch]"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Boolean")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Whether to hide the search box from tile header. Defaults to ",(0,n.kt)("code",null,"false"),"."))),"  ")),(0,n.kt)("a",{name:"module_ListTileView..ListTileData"}),(0,n.kt)("h3",{id:"listtileviewlisttiledata--object"},"ListTileView~ListTileData : ",(0,n.kt)("code",null,"Object")),(0,n.kt)("p",null,"Generic purpose data for the tile. Properties other than ",(0,n.kt)("inlineCode",{parentName:"p"},"icon")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," are directly merged with other constructor options."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,n.kt)("a",{parentName:"p",href:"#module_ListTileView"},(0,n.kt)("code",null,"ListTileView")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Properties")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"icon"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"CSS class name of the tile header icon"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"title"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,(0,n.kt)("p",null,"Header label for the tile"))),"  ")))}c.isMDXComponent=!0}}]);