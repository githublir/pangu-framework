"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[3477],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(v,o(o({ref:n},c),{},{components:t})):a.createElement(v,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),i=t(2389),o=t(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),s=t(6010),c="tabItem_vU9c";function p(e){var n,t,a,i=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),f=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(n=null!=p?p:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=l(),y=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,r.useState)(k),x=w[0],E=w[1],I=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==x&&b.some((function(e){return e.value===j}))&&E(j)}var O=function(e){var n=e.currentTarget,t=I.indexOf(n),a=b[t].value;a!==x&&(T(n),E(a),null!=m&&N(m,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;t=I[r]||I[I.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},b.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":x===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:O,onClick:O},null!=t?t:n)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},9054:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(6396),l=t(8215),u=["components"],s={title:"\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1",tags:["\u5feb\u901f\u5f00\u59cb","Nacos","\u670d\u52a1\u6ce8\u518c","\u670d\u52a1\u53d1\u73b0","\u670d\u52a1\u6cbb\u7406"],sidebar_position:20,slug:"/quick-start/how-to-make-microservice-architecture-app"},c=void 0,p={unversionedId:"quick-start/\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1",id:"quick-start/\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1",title:"\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1 | \u670d\u52a1\u63d0\u4f9b\u8005 | \u670d\u52a1\u6d88\u8d39\u8005",source:"@site/docs/quick-start/\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1.md",sourceDirName:"quick-start",slug:"/quick-start/how-to-make-microservice-architecture-app",permalink:"/pangu-framework/docs/quick-start/how-to-make-microservice-architecture-app",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/quick-start/\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1.md",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/pangu-framework/docs/tags/\u5feb\u901f\u5f00\u59cb"},{label:"Nacos",permalink:"/pangu-framework/docs/tags/nacos"},{label:"\u670d\u52a1\u6ce8\u518c",permalink:"/pangu-framework/docs/tags/\u670d\u52a1\u6ce8\u518c"},{label:"\u670d\u52a1\u53d1\u73b0",permalink:"/pangu-framework/docs/tags/\u670d\u52a1\u53d1\u73b0"},{label:"\u670d\u52a1\u6cbb\u7406",permalink:"/pangu-framework/docs/tags/\u670d\u52a1\u6cbb\u7406"}],version:"current",sidebarPosition:20,frontMatter:{title:"\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1",tags:["\u5feb\u901f\u5f00\u59cb","Nacos","\u670d\u52a1\u6ce8\u518c","\u670d\u52a1\u53d1\u73b0","\u670d\u52a1\u6cbb\u7406"],sidebar_position:20,slug:"/quick-start/how-to-make-microservice-architecture-app"},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u5f00\u53d1\u5355\u4f53\u5e94\u7528",permalink:"/pangu-framework/docs/quick-start/how-to-make-monomer-architecture-app"},next:{title:"\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173)",permalink:"/pangu-framework/docs/quick-start/how-to-create-http-api"}},d=[{value:"\u670d\u52a1\u63d0\u4f9b\u8005",id:"\u670d\u52a1\u63d0\u4f9b\u8005",children:[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",children:[],level:3},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",children:[],level:3},{value:"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3",id:"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3",children:[],level:3},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",children:[],level:3},{value:"\u670d\u52a1\u6ce8\u518c",id:"\u670d\u52a1\u6ce8\u518c",children:[],level:3}],level:2},{value:"\u670d\u52a1\u6d88\u8d39\u8005",id:"\u670d\u52a1\u6d88\u8d39\u8005",children:[],level:2},{value:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",children:[],level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[],level:2}],m={toc:d};function v(e){var n=e.components,s=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1 | \u670d\u52a1\u63d0\u4f9b\u8005 | \u670d\u52a1\u6d88\u8d39\u8005"),(0,i.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1 | \u670d\u52a1\u63d0\u4f9b\u8005 | \u670d\u52a1\u6d88\u8d39\u8005"}),(0,i.kt)("meta",{name:"description",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5355\u4f53\u5206\u5c42\u67b6\u6784\uff09"})),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u3002\u6587\u4e2d\u6240\u8ff0\u4ec5\u4e3a\u642d\u5efa\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u7684\u57fa\u672c\u6846\u67b6\uff08\u670d\u52a1\u6ce8\u518c&\u670d\u52a1\u53d1\u73b0\uff09\uff0c\u5982\u8981\u589e\u52a0\u914d\u7f6e\u4e2d\u5fc3\u3001\u7f51\u5173\u4ee3\u7406\u3001\u6570\u636e\u6301\u4e45\u5316\u3001\u7f13\u5b58\u7b49\u80fd\u529b\u8bf7\u53c2\u8003\u4f7f\u7528\u6307\u5357\u7684\u76f8\u5173\u7ae0\u8282\u3002"),(0,i.kt)("h2",{id:"\u670d\u52a1\u63d0\u4f9b\u8005"},"\u670d\u52a1\u63d0\u4f9b\u8005"),(0,i.kt)("h3",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,i.kt)(l.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,i.kt)(l.Z,{value:"dependency2",label:"Dubbo\u6a21\u5757",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-dubbo-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,i.kt)(l.Z,{value:"dependency3",label:"\u670d\u52a1\u63a5\u53e3\u5305",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-examples-dubbo-api</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u76d8\u53e4\u6846\u67b6\u5fae\u670d\u52a1\u4ea4\u4e92\u57fa\u4e8e Dubbo \u63d0\u4f9b\u7684\u9762\u5411\u63a5\u53e3\u4ee3\u7406\u7684\u9ad8\u6027\u80fd RPC \u8c03\u7528\u80fd\u529b\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u5185\u90e8\u670d\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u4ea4\u4e92\u8c03\u7528\uff0c\u4e0d\u7ba1\u662f\u670d\u52a1\u7684\u63d0\u4f9b\u8005\u8fd8\u662f\u670d\u52a1\u6d88\u8d39\u8005\uff0c\u90fd\u9700\u8981\u4f9d\u8d56 API \u670d\u52a1\u63a5\u53e3\u5305\u3002\u5f53\u7136\uff0c\u5bf9\u4e8e\u7f51\u5173\u800c\u8a00\uff0c\u4f7f\u7528\u7684\u662f\u6cdb\u5316\u8c03\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\u5f53\u7f51\u5173\u6a21\u5757\u4f5c\u4e3a\u5fae\u670d\u52a1\u6d88\u8d39\u8005\u7684\u65f6\u5019\u662f\u4e0d\u9700\u8981\u4f9d\u8d56\u670d\u52a1\u63d0\u4f9b\u8005\u7684\u63a5\u53e3\u5305\u7684\u3002"))),(0,i.kt)("h3",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,i.kt)(l.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7}","{7}":!0},"spring.application.name=pangu-examples-dubbo-service\n\ndubbo.protocol.name=dubbo\ndubbo.protocol.port=20880\ndubbo.consumer.timeout=5000\n#\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\ndubbo.registry.address=nacos://${nacos.server-addr}?namespace=${nacos.namespace}\ndubbo.consumer.check=false\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,i.kt)("h3",{id:"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3"},"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u58f0\u660e\u63a5\u53e3 UserService.java"',title:'"\u58f0\u660e\u63a5\u53e3','UserService.java"':!0},"UserEntity findUserEntity(Long id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{1} title="\u5b9e\u73b0\u63a5\u53e3 UserServiceImpl.java"',"{1}":!0,title:'"\u5b9e\u73b0\u63a5\u53e3','UserServiceImpl.java"':!0},'@Service(version = "1.0.0", group = "pangu-showcases-dubbo-service")\npublic class UserServiceImpl implements UserService {\n    @Override\n    public UserEntity findUserEntity(Long id) {\n        log.info("\u53c2\u6570ID\uff1a{}", id);\n        UserEntity userEntity = new UserEntity();\n        userEntity.setId(id);\n        userEntity.setName("\u4e91\u5357\u7801\u519c\u5927\u718a");\n        return userEntity;\n    }\n}\n')),(0,i.kt)("h3",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,5}","{1,5}":!0},"@EnableDubbo\n@SpringBootApplication\npublic class DubboProviderApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(DubboProviderApplication.class).run(args);\n    }\n}\n")),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableDubbo")," \u6ce8\u89e3\u5f00\u542f Dubbo \u652f\u6301\u3002\u7531\u4e8e Dubbo \u7684\u4f7f\u7528 netty \u4f5c\u4e3a\u5e95\u5c42\u7f51\u7edc\u901a\u4fe1\uff0c\u51b3\u5b9a\u4e86\u76d8\u53e4\u5fae\u670d\u52a1\u5e94\u7528\u542f\u52a8\u548c\u63d0\u4f9b\u670d\u52a1\u5e76\u4e0d\u9700\u8981\u4f9d\u8d56 Servlet \u5bb9\u5668\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u542f\u52a8\u53c2\u6570\u8bbe\u7f6e\uff08\u5982\u4e0b\u793a\u4f8b\uff09"',title:'"\u542f\u52a8\u53c2\u6570\u8bbe\u7f6e\uff08\u5982\u4e0b\u793a\u4f8b\uff09"'},"-Dnacos.server-addr=127.0.0.1:8848 -Dnacos.namespace=pangu-dev\n")),(0,i.kt)("h3",{id:"\u670d\u52a1\u6ce8\u518c"},"\u670d\u52a1\u6ce8\u518c"),(0,i.kt)("p",null,"\u6210\u529f\u542f\u52a8\u5e94\u7528\u4f1a\u81ea\u52a8\u50cf Nacos \u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u670d\u52a1\u3002\u767b\u5f55 Nacos \u63a7\u5236\u53f0\u5373\u53ef\u5728\u3010\u670d\u52a1\u7ba1\u7406->\u670d\u52a1\u5217\u8868\u3011\u9875\u67e5\u770b\u6548\u679c\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1Dubbo\u670d\u52a1",src:t(1650).Z})),(0,i.kt)("h2",{id:"\u670d\u52a1\u6d88\u8d39\u8005"},"\u670d\u52a1\u6d88\u8d39\u8005"),(0,i.kt)("p",null,"\u4e0a\u8ff0\u670d\u52a1\u6ce8\u518c\u5230 Nacos \u670d\u52a1\u4e2d\u5fc3\u4ee5\u540e\u5c31\u53ef\u4ee5\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u4e86\u3002\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u4e2a SpringBean \u7ec4\u4ef6\u4e2d\uff08\u4e00\u822c\u662f Service\u3001Manager \u7b49\uff09\uff0c\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u540e\u5c31\u50cf\u672c\u5730\u63a5\u53e3\u8c03\u7528\u4e00\u6837\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u3002Dubbo \u5c06\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u57fa\u4e8e\u4ee3\u7406\u7684\u8fdc\u7a0b\u8c03\u7528\u80fd\u529b\uff0c\u670d\u52a1\u4ee5\u63a5\u53e3\u4e3a\u7c92\u5ea6\uff0c\u4e3a\u5f00\u53d1\u8005\u5c4f\u853d\u8fdc\u7a0b\u8c03\u7528\u5e95\u5c42\u7ec6\u8282\u3002\u670d\u52a1\u6d88\u8d39\u7aef\u6240\u9700\u8981\u7684\u4f9d\u8d56\u548c\u63d0\u4f9b\u7aef\u662f\u4e00\u6837\u7684\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002\u4ec5\u7ed9\u51fa\u6d88\u8d39\u76f8\u5173\u4ee3\u7801\u3002\u5982\u4e0b\u6240\u793a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3,8} title="\u670d\u52a1\u6d88\u8d39\u7aef\uff0c\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u4ee3\u7801 UserAdminManager.java"',"{3,8}":!0,title:'"\u670d\u52a1\u6d88\u8d39\u7aef\uff0c\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u4ee3\u7801','UserAdminManager.java"':!0},'@Component\npublic class UserAdminManager {\n    @Reference(version = "1.0.0", group = "pangu-examples-dubbo-service")\n    private UserService userService;\n\n    public void findUserEntityById(Long id){\n        log.info("\u5f00\u59cbDubbo\u8fdc\u7a0b\u8c03\u7528...");\n        UserEntity userEntity = userService.findUserEntity(id);\n        log.info("[OK] \u8c03\u7528\u6210\u529f {}", userEntity);\n    }\n}\n')),(0,i.kt)("h2",{id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"},"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-api"},"pangu-examples-dubbo-api"),"\uff1a\u670d\u52a1\u63a5\u53e3\u5305"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-service"},"pangu-examples-dubbo-service"),"\uff1a\u670d\u52a1\u63d0\u4f9b\u8005"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-consumer"},"pangu-examples-dubbo-consumer"),"\uff1a\u670d\u52a1\u6d88\u8d39\u8005")),(0,i.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,i.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/docs/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}v.isMDXComponent=!0},1650:function(e,n,t){n.Z=t.p+"assets/images/1-pangu-framework-nacos-service-regist-b8f879309f74a0ff44299f8d889ad6e8.png"}}]);