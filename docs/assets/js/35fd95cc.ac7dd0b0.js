"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[1204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),p=a(7094),c=a(2466);const u="tabList__CuJ",s="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:m,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,p.U)(),[N,T]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=w.indexOf(t),n=b[a].value;n!==N&&(x(t),T(n),null!=m&&h(m,String(n)))},j=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:j,onClick:I},o,{className:(0,l.Z)("tabs__item",s,o?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},3953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={title:"\u5206\u5e03\u5f0f\u9501",tags:["\u5206\u5e03\u5f0f\u9501","\u6570\u636e\u6301\u4e45\u5316"],sidebar_position:15,slug:"/advanced-guide/distributed-lock"},p=void 0,c={unversionedId:"advanced-guide/\u5206\u5e03\u5f0f\u9501",id:"advanced-guide/\u5206\u5e03\u5f0f\u9501",title:"\u5206\u5e03\u5f0f\u9501",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u9501 | Lock4j",source:"@site/docs/advanced-guide/\u5206\u5e03\u5f0f\u9501.md",sourceDirName:"advanced-guide",slug:"/advanced-guide/distributed-lock",permalink:"/pangu-framework/docs/advanced-guide/distributed-lock",draft:!1,editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/advanced-guide/\u5206\u5e03\u5f0f\u9501.md",tags:[{label:"\u5206\u5e03\u5f0f\u9501",permalink:"/pangu-framework/docs/tags/\u5206\u5e03\u5f0f\u9501"},{label:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/pangu-framework/docs/tags/\u6570\u636e\u6301\u4e45\u5316"}],version:"current",lastUpdatedBy:"xiongchun",sidebarPosition:15,frontMatter:{title:"\u5206\u5e03\u5f0f\u9501",tags:["\u5206\u5e03\u5f0f\u9501","\u6570\u636e\u6301\u4e45\u5316"],sidebar_position:15,slug:"/advanced-guide/distributed-lock"},sidebar:"tutorialSidebar",previous:{title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",permalink:"/pangu-framework/docs/advanced-guide/layering-cache"},next:{title:"\u5206\u5e03\u5f0f\u4e8b\u52a1",permalink:"/pangu-framework/docs/advanced-guide/distributed-transaction"}},u={},s=[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:2},{value:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e",id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e",level:2},{value:"@Lock4j",id:"lock4j",level:3},{value:"\u4ee3\u7801\u7247\u6bb5",id:"\u4ee3\u7801\u7247\u6bb5",level:3},{value:"\u57fa\u4e8e API \u7f16\u7a0b",id:"\u57fa\u4e8e-api-\u7f16\u7a0b",level:2},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",level:2},{value:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u9501 | Lock4j"),(0,r.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5206\u5e03\u5f0f\u9501 | Lock4j"})),(0,r.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/baomidou/lock4j"},"Lock4j")," \u63d0\u4f9b\u5206\u5e03\u5f0f\u9501\u3002\u652f\u6301\u6ce8\u89e3\u58f0\u660e\u5f0f\u548c API \u7f16\u7a0b\u5f0f\u5bf9\u4e1a\u52a1\u4ee3\u7801\u5728\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u52a0\u5e76\u53d1\u9501\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,r.kt)(o.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(o.Z,{value:"dependency2",label:"\u7f13\u5b58\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-cache-spring-boot-starter</artifactId>\n</dependency>\n")))),(0,r.kt)("h2",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)(l.Z,{defaultValue:"application-dev",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,r.kt)(o.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-lock-redis-based\n\n# spring-redis\nspring.redis.host=localhost\nspring.redis.database=1\nspring.redis.port=6379\nspring.redis.password=\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,r.kt)("h2",{id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e"},"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e"),(0,r.kt)("p",null,"\u76f4\u63a5\u5728\u9700\u8981\u7f13\u5b58\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Lock4j")," \u6ce8\u89e3\u3002"),(0,r.kt)("h3",{id:"lock4j"},"@Lock4j"),(0,r.kt)("p",null,"\u5206\u5e03\u5f0f\u9501\u6ce8\u89e3\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u591a\u4e2a\u65b9\u6cd5\u9501\u540c\u4e00\u628a\u9501 \u53ef\u4ee5\u7406\u89e3\u4e3a\u9501\u8d44\u6e90\u540d\u79f0\uff0c\u4e3a\u7a7a\u5219\u4f1a\u4f7f\u7528\uff1a\u5305\u540d + \u7c7b\u540d + \u65b9\u6cd5\u540d\u3002\uff08\u4e00\u822c\u4e3a\u7a7a\u5373\u53ef\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keys"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301 SPEL \u8868\u8fbe\u5f0f\uff0c\u9501\u7684 key = name + keys")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acquireTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"3000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u9501\u8d85\u65f6\u65f6\u95f4 \u5355\u4f4d\uff1a\u6beb\u79d2\u3002\u53ef\u4ee5\u7406\u89e3\u4e3a\u6392\u961f\u65f6\u5e38\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u5e38\u5c31\u9000\u51fa\u6392\u961f\uff0c\u629b\u51fa\u83b7\u53d6\u9501\u8d85\u65f6\u5f02\u5e38\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expire"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fc7\u671f\u65f6\u95f4 \u5355\u4f4d\uff1a\u6beb\u79d2\u3002\u4e3b\u8981\u662f\u9632\u6b62\u6b7b\u9501\uff0c\u5efa\u8bae\u4f30\u8ba1\u597d\u4f60\u9501\u65b9\u6cd5\u8fd0\u884c\u65f6\u5e38\uff0c\u6b63\u5e38\u6ca1\u6709\u590d\u6742\u4e1a\u52a1\u7684\u589e\u5220\u6539\u67e5\u6700\u591a\u51e0\u79d2\uff0c\u7559\u6709\u4e00\u5b9a\u5197\u4f59\uff0c10 \u79d2\u8db3\u591f\u3002\u9ed8\u8ba4 30 \u79d2\u662f\u4e3a\u4e86\u517c\u5bb9\u7edd\u5927\u90e8\u5206\u573a\u666f\u3002")))),(0,r.kt)("h3",{id:"\u4ee3\u7801\u7247\u6bb5"},"\u4ee3\u7801\u7247\u6bb5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'/**\n * \u9ed8\u8ba4\u83b7\u53d6\u9501\u8d85\u65f6 3 \u79d2\uff0c30 \u79d2\u9501\u8fc7\u671f\n */\n@Lock4j\npublic void doBiz() {\n    log.info("\u6267\u884cdoBiz...");\n    ThreadUtil.sleep(25*1000);\n}\n\n/**\n * \u914d\u7f6e\u83b7\u53d6\u9501\u8d85\u65f6\u65f6\u95f4\u548c\u9501\u8fc7\u671f\u65f6\u95f4 \u652f\u6301 SPEL\n * @param accountId\n */\n@Lock4j(keys = {"#accountId"}, expire = 20000, acquireTimeout = 10000)\npublic void doBiz2(Long accountId) {\n    log.info("\u6267\u884cdoBiz2...");\n    ThreadUtil.sleep(20*1000);\n}\n')),(0,r.kt)("h2",{id:"\u57fa\u4e8e-api-\u7f16\u7a0b"},"\u57fa\u4e8e API \u7f16\u7a0b"),(0,r.kt)("p",null,"\u6ce8\u5165 LockTemplate \u5bf9\u8c61\u5373\u53ef\u4f7f\u7528\u3002\u5982\u4e0b\u4ee3\u7801\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'@Component\npublic class ApiLockService {\n\n    @Autowired\n    private LockTemplate lockTemplate;\n\n    public void apiLock(String userId) {\n        //... \u5404\u79cd\u4e0d\u9700\u8981\u4e0a\u9501\u7684\u64cd\u4f5c\n        String lockKey = "lock4j:ApiLockService:apiLock:" + userId;\n        final LockInfo lockInfo = lockTemplate.lock(lockKey);\n        //\u7533\u8bf7\u9501\u5931\u8d25\n        if (null == lockInfo) {\n            throw new LockException("\u4e1a\u52a1\u5904\u7406\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5...");\n        }\n        //\u7533\u8bf7\u9501\u6210\u529f\n        try {\n            ThreadUtil.sleep(10000L);\n            log.info("\u6267\u884c apiLock, \u5f53\u524d\u7ebf\u7a0b{}", Thread.currentThread().getName());\n        } finally {\n            lockTemplate.releaseLock(lockInfo);\n        }\n    }\n\n}\n')),(0,r.kt)("h2",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"@SpringBootApplication\npublic class LockPanguApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(LockPanguApplication.class).run(args);\n    }\n}\n")),(0,r.kt)("h2",{id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"},"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-lock-redis-based"},"pangu-examples-lock-redis-based"),"\uff1a\u5206\u5e03\u5f0f\u9501\u8303\u4f8b")),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}m.isMDXComponent=!0}}]);