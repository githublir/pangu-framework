"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[6566],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=l,g=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return t?n.createElement(g,r(r({ref:a},d),{},{components:t})):n.createElement(g,r({ref:a},d))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=c;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),l=t(6010);const i="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),l=t(7294),i=t(6010),r=t(2389),s=t(7392),o=t(7094),p=t(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:a,block:t,defaultValue:r,values:m,groupId:c,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,s.l)(k,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===r?r:r??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,o.U)(),[w,Z]=(0,l.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=c){const e=v[c];null!=e&&e!==w&&k.some((a=>a.value===e))&&Z(e)}const x=e=>{const a=e.currentTarget,t=N.indexOf(a),n=k[t].value;n!==w&&(T(a),Z(n),null!=c&&y(c,String(n)))},I=e=>{let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},g)},k.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>N.push(e),onKeyDown:I,onClick:x},r,{className:(0,i.Z)("tabs__item",u,r?.className,{"tabs__item--active":w===a})}),t??a)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function c(e){const a=(0,r.Z)();return l.createElement(m,(0,n.Z)({key:String(a)},e))}},6202:(e,a,t)=>{t.r(a),t.d(a,{Highlight:()=>m,assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),i=t(5488),r=t(5162);const s={title:"\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb",tags:["\u76d8\u53e4 Admin"],sidebar_position:1,slug:"/pangu-admin/quick-start"},o=void 0,p={unversionedId:"pangu-admin/\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb",id:"pangu-admin/\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb",title:"\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb",description:"\u76d8\u53e4 Admin \u5feb\u901f\u5165\u95e8 | SUCI(Vue3\u3001Element-Plus) | \u76d8\u53e4\u5f00\u53d1\u6846\u67b6",source:"@site/docs/pangu-admin/\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb.md",sourceDirName:"pangu-admin",slug:"/pangu-admin/quick-start",permalink:"/docs/pangu-admin/quick-start",draft:!1,editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/pangu-admin/\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb.md",tags:[{label:"\u76d8\u53e4 Admin",permalink:"/docs/tags/\u76d8\u53e4-admin"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb",tags:["\u76d8\u53e4 Admin"],sidebar_position:1,slug:"/pangu-admin/quick-start"},sidebar:"tutorialSidebar",previous:{title:"\u8303\u4f8b\u6a21\u7248\u5de5\u7a0b",permalink:"/docs/examples-list"},next:{title:"\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757",permalink:"/docs/pangu-admin/new-module"}},d={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e",id:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e",level:2},{value:"\u540e\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"\u540e\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u5b89\u88c5 &amp; \u542f\u52a8",id:"\u5b89\u88c5--\u542f\u52a8",level:3},{value:"\u622a\u5c4f\uff08\u90e8\u5206\uff09",id:"\u622a\u5c4f\u90e8\u5206",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],m=e=>{let{children:a,color:t}=e;return(0,l.kt)("span",{style:{backgroundColor:t,borderRadius:"3px",color:"#fff",padding:"0.1rem",margin:"0.2rem"}},a)},c={toc:u,Highlight:m};function g(e){let{components:a,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"\u76d8\u53e4 Admin \u5feb\u901f\u5165\u95e8 | SUCI(Vue3\u3001Element-Plus) | \u76d8\u53e4\u5f00\u53d1\u6846\u67b6"),(0,l.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u90e8\u7f72\u8fd0\u7ef4\u6307\u5357"}),(0,l.kt)("meta",{name:"description",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5355\u4f53\u5206\u5c42\u67b6\u6784\uff09"})),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u76d8\u53e4 Admin")," \u662f\u4e00\u5957\u57fa\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"SCUI"),"(Vue3\u3001Element-Plus) + ",(0,l.kt)("strong",{parentName:"p"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"),"\u7684\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u524d\u540e\u7aef\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\u3002\u5e76\u9884\u7f6e\u4e86\u8f7b\u91cf\u6210\u719f\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/online-demo"},"\u6743\u9650\u7cfb\u7edf\u53c2\u8003\u5b9e\u73b0")," \u3002\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u5b83\u5feb\u901f\u642d\u5efa\u4e8c\u6b21\u5f00\u53d1\u811a\u624b\u67b6\uff0c\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\u3002"),(0,l.kt)("h2",{id:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e"},"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e"),(0,l.kt)("p",null,"\u76d8\u53e4 Admin \u4ed3\u5e93\u4ee3\u7801\u8def\u5f84\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"pangu-framework/pangu-admin"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pangu-admin-backend\uff1a\u540e\u7aef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pangu-admin-web\uff1a\u7edf\u4e00\u7f51\u5173\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"pangu-admin-system\uff1a\u6743\u9650\u7cfb\u7edf\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"XX-XXN\uff1a\u4e1a\u52a1\u7cfb\u7edf\u6a21\u5757 N (\u4e8c\u6b21\u5f00\u53d1)"))),(0,l.kt)("li",{parentName:"ul"},"pangu-admin-frontend\uff1a\u524d\u7aef")),(0,l.kt)("h2",{id:"\u540e\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"\u540e\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u540e\u7aef\u5de5\u7a0b\u5f15\u5165 IDEA\u3002\u5de5\u7a0b\u4ee3\u7801\uff1apangu-framework/pangu-admin/pangu-admin-backend\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u76ee\u5f55 ~/pangu-admin-system/pangu-admin-system-app/src/main/resources/sql \u4e2d\u7684\u6570\u636e\u811a\u672c\u3002")),(0,l.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u5206\u522b\u5728 nacos \u914d\u7f6e\u4e2d\u5fc3\u521b\u5efa\u6a21\u5757",(0,l.kt)("inlineCode",{parentName:"p"},"pangu-admin-web"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"pangu-admin-system-app"),"\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(7527).Z,width:"2508",height:"692"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e naocs \u914d\u7f6e\u4e2d\u5fc3\u7684\u76f8\u5173\u7528\u6cd5\u8bf7\u67e5\u9605\u5f00\u53d1\u6307\u5357\u7ae0\u8282\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3"),"\u3002")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pangu-admin-web",label:"pangu-admin-web",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Data Id \u4e3a ppangu-admin-web \u7684\u914d\u7f6e\u6570\u636e"',title:'"Data',Id:!0,"\u4e3a":!0,"ppangu-admin-web":!0,'\u7684\u914d\u7f6e\u6570\u636e"':!0},"spring.jackson.time-zone=GMT+8\npangu.web.cross-origin=true\n\ndubbo.protocol.name=dubbo\ndubbo.protocol.port=-1\ndubbo.consumer.timeout=5000\ndubbo.registry.address=nacos://${nacos.server-addr}?namespace=${nacos.namespace}\ndubbo.consumer.check=false\n\napp.jwt.secret-key=alliswell666\napp.jwt.ttl-min=480\napp.jwt.persistent=true\n\napp.log.queue.producer.disabled=false\n#app.log.queue.producer.excludes.method-start-with=list,find,select,query,read\napp.log.queue.consumer.pool.threads=10\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\nlogging.level.com.alibaba.nacos.client.config.impl.ClientWorker=WARN\nlogging.level.com.yomahub.tlog.dubbo.filter=ERROR\n"))),(0,l.kt)(r.Z,{value:"pangu-admin-system-app",label:"pangu-admin-system-app",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Data Id \u4e3a pangu-admin-system-app \u7684\u914d\u7f6e\u6570\u636e"',title:'"Data',Id:!0,"\u4e3a":!0,"pangu-admin-system-app":!0,'\u7684\u914d\u7f6e\u6570\u636e"':!0},"dubbo.protocol.name=dubbo\ndubbo.protocol.port=-1\ndubbo.consumer.timeout=5000\ndubbo.registry.address=nacos://${nacos.server-addr}?namespace=${nacos.namespace}\ndubbo.consumer.check=false\ndubbo.provider.filter=-exception\n\nspring.datasource.type=com.zaxxer.hikari.HikariDataSource\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.datasource.url=jdbc:mysql://localhost:3306/pangu-admin?useUnicode=true&characterEncoding=utf-8&autoReconnect=true&failOverReadOnly=false&allowMultiQueries=true&useSSL=false&rewriteBatchedStatements=true\nspring.datasource.username=root\nspring.datasource.password=root123456\n\nmybatis-plus.mapperLocations=classpath*:/mapper/**/*.xml\nmybatis-plus.configuration.log-impl=org.apache.ibatis.logging.slf4j.Slf4jImpl\nmybatis-plus.global-config.db-config.logic-delete-field=deleted\nmybatis-plus.global-config.db-config.logic-not-delete-value=0\nmybatis-plus.global-config.db-config.logic-delete-value=id\npangu.jdbc.db-type=mysql\n\nlogging.file.name=logs/pangu.log\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\nlogging.level.com.pulanit.pangu.admin.system.dao=DEBUG\n")))),(0,l.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.kt)("p",null,"\u542f\u52a8\u53c2\u6570\u8bf4\u660e  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-Dnacos.server-addr: nacos \u670d\u52a1\u5668\u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ul"},"-Dnacos.namespace: nacos \u91cc\u7684\u547d\u540d\u7a7a\u95f4 ID \u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u542f\u52a8\u6743\u9650\u670d\u52a1\u6a21\u5757")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u542f\u52a8\u53c2\u6570"',title:'"\u542f\u52a8\u53c2\u6570"'},"-Dnacos.server-addr=100.100.100.XXX:8048 -Dnacos.namespace=pangu-dev\n")),(0,l.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\u5728 nacos \u670d\u52a1\u5217\u8868\u4e2d\u53ef\u770b\u5230\u76f8\u5173\u670d\u52a1\u63d0\u4f9b\u8005\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(2757).Z,width:"2798",height:"1058"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u542f\u52a8\u7f51\u5173\u6a21\u5757")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u542f\u52a8\u53c2\u6570"',title:'"\u542f\u52a8\u53c2\u6570"'},"-Dnacos.server-addr=100.100.100.XXX:8048 -Dnacos.namespace=pangu-dev\n")),(0,l.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\u5728 nacos \u670d\u52a1\u5217\u8868\u4e2d\u53ef\u770b\u5230\u76f8\u5173\u670d\u52a1\u6d88\u8d39\u8005\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(6332).Z,width:"2500",height:"952"})),(0,l.kt)("h2",{id:"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa"),(0,l.kt)("p",null,"\u524d\u7aef\u5de5\u7a0b\u4ee3\u7801\u8def\u5f84\uff1apangu-framework/pangu-admin/pangu-admin-frontend\u3002"),(0,l.kt)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u76d8\u53e4 Admin \u524d\u7aef\u57fa\u4e8e SUCI \u5f00\u53d1\u3002SCUI \u662f\u4e00\u4e2a\u4e2d\u540e\u53f0\u524d\u7aef\u89e3\u51b3\u65b9\u6848\uff0c\u57fa\u4e8e VUE3 \u548c ElementPlus \u5b9e\u73b0\u3002 \u4f7f\u7528\u6700\u65b0\u7684\u524d\u7aef\u6280\u672f\u6808\uff0c\u63d0\u4f9b\u5404\u7c7b\u5b9e\u7528\u7684\u7ec4\u4ef6\u65b9\u4fbf\u5728\u4e1a\u52a1\u5f00\u53d1\u65f6\u7684\u8c03\u7528\uff0c\u5e76\u4e14\u6301\u7eed\u6027\u7684\u63d0\u4f9b\u4e30\u5bcc\u7684\u4e1a\u52a1\u6a21\u677f\u5e2e\u52a9\u4f60\u5feb\u901f\u642d\u5efa\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u524d\u7aef\u4efb\u52a1\u3002\u66f4\u591a SCUI \u4fe1\u606f\uff0c\u8bf7\u76f4\u63a5\u53c2\u8003\u5176 ",(0,l.kt)("a",{parentName:"p",href:"https://lolicode.gitee.io/scui-doc/guide/"},"\u9879\u76ee\u4e3b\u9875\u548c\u76f8\u5173\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5--\u542f\u52a8"},"\u5b89\u88c5 & \u542f\u52a8"),(0,l.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5b89\u88c5\u4f9d\u8d56\u548c\u542f\u52a8\u9700\u4f9d\u8d56npm\u3002\u5b89\u88c5\u65b9\u6cd5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/"},"https://nodejs.org/zh-cn"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\ncd pangu-framework/pangu-admin/pangu-admin-frontend\n# \u5b89\u88c5\u4f9d\u8d56\nnpm i\n# \u542f\u52a8\u9879\u76ee (\u5f00\u53d1\u6a21\u5f0f)\nnpm run serve\n# \u6784\u5efa\u90e8\u7f72\uff08\u751f\u4ea7\u6a21\u5f0f\uff09\uff1a\u5c06\u6839\u76ee\u5f55\u751f\u6210 dist \u6587\u4ef6\u5939\u53d1\u5e03\u5230\u670d\u52a1\u5668\u5373\u53ef\n# npm run build\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u542f\u52a8\u6210\u529f\u540e\u53ef\u901a\u8fc7\u63a7\u5236\u53f0\u63d0\u793a\u4fe1\u606f\u5f00\u59cb\u8bbf\u95ee\u3002\u5982\uff1ahttp://localhost:2800"),(0,l.kt)("h3",{id:"\u622a\u5c4f\u90e8\u5206"},"\u622a\u5c4f\uff08\u90e8\u5206\uff09"),(0,l.kt)("p",null,"\u5982\u4e0b\u4e3a\u6743\u9650\u7cfb\u7edf\u53c2\u8003\u5b9e\u73b0\u7684\u90e8\u5206\u622a\u5c4f\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"1",label:"1",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(2990).Z,width:"2874",height:"1578"}))),(0,l.kt)(r.Z,{value:"2",label:"2",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(3613).Z,width:"2878",height:"1582"}))),(0,l.kt)(r.Z,{value:"3",label:"3",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(6176).Z,width:"2880",height:"1582"}))),(0,l.kt)(r.Z,{value:"4",label:"4",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(1652).Z,width:"2876",height:"1584"}))),(0,l.kt)(r.Z,{value:"5",label:"5",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(3074).Z,width:"2880",height:"1584"}))),(0,l.kt)(r.Z,{value:"6",label:"6",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(9008).Z,width:"2880",height:"1582"}))),(0,l.kt)(r.Z,{value:"7",label:"7",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(9773).Z,width:"2874",height:"1586"}))),(0,l.kt)(r.Z,{value:"8",label:"8",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(7677).Z,width:"2880",height:"1586"}))),(0,l.kt)(r.Z,{value:"9",label:"9",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(1703).Z,width:"2874",height:"1582"}))),(0,l.kt)(r.Z,{value:"10",label:"10",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(2828).Z,width:"2878",height:"1584"}))),(0,l.kt)(r.Z,{value:"11",label:"11",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(3739).Z,width:"2880",height:"1584"}))),(0,l.kt)(r.Z,{value:"12",label:"12",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(9461).Z,width:"2874",height:"1584"}))),(0,l.kt)(r.Z,{value:"13",label:"13",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(6582).Z,width:"2880",height:"1586"}))),(0,l.kt)(r.Z,{value:"14",label:"14",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:t(1150).Z,width:"2876",height:"1582"})))),(0,l.kt)("p",null,"\u5b8c\u6574\u4f53\u9a8c\u8bf7\u8bbf\u95ee\uff1a",(0,l.kt)("a",{parentName:"p",href:"/online-demo"},"\u5728\u7ebf\u6f14\u793a\u7cfb\u7edf"),"\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"\u5feb\u901f QA\uff1a"),"\u53ef\u4ee5\u5c06\u76d8\u53e4 Admin \u540e\u7aef\u6539\u4e3a\u5355\u4f53\u5e94\u7528\u5417\uff1f"),(0,l.kt)("div",null,"\u5fc5\u987b\u53ef\u4ee5\u3002\u53ea\u9700\u8981\u81ea\u5df1\u505a\u4e00\u4e9b\u7b80\u5355\u7684\u4ee3\u7801\u5408\u5e76\u5373\u53ef\u5c06 RPC \u5fae\u670d\u52a1\u8c03\u7528\u6539\u4e3a\u672c\u5730\u670d\u52a1\u8c03\u7528\u3002\u5982\u679c\u8fde\u914d\u7f6e\u4e2d\u5fc3\u90fd\u4e0d\u60f3\u642d\u5efa\u7684\u8bdd\uff0c\u53ef\u4ee5\u5c06\u914d\u7f6e\u76f4\u63a5\u6539\u4e3a\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u3002")),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}g.isMDXComponent=!0},7527:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/35-pangu-admin-818905eaab32c4b60423c06db1bb20a7.png"},2757:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/36-pangu-admin-eb80f595f745157c04dce5b331633c3a.png"},6332:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/37-pangu-admin-f74220e027d98f67b4aee8615faff3bf.png"},2990:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/38-pangu-admin-8fd00b65afe3e10fa86d89da0824b77b.png"},3613:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/39-pangu-admin-fbb440059bfc8cfbc6b5026001ad7acb.png"},6176:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/40-pangu-admin-ad1dd9e7711793db5b348f73687c2f60.png"},1652:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/41-pangu-admin-57ba140bcfb2b45834a5855dc7fd8831.png"},3074:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/42-pangu-admin-f4422cb9f17440a291264bf97850fada.png"},9008:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/43-pangu-admin-4b1ab7691d2b0c891215a686f5d109cb.png"},9773:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/44-pangu-admin-79df08a6afac1c0c203185951a5a4add.png"},7677:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/45-pangu-admin-24c8467891fc61f6bd41e082d00db857.png"},1703:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/46-pangu-admin-c3d2cc1d8f420786cf9e3138cc35f2cf.png"},2828:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/47-pangu-admin-049f9d2f4b2bf9d075fa27778b5fed8a.png"},3739:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/48-pangu-admin-e9e17c01a74b8693278c9c1bedc7537f.png"},1150:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/49-pangu-admin-d8bc1b4c5bc06e3d48faed2c23b5694b.png"},6582:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/50-pangu-admin-a324e2508d61c1d156a6500bea34c705.png"},9461:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/51-pangu-admin-b7296a4a5e20475550d11b4ae3b99b35.png"}}]);