"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[5943],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),u=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=u(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return t?n.createElement(g,i(i({ref:a},o),{},{components:t})):n.createElement(g,i({ref:a},o))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},6396:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7462),r=t(7294),s=t(2389),i=t(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(3616),u=t(6010),o="tabItem_vU9c";function c(e){var a,t,n,s=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:y.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),f=(0,p.lx)(v,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(a=null!=c?c:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=y[0])?void 0:n.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),h=k.tabGroupChoices,E=k.setTabGroupChoices,M=(0,r.useState)(b),N=M[0],w=M[1],U=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=h[m];null!=T&&T!==N&&v.some((function(e){return e.value===T}))&&w(T)}var j=function(e){var a=e.currentTarget,t=U.indexOf(a),n=v[t].value;n!==N&&(x(a),w(n),null!=m&&E(m,n))},P=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=U.indexOf(e.currentTarget)+1;t=U[n]||U[0];break;case"ArrowLeft":var r=U.indexOf(e.currentTarget)-1;t=U[r]||U[U.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},v.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,u.Z)("tabs__item",o,{"tabs__item--active":N===a}),key:a,ref:function(e){return U.push(e)},onKeyDown:P,onFocus:j,onClick:j},null!=t?t:a)}))),s?(0,r.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))}function d(e){var a=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(a)},e))}},4637:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),i=t(6396),l=t(8215),p=["components"],u={title:"\u6570\u636e\u6301\u4e45\u5316",tags:["\u6570\u636e\u6301\u4e45\u5316","MyBatis","MyBatis-Plus"],sidebar_position:5,slug:"/advanced-guide/data-persistance"},o="\u6570\u636e\u6301\u4e45\u5316",c={unversionedId:"advanced-guide/\u6570\u636e\u6301\u4e45\u5316",id:"advanced-guide/\u6570\u636e\u6301\u4e45\u5316",title:"\u6570\u636e\u6301\u4e45\u5316",description:"\u76d8\u53e4\u5f00\u53d1\u6570\u636e\u6301\u4e45\u5316 API \u4f9d\u8d56 MyBatis Plus \u63d0\u4f9b\u3002\u5728 MyBatis \u7684\u57fa\u7840\u4e0a\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u5185\u7f6e\u901a\u7528Mapper CRUD\u64cd\u4f5c\u3001\u652f\u6301Lambda\u8868\u8fbe\u5f0f\u3001\u5185\u7f6e\u5c4f\u853d\u4e0d\u901a\u6570\u636e\u5e93\u65b9\u8a00\u5dee\u5f02\u7684\u5206\u9875\u63d2\u4ef6\u3001\u81ea\u52a8\u586b\u5145\u5b57\u6bb5\u503c\u3001\u591a\u79cd\u4e3b\u952e\u81ea\u52a8\u751f\u6210\u7b56\u7565\u3001\u903b\u8f91\u8f93\u51fa\u3001\u4e50\u89c2\u9501\u63d2\u4ef6\u7b49\u3002",source:"@site/docs/advanced-guide/\u6570\u636e\u6301\u4e45\u5316.md",sourceDirName:"advanced-guide",slug:"/advanced-guide/data-persistance",permalink:"/pangu-framework/docs/advanced-guide/data-persistance",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/advanced-guide/\u6570\u636e\u6301\u4e45\u5316.md",tags:[{label:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/pangu-framework/docs/tags/\u6570\u636e\u6301\u4e45\u5316"},{label:"MyBatis",permalink:"/pangu-framework/docs/tags/my-batis"},{label:"MyBatis-Plus",permalink:"/pangu-framework/docs/tags/my-batis-plus"}],version:"current",sidebarPosition:5,frontMatter:{title:"\u6570\u636e\u6301\u4e45\u5316",tags:["\u6570\u636e\u6301\u4e45\u5316","MyBatis","MyBatis-Plus"],sidebar_position:5,slug:"/advanced-guide/data-persistance"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u5173\u7cfb\u7edf",permalink:"/pangu-framework/docs/advanced-guide/gateway"},next:{title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",permalink:"/pangu-framework/docs/advanced-guide/layering-cache"}},d=[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",children:[],level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",children:[],level:2},{value:"\u751f\u6210\u6301\u4e45\u5316\u6240\u9700\u7684\u6a21\u7248\u4ee3\u7801",id:"\u751f\u6210\u6301\u4e45\u5316\u6240\u9700\u7684\u6a21\u7248\u4ee3\u7801",children:[],level:2},{value:"\u57fa\u672c\u6570\u636e\u6301\u4e45\u5316\u64cd\u4f5c",id:"\u57fa\u672c\u6570\u636e\u6301\u4e45\u5316\u64cd\u4f5c",children:[{value:"\u65b0\u589e",id:"\u65b0\u589e",children:[],level:3},{value:"\u4fee\u6539",id:"\u4fee\u6539",children:[],level:3},{value:"\u5220\u9664",id:"\u5220\u9664",children:[],level:3},{value:"\u7b80\u5355\u67e5\u8be2",id:"\u7b80\u5355\u67e5\u8be2",children:[],level:3},{value:"\u5206\u9875\u67e5\u8be2",id:"\u5206\u9875\u67e5\u8be2",children:[{value:"\u57fa\u4e8eMapper API\u7684\u5206\u9875\u67e5\u8be2",id:"\u57fa\u4e8emapper-api\u7684\u5206\u9875\u67e5\u8be2",children:[],level:4},{value:"\u57fa\u4e8e\u624b\u5de5\u6620\u5c04SQL\u7684\u5206\u9875\u67e5\u8be2",id:"\u57fa\u4e8e\u624b\u5de5\u6620\u5c04sql\u7684\u5206\u9875\u67e5\u8be2",children:[],level:4}],level:3},{value:"\u624b\u5de5\u7f16\u5199SQL\u6620\u5c04",id:"\u624b\u5de5\u7f16\u5199sql\u6620\u5c04",children:[],level:3}],level:2},{value:"\u9ad8\u7ea7\u7279\u6027",id:"\u9ad8\u7ea7\u7279\u6027",children:[{value:"\u4e8b\u52a1",id:"\u4e8b\u52a1",children:[],level:3},{value:"\u5b57\u6bb5\u503c\u81ea\u52a8\u586b\u5145",id:"\u5b57\u6bb5\u503c\u81ea\u52a8\u586b\u5145",children:[],level:3},{value:"\u903b\u8f91\u5220\u9664",id:"\u903b\u8f91\u5220\u9664",children:[],level:3}],level:2},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",children:[],level:2},{value:"\u76f8\u5173\u53c2\u8003\u8303\u4f8b",id:"\u76f8\u5173\u53c2\u8003\u8303\u4f8b",children:[],level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[],level:2}],m={toc:d};function g(e){var a=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u6570\u636e\u6301\u4e45\u5316"},"\u6570\u636e\u6301\u4e45\u5316"),(0,s.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6570\u636e\u6301\u4e45\u5316 API \u4f9d\u8d56 MyBatis Plus \u63d0\u4f9b\u3002\u5728 MyBatis \u7684\u57fa\u7840\u4e0a\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u5185\u7f6e\u901a\u7528Mapper CRUD\u64cd\u4f5c\u3001\u652f\u6301Lambda\u8868\u8fbe\u5f0f\u3001\u5185\u7f6e\u5c4f\u853d\u4e0d\u901a\u6570\u636e\u5e93\u65b9\u8a00\u5dee\u5f02\u7684\u5206\u9875\u63d2\u4ef6\u3001\u81ea\u52a8\u586b\u5145\u5b57\u6bb5\u503c\u3001\u591a\u79cd\u4e3b\u952e\u81ea\u52a8\u751f\u6210\u7b56\u7565\u3001\u903b\u8f91\u8f93\u51fa\u3001\u4e50\u89c2\u9501\u63d2\u4ef6\u7b49\u3002"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"\u5feb\u901fQA\uff1a"),"\u53ef\u4ee5\u652f\u6301\u517c\u5bb9\u54ea\u4e9b\u6570\u636e\u5e93\u7c7b\u578b\uff1f"),(0,s.kt)("div",null,"\u4e0e MyBatis Plus \u4e00\u81f4\u3002\u652f\u6301\u6240\u6709JDBC\u6807\u51c6\u6570\u636e\u5e93\u3002\u5206\u9875\u65b9\u8a00\u517c\u5bb9\u5982\u4e0b\u6570\u636e\u5e93\uff1a mysql\u3001oracle\u3001db2\u3001h2\u3001hsql\u3001sqlite\u3001postgresql\u3001sqlserver\u3001Phoenix\u3001Gauss\u3001clickhouse\u3001Sybase\u3001OceanBase\u3001Firebird\u3001cubrid\u3001goldilocks\u3001csiidb\u3001\u8fbe\u68a6\u6570\u636e\u5e93\u3001\u865a\u8c37\u6570\u636e\u5e93\u3001\u4eba\u5927\u91d1\u4ed3\u6570\u636e\u5e93\u3001\u5357\u5927\u901a\u7528(\u534e\u5e93)\u6570\u636e\u5e93\u3001\u5357\u5927\u901a\u7528\u6570\u636e\u5e93\u3001\u795e\u901a\u6570\u636e\u5e93\u3001\u701a\u9ad8\u6570\u636e\u5e93\u3002")),(0,s.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"parent",label:"\u76d8\u53e4Parent",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,s.kt)(l.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,s.kt)(l.Z,{value:"dependency2",label:"JDBC\u6a21\u5757",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n  <groupId>com.gitee.pulanos.pangu</groupId>\n  <artifactId>pangu-framework-jdbc-spring-boot-starter</artifactId>\n</dependency>\n")))),(0,s.kt)("h2",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605:",(0,s.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u4f7f\u7528\u6307\u5357->\u914d\u7f6e\u4e2d\u5fc3"),"\u7ae0\u8282\u3002")),(0,s.kt)(i.Z,{defaultValue:"application-dev",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,s.kt)(l.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-crud\n\nspring.datasource.type=com.zaxxer.hikari.HikariDataSource\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.datasource.url=jdbc:mysql://localhost:3306/pangu-examples?useUnicode=true&characterEncoding=utf-8&autoReconnect=true&failOverReadOnly=false&allowMultiQueries=true&useSSL=false\nspring.datasource.username=root\nspring.datasource.password=root123456\nmybatis-plus.mapperLocations=classpath*:/mapper/**/*.xml\nmybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl\n# \u5206\u9875SQL\u65b9\u8a00\u6570\u636e\u5e93\u7c7b\u578b\u6807\u8bc6\uff08\u7f3a\u7701\uff1a\u81ea\u52a8\u8bc6\u522b\uff09\npangu.jdbc.db-type=mysql\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,s.kt)("h2",{id:"\u751f\u6210\u6301\u4e45\u5316\u6240\u9700\u7684\u6a21\u7248\u4ee3\u7801"},"\u751f\u6210\u6301\u4e45\u5316\u6240\u9700\u7684\u6a21\u7248\u4ee3\u7801"),(0,s.kt)("p",null,"\u57fa\u4e8e\u5b9e\u8df5\u7ecf\u9a8c\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u76d8\u53e4\u4ee3\u7801\u751f\u6210\u5668\uff0c\u800c\u4e0d\u662f\u4f7f\u7528Mybatis Plus\u5b98\u65b9\u751f\u6210\u5668\u3002\u5173\u4e8e\u751f\u6210\u4ee3\u7801\u76f8\u5173\u5185\u5bb9\uff0c\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/docs/code-generator"},"\u300a\u4ee3\u7801\u751f\u6210\u5668\u63d2\u4ef6\u300b"),"\u7ae0\u8282\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002\uff08\u9488\u5bf9\u6bcf\u4e00\u4e2a\u6570\u636e\u8868\u4f1a\u751f\u6210\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"*Mapper.java"),"\u6587\u4ef6\u548c\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"*Entity.java"),"\u6587\u4ef6\uff09"),(0,s.kt)("h2",{id:"\u57fa\u672c\u6570\u636e\u6301\u4e45\u5316\u64cd\u4f5c"},"\u57fa\u672c\u6570\u636e\u6301\u4e45\u5316\u64cd\u4f5c"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u53ea\u662f\u7ed9\u51fa\u51e0\u4e2a\u7b80\u5355\u5178\u578b\u7684\u64cd\u4f5c\u4ee3\u7801\uff0c\u66f4\u591a\u5185\u5bb9\u8bf7\u53c2\u9605\u8303\u4f8b\u6216\u9605\u8bfb ",(0,s.kt)("a",{parentName:"p",href:"https://baomidou.com/pages/24112f/"},"Mybatis Plus \u5b98\u65b9\u6587\u6863"),"\u3002")),(0,s.kt)("h3",{id:"\u65b0\u589e"},"\u65b0\u589e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'public int aInsert() {\n    log.info("\u63d2\u5165\u6570\u636e...");\n    UserEntity userEntity = new UserEntity();\n    userEntity.setName("XC").setAge(18).setUserType("1");\n    int row = userMapper.insert(userEntity);\n    log.info("\u6210\u529f\u63d2\u5165{}\u6761\u6570\u636e\u3002{}", row, userEntity);\n    return row;\n}\n')),(0,s.kt)("h3",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'public void aUpdate() {\n    log.info("\u66f4\u65b0\u6570\u636e...");\n    //\u65b9\u5f0f1\n    userMapper.updateById(new UserEntity().setId(1L).setName("XC2"));\n\n    //\u65b9\u5f0f2\n    LambdaUpdateWrapper<UserEntity> updateWrapper = Wrappers.lambdaUpdate();\n    updateWrapper.set(UserEntity::getAge, 100);\n    updateWrapper.eq(UserEntity::getId, 2L);\n    userMapper.update(null, updateWrapper);\n    //\u65b9\u5f0f2\u7b80\u5199\n    userMapper.update(null, Wrappers.<UserEntity>lambdaUpdate().set(UserEntity::getName, "XC2").eq(UserEntity::getId, 3L));\n\n    //\u65b9\u5f0f3\n    UserEntity userEntity = new UserEntity();\n    userEntity.setName("XC2");\n    userMapper.update(userEntity, Wrappers.<UserEntity>lambdaUpdate().eq(UserEntity::getId, 4L));\n}\n')),(0,s.kt)("h3",{id:"\u5220\u9664"},"\u5220\u9664"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'public void aDelete() {\n    log.info("\u5220\u9664\u6570\u636e...");\n    //\u65b9\u5f0f1\n    userMapper.deleteById(1000L);\n    //\u65b9\u5f0f2\n    userMapper.deleteBatchIds(Arrays.asList(1000L, 1001L));\n    //\u65b9\u5f0f3\n    userMapper.delete(Wrappers.<UserEntity>lambdaQuery().ge(UserEntity::getAge, 150));\n    //\u65b9\u5f0f4\n    userMapper.deleteById(new UserEntity().setId(2000L));\n}\n')),(0,s.kt)("h3",{id:"\u7b80\u5355\u67e5\u8be2"},"\u7b80\u5355\u67e5\u8be2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'public void aSelect() {\n    log.info("\u67e5\u8be2\u6570\u636e...");\n    //\u65b9\u5f0f1\n    UserEntity userEntity = userMapper.selectById(1L);\n\n    //\u65b9\u5f0f2\n    UserEntity userEntity1 = userMapper.selectOne(Wrappers.<UserEntity>lambdaQuery().eq(UserEntity::getId, 1L));\n\n    //\u65b9\u5f0f3\n    List<UserEntity> userEntities = userMapper.selectBatchIds(Arrays.asList(1L, 2L));\n\n    //\u65b9\u5f0f4\n    Integer age = 100;\n    LambdaQueryWrapper<UserEntity> lambdaQueryWrapper = Wrappers.lambdaQuery();\n    //\u52a8\u6001\u7ec4\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u7b80\u4fbf\u5199\u6cd5\n    lambdaQueryWrapper.between(ObjectUtil.isNotEmpty(age), UserEntity::getAge, 1, age);\n    lambdaQueryWrapper.eq(UserEntity::getUserType, "1");\n    lambdaQueryWrapper.orderByDesc(UserEntity::getId);\n    List<UserEntity> userEntities1 = userMapper.selectList(lambdaQueryWrapper);\n\n    //\u65b9\u5f0f5\n    QueryWrapper<UserEntity> queryWrapper = Wrappers.query();\n    queryWrapper.select("id").ge("age", 10).orderByDesc("age");\n    List<Long> ids = (List<Long>) (List) userMapper.selectObjs(queryWrapper);\n\n    //\u65b9\u5f0f6\n    List<Map<String, Object>> userMaps = userMapper.selectMaps(Wrappers.<UserEntity>lambdaQuery().eq(UserEntity::getUserType, "1"));\n\n    //\u65b9\u5f0f7 count\n    Long cnt = userMapper.selectCount(Wrappers.<UserEntity>lambdaQuery().le(UserEntity::getGmtCreate, DateUtil.date()));\n\n    //\u65b9\u5f0f8 group\n    QueryWrapper<UserEntity> queryWrapper1 = Wrappers.query();\n    queryWrapper1.select("age, count(id) as cnt").groupBy("age");\n    List<Map<String, Object>> mapList = userMapper.selectMaps(queryWrapper1);\n}\n')),(0,s.kt)("h3",{id:"\u5206\u9875\u67e5\u8be2"},"\u5206\u9875\u67e5\u8be2"),(0,s.kt)("p",null,"\u76d8\u53e4\u6846\u67b6\u5df2\u7ecf\u505a\u4e86 Mybatis Plus \u5206\u9875\u63d2\u4ef6\u7684\u81ea\u52a8\u88c5\u914d\u5de5\u4f5c\uff0c\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u3002\u65e0\u9700\u989d\u5916\u914d\u7f6e\u3002"),(0,s.kt)("h4",{id:"\u57fa\u4e8emapper-api\u7684\u5206\u9875\u67e5\u8be2"},"\u57fa\u4e8eMapper API\u7684\u5206\u9875\u67e5\u8be2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'public void aPageQuery(){\n    log.info("MyBatisPlus API \u5206\u9875\u67e5\u8be2\u6570\u636e...");\n    Page page = new Page<UserEntity>(1,3);\n    userMapper.selectPage(page, Wrappers.<UserEntity>lambdaQuery().ge(UserEntity::getAge, 10).orderByAsc(UserEntity::getId));\n    Console.log("\u603b\u6570\uff1a{}", page.getTotal());\n    List<UserEntity> userEntities = page.getRecords();\n    userEntities.forEach(System.out::println);\n}\n')),(0,s.kt)("h4",{id:"\u57fa\u4e8e\u624b\u5de5\u6620\u5c04sql\u7684\u5206\u9875\u67e5\u8be2"},"\u57fa\u4e8e\u624b\u5de5\u6620\u5c04SQL\u7684\u5206\u9875\u67e5\u8be2"),(0,s.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u672c\u6587\u540e\u9762\u7684",(0,s.kt)("a",{parentName:"p",href:"#%E6%89%8B%E5%B7%A5%E7%BC%96%E5%86%99sql%E6%98%A0%E5%B0%84"},"\u300a\u624b\u5de5\u7f16\u5199SQL\u6620\u5c04\u300b"),"\u7ae0\u8282\u53ef\u4ee5\u627e\u5230\u3002"),(0,s.kt)("h3",{id:"\u624b\u5de5\u7f16\u5199sql\u6620\u5c04"},"\u624b\u5de5\u7f16\u5199SQL\u6620\u5c04"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u4e00\u822c\u6765\u8bf4\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u6211\u4eec\u662f\u4e0d\u9700\u8981\u518d\u7f16\u5199SQL\u4ee3\u7801\u7684\uff0cMapper API\u5df2\u7ecf\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\u4e86\u3002\u4f46\u5bf9\u4e8e\u4e00\u4e9b\u7279\u6b8a\u9700\u6c42\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u624b\u5de5\u5199SQL\u6620\u5c04\u7684\u65b9\u5f0f\u6765\u5904\u7406\u3002\u5982\u4e0b\u8303\u4f8b\u6f14\u793a\u4e86\u624b\u5de5SQL\u67e5\u8be2\u7684\u64cd\u4f5c\uff0c\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u4e5f\u662f\u540c\u7406\u3002"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,15}","{6,15}":!0},'public void bPageQuery(){\n    log.info("\u81ea\u5b9a\u4e49SQL\u6620\u5c04\u5206\u9875\u67e5\u8be2\u6570\u636e...");\n    Page page = new Page<UserEntity>(1,3);\n    Map<String, Object> params = Maps.newHashMap();\n    params.put("userType", "1");\n    List<UserEntity> userEntities = crudMapper.listUsersByPage(page, params);\n    Console.log("\u603b\u6570\uff1a{}", page.getTotal());\n    userEntities.forEach(System.out::println);\n}\n\npublic void cPageQuery(){\n    log.info("\u81ea\u5b9a\u4e49SQL\u6620\u5c04\u5206\u9875\u67e5\u8be2\u6570\u636e...");\n    Page page = new Page<Map<String, Object>>(1,3);\n    String userType = "1";\n    List<Map<String, Object>> userMaps = crudMapper.listUserMapsByPage(page, userType);\n    Console.log("\u603b\u6570\uff1a{}", page.getTotal());\n    userMaps.forEach(System.out::println);\n}\n\npublic void bSelect() {\n    log.info("\u81ea\u5b9a\u4e49SQL\u6620\u5c04\u67e5\u8be2\u6570\u636e...");\n    Map<String, Object> params = Maps.newHashMap();\n    params.put("userType", "1");\n    List<UserEntity> userEntities = crudMapper.listUsersByMap(params);\n    userEntities.forEach(System.out::println);\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/main/java/com/gitee/pulanos/pangu/showcases/crud/dao/mapper/CrudMapper.java"',title:'"src/main/java/com/gitee/pulanos/pangu/showcases/crud/dao/mapper/CrudMapper.java"'},"/**\n * \u63d0\u793a\uff1a\u81ea\u5b9a\u4e49sql\u624b\u5de5\u6620\u5c04\u5927\u90e8\u5206\u65f6\u5019\u4e3a\u590d\u6742\u7684\u591a\u8868\u8054\u5408\u67e5\u8be2\u7684SQL\uff0c\u5355\u8868\u64cd\u4f5c\u548c\u7b80\u5355\u7684\u591a\u8868\u8fde\u63a5\u90fd\u5e94\u8be5\u7edf\u4e00\u4f7f\u7528mybatis plus\u7684API\n */\n@Mapper\npublic interface CrudMapper {\n\n    /**\n     * \u5206\u9875\u67e5\u8be2\n     * @param page \u5206\u9875\u67e5\u8be2\u5bf9\u8c61\n     * @param param\n     * @return\n     */\n    List<UserEntity> listUsersByPage(Page<UserEntity> page, Map<String, Object> param);\n\n    /**\n     * \u5206\u9875\u67e5\u8be2\n     * @param page \u5206\u9875\u67e5\u8be2\u5bf9\u8c61\n     * @param userType\n     * @return\n     */\n    List<Map<String, Object>> listUserMapsByPage(Page<Map<String, Object>> page, String userType);\n\n    /**\n     * \u666e\u901a\u96c6\u5408\u67e5\u8be2\n     * @param param\n     * @return\n     */\n    List<UserEntity> listUsersByMap(Map<String, Object> param);\n\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/main/resources/mapper/CrudMapper.xml"',title:'"src/main/resources/mapper/CrudMapper.xml"'},'\x3c!-- \u5206\u9875\u67e5\u8be2 --\x3e\n<select id="listUsersByPage" resultType="com.gitee.pulanos.pangu.showcases.crud.dao.entity.UserEntity">\n    select id,name,age,user_type,gmt_create,gmt_update from user\n    <where>\n        <if test="param.userType!=null and param.userType!=\'\'">\n            user_type = #{param.userType}\n        </if>\n    </where>\n    ORDER BY id\n</select>\n\n\x3c!-- \u5206\u9875\u67e5\u8be2 --\x3e\n<select id="listUserMapsByPage" resultType="java.util.Map">\n    select age, count(id) as userCnt from user\n    <where>\n        <if test="userType!=null and userType!=\'\'">\n            user_type = #{userType}\n        </if>\n    </where>\n    GROUP BY age\n    ORDER BY age DESC\n</select>\n\n\x3c!-- \u666e\u901a\u67e5\u8be2 --\x3e\n<select id="listUsersByMap" resultType="com.gitee.pulanos.pangu.showcases.crud.dao.entity.UserEntity">\n    select id,name,age,user_type,gmt_create,gmt_update from user\n    <where>\n        <if test="userType!=null and userType!=\'\'">\n            user_type = #{userType}\n        </if>\n    </where>\n</select>\n')),(0,s.kt)("h2",{id:"\u9ad8\u7ea7\u7279\u6027"},"\u9ad8\u7ea7\u7279\u6027"),(0,s.kt)("h3",{id:"\u4e8b\u52a1"},"\u4e8b\u52a1"),(0,s.kt)("p",null,"\u5355\u4e00\u6570\u636e\u6e90\u4e8b\u52a1\uff0c\u76f4\u63a5\u4f7f\u7528Spring\u4e8b\u52a1\u76f8\u5173\u6ce8\u89e3\u5373\u53ef\uff08",(0,s.kt)("inlineCode",{parentName:"p"},"@EnableTransactionManagement"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"@Transactional"),"\uff09\u3002\u5bf9\u4e8e\u5206\u5e03\u5f0f\u4e8b\u52a1\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/docs/advanced-guide/distributed-transaction"},"\u300a\u5206\u5e03\u5f0f\u4e8b\u52a1\u300b"),"\u7ae0\u8282\u3002"),(0,s.kt)("h3",{id:"\u5b57\u6bb5\u503c\u81ea\u52a8\u586b\u5145"},"\u5b57\u6bb5\u503c\u81ea\u52a8\u586b\u5145"),(0,s.kt)("p",null,"Coming soon..."),(0,s.kt)("h3",{id:"\u903b\u8f91\u5220\u9664"},"\u903b\u8f91\u5220\u9664"),(0,s.kt)("p",null,"Coming soon..."),(0,s.kt)("h2",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5}","{5}":!0},"@EnableTransactionManagement\n@SpringBootApplication\npublic class CrudApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(CrudApplication.class).run(args);\n    }\n}\n")),(0,s.kt)("h2",{id:"\u76f8\u5173\u53c2\u8003\u8303\u4f8b"},"\u76f8\u5173\u53c2\u8003\u8303\u4f8b"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-crud"},"pangu-examples-crud"),"\uff1a\u6570\u636e\u6301\u4e45\u5316\u53c2\u8003\u8303\u4f8b")),(0,s.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,s.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u60a8\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684",(0,s.kt)("a",{parentName:"p",href:"/docs/community"},"\u5f00\u53d1\u8005\u793e\u533a"),"\u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}g.isMDXComponent=!0}}]);