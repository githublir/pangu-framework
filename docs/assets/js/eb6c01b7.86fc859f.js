"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[9323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,g=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",authors:["xiongchun"],tags:["Caddy","\u90e8\u7f72"],date:new Date("2022-10-02T00:00:00.000Z"),hide_table_of_contents:!1,slug:"deploy-pangu-admin-by-caddy"},i=void 0,l={permalink:"/blog/deploy-pangu-admin-by-caddy",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/blog/\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin.md",source:"@site/blog/\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin.md",title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",description:"\u672c\u6587\u4ee5\u90e8\u7f72\u76d8\u53e4 Admin \u5728\u7ebf\u6f14\u793a\u7cfb\u7edf\u4e3a\u4f8b\u8bb2\u89e3\u5982\u4f55\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin \u7684\u9759\u6001\u8d44\u6e90\u548c Web \u8282\u70b9\uff08\u4e1a\u52a1\u7f51\u5173\uff09\u3002",date:"2022-10-02T00:00:00.000Z",formattedDate:"2022\u5e7410\u67082\u65e5",tags:[{label:"Caddy",permalink:"/blog/tags/caddy"},{label:"\u90e8\u7f72",permalink:"/blog/tags/\u90e8\u7f72"}],readingTime:2.125,hasTruncateMarker:!0,authors:[{name:"xiongchun",title:"Pangu Dev Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://pangu.pulanit.com/img/xiongchun.png",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",authors:["xiongchun"],tags:["Caddy","\u90e8\u7f72"],date:"2022-10-02T00:00:00.000Z",hide_table_of_contents:!1,slug:"deploy-pangu-admin-by-caddy"},nextItem:{title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173",permalink:"/blog/pangu-dev-framework-apache-shenyu"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ee5\u90e8\u7f72\u76d8\u53e4 Admin \u5728\u7ebf\u6f14\u793a\u7cfb\u7edf\u4e3a\u4f8b\u8bb2\u89e3\u5982\u4f55\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin \u7684\u9759\u6001\u8d44\u6e90\u548c Web \u8282\u70b9\uff08\u4e1a\u52a1\u7f51\u5173\uff09\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u90e8\u7f72\u6548\u679c\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://pangu-admin.pulanit.com/"},"https://pangu-admin.pulanit.com")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5145\u5f53 WebServer \u90e8\u7f72\u9879\u76ee\u9759\u6001\u7f51\u7ad9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5145\u5f53\u6d41\u91cf\u7f51\u5173\u65b9\u5411\u4ee3\u7406\u540e\u7aef\u7684 Web \u8282\u70b9\uff08\u4e1a\u52a1\u7f51\u5173\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u7ad9\u81ea\u52a8 SSL\u3002\u5305\u542b\u9759\u6001\u7f51\u7ad9\u548c API \u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u8de8\u57df\u8bf7\u6c42\uff1b\u89e3\u51b3\u524d\u7aef https \u540e\u7aef http \u7684\u534f\u8bae\u9002\u914d\u95ee\u9898\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"nginx \u4e5f\u53ef\u4ee5\u505a\u540c\u6837\u7684\u4e8b\u60c5\u3002")))}d.isMDXComponent=!0}}]);