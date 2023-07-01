"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[7782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=l.createContext({}),u=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,w=s["".concat(d,".").concat(p)]||s[p]||k[p]||a;return n?l.createElement(w,o(o({ref:t},c),{},{components:n})):l.createElement(w,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4403:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const a={},o=void 0,i={unversionedId:"api/d2/controls/tree/tree.view",id:"api/d2/controls/tree/tree.view",isDocsHomePage:!1,title:"tree.view",description:"TreeView : d2/sdk/controls/tree/tree.view",source:"@site/articles/api/d2/controls/tree/tree.view.md",sourceDirName:"api/d2/controls/tree",slug:"/api/d2/controls/tree/tree.view",permalink:"/api/d2/controls/tree/tree.view",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"toolitems.factory",permalink:"/api/d2/controls/toolbar/toolitems.factory"},next:{title:"folder.browser.id.rules",permalink:"/api/d2/integration/folder.browser.id.rules"}},d=[{value:"TreeView : <code>d2/sdk/controls/tree/tree.view</code>",id:"treeview--d2sdkcontrolstreetreeview",children:[{value:"TreeView~TreeView",id:"treeviewtreeview",children:[]},{value:"TreeView~FancytreeEventCallback : <code>function</code>",id:"treeviewfancytreeeventcallback--function",children:[]}]}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_TreeView"}),(0,r.kt)("h2",{id:"treeview--d2sdkcontrolstreetreeview"},"TreeView : ",(0,r.kt)("code",null,"d2/sdk/controls/tree/tree.view")),(0,r.kt)("p",null,"Tree View, renders data into a tree structure. Internally it is implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://wwwendt.de/tech/fancytree/doc/jsdoc/Fancytree.html"},"Fancytree"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.itemview.html"},(0,r.kt)("code",null,"Marionette.ItemView")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(A sample tree construction may look like)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'define([\n \'nuc/lib/marionette\',\n \'d2/sdk/controls/tree/tree.view\',\n \'hbs!mybundle/test/test.tree\'\n], function(Marionette, TreeView, template){\n\n var MyTreeView = Marionette.LayoutView.extend({\n   template: template,\n\n   regions: {\n     rgnTree: \'.rgnTree\'\n   },\n\n   constructor: function MyTreeView(options) {\n     options = options || {};\n     MyTreeView.__super__.constructor.call(this, options);\n   },\n\n   onRender: function() {\n     if(!this.treeView) {\n       this.treeView = new TreeView(this._buildTreeOptions());\n       this.rgnTree.show(this.treeView);\n     }\n   },\n\n   _buildTreeOptions: function() {\n     var treeOption = {\n       source: [\n         //This demonstrates how to initialize a tree with literal data only\n         {title: "Node 1", key: "1"},\n         {title: "Folder 2", key: "2", folder: true, children: [\n           {title: "Node 2.1", key: "3"},\n           {title: "Node 2.2", key: "4"}\n         ]}\n       ]\n     };\n\n     return treeOption;\n   }\n });\n\n return MyTreeView;\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"( where the content of mybundle/test/test.tree.hbs is as follows )"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<div class="rgnTree"></div>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_TreeView"},"TreeView")," : ",(0,r.kt)("code",null,"d2/sdk/controls/tree/tree.view"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_TreeView..TreeView"},"~TreeView"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_TreeView..TreeView_new"},"new TreeView(options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_TreeView..FancytreeEventCallback"},"~FancytreeEventCallback")," : ",(0,r.kt)("code",null,"function"))))),(0,r.kt)("a",{name:"module_TreeView..TreeView"}),(0,r.kt)("h3",{id:"treeviewtreeview"},"TreeView~TreeView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,r.kt)("a",{parentName:"p",href:"#module_TreeView"},(0,r.kt)("code",null,"TreeView")),"  "),(0,r.kt)("a",{name:"new_module_TreeView..TreeView_new"}),(0,r.kt)("h4",{id:"new-treeviewoptions"},"new TreeView(options)"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"options"),(0,r.kt)("td",null,(0,r.kt)("code",null,"object")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Construction options holder. Only a subset of"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.activate]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when some node is activated."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.beforeActivate]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when some node is about to become active."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.click]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when a node is clicked."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.clickPaging]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when a paging status node is clicked. A paging status node is used to render more siblings at given depth."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.collapse]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when a node is collapsed."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.dblclick]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when a node is clicked twice."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.expand]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when a node is expanded."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.focus]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when a node receives keyboard focus."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.init]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when the tree reaches a particular state, when tree is initialized, source data is loaded & visible nodes are rendered."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.keydown]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when a node has received a keyboard event."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.lazyLoad]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"FancytreeEventCallback")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Called when ",(0,r.kt)("code",null,"data.node")," is expanded for the first time. The children data must be returned in ",(0,r.kt)("code",null,"data.results")," property."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.source]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"*")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Used to compute/collect data for the initial tree rendering. Can return a jQuery promise which can then later be resolved with tree data. See ",(0,r.kt)("a",{href:"https://wwwendt.de/tech/fancytree/doc/jsdoc/global.html#NodeData"},"NodeData"),"."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[options.strings]"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Object")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Key-value pairs used for translations."))),"  ")),(0,r.kt)("a",{name:"module_TreeView..FancytreeEventCallback"}),(0,r.kt)("h3",{id:"treeviewfancytreeeventcallback--function"},"TreeView~FancytreeEventCallback : ",(0,r.kt)("code",null,"function")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": inner typedef of ",(0,r.kt)("a",{parentName:"p",href:"#module_TreeView"},(0,r.kt)("code",null,"TreeView")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"event"),(0,r.kt)("td",null,(0,r.kt)("code",null,(0,r.kt)("a",{href:"https://api.jquery.com/category/events/event-object/"},"jQueryEvent"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"A jquery event representing interaction."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,(0,r.kt)("code",null,(0,r.kt)("a",{href:"https://wwwendt.de/tech/fancytree/doc/jsdoc/global.html#EventData"},"FancytreeEventData"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Data associated with the event."))),"  ")))}c.isMDXComponent=!0}}]);