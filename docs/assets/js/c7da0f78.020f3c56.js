"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[1888],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=c(a),s=r,k=m["".concat(p,".").concat(s)]||m[s]||o[s]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),l=a(2389),i=a(9443);var u=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(3616),c=a(6010),d="tabItem_vU9c";function o(e){var t,a,n,l=e.lazy,i=e.block,o=e.defaultValue,m=e.values,s=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),N=(0,p.lx)(h,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===o?o:null!=(t=null!=o?o:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=g[0])?void 0:n.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),v=y.tabGroupChoices,f=y.setTabGroupChoices,C=(0,r.useState)(b),x=C[0],T=C[1],E=[],w=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var O=v[s];null!=O&&O!==x&&h.some((function(e){return e.value===O}))&&T(O)}var I=function(e){var t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==x&&(w(t),T(n),null!=s&&f(s,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},k)},h.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":x===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:I,onClick:I},null!=a?a:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return r.createElement(o,(0,n.Z)({key:String(t)},e))}},109:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return m},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(6396),u=a(8215),p=["components"],c={title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",tags:["\u591a\u7ea7\u7f13\u5b58","Cache"],sidebar_position:10,slug:"/advanced-guide/layering-cache"},d=void 0,o={unversionedId:"advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",id:"advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58 | Laying Cahce",source:"@site/docs/advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58.md",sourceDirName:"advanced-guide",slug:"/advanced-guide/layering-cache",permalink:"/pangu-framework/docs/advanced-guide/layering-cache",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58.md",tags:[{label:"\u591a\u7ea7\u7f13\u5b58",permalink:"/pangu-framework/docs/tags/\u591a\u7ea7\u7f13\u5b58"},{label:"Cache",permalink:"/pangu-framework/docs/tags/cache"}],version:"current",sidebarPosition:10,frontMatter:{title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",tags:["\u591a\u7ea7\u7f13\u5b58","Cache"],sidebar_position:10,slug:"/advanced-guide/layering-cache"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/pangu-framework/docs/advanced-guide/data-persistance"},next:{title:"\u5206\u5e03\u5f0f\u9501",permalink:"/pangu-framework/docs/advanced-guide/distributed-lock"}},m=[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",children:[],level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",children:[{value:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",children:[],level:3}],level:2},{value:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e",id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e",children:[{value:"@FirstCache",id:"firstcache",children:[],level:3},{value:"@SecondaryCache",id:"secondarycache",children:[],level:3},{value:"@Cacheable",id:"cacheable",children:[],level:3},{value:"@CachePut",id:"cacheput",children:[],level:3},{value:"@CacheEvict",id:"cacheevict",children:[],level:3}],level:2},{value:"\u57fa\u4e8e API \u7f16\u7a0b",id:"\u57fa\u4e8e-api-\u7f16\u7a0b",children:[],level:2},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",children:[],level:2},{value:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",children:[],level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[],level:2}],s={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58 | Laying Cahce"),(0,l.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58 | Laying Cahce"}),(0,l.kt)("meta",{name:"description",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5355\u4f53\u5206\u5c42\u67b6\u6784\uff09"})),(0,l.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/xiaolyuh/layering-cache"},"Laying Cahce"),"\uff0c\u63d0\u4f9b\u652f\u6301\u5206\u5e03\u5f0f\u73af\u5883\u7684\u591a\u7ea7\u7f13\u5b58\u529f\u80fd\u3002\u4f7f\u7528 Caffeine \u4f5c\u4e3a\u4e00\u7ea7\u672c\u5730\u7f13\u5b58\uff0cRedis \u4f5c\u4e3a\u4e8c\u7ea7\u96c6\u4e2d\u5f0f\u7f13\u5b58\u3002\u652f\u6301\u7f13\u5b58\u4fe1\u606f\u76d1\u63a7\u7edf\u8ba1\u3001\u652f\u6301\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u5728\u6ce8\u89e3\u4e0a\u76f4\u63a5\u914d\u7f6e\u3001\u652f\u6301\u7f13\u5b58\u7684\u81ea\u52a8\u5237\u65b0\u3001\u7f13\u5b58 Key \u652f\u6301 SpEL \u8868\u8fbe\u5f0f\u3001\u652f\u6301\u65e0\u611f\u7981\u7528\u4e00\u7ea7\u7f13\u5b58\u6216\u4e8c\u7ea7\u7f13\u5b58\u3002\u901a\u8fc7\u7f13\u5b58\u7a7a\u503c\u6765\u89e3\u51b3\u7f13\u5b58\u7a7f\u900f\u95ee\u9898\u3001\u901a\u8fc7\u5f02\u6b65\u52a0\u8f7d\u7f13\u5b58\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u7f13\u5b58\u51fb\u7a7f\u548c\u96ea\u5d29\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,l.kt)(u.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,l.kt)(u.Z,{value:"dependency2",label:"\u7f13\u5b58\u6a21\u5757",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-cache-spring-boot-starter</artifactId>\n</dependency>\n")))),(0,l.kt)("h2",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,l.kt)(i.Z,{defaultValue:"application-dev",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,l.kt)(u.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-cache-layering\n\n# layering-cache \u591a\u7ea7\u7f13\u5b58\nlayering-cache.stats=false\n# redis\u5355\u673a\nlayering-cache.redis.database=1\nlayering-cache.redis.host=localhost\nlayering-cache.redis.port=6379\nlayering-cache.redis.password=\n# redis\u96c6\u7fa4\n#layering-cache.redis.password=\n#layering-cache.redis.cluster=127.0.0.1:6379,127.0.0.1:6378\nlayering-cache.redis.serializer=com.github.xiaolyuh.redis.serializer.JacksonRedisSerializer\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,l.kt)("h3",{id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"},"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("div",{style:{width:"120px"}},"\u914d\u7f6e\u9879")),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layering-cache.stats"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u76d1\u63a7\u7edf\u8ba1\u5f00\u5173\uff0c\u7f3a\u7701true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layering-cache.redis.serializer"),(0,l.kt)("td",{parentName:"tr",align:null},"Redis\u5e8f\u5217\u5316\u65b9\u5f0f")))),(0,l.kt)("h2",{id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e"},"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e"),(0,l.kt)("p",null,"\u76f4\u63a5\u5728\u9700\u8981\u7f13\u5b58\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"@Cacheable"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@CacheEvict"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@CachePut")," \u6ce8\u89e3\u3002\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},"@FirstCache"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@SecondaryCache")," \u4e3a\u6ce8\u89e3\u914d\u7f6e\u9879\uff0c\u4e0d\u80fd\u5355\u72ec\u4f7f\u7528\uff09"),(0,l.kt)("h3",{id:"firstcache"},"@FirstCache"),(0,l.kt)("p",null,"\u4e00\u7ea7\u7f13\u5b58\u914d\u7f6e\u9879\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialCapacity"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u521d\u59cb Size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumSize"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6700\u5927 Size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6709\u6548\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeUnit"),(0,l.kt)("td",{parentName:"tr",align:null},"TimeUnit.MINUTES"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u5355\u4f4d\uff0c\u9ed8\u8ba4\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expireMode"),(0,l.kt)("td",{parentName:"tr",align:null},"ExpireMode.WRITE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u5931\u6548\u6a21\u5f0f\uff0cExpireMode.WRITE\uff1a\u6700\u540e\u4e00\u6b21\u5199\u5165\u540e\u5230\u671f\u5931\u6548\uff0cExpireMode.ACCESS\uff1a\u6700\u540e\u4e00\u6b21\u8bbf\u95ee\u540e\u5230\u671f\u5931\u6548")))),(0,l.kt)("h3",{id:"secondarycache"},"@SecondaryCache"),(0,l.kt)("p",null,"\u4e8c\u7ea7\u7f13\u5b58\u914d\u7f6e\u9879\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6709\u6548\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"preloadTime"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u4e3b\u52a8\u5728\u5931\u6548\u524d\u5f3a\u5236\u5237\u65b0\u7f13\u5b58\u7684\u65f6\u95f4\uff0c\u5efa\u8bae\u662f expireTime * 0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeUnit"),(0,l.kt)("td",{parentName:"tr",align:null},"TimeUnit.HOURS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u5355\u4f4d\uff0c\u9ed8\u8ba4\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forceRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f3a\u5236\u5237\u65b0\uff08\u76f4\u63a5\u6267\u884c\u88ab\u7f13\u5b58\u65b9\u6cd5\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"magnification"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a\u503c\u548c null \u503c\u4e4b\u95f4\u7684\u65f6\u95f4\u500d\u7387\uff0c\u9ed8\u8ba4\u662f 1\u3002\u5982 expireTime=60 \u79d2\uff0cmagnification=10\uff0c\u90a3\u4e48\u5f53\u7f13\u5b58\u7a7a\u503c\u65f6\uff0c\u7a7a\u503c\u7684\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u662f 60/10=6 \u79d2\u3002")))),(0,l.kt)("h3",{id:"cacheable"},"@Cacheable"),(0,l.kt)("p",null,"\u8868\u793a\u7528\u7684\u65b9\u6cd5\u7684\u7ed3\u679c\u662f\u53ef\u4ee5\u88ab\u7f13\u5b58\u7684\uff0c\u5f53\u8be5\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u5148\u68c0\u67e5\u7f13\u5b58\u662f\u5426\u547d\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u547d\u4e2d\u518d\u8c03\u7528\u88ab\u7f13\u5b58\u7684\u65b9\u6cd5\uff0c\u5e76\u5c06\u5176\u8fd4\u56de\u503c\u653e\u5230\u7f13\u5b58\u4e2d\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheNames"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key\uff0c\u652f\u6301 SpEL \u8868\u8fbe\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"depict"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u63cf\u8ff0\uff08\u5728\u7f13\u5b58\u7edf\u8ba1\u9875\u9762\u4f1a\u7528\u5230\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableFirstCache"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u4e00\u7ea7\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"firstCache"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u7ea7\u7f13\u5b58\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secondaryCache"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8c\u7ea7\u7f13\u5b58\u914d\u7f6e")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="@Cacheable \u8303\u4f8b\u4ee3\u7801"',title:'"@Cacheable','\u8303\u4f8b\u4ee3\u7801"':!0},'@Cacheable(cacheNames = "user", key = "#userId",\n        firstCache = @FirstCache(expireTime = 5),\n        secondaryCache = @SecondaryCache(expireTime = 10))\npublic UserVO getUser(Long userId) {\n    log.info("\u6267\u884cAnnotationBasedDemoService.getUser()");\n    // \u4eceDB\u6216\u5176\u5b83\u8d44\u6e90\u6e20\u9053\u83b7\u53d6\u6570\u636e\n    UserVO userVO = new UserVO();\n    userVO.setId(userId);\n    userVO.setName("\u94b1\u5b66\u68ee");\n    return userVO;\n}\n')),(0,l.kt)("h3",{id:"cacheput"},"@CachePut"),(0,l.kt)("p",null,"\u5c06\u6570\u636e\u653e\u5230\u7f13\u5b58\u4e2d\uff0c\u65b0\u589e\u7f13\u5b58\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheNames"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key\uff0c\u652f\u6301 SpEL\u8868\u8fbe\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"depict"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u63cf\u8ff0\uff08\u5728\u7f13\u5b58\u7edf\u8ba1\u9875\u9762\u4f1a\u7528\u5230\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableFirstCache"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u4e00\u7ea7\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"firstCache"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u7ea7\u7f13\u5b58\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secondaryCache"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8c\u7ea7\u7f13\u5b58\u914d\u7f6e")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="@CachePut \u8303\u4f8b\u4ee3\u7801"',title:'"@CachePut','\u8303\u4f8b\u4ee3\u7801"':!0},'@CachePut(cacheNames = "user", key = "#userVO.id",\n        firstCache = @FirstCache(expireTime = 10),\n        secondaryCache = @SecondaryCache(expireTime = 30))\npublic UserVO saveUser(UserVO userVO) {\n    log.info("\u6267\u884cAnnotationBasedDemoService.saveUser()");\n    return userVO;\n}\n')),(0,l.kt)("h3",{id:"cacheevict"},"@CacheEvict"),(0,l.kt)("p",null,"\u5220\u9664\u7f13\u5b58\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u540d\u79f0\uff0ccacheNames \u7684\u522b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheNames"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4\t\u7f13\u5b58\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key\uff0c\u652f\u6301 SpEL \u8868\u8fbe\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allEntries"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5220\u9664\u7f13\u5b58\u4e2d\u6240\u6709\u6570\u636e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u53ea\u5220\u9664\u5173\u8054 key \u7684\u7f13\u5b58\u6570\u636e\uff0c\u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u6210 true \u65f6 key \u53c2\u6570\u5c06\u65e0\u6548")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="@CacheEvict \u8303\u4f8b\u4ee3\u7801"',title:'"@CacheEvict','\u8303\u4f8b\u4ee3\u7801"':!0},'@CacheEvict(cacheNames = "user", key = "#userId")\npublic void delUser(Long userId) {\n    log.info("\u6267\u884cAnnotationBasedDemoService.delUser()");\n}\n\n@CacheEvict(cacheNames = "user", allEntries = true)\npublic void delAllUsers() {\n    log.info("\u6267\u884cAnnotationBasedDemoService.delAllUsers()");\n}\n')),(0,l.kt)("h2",{id:"\u57fa\u4e8e-api-\u7f16\u7a0b"},"\u57fa\u4e8e API \u7f16\u7a0b"),(0,l.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Laying Cahce \u63d0\u4f9b\u7684 API \u8fdb\u884c\u786c\u7f16\u7801\u64cd\u4f5c\u4e24\u7ea7\u7f13\u5b58\uff0c\u4f46\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002\u8fd9\u91cc\u5c31\u4e0d\u505a\u8be6\u7ec6\u8bb2\u89e3\u4e86\uff0c\u53ef\u4ee5\u5728\u53c2\u8003\u8303\u4f8b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiBasedDemoService")," \u7c7b\u4e2d\u627e\u5230\u76f8\u5173\u7684\u4ee3\u7801\u3002"),(0,l.kt)("h2",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,l.kt)("p",null,"\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"@EnableLayeringCache")," \u6ce8\u89e3\u7684\u52a0\u6301\u3002\u5982\u4e0b\u4ee3\u7801\u6240\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1}","{1}":!0},"@EnableLayeringCache\n@SpringBootApplication\npublic class LayeringCachePanguApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(LayeringCachePanguApplication.class).run(args);\n    }\n}\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u5feb\u901f QA\uff1a"),"\u53ef\u4ee5\u7981\u7528\u4e00\u7ea7\u7f13\u5b58\uff0c\u53ea\u4f7f\u7528\u4e8c\u7ea7\u7f13\u5b58\u5417\uff1f"),(0,l.kt)("div",null,"\u5fc5\u987b\u53ef\u4ee5\u3002\u8bbe\u7f6e enableFirstCache = false \u5373\u53ef\u3002")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u5feb\u901f QA\uff1a"),"\u53ef\u4ee5\u7981\u7528\u4e8c\u7ea7\u7f13\u5b58\uff0c\u53ea\u4f7f\u7528\u4e00\u7ea7\u7f13\u5b58\u5417\uff1f"),(0,l.kt)("div",null,"\u53ef\u4ee5\u3002\u8bbe\u7f6e\u4e8c\u7ea7\u7f13\u5b58 expireTime \u4e3a 0 \u5373\u53ef\u3002")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u5feb\u901f QA\uff1a"),"\u6211\u53ef\u4ee5\u7528 Spring Cache \u7684 RedisTemplate API \u5417\uff1f"),(0,l.kt)("div",null,"\u53ef\u4ee5\u3002Laying Cache \u548c Spring Cache \u76f8\u4e92\u9694\u79bb\u7684\uff0c\u4f60\u53ea\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u52a0\u5165 Spring Cache \u7684\u914d\u7f6e\uff0c\u5c31\u53ef\u4ee5\u6ce8\u5165 RedisTemplate \u76f4\u63a5\u4f7f\u7528\u4e86\u3002\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u548c Laying Cache \u6df7\u5408\u4f7f\u7528\u3002\u5177\u4f53\u7528\u6cd5\u53ef\u4ee5\u53c2\u8003\u8303\u4f8b\uff1apangu-examples-cache-single\u3002")),(0,l.kt)("h2",{id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"},"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-empty-web"},"pangu-examples-cache-layering"),"\uff1a\u4e24\u7ea7\u7f13\u5b58\uff08\u672c\u5730\u7f13\u5b58 + Redis \u96c6\u4e2d\u7f13\u5b58\uff09\u8303\u4f8b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-cache-single"},"pangu-examples-cache-single"),"\uff1aSpring Cache \u4e00\u7ea7\u7f13\u5b58 API\uff08 RedisTemplate \uff09\u8303\u4f8b")),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}k.isMDXComponent=!0}}]);