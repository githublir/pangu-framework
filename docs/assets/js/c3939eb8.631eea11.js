"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[5742],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(b,o(o({ref:n},s),{},{components:t})):a.createElement(b,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),l=t(2389),o=t(9443);var u=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(3616),p=t(6010),s="tabItem_vU9c";function c(e){var n,t,a,l=e.lazy,o=e.block,c=e.defaultValue,d=e.values,m=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(n=null!=c?c:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=u(),N=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,r.useState)(f),I=w[0],x=w[1],T=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=N[m];null!=O&&O!==I&&v.some((function(e){return e.value===O}))&&x(O)}var S=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==I&&(P(n),x(a),null!=m&&y(m,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},b)},v.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,className:(0,p.Z)("tabs__item",s,{"tabs__item--active":I===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:S,onClick:S},null!=t?t:n)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function d(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},8626:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return b}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=t(6396),u=t(8215),i=["components"],p={title:"\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (Web API)",tags:["\u5feb\u901f\u5f00\u59cb","\u7f51\u5173","API"],sidebar_position:25,slug:"/quick-start/how-to-create-http-api"},s=void 0,c={unversionedId:"quick-start/\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173)",id:"quick-start/\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173)",title:"\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (Web API)",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u7f51\u5173\u5f00\u53d1\u6a21\u5f0f\u7b80\u4ecb | \u5982\u4f55\u5f00\u53d1 HTTP API \u63a5\u53e3",source:"@site/docs/quick-start/\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173).md",sourceDirName:"quick-start",slug:"/quick-start/how-to-create-http-api",permalink:"/pangu-framework/docs/quick-start/how-to-create-http-api",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/quick-start/\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173).md",tags:[{label:"\u5feb\u901f\u5f00\u59cb",permalink:"/pangu-framework/docs/tags/\u5feb\u901f\u5f00\u59cb"},{label:"\u7f51\u5173",permalink:"/pangu-framework/docs/tags/\u7f51\u5173"},{label:"API",permalink:"/pangu-framework/docs/tags/api"}],version:"current",sidebarPosition:25,frontMatter:{title:"\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (Web API)",tags:["\u5feb\u901f\u5f00\u59cb","\u7f51\u5173","API"],sidebar_position:25,slug:"/quick-start/how-to-create-http-api"},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1",permalink:"/pangu-framework/docs/quick-start/how-to-make-microservice-architecture-app"},next:{title:"\u914d\u7f6e\u4e2d\u5fc3",permalink:"/pangu-framework/docs/advanced-guide/nacos-config-center"}},d=[{value:"\u6280\u672f\u5b9e\u73b0\u65b9\u6848",id:"\u6280\u672f\u5b9e\u73b0\u65b9\u6848",children:[{value:"Pangu-Web \u6a21\u5757\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f",id:"pangu-web-\u6a21\u5757\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f",children:[],level:3},{value:"ShenYu \u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f",id:"shenyu-\u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f",children:[],level:3}],level:2},{value:"\u7f16\u7a0b\u5b9e\u6218\u4e00\uff1a\u57fa\u4e8e Spring MVC \u5f00\u53d1",id:"\u7f16\u7a0b\u5b9e\u6218\u4e00\u57fa\u4e8e-spring-mvc-\u5f00\u53d1",children:[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",children:[],level:3},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",children:[],level:3},{value:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3",id:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3",children:[],level:3},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",children:[],level:3},{value:"\u672c\u8303\u4f8b\u6e90\u7801",id:"\u672c\u8303\u4f8b\u6e90\u7801",children:[],level:3}],level:2},{value:"\u7f16\u7a0b\u5b9e\u6218\u4e8c\uff1a\u57fa\u4e8e ShenYu \u7f51\u5173\u5f00\u53d1",id:"\u7f16\u7a0b\u5b9e\u6218\u4e8c\u57fa\u4e8e-shenyu-\u7f51\u5173\u5f00\u53d1",children:[],level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[],level:2}],m={toc:d};function b(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u7f51\u5173\u5f00\u53d1\u6a21\u5f0f\u7b80\u4ecb | \u5982\u4f55\u5f00\u53d1 HTTP API \u63a5\u53e3"),(0,l.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u7f51\u5173\u5f00\u53d1\u6a21\u5f0f\u7b80\u4ecb | \u5982\u4f55\u5f00\u53d1 HTTP API \u63a5\u53e3"}),(0,l.kt)("meta",{name:"description",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5355\u4f53\u5206\u5c42\u67b6\u6784\uff09"})),(0,l.kt)("p",null,"\u5728\u4e0a\u6587",(0,l.kt)("a",{parentName:"p",href:"/docs/quick-start/how-to-make-microservice-architecture-app"},"\u300a\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528\u300b"),"\u4e2d\uff0c\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u4ee5\u53ca\u5fae\u670d\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u4e92\u76f8\u8c03\u7528\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06\u5fae\u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\u4f9b\u524d\u7aef\u8c03\u7528\u3002"),(0,l.kt)("h2",{id:"\u6280\u672f\u5b9e\u73b0\u65b9\u6848"},"\u6280\u672f\u5b9e\u73b0\u65b9\u6848"),(0,l.kt)("p",null,"\u5728\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u5b9e\u73b0\u5c06\u5fae\u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\u6709\u4e24\u79cd\u65b9\u5f0f\u3002\u4e00\u79cd\u662f\u57fa\u4e8e pangu-web \u6a21\u5757\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f\uff1b\u4e00\u79cd\u662f\u57fa\u4e8e ShenYu \u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f\u3002"),(0,l.kt)("h3",{id:"pangu-web-\u6a21\u5757\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f"},"Pangu-Web \u6a21\u5757\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),(0,l.kt)("br",{parentName:"li"}),"\u57fa\u4e8e Spring MVC\uff0c\u4f9d\u8d56 Servlet \u5bb9\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dubbo \u96c6\u6210"),(0,l.kt)("br",{parentName:"li"}),"\u4f9d\u8d56\u63a5\u53e3 JAR \uff0c\u63a5\u53e3\u8c03\u7528 Dubbo \u670d\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6027\u80fd & \u590d\u6742\u5ea6"),(0,l.kt)("br",{parentName:"li"}),"\u6027\u80fd\u9ad8\uff0c\u5f00\u53d1\u7b80\u5355\uff0c\u90e8\u7f72\u8fd0\u7ef4\u7b80\u5355\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5176\u5b83\u7279\u6027"),"  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8de8\u57df\u914d\u7f6e\u3001\u6d41\u91cf\u63a7\u5236\u3001\u9274\u6743\u3001\u7194\u65ad\u3001\u767d\u540d\u5355\u7b49\uff08\u914d\u7f6e\u7b80\u5355\u4e14\u4e0e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6d51\u7136\u4e00\u4f53\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86Controller\u805a\u5408\u5c42\uff0c\u53ef\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u51cf\u5c11\u4e86\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u5faa\u73af\u4f9d\u8d56\u548c\u8c03\u7528\u3002")))),(0,l.kt)("h3",{id:"shenyu-\u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f"},"ShenYu \u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),(0,l.kt)("br",{parentName:"li"}),"\u57fa\u4e8e Spring Webflex\uff0c\u4f9d\u8d56 Netty \u6846\u67b6 \u6216 Servlet 3.1+ \u5bb9\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dubbo \u96c6\u6210"),(0,l.kt)("br",{parentName:"li"}),"\u4e0d\u4f9d\u8d56\u63a5\u53e3 JAR\uff0c\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u3002\uff08\u9700\u8981\u7ef4\u62a4\u63a5\u53e3\u5143\u6570\u636e\uff0c\u4e14\u6027\u80fd\u6709\u635f\u8017 10%~20%\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6027\u80fd & \u590d\u6742\u5ea6"),(0,l.kt)("br",{parentName:"li"}),"\u7f51\u5173\u81ea\u8eab\u6027\u80fd\u8f83\u9ad8\uff08Webflex\u975e\u963b\u585e\u6a21\u578b\uff09\u3002\u5f00\u53d1\u90e8\u7f72\u8fd0\u7ef4\u6781\u5176\u590d\u6742\uff0c\u5e26\u6765\u7684\u6210\u672c\u4e0d\u53ef\u5c0f\u89d1\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5176\u5b83\u7279\u6027"),(0,l.kt)("br",{parentName:"li"}),"\u652f\u6301\u6d41\u91cf\u63a7\u5236\u3001\u9274\u6743\u3001\u7194\u65ad\u7b49\uff08\u914d\u7f6e\u590d\u6742\uff09\u3002")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u662f\u4ece\u4e0d\u540c\u7ef4\u5ea6\u7b80\u5355\u7c97\u66b4\u7684\u4ee5\u5b9a\u6027\u7684\u89d2\u5ea6\u7ed9\u51fa\u4e86\u4e00\u4e9b\u6bd4\u8f83\uff0c\u7ed3\u8bba\u662f\u5b64\u7acb\u4e14\u8131\u79bb\u9879\u76ee\u80cc\u666f\u548c\u4e1a\u52a1\u573a\u666f\u7684\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002\u91c7\u7528\u4ec0\u4e48\u6837\u7684\u5f00\u53d1\u6a21\u5f0f\u4e0d\u80fd\u4e00\u6982\u800c\u8bba\uff0c\u9700\u8981\u7efc\u5408\u5b9e\u9645\u60c5\u51b5\u914c\u60c5\u9009\u62e9\u3002\u4f46\u5bf9\u4e8e\u5927\u90e8\u5206\u76d8\u53e4\u5f00\u53d1\u9879\u76ee\u800c\u8a00\uff0c\u6211\u4eec\u63a8\u8350\u6574\u4f53\u6027\u4ef7\u6bd4\u8f83\u9ad8\u7684\u65b9\u6848\u4e00\u3002\u5f53\u7136\uff0c\u5982\u679c\u60a8\u7684\u9879\u76ee\u80cc\u666f\u9002\u5408\u4f7f\u7528 ShenYu\u7f51\u5173\uff0c\u6211\u4eec\u4e5f\u7ed9\u51fa\u4e86\u8be6\u7ec6\u7684\u96c6\u6210\u65b9\u6848\u3002\u8be6\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"/blog/pangu-dev-framework-apache-shenyu"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 Apache ShenYu \u7f51\u5173"),"\u3002"))),(0,l.kt)("h2",{id:"\u7f16\u7a0b\u5b9e\u6218\u4e00\u57fa\u4e8e-spring-mvc-\u5f00\u53d1"},"\u7f16\u7a0b\u5b9e\u6218\u4e00\uff1a\u57fa\u4e8e Spring MVC \u5f00\u53d1"),(0,l.kt)("p",null,"\u6b64\u79cd\u6a21\u5f0f\u57fa\u4e8e SpringMVC \u901a\u8fc7 Controller \u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002\u4f9d\u8d56 Servlet \u5bb9\u5668\uff0c\u9700\u8981\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u5305\u3002\u5bf9\u4e8e HTTP \u63a5\u53e3\u5c42\u9762\u7684\u9274\u6743\u3001\u6d41\u63a7\u7b49\u9700\u6c42\u90fd\u9700\u8981\u57fa\u4e8eWeb\u62e6\u622a\u5668\u6765\u5b9e\u73b0\uff08\u76d8\u53e4\u5df2\u7ecf\u5728Starter\u4e2d\u5b9e\u73b0\uff0c\u53ea\u9700\u914d\u7f6e\u5373\u53ef\u4f7f\u7528\uff09\u3002\u9ad8\u53ef\u7528\u548c\u6027\u80fd\u63d0\u5347\u53ef\u901a\u8fc7Caddy/Nginx \u5145\u5f53 API \u7f51\u5173 \u53cd\u5411\u4ee3\u7406\u540e\u7aef\u591a\u4e2a Web \u8282\u70b9\u5b9e\u73b0\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,l.kt)(o.Z,{defaultValue:"dependency3",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,l.kt)(u.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,l.kt)(u.Z,{value:"dependency2",label:"Dubbo\u6a21\u5757",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-dubbo-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,l.kt)(u.Z,{value:"dependency3",label:"Web\u6a21\u5757",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-web-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,l.kt)(u.Z,{value:"dependency4",label:"\u670d\u52a1\u63a5\u53e3\u5305",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-examples-dubbo-api</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")))),(0,l.kt)("h3",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-webapi-dubbo-service-based\nspring.jackson.time-zone=GMT+8\n\npangu.web.cross-origin=true\n\ndubbo.protocol.name=dubbo\ndubbo.protocol.port=-1 \ndubbo.consumer.timeout=5000\ndubbo.registry.address=nacos://${nacos.server-addr}?namespace=${nacos.namespace}\ndubbo.consumer.check=false\n\nlogging.level.root=INFO\n")),(0,l.kt)("h3",{id:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3"},"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u4e2a SpringBean \u7ec4\u4ef6\u4e2d\uff08\u9488\u5bf9\u7f51\u5173\u6a21\u5757\u800c\u8a00\u4e00\u822c\u662f Controller \u4e2d\uff09\uff0c\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u540e\u5c31\u50cf\u672c\u5730\u63a5\u53e3\u8c03\u7528\u4e00\u6837\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u3002Dubbo \u5c06\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u57fa\u4e8e\u4ee3\u7406\u7684\u8fdc\u7a0b\u8c03\u7528\u80fd\u529b\uff0c\u670d\u52a1\u4ee5\u63a5\u53e3\u4e3a\u7c92\u5ea6\uff0c\u4e3a\u5f00\u53d1\u8005\u5c4f\u853d\u8fdc\u7a0b\u8c03\u7528\u5e95\u5c42\u7ec6\u8282\u3002\n\u5982\u4e0b\u6240\u793a\uff0c\u901a\u8fc7 Cotroller \u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u63a5\u53e3\uff0c\u5b9e\u73b0\u5c06\u5fae\u670d\u52a1\u63a5\u53e3\u53d1\u5e03\u4e3a WebAPI\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,13} title="DemoController.java"',"{2,13}":!0,title:'"DemoController.java"'},'// \u6ce8\u5165 Dubbo \u670d\u52a1\u63a5\u53e3\n@Reference(version = "1.0.0", group = "pangu-examples-dubbo-service")\nprivate UserService userService;\n\n/**\n * \u901a\u8fc7 Spring MVC \u5c06 Duboo \u5fae\u670d\u52a1\u63a5\u53e3\u53d1\u5e03\u4e3a HTTP API\n * @return\n */\n@RequestMapping("/case1")\npublic Result<List<UserOut>> case1() {\n    log.info("call case1...");\n    UserIn userIn = new UserIn().setUserType("1");\n    List<UserOut> userOuts = userService.listUserOuts(userIn);\n    return Result.success(userOuts);\n}\n')),(0,l.kt)("h3",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1}","{1}":!0},"@EnableDubbo\n@SpringBootApplication\npublic class DubboProviderApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(DubboProviderApplication.class).run(args);\n    }\n}\n")),(0,l.kt)("h3",{id:"\u672c\u8303\u4f8b\u6e90\u7801"},"\u672c\u8303\u4f8b\u6e90\u7801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-api"},"pangu-examples-dubbo-api"),"\uff1aDubbo \u670d\u52a1\u63a5\u53e3\u5305"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-service"},"pangu-examples-dubbo-service"),"\uff1aDubbo \u670d\u52a1\u63d0\u4f9b\u8005"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-webapi-dubbo-service-based"},"pangu-examples-webapi-dubbo-service-based"),"\uff1a\u57fa\u4e8e SpringMVC \u5c06 Dubbo \u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3")),(0,l.kt)("h2",{id:"\u7f16\u7a0b\u5b9e\u6218\u4e8c\u57fa\u4e8e-shenyu-\u7f51\u5173\u5f00\u53d1"},"\u7f16\u7a0b\u5b9e\u6218\u4e8c\uff1a\u57fa\u4e8e ShenYu \u7f51\u5173\u5f00\u53d1"),(0,l.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u53d1\u5e03 Dubbo \u670d\u52a1\u4e3a HTTP \u63a5\u53e3\u7684\u7f3a\u7701\u6807\u51c6\u59ff\u52bf\u5df2\u8c03\u6574\u4e3a\u57fa\u4e8e pangu-web \u6a21\u5757\u7684\u4f20\u7edf\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f\uff08\u89c1\u4e0a\u6587\uff09\u3002\u57fa\u4e8e ShenYu \u7f51\u5173\u7684\u5f00\u53d1\u6a21\u5f0f\u5df2\u964d\u7ea7\u4e3a\u4e00\u79cd\u53ef\u9009\u65b9\u6848\uff0c\u5176\u6587\u6863\u5df2\u8fc1\u79fb\u5230\u4e86\u535a\u5ba2\u4e13\u680f\u3002\u8be6\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"/blog/pangu-dev-framework-apache-shenyu"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 Apache ShenYu \u7f51\u5173"),"\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}b.isMDXComponent=!0}}]);