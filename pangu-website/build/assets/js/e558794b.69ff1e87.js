"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[520],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),c=n(6010),p="tabItem_vU9c";function s(e){var t,n,a,o=e.lazy,i=e.block,s=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===s?s:null!=(t=null!=s?s:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=l(),y=h.tabGroupChoices,w=h.setTabGroupChoices,N=(0,r.useState)(k),x=N[0],T=N[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=y[d];null!=I&&I!==x&&g.some((function(e){return e.value===I}))&&T(I)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==x&&(E(t),T(a),null!=d&&w(d,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},f)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},4500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(6396),l=n(8215),u=["components"],c={title:"\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u5355\u4f53\u5e94\u7528",tags:["\u5feb\u901f\u5f00\u59cb"],sidebar_position:15,slug:"/quick-start/how-to-make-monomer-architecture-app"},p=void 0,s={unversionedId:"quick-start/\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u76d8\u53e4\u5355\u4f53\u5e94\u7528",id:"quick-start/\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u76d8\u53e4\u5355\u4f53\u5e94\u7528",title:"\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u5355\u4f53\u5e94\u7528",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u5355\u4f53\u5206\u5c42\u67b6\u6784\u7684\u5e94\u7528\u3002\u6587\u4e2d\u6240\u8ff0\u4ec5\u4e3a\u642d\u5efa\u4e00\u4e2a\u5355\u4f53\u5e94\u7528\u7684\u57fa\u672c\u6846\u67b6\uff0c\u589e\u52a0\u914d\u7f6e\u4e2d\u5fc3\u3001\u6570\u636e\u6301\u4e45\u5316\u3001\u7f13\u5b58\u7b49\u80fd\u529b\u8bf7\u53c2\u8003\u4f7f\u7528\u6307\u5357\u7684\u76f8\u5173\u7ae0\u8282\u3002",source:"@site/docs/quick-start/\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u76d8\u53e4\u5355\u4f53\u5e94\u7528.md",sourceDirName:"quick-start",slug:"/quick-start/how-to-make-monomer-architecture-app",permalink:"/pangu-framework/docs/quick-start/how-to-make-monomer-architecture-app",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/quick-start/\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u76d8\u53e4\u5355\u4f53\u5e94\u7528.md",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/pangu-framework/docs/tags/\u5feb\u901f\u5f00\u59cb"}],version:"current",sidebarPosition:15,frontMatter:{title:"\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u5355\u4f53\u5e94\u7528",tags:["\u5feb\u901f\u5f00\u59cb"],sidebar_position:15,slug:"/quick-start/how-to-make-monomer-architecture-app"},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u9009\u62e9\u76d8\u53e4\u5f00\u53d1\u6a21\u5f0f\u67b6\u6784",permalink:"/pangu-framework/docs/quick-start/how-to-make-architecture"},next:{title:"\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528",permalink:"/pangu-framework/docs/quick-start/how-to-make-microservice-architecture-app"}},m=[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6846\u67b6\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6846\u67b6\u6a21\u5757",children:[],level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",children:[],level:2},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",children:[],level:2},{value:"\u76f8\u5173\u53c2\u8003\u8303\u4f8b",id:"\u76f8\u5173\u53c2\u8003\u8303\u4f8b",children:[],level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u5355\u4f53\u5206\u5c42\u67b6\u6784\u7684\u5e94\u7528\u3002\u6587\u4e2d\u6240\u8ff0\u4ec5\u4e3a\u642d\u5efa\u4e00\u4e2a\u5355\u4f53\u5e94\u7528\u7684\u57fa\u672c\u6846\u67b6\uff0c\u589e\u52a0\u914d\u7f6e\u4e2d\u5fc3\u3001\u6570\u636e\u6301\u4e45\u5316\u3001\u7f13\u5b58\u7b49\u80fd\u529b\u8bf7\u53c2\u8003\u4f7f\u7528\u6307\u5357\u7684\u76f8\u5173\u7ae0\u8282\u3002"))),(0,o.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6846\u67b6\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6846\u67b6\u6a21\u5757"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"parent",label:"\u7ee7\u627f\u76d8\u53e4Parent",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,o.kt)(l.Z,{value:"dependency1",label:"\u76d8\u53e4\u6a21\u5757\u2460",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,o.kt)(l.Z,{value:"dependency2",label:"\u76d8\u53e4\u6a21\u5757\u2461",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-web-spring-boot-starter</artifactId>\n</dependency>\n")))),(0,o.kt)("h2",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605:",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u4f7f\u7528\u6307\u5357->\u914d\u7f6e\u4e2d\u5fc3"),"\u7ae0\u8282\u3002")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,o.kt)(l.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-empty-web\nspring.jackson.time-zone=GMT+8\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,o.kt)("h2",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4}","{4}":!0},"@SpringBootApplication\npublic class EmptyWebPanguApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(EmptyWebPanguApplication.class).run(args);\n    }\n}\n")),(0,o.kt)("h2",{id:"\u76f8\u5173\u53c2\u8003\u8303\u4f8b"},"\u76f8\u5173\u53c2\u8003\u8303\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-empty-web"},"pangu-examples-empty-web"))),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u60a8\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/community"},"\u5f00\u53d1\u8005\u793e\u533a"),"\u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002\n\u90fd\u662f"))}f.isMDXComponent=!0}}]);