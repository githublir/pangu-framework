"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[9143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),u=a(7094),p=a(2466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:l,values:m,groupId:d,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,u.U)(),[w,N]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==w&&(O(t),N(n),null!=d&&h(d,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},g)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onClick:T},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},6361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={title:"\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528",tags:["\u5feb\u901f\u5f00\u59cb"],sidebar_position:15,slug:"/quick-start/how-to-make-monomer-architecture-app"},u=void 0,p={unversionedId:"quick-start/\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528",id:"quick-start/\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528",title:"\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528",source:"@site/docs/quick-start/\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528.md",sourceDirName:"quick-start",slug:"/quick-start/how-to-make-monomer-architecture-app",permalink:"/pangu-framework/docs/quick-start/how-to-make-monomer-architecture-app",draft:!1,editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/quick-start/\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528.md",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/pangu-framework/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",lastUpdatedBy:"xiongchun",lastUpdatedAt:1671025715,formattedLastUpdatedAt:"2022\u5e7412\u670814\u65e5",sidebarPosition:15,frontMatter:{title:"\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528",tags:["\u5feb\u901f\u5f00\u59cb"],sidebar_position:15,slug:"/quick-start/how-to-make-monomer-architecture-app"},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u67b6\u6784\u6a21\u5f0f\u5bf9\u6bd4",permalink:"/pangu-framework/docs/quick-start/how-to-make-architecture"},next:{title:"\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528",permalink:"/pangu-framework/docs/quick-start/how-to-make-microservice-architecture-app"}},s={},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:2},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",level:2},{value:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528 "),(0,r.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528"}),(0,r.kt)("meta",{name:"description",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5355\u4f53\u5206\u5c42\u67b6\u6784\uff09"})),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u5355\u4f53\u5206\u5c42\u67b6\u6784\u7684\u5e94\u7528\u3002\u6587\u4e2d\u6240\u8ff0\u4ec5\u4e3a\u642d\u5efa\u4e00\u4e2a\u5355\u4f53\u5e94\u7528\u7684\u57fa\u672c\u6846\u67b6\uff0c\u589e\u52a0",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d\u5fc3\u3001\u6570\u636e\u6301\u4e45\u5316\u3001\u7f13\u5b58\u7b49\u80fd\u529b"),"\u8bf7\u53c2\u8003",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u6307\u5357"),"\u7684\u76f8\u5173\u7ae0\u8282\u3002"),(0,r.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"\u8f6f\u4ef6\u67b6\u6784\u7684\u672c\u8d28\u662f\u4e00\u79cd\u5728\u7279\u5b9a\u8d44\u6e90\u80cc\u666f\u4e0b\u6298\u4e2d\u5e73\u8861\u540e\u8ffd\u6c42\u4e1a\u52a1\u589e\u957f\u7684\u4e00\u95e8\u827a\u672f\u3002\u867d\u7136\u76d8\u53e4\u6846\u67b6\u7684\u6807\u51c6\u59ff\u52bf\u662f\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u67b6\u6784\u5f00\u53d1\uff0c\u4f46\u51b3\u5b9a\u6280\u672f\u5f00\u53d1\u67b6\u6784\u9009\u578b\u7684\u56e0\u7d20\u5f88\u591a\uff0c\u5355\u4f53\u5e94\u7528\u4f9d\u65e7\u6709\u5f88\u591a\u5e94\u7528\u573a\u666f\u3002\u56e0\u6b64\uff0c\u76d8\u53e4\u6846\u67b6\u4e0d\u4f1a\u628a\u7528\u6237\u7ed1\u5b9a\u5230\u4e00\u4e2a\u56fa\u5b9a\u7684\u5f00\u53d1\u8303\u5f0f\u548c\u67b6\u6784\u4e0a\uff0c\u800c\u662f\u652f\u6301\u968f\u610f\u7ec4\u5408\u3001\u81ea\u52a8\u88c5\u914d\u3001\u7075\u6d3b\u63d2\u62d4\u3002\u65e2\u80fd\u6784\u5efa\u5927\u5e76\u53d1\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u67b6\u6784\u4e5f\u80fd\u642d\u5efa\u5c0f\u5de7\u7684\u5782\u76f4\u5355\u4f53\u5206\u5c42\u67b6\u6784\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,r.kt)(o.Z,{defaultValue:"dependency2",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,r.kt)(l.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"dependency2",label:"Web\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-web-spring-boot-starter</artifactId>\n</dependency>\n")))),(0,r.kt)("admonition",{title:"\u8bf4\u660e",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4ec5\u6f14\u793a\u4e86\u6700\u7b80\u6a21\u5757\u7ec4\u5408\u3002\u5982\u679c\u9700\u8981\u6570\u636e\u6301\u4e45\u5316\u3001\u6d88\u606f\u961f\u5217\u7b49\u529f\u80fd\uff0c\u8bf7\u6839\u636e\u5f00\u53d1\u6307\u5357\u76f8\u5173\u7ae0\u8282\u7ee7\u7eed\u5b89\u88c5\u76f8\u5173\u6a21\u5757\u4f9d\u8d56\u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-empty-web\nspring.jackson.time-zone=GMT+8\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")),(0,r.kt)("h2",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"@SpringBootApplication\npublic class EmptyWebPanguApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(EmptyWebPanguApplication.class).run(args);\n    }\n}\n")),(0,r.kt)("h2",{id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"},"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-empty-web"},"pangu-examples-empty-web"),"\uff1a\u5355\u4f53\u5206\u5c42Web\u5e94\u7528\u8303\u4f8b")),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}d.isMDXComponent=!0}}]);