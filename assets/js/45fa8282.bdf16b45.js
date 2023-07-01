"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[4734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var o=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,p=function(e,t){if(null==e)return{};var n,o,p={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=c(n),v=p,d=h["".concat(l,".").concat(v)]||h[v]||u[v]||r;return n?o.createElement(d,a(a({ref:t},s),{},{components:n})):o.createElement(d,a({ref:t},s))}));function v(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,a=new Array(r);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7462),p=(n(7294),n(3905));const r={},a=void 0,i={unversionedId:"api/d2/controls/behaviors/open.app.scope.behavior",id:"api/d2/controls/behaviors/open.app.scope.behavior",isDocsHomePage:!1,title:"open.app.scope.behavior",description:"OpenAppScopeBehavior : d2/sdk/controls/behaviors/open.app.scope.behavior",source:"@site/articles/api/d2/controls/behaviors/open.app.scope.behavior.md",sourceDirName:"api/d2/controls/behaviors",slug:"/api/d2/controls/behaviors/open.app.scope.behavior",permalink:"/api/d2/controls/behaviors/open.app.scope.behavior",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"clientside.infinite.scrolling.behavior",permalink:"/api/d2/controls/behaviors/clientside.infinite.scrolling.behavior"},next:{title:"blocker",permalink:"/api/d2/controls/blocker/blocker"}},l=[{value:"OpenAppScopeBehavior : <code>d2/sdk/controls/behaviors/open.app.scope.behavior</code>",id:"openappscopebehavior--d2sdkcontrolsbehaviorsopenappscopebehavior",children:[{value:"OpenAppScopeBehavior~OpenAppScopeBehavior",id:"openappscopebehavioropenappscopebehavior",children:[]}]}],c={toc:l};function s(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("a",{name:"module_OpenAppScopeBehavior"}),(0,p.kt)("h2",{id:"openappscopebehavior--d2sdkcontrolsbehaviorsopenappscopebehavior"},"OpenAppScopeBehavior : ",(0,p.kt)("code",null,"d2/sdk/controls/behaviors/open.app.scope.behavior")),(0,p.kt)("p",null,"A ",(0,p.kt)("inlineCode",{parentName:"p"},"Marionette.view")," behavior to navigate to an application scope perspective. Whichever view uses\nthis behavior, waits for a click event to happen. As a reponse to the click event, it opens the application\nscope perspective."),(0,p.kt)("p",null,"A view that has already mixed this behavior, can set a Boolean flag ",(0,p.kt)("inlineCode",{parentName:"p"},"disableAppScopeBehavior=true")," to disbale the behavior."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Extends"),": ",(0,p.kt)("a",{parentName:"p",href:"https://marionettejs.com/docs/v2.4.7/marionette.behavior.html"},(0,p.kt)("code",null,"Marionette.Behavior")),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("strong",{parentName:"p"},"Example")," ",(0,p.kt)("em",{parentName:"p"},"(To use this behavior in a sample view)"),"  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"\ndefine([\n 'nuc/lib/marionette',\n 'd2/sdk/controls/behaviors/open.app.scope.behavior',\n 'd2/sdk/utils/contexts/context.utils'\n], function(Marionette, OpenAppScopeBehavior, contextUtil){\n 'use strict';\n\n var context = contextUtil.getPerspectiveContext();\n\n var MyView = Marionette.LayoutView.extend({\n   behaviors: {\n     AppScope: {\n       behaviorClass: OpenAppScopeBehavior,\n       context: context,\n       applicationScope: 'favorites'\n     }\n   },\n   template: false,\n   onRender: function() {\n     this.$el.text('Click me to open favorites');\n   }\n });\n});\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#module_OpenAppScopeBehavior"},"OpenAppScopeBehavior")," : ",(0,p.kt)("code",null,"d2/sdk/controls/behaviors/open.app.scope.behavior"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#module_OpenAppScopeBehavior..OpenAppScopeBehavior"},"~OpenAppScopeBehavior"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#new_module_OpenAppScopeBehavior..OpenAppScopeBehavior_new"},"new OpenAppScopeBehavior(options, view)"))))))),(0,p.kt)("a",{name:"module_OpenAppScopeBehavior..OpenAppScopeBehavior"}),(0,p.kt)("h3",{id:"openappscopebehavioropenappscopebehavior"},"OpenAppScopeBehavior~OpenAppScopeBehavior"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,p.kt)("a",{parentName:"p",href:"#module_OpenAppScopeBehavior"},(0,p.kt)("code",null,"OpenAppScopeBehavior")),"  "),(0,p.kt)("a",{name:"new_module_OpenAppScopeBehavior..OpenAppScopeBehavior_new"}),(0,p.kt)("h4",{id:"new-openappscopebehavioroptions-view"},"new OpenAppScopeBehavior(options, view)"),(0,p.kt)("table",null,(0,p.kt)("thead",null,(0,p.kt)("tr",null,(0,p.kt)("th",null,"Param"),(0,p.kt)("th",null,"Type"),(0,p.kt)("th",null,"Description"))),(0,p.kt)("tbody",null,(0,p.kt)("tr",null,(0,p.kt)("td",null,"options"),(0,p.kt)("td",null,(0,p.kt)("code",null,"object")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Constructor options, automatically passed by Marionette from behavior configuration of a view"))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"options.applicationScope"),(0,p.kt)("td",null,(0,p.kt)("code",null,"string")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Name of the application scope to be opened on click."))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"options.context"),(0,p.kt)("td",null,(0,p.kt)("code",null,"Context")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Reference to the runtime context. See ",(0,p.kt)("a",{href:"../../utils/contexts/context.utils#Context"},"Context"),"."))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"[options.registerClickEventListener]"),(0,p.kt)("td",null,(0,p.kt)("code",null,"Boolean")),(0,p.kt)("td",null,(0,p.kt)("p",null,"Whether the view should add a separate ",(0,p.kt)("code",null,"click")," event listener. Defaults to ",(0,p.kt)("code",null,"true"),". Some views which has already added a click event listener on self element for some purpose, can be reused automatically for this behavior, in that case this flag needs to be set to ",(0,p.kt)("code",null,"false")," explicitly."))),(0,p.kt)("tr",null,(0,p.kt)("td",null,"view"),(0,p.kt)("td",null,(0,p.kt)("code",null,"Marionette.View")),(0,p.kt)("td",null,(0,p.kt)("p",null,"The view instance associated with this behavior instance. Automatically set by Marionette."))),"  ")))}s.isMDXComponent=!0}}]);