"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[1888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},o="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=d(a),m=r,k=o["".concat(u,".").concat(m)]||o[m]||s[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),p=a(7392),u=a(7094),d=a(2466);const c="tabList__CuJ",o="tabItem_LNqP";function s(e){const{lazy:t,block:a,defaultValue:i,values:s,groupId:m,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=s??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,p.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,u.U)(),[f,C]=(0,r.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==f&&N.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),n=N[a].value;n!==f&&(T(t),C(n),null!=m&&v(m,String(n)))},w=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>x.push(e),onKeyDown:w,onClick:E},i,{className:(0,l.Z)("tabs__item",o,i?.className,{"tabs__item--active":f===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function m(e){const t=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const p={title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",tags:["\u591a\u7ea7\u7f13\u5b58","Cache"],sidebar_position:10,slug:"/advanced-guide/layering-cache"},u=void 0,d={unversionedId:"advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",id:"advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58 | Laying Cache | \u7f13\u5b58\u51fb\u7a7f | \u7f13\u5b58\u96ea\u5d29",source:"@site/docs/advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58.md",sourceDirName:"advanced-guide",slug:"/advanced-guide/layering-cache",permalink:"/pangu-framework/docs/advanced-guide/layering-cache",draft:!1,editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/advanced-guide/\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58.md",tags:[{label:"\u591a\u7ea7\u7f13\u5b58",permalink:"/pangu-framework/docs/tags/\u591a\u7ea7\u7f13\u5b58"},{label:"Cache",permalink:"/pangu-framework/docs/tags/cache"}],version:"current",lastUpdatedBy:"xiongchun",lastUpdatedAt:1672663803,formattedLastUpdatedAt:"2023\u5e741\u67082\u65e5",sidebarPosition:10,frontMatter:{title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",tags:["\u591a\u7ea7\u7f13\u5b58","Cache"],sidebar_position:10,slug:"/advanced-guide/layering-cache"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/pangu-framework/docs/advanced-guide/data-persistance"},next:{title:"\u5206\u5e03\u5f0f\u9501",permalink:"/pangu-framework/docs/advanced-guide/distributed-lock"}},c={},o=[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:2},{value:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",level:3},{value:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e",id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e",level:2},{value:"@FirstCache",id:"firstcache",level:3},{value:"@SecondaryCache",id:"secondarycache",level:3},{value:"@Cacheable",id:"cacheable",level:3},{value:"@CachePut",id:"cacheput",level:3},{value:"@CacheEvict",id:"cacheevict",level:3},{value:"\u57fa\u4e8e API \u7f16\u7a0b",id:"\u57fa\u4e8e-api-\u7f16\u7a0b",level:2},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",level:2},{value:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],s={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58 | Laying Cache | \u7f13\u5b58\u51fb\u7a7f | \u7f13\u5b58\u96ea\u5d29"),(0,r.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58 | Laying Cache | \u7f13\u5b58\u51fb\u7a7f | \u7f13\u5b58\u96ea\u5d29"})),(0,r.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xiaolyuh/layering-cache"},"Laying Cache"),"\uff0c\u63d0\u4f9b\u652f\u6301\u5206\u5e03\u5f0f\u73af\u5883\u7684\u591a\u7ea7\u7f13\u5b58\u529f\u80fd\u3002\u4f7f\u7528 Caffeine \u4f5c\u4e3a\u4e00\u7ea7\u672c\u5730\u7f13\u5b58\uff0cRedis \u4f5c\u4e3a\u4e8c\u7ea7\u96c6\u4e2d\u5f0f\u7f13\u5b58\u3002\u652f\u6301\u7f13\u5b58\u4fe1\u606f\u76d1\u63a7\u7edf\u8ba1\u3001\u652f\u6301\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u5728\u6ce8\u89e3\u4e0a\u76f4\u63a5\u914d\u7f6e\u3001\u652f\u6301\u7f13\u5b58\u7684\u81ea\u52a8\u5237\u65b0\u3001\u7f13\u5b58 Key \u652f\u6301 SpEL \u8868\u8fbe\u5f0f\u3001\u652f\u6301\u65e0\u611f\u7981\u7528\u4e00\u7ea7\u7f13\u5b58\u6216\u4e8c\u7ea7\u7f13\u5b58\u3002"),(0,r.kt)("admonition",{title:"\u6269\u5c55\uff1a\u4ec0\u4e48\u662f\u7f13\u5b58\u7a7f\u900f\u3001\u7f13\u5b58\u96ea\u5d29\u548c\u7f13\u5b58\u51fb\u7a7f\uff1f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u7a7f\u900f"),"\uff08cache penetration\uff09\u662f\u7528\u6237\u8bbf\u95ee\u7684\u6570\u636e\u65e2\u4e0d\u5728\u7f13\u5b58\u5f53\u4e2d\uff0c\u4e5f\u4e0d\u5728\u6570\u636e\u5e93\u4e2d\u3002\u8fd9\u5c31\u5bfc\u81f4\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u5230\u5e95\u5c42\u6570\u636e\u5e93\u8fdb\u884c\u67e5\u8be2\uff0c\u7f13\u5b58\u4e5f\u5931\u53bb\u4e86\u610f\u4e49\u3002\u5f53\u9ad8\u5e76\u53d1\u6216\u6709\u4eba\u5229\u7528\u4e0d\u5b58\u5728\u7684Key\u9891\u7e41\u653b\u51fb\u65f6\uff0c\u6570\u636e\u5e93\u7684\u538b\u529b\u9aa4\u589e\uff0c\u751a\u81f3\u5d29\u6e83\uff0c\u8fd9\u5c31\u662f\u7f13\u5b58\u7a7f\u900f\u95ee\u9898\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u96ea\u5d29"),"\uff08Cache Avalanche\uff09\u5f53\u5927\u91cf\u7684\u70ed\u70b9KEY\u540c\u65f6\u5931\u6548\u6216\u8005\u7f13\u5b58\u670d\u52a1\u6545\u969c\u5bfc\u81f4\u8bf7\u6c42\u5168\u90e8\u8f6c\u53d1\u5230\u6570\u636e\u5e93\uff0c\u4ece\u800c\u5bfc\u81f4\u6570\u636e\u5e93\u538b\u529b\u9aa4\u589e\uff0c\u751a\u81f3\u5b95\u673a\u3002\u4ece\u800c\u5f62\u6210\u4e00\u7cfb\u5217\u7684\u8fde\u9501\u53cd\u5e94\uff0c\u9020\u6210\u7cfb\u7edf\u5d29\u6e83\u7b49\u60c5\u51b5\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u51fb\u7a7f"),"\uff08Cache Breakdown\uff09\u5982\u679c\u6709\u5355\u4e2a\u70ed\u70b9key\uff0c\u5728\u4e0d\u505c\u7684\u625b\u7740\u5927\u5e76\u53d1\uff0c\u5728\u8fd9\u4e2akey\u5931\u6548\u7684\u77ac\u95f4\uff0c\u6301\u7eed\u7684\u5927\u5e76\u53d1\u8bf7\u6c42\u5c31\u4f1a\u51fb\u7834\u7f13\u5b58\uff0c\u76f4\u63a5\u8bf7\u6c42\u5230\u6570\u636e\u5e93\uff0c\u597d\u50cf\u86ee\u529b\u51fb\u7a7f\u4e00\u6837\u3002")),(0,r.kt)("p",null,"\u76d8\u53e4\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58\u7ec4\u4ef6\u901a\u8fc7\u7f13\u5b58\u7a7a\u503c\u6216\u9ed8\u8ba4\u503c\u6765\u89e3\u51b3\u7f13\u5b58\u7a7f\u900f\u95ee\u9898\u3001\u901a\u8fc7\u5224\u65ad\u5373\u5c06\u8fc7\u671f\u65f6\u53d1\u8d77\u5f02\u6b65\u52a0\u8f7d\u7f13\u5b58\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u7f13\u5b58\u51fb\u7a7f\u548c\u96ea\u5d29\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,r.kt)(i.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(i.Z,{value:"dependency2",label:"\u7f13\u5b58\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-cache-spring-boot-starter</artifactId>\n</dependency>\n")))),(0,r.kt)("h2",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)(l.Z,{defaultValue:"application-dev",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,r.kt)(i.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-cache-layering\n\n# layering-cache \u591a\u7ea7\u7f13\u5b58\nlayering-cache.stats=false\n# redis\u5355\u673a\nlayering-cache.redis.database=1\nlayering-cache.redis.host=localhost\nlayering-cache.redis.port=6379\nlayering-cache.redis.password=\n# redis\u96c6\u7fa4\n#layering-cache.redis.password=\n#layering-cache.redis.cluster=127.0.0.1:6379,127.0.0.1:6378\nlayering-cache.redis.serializer=com.github.xiaolyuh.redis.serializer.JacksonRedisSerializer\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,r.kt)("h3",{id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"},"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("div",{style:{width:"120px"}},"\u914d\u7f6e\u9879")),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layering-cache.stats"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u76d1\u63a7\u7edf\u8ba1\u5f00\u5173\uff0c\u7f3a\u7701true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layering-cache.redis.serializer"),(0,r.kt)("td",{parentName:"tr",align:null},"Redis\u5e8f\u5217\u5316\u65b9\u5f0f")))),(0,r.kt)("h2",{id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e"},"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e"),(0,r.kt)("p",null,"\u76f4\u63a5\u5728\u9700\u8981\u7f13\u5b58\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Cacheable"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@CacheEvict"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@CachePut")," \u6ce8\u89e3\u3002\uff08 ",(0,r.kt)("inlineCode",{parentName:"p"},"@FirstCache"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@SecondaryCache")," \u4e3a\u6ce8\u89e3\u914d\u7f6e\u9879\uff0c\u4e0d\u80fd\u5355\u72ec\u4f7f\u7528\uff09"),(0,r.kt)("h3",{id:"firstcache"},"@FirstCache"),(0,r.kt)("p",null,"\u4e00\u7ea7\u7f13\u5b58\u914d\u7f6e\u9879\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"initialCapacity"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u521d\u59cb Size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximumSize"),(0,r.kt)("td",{parentName:"tr",align:null},"5000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6700\u5927 Size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6709\u6548\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeUnit"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeUnit.MINUTES"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u5355\u4f4d\uff0c\u9ed8\u8ba4\u5206\u949f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expireMode"),(0,r.kt)("td",{parentName:"tr",align:null},"ExpireMode.WRITE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u5931\u6548\u6a21\u5f0f\uff0cExpireMode.WRITE\uff1a\u6700\u540e\u4e00\u6b21\u5199\u5165\u540e\u5230\u671f\u5931\u6548\uff0cExpireMode.ACCESS\uff1a\u6700\u540e\u4e00\u6b21\u8bbf\u95ee\u540e\u5230\u671f\u5931\u6548")))),(0,r.kt)("h3",{id:"secondarycache"},"@SecondaryCache"),(0,r.kt)("p",null,"\u4e8c\u7ea7\u7f13\u5b58\u914d\u7f6e\u9879\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6709\u6548\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preloadTime"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u4e3b\u52a8\u5728\u5931\u6548\u524d\u5f3a\u5236\u5237\u65b0\u7f13\u5b58\u7684\u65f6\u95f4\uff0c\u5efa\u8bae\u662f expireTime * 0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeUnit"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeUnit.HOURS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u5355\u4f4d\uff0c\u9ed8\u8ba4\u5c0f\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceRefresh"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f3a\u5236\u5237\u65b0\uff08\u76f4\u63a5\u6267\u884c\u88ab\u7f13\u5b58\u65b9\u6cd5\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"magnification"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a\u503c\u548c null \u503c\u4e4b\u95f4\u7684\u65f6\u95f4\u500d\u7387\uff0c\u9ed8\u8ba4\u662f 1\u3002\u5982 expireTime=60 \u79d2\uff0cmagnification=10\uff0c\u90a3\u4e48\u5f53\u7f13\u5b58\u7a7a\u503c\u65f6\uff0c\u7a7a\u503c\u7684\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u662f 60/10=6 \u79d2\u3002")))),(0,r.kt)("h3",{id:"cacheable"},"@Cacheable"),(0,r.kt)("p",null,"\u8868\u793a\u7528\u7684\u65b9\u6cd5\u7684\u7ed3\u679c\u662f\u53ef\u4ee5\u88ab\u7f13\u5b58\u7684\uff0c\u5f53\u8be5\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u5148\u68c0\u67e5\u7f13\u5b58\u662f\u5426\u547d\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u547d\u4e2d\u518d\u8c03\u7528\u88ab\u7f13\u5b58\u7684\u65b9\u6cd5\uff0c\u5e76\u5c06\u5176\u8fd4\u56de\u503c\u653e\u5230\u7f13\u5b58\u4e2d\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheNames"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key\uff0c\u652f\u6301 SpEL \u8868\u8fbe\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"depict"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u63cf\u8ff0\uff08\u5728\u7f13\u5b58\u7edf\u8ba1\u9875\u9762\u4f1a\u7528\u5230\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableFirstCache"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u4e00\u7ea7\u7f13\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"firstCache"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u7ea7\u7f13\u5b58\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryCache"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8c\u7ea7\u7f13\u5b58\u914d\u7f6e")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="@Cacheable \u8303\u4f8b\u4ee3\u7801"',title:'"@Cacheable','\u8303\u4f8b\u4ee3\u7801"':!0},'@Cacheable(cacheNames = "user", key = "#userId",\n        firstCache = @FirstCache(expireTime = 5),\n        secondaryCache = @SecondaryCache(expireTime = 10))\npublic UserVO getUser(Long userId) {\n    log.info("\u6267\u884cAnnotationBasedDemoService.getUser()");\n    // \u4eceDB\u6216\u5176\u5b83\u8d44\u6e90\u6e20\u9053\u83b7\u53d6\u6570\u636e\n    UserVO userVO = new UserVO();\n    userVO.setId(userId);\n    userVO.setName("\u94b1\u5b66\u68ee");\n    return userVO;\n}\n')),(0,r.kt)("h3",{id:"cacheput"},"@CachePut"),(0,r.kt)("p",null,"\u5c06\u6570\u636e\u653e\u5230\u7f13\u5b58\u4e2d\uff0c\u65b0\u589e\u7f13\u5b58\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheNames"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key\uff0c\u652f\u6301 SpEL\u8868\u8fbe\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"depict"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u63cf\u8ff0\uff08\u5728\u7f13\u5b58\u7edf\u8ba1\u9875\u9762\u4f1a\u7528\u5230\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableFirstCache"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u4e00\u7ea7\u7f13\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"firstCache"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u7ea7\u7f13\u5b58\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryCache"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8c\u7ea7\u7f13\u5b58\u914d\u7f6e")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="@CachePut \u8303\u4f8b\u4ee3\u7801"',title:'"@CachePut','\u8303\u4f8b\u4ee3\u7801"':!0},'@CachePut(cacheNames = "user", key = "#userVO.id",\n        firstCache = @FirstCache(expireTime = 10),\n        secondaryCache = @SecondaryCache(expireTime = 30))\npublic UserVO saveUser(UserVO userVO) {\n    log.info("\u6267\u884cAnnotationBasedDemoService.saveUser()");\n    return userVO;\n}\n')),(0,r.kt)("h3",{id:"cacheevict"},"@CacheEvict"),(0,r.kt)("p",null,"\u5220\u9664\u7f13\u5b58\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u540d\u79f0\uff0ccacheNames \u7684\u522b\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheNames"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32\u6570\u7ec4\t\u7f13\u5b58\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key\uff0c\u652f\u6301 SpEL \u8868\u8fbe\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5220\u9664\u7f13\u5b58\u4e2d\u6240\u6709\u6570\u636e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u53ea\u5220\u9664\u5173\u8054 key \u7684\u7f13\u5b58\u6570\u636e\uff0c\u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u6210 true \u65f6 key \u53c2\u6570\u5c06\u65e0\u6548")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="@CacheEvict \u8303\u4f8b\u4ee3\u7801"',title:'"@CacheEvict','\u8303\u4f8b\u4ee3\u7801"':!0},'@CacheEvict(cacheNames = "user", key = "#userId")\npublic void delUser(Long userId) {\n    log.info("\u6267\u884cAnnotationBasedDemoService.delUser()");\n}\n\n@CacheEvict(cacheNames = "user", allEntries = true)\npublic void delAllUsers() {\n    log.info("\u6267\u884cAnnotationBasedDemoService.delAllUsers()");\n}\n')),(0,r.kt)("h2",{id:"\u57fa\u4e8e-api-\u7f16\u7a0b"},"\u57fa\u4e8e API \u7f16\u7a0b"),(0,r.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Laying Cahce \u63d0\u4f9b\u7684 API \u8fdb\u884c\u786c\u7f16\u7801\u64cd\u4f5c\u4e24\u7ea7\u7f13\u5b58\uff0c\u4f46\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002\u8fd9\u91cc\u5c31\u4e0d\u505a\u8be6\u7ec6\u8bb2\u89e3\u4e86\uff0c\u53ef\u4ee5\u5728\u53c2\u8003\u8303\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBasedDemoService")," \u7c7b\u4e2d\u627e\u5230\u76f8\u5173\u7684\u4ee3\u7801\u3002"),(0,r.kt)("h2",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,r.kt)("p",null,"\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableLayeringCache")," \u6ce8\u89e3\u7684\u52a0\u6301\u3002\u5982\u4e0b\u4ee3\u7801\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"@EnableLayeringCache\n@SpringBootApplication\npublic class LayeringCachePanguApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(LayeringCachePanguApplication.class).run(args);\n    }\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"\u5feb\u901f QA\uff1a"),"\u53ef\u4ee5\u7981\u7528\u4e00\u7ea7\u7f13\u5b58\uff0c\u53ea\u4f7f\u7528\u4e8c\u7ea7\u7f13\u5b58\u5417\uff1f"),(0,r.kt)("div",null,"\u5fc5\u987b\u53ef\u4ee5\u3002\u8bbe\u7f6e enableFirstCache = false \u5373\u53ef\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"\u5feb\u901f QA\uff1a"),"\u53ef\u4ee5\u7981\u7528\u4e8c\u7ea7\u7f13\u5b58\uff0c\u53ea\u4f7f\u7528\u4e00\u7ea7\u7f13\u5b58\u5417\uff1f"),(0,r.kt)("div",null,"\u53ef\u4ee5\u3002\u8bbe\u7f6e\u4e8c\u7ea7\u7f13\u5b58 expireTime \u4e3a 0 \u5373\u53ef\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"\u5feb\u901f QA\uff1a"),"\u6211\u53ef\u4ee5\u7528 Spring Cache \u7684 RedisTemplate API \u5417\uff1f"),(0,r.kt)("div",null,"\u53ef\u4ee5\u3002Laying Cache \u548c Spring Cache \u76f8\u4e92\u9694\u79bb\u7684\uff0c\u4f60\u53ea\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u52a0\u5165 Spring Cache \u7684\u914d\u7f6e\uff0c\u5c31\u53ef\u4ee5\u6ce8\u5165 RedisTemplate \u76f4\u63a5\u4f7f\u7528\u4e86\u3002\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u548c Laying Cache \u6df7\u5408\u4f7f\u7528\u3002\u5177\u4f53\u7528\u6cd5\u53ef\u4ee5\u53c2\u8003\u8303\u4f8b\uff1apangu-examples-cache-single\u3002")),(0,r.kt)("h2",{id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"},"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-empty-web"},"pangu-examples-cache-layering"),"\uff1a\u4e24\u7ea7\u7f13\u5b58\uff08\u672c\u5730\u7f13\u5b58 + Redis \u96c6\u4e2d\u7f13\u5b58\uff09\u8303\u4f8b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-cache-single"},"pangu-examples-cache-single"),"\uff1aSpring Cache \u4e00\u7ea7\u7f13\u5b58 API\uff08 RedisTemplate \uff09\u8303\u4f8b")),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}m.isMDXComponent=!0}}]);