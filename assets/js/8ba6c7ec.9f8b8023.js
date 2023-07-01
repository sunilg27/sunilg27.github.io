"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[2546],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=s(t),m=i,c=g["".concat(p,".").concat(m)]||g[m]||d[m]||r;return t?o.createElement(c,l(l({ref:n},u),{},{components:t})):o.createElement(c,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2779:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(7462),i=(t(7294),t(3905));const r={},l=void 0,a={unversionedId:"api/d2/controls/regions/non-emptying.region",id:"api/d2/controls/regions/non-emptying.region",isDocsHomePage:!1,title:"non-emptying.region",description:"NonEmptyingRegion : d2/sdk/controls/regions/non-emptying.region",source:"@site/articles/api/d2/controls/regions/non-emptying.region.md",sourceDirName:"api/d2/controls/regions",slug:"/api/d2/controls/regions/non-emptying.region",permalink:"/api/d2/controls/regions/non-emptying.region",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"widget.view.state.mixin",permalink:"/api/d2/controls/mixins/widget.view.state.mixin"},next:{title:"cell.registry",permalink:"/api/d2/controls/table/cells/cell.registry"}},p=[{value:"NonEmptyingRegion : <code>d2/sdk/controls/regions/non-emptying.region</code>",id:"nonemptyingregion--d2sdkcontrolsregionsnon-emptyingregion",children:[{value:"nonEmptyingRegion.show(view, options)",id:"nonemptyingregionshowview-options",children:[]},{value:"NonEmptyingRegion~NonEmptyingRegion",id:"nonemptyingregionnonemptyingregion",children:[]}]}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"module_NonEmptyingRegion"}),(0,i.kt)("h2",{id:"nonemptyingregion--d2sdkcontrolsregionsnon-emptyingregion"},"NonEmptyingRegion : ",(0,i.kt)("code",null,"d2/sdk/controls/regions/non-emptying.region")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Marionette.Region")," that does not empty it's DOM element on rendering new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Marionette.View"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends"),": ",(0,i.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.region.html"},(0,i.kt)("code",null,"Marionette.Region")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"define([\n 'nuc/lib/underscore',\n 'nuc/lib/marionette',\n 'd2/sdk/controls/regions/non-emptying.region'\n], function(_, Marionette, NonEmptyingRegion){\n 'use strict';\n\n var MyView = Marionette.LayoutView.extend({\n   template: false,\n   constructor: function MyView(options) {\n     options = options || {};\n     MyView.__super__.constructor.call(this, options);\n   },\n\n   onRender: function() {\n     if(_.isString(this.options.greet) && !_.isEmpty(this.options.greet)) {\n       this.$el.text(this.options.greet);\n     }\n   }\n });\n\n var view1 = new MyView({greet: 'Hello'});\n var view2 = new MyView({greet: 'World'});\n\n var region = new NonEmptyingRegion({el: '.host-element'}); //can also set prependChild: true if element for view added later should show before previously added element in DOM.\n\n region.show(view1); //Adds element with 'Hello' in the DOM\n region.show(view2, {preventDestroy: true}); //Adds element with 'World' in the DOM, however element with 'Hello' is not removed and still exists in the DOM.\n\n //With normal Marionette.Region, after adding view2, the HTML element specific to view1 would have been removed.\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_NonEmptyingRegion"},"NonEmptyingRegion")," : ",(0,i.kt)("code",null,"d2/sdk/controls/regions/non-emptying.region"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"instance"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_NonEmptyingRegion+show"},".show(view, [options])")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"inner"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_NonEmptyingRegion..NonEmptyingRegion"},"~NonEmptyingRegion"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#new_module_NonEmptyingRegion..NonEmptyingRegion_new"},"new NonEmptyingRegion([options])"))))))))),(0,i.kt)("a",{name:"module_NonEmptyingRegion+show"}),(0,i.kt)("h3",{id:"nonemptyingregionshowview-options"},"nonEmptyingRegion.show(view, ","[options]",")"),(0,i.kt)("p",null,"Shows a ",(0,i.kt)("inlineCode",{parentName:"p"},"Marionette.View")," in the region."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_NonEmptyingRegion"},(0,i.kt)("code",null,"NonEmptyingRegion")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Param"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"view"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Maionette.View")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The view to be shown"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[options]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Display control options"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[options.preventDestroy]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Boolean")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Indicates whether previous view should be destroyed before showing current view or not. This flag is an important indication that tells the ",(0,i.kt)("code",null,"NonEmptyingRegion")," to keep adding view content as children of it own element. Without this flag seto to ",(0,i.kt)("code",null,"true"),"the previously shown view is destroyed and its element is removed from DOM as usual."))),"  ")),(0,i.kt)("a",{name:"module_NonEmptyingRegion..NonEmptyingRegion"}),(0,i.kt)("h3",{id:"nonemptyingregionnonemptyingregion"},"NonEmptyingRegion~NonEmptyingRegion"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,i.kt)("a",{parentName:"p",href:"#module_NonEmptyingRegion"},(0,i.kt)("code",null,"NonEmptyingRegion")),"  "),(0,i.kt)("a",{name:"new_module_NonEmptyingRegion..NonEmptyingRegion_new"}),(0,i.kt)("h4",{id:"new-nonemptyingregionoptions"},"new NonEmptyingRegion(","[options]",")"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Param"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"[options]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"object")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Constructor options. Usual constructor options as per ",(0,i.kt)("code",null,"Marionette.Region")," specification are all supported but not explictly documented here. Below are the special parameter supported by this region type."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[options.prependChild]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Boolean")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Flag to indicate whether current view's element is to be placed before or after previous view's element in DOM when ",(0,i.kt)("code",null,"show()")," is called with ",(0,i.kt)("code",null,"options.preventDestroy=true"),". Defaults to ",(0,i.kt)("code",null,"false"),"."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"[options.index]"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Positive integer to indicate any specific ordered spot for current view's element in the DOM when a previous view exists and current view is being shown with ",(0,i.kt)("code",null,"options.preventDestroy=true"),"."))),"  ")))}u.isMDXComponent=!0}}]);