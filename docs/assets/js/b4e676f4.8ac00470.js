"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[3614],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?t.createElement(d,u(u({ref:n},s),{},{components:r})):t.createElement(d,u({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,n,r){var t=r(7294);n.Z=function(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},6396:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(7462),a=r(7294),o=r(2389),u=r(9443);var l=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(3616),c=r(6010),s="tabItem_vU9c";function p(e){var n,r,t,o=e.lazy,u=e.block,p=e.defaultValue,f=e.values,m=e.groupId,d=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=b[0])?void 0:t.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),w=y.tabGroupChoices,k=y.setTabGroupChoices,O=(0,a.useState)(h),E=O[0],T=O[1],x=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=w[m];null!=D&&D!==E&&v.some((function(e){return e.value===D}))&&T(D)}var P=function(e){var n=e.currentTarget,r=x.indexOf(n),t=v[r].value;t!==E&&(j(n),T(t),null!=m&&k(m,t))},S=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=x.indexOf(e.currentTarget)+1;r=x[t]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},d)},v.map((function(e){var n=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":E===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:P,onClick:P},null!=r?r:n)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function f(e){var n=(0,o.Z)();return a.createElement(p,(0,t.Z)({key:String(n)},e))}},2498:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),u=(r(6396),r(8215),["components"]),l={slug:"pangu-dev-framework-apache-shenyu",title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173",authors:["xiongchun"],tags:["\u7f51\u5173","ShenYu","Dubbo","\u6cdb\u5316\u8c03\u7528"],date:new Date("2022-01-29T00:00:00.000Z"),description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173",hide_table_of_contents:!1},i=void 0,c={permalink:"/pangu-framework/blog/pangu-dev-framework-apache-shenyu",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173.md",source:"@site/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173.md",title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173",date:"2022-01-29T00:00:00.000Z",formattedDate:"January 29, 2022",tags:[{label:"\u7f51\u5173",permalink:"/pangu-framework/blog/tags/\u7f51\u5173"},{label:"ShenYu",permalink:"/pangu-framework/blog/tags/shen-yu"},{label:"Dubbo",permalink:"/pangu-framework/blog/tags/dubbo"},{label:"\u6cdb\u5316\u8c03\u7528",permalink:"/pangu-framework/blog/tags/\u6cdb\u5316\u8c03\u7528"}],readingTime:6.865,truncated:!0,authors:[{name:"xiongchun",title:"Pangu Dev Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"/pangu-framework/resources/author/xiongchun.png",key:"xiongchun"}],nextItem:{title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6587\u6863\u6392\u7248\u6307\u5357",permalink:"/pangu-framework/blog/chinese-copywriting-guidelines"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u5b9e\u73b0\u5fae\u670d\u52a1\u7f51\u5173\u63a5\u53e3\u7684\u7f3a\u7701\u59ff\u52bf\u4e3a\u57fa\u4e8e pangu-web \u6a21\u5757\u7684\u4f20\u7edf\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/quick-start/how-to-create-http-api"},"\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173)"),"\u3002\u672c\u6587\u63d0\u4f9b\u53e6\u5916\u4e00\u79cd\u901a\u8fc7\u96c6\u6210Apache ShenYu \u7f51\u5173\u5b9e\u73b0\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u5c06\u5176\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\u7684\u53ef\u9009\u65b9\u6cd5\u3002"))}m.isMDXComponent=!0}}]);