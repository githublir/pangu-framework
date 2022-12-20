"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[7200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,g=d["".concat(u,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7818:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757",tags:["\u76d8\u53e4 Admin"],sidebar_position:5,slug:"/pangu-admin/new-module"},l=void 0,o={unversionedId:"pangu-admin/\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757",id:"pangu-admin/\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757",title:"\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757",description:"\u76d8\u53e4 Admin \u5feb\u901f\u5165\u95e8 | SUCI(Vue3\u3001Element-Plus) | \u76d8\u53e4\u5f00\u53d1\u6846\u67b6",source:"@site/docs/pangu-admin/\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757.md",sourceDirName:"pangu-admin",slug:"/pangu-admin/new-module",permalink:"/pangu-framework/docs/pangu-admin/new-module",draft:!1,editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/pangu-admin/\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757.md",tags:[{label:"\u76d8\u53e4 Admin",permalink:"/pangu-framework/docs/tags/\u76d8\u53e4-admin"}],version:"current",lastUpdatedBy:"xiongchun",lastUpdatedAt:1671025715,formattedLastUpdatedAt:"2022\u5e7412\u670814\u65e5",sidebarPosition:5,frontMatter:{title:"\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757",tags:["\u76d8\u53e4 Admin"],sidebar_position:5,slug:"/pangu-admin/new-module"},sidebar:"tutorialSidebar",previous:{title:"\u76d8\u53e4 Admin \u5feb\u901f\u5f00\u59cb",permalink:"/pangu-framework/docs/pangu-admin/quick-start"},next:{title:"\u90e8\u7f72\u76f8\u5173",permalink:"/pangu-framework/docs/deploy-guide/basic"}},u={},p=[{value:"\u865a\u62df\u4e1a\u52a1",id:"\u865a\u62df\u4e1a\u52a1",level:2},{value:"\u7b2c\u4e00\u6b65 \u65b0\u5efa\u6a21\u5757\u5de5\u7a0b",id:"\u7b2c\u4e00\u6b65-\u65b0\u5efa\u6a21\u5757\u5de5\u7a0b",level:2},{value:"\u7b2c\u4e8c\u6b65 \u65b0\u5efa\u914d\u7f6e",id:"\u7b2c\u4e8c\u6b65-\u65b0\u5efa\u914d\u7f6e",level:2},{value:"\u7b2c\u4e09\u6b65 \u7f51\u5173\u96c6\u6210",id:"\u7b2c\u4e09\u6b65-\u7f51\u5173\u96c6\u6210",level:2},{value:"\u7b2c\u56db\u6b65 \u65b0\u5efa\u524d\u7aef\u6a21\u5757",id:"\u7b2c\u56db\u6b65-\u65b0\u5efa\u524d\u7aef\u6a21\u5757",level:2},{value:"\u7b2c\u4e94\u6b65 \u65b0\u5efa\u4e1a\u52a1\u83dc\u5355",id:"\u7b2c\u4e94\u6b65-\u65b0\u5efa\u4e1a\u52a1\u83dc\u5355",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],c=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"3px",color:"#fff",padding:"0.1rem",margin:"0.2rem"}},t)},d={toc:p,Highlight:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"\u76d8\u53e4 Admin \u5feb\u901f\u5165\u95e8 | SUCI(Vue3\u3001Element-Plus) | \u76d8\u53e4\u5f00\u53d1\u6846\u67b6"),(0,a.kt)("meta",{name:"keywords",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 | \u90e8\u7f72\u8fd0\u7ef4\u6307\u5357"}),(0,a.kt)("meta",{name:"description",content:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5355\u4f53\u5206\u5c42\u67b6\u6784\uff09"})),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4 Admin \u5b9e\u73b0\u4e00\u4e2a\u81ea\u5df1\u7684\u4e1a\u52a1\u529f\u80fd\u6a21\u5757\u3002"),(0,a.kt)("h2",{id:"\u865a\u62df\u4e1a\u52a1"},"\u865a\u62df\u4e1a\u52a1"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u8981\u5b9e\u73b0\u7684\u662f\u4e00\u4e2a\u67d0\u94f6\u884c\u4fe1\u7528\u5361\u7533\u8bf7\u5ba1\u6279\u540e\u53f0\u7cfb\u7edf\u3002\u5728\u6b64\uff0c\u6211\u4eec\u6f14\u793a\u5982\u4f55\u65b0\u589e\u4e00\u4e2a\u3010\u4fe1\u7528\u5361\u4eba\u5de5\u590d\u6838\u3011 \u83dc\u5355\uff0c\u5217\u51fa\u5404\u79cd\u6e20\u9053\u63d0\u4ea4\u5230\u540e\u53f0\u7684\u5361\u7533\u8bf7\u4fe1\u606f\u4f9b\u5ba1\u6838\u4eba\u5458\u5ba1\u6838\u786e\u8ba4\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u6b65-\u65b0\u5efa\u6a21\u5757\u5de5\u7a0b"},"\u7b2c\u4e00\u6b65 \u65b0\u5efa\u6a21\u5757\u5de5\u7a0b"),(0,a.kt)("p",null,"\u4ee5 pangu-admin-system \u4e3a\u539f\u578b\u6a21\u7248\uff0c\u65b0\u5efa\u4e1a\u52a1\u6a21\u5757\u5de5\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\u250c\u2500\u2500 icbc-card-audit # ICBC \u67d0\u884c\u4fe1\u7528\u5361\u5ba1\u6279\u76f8\u5173\u4e1a\u52a1\n\u2502   \u251c\u2500\u2500 icbc-card-audit-api # \u4e1a\u52a1\u63a5\u53e3\n\u2502   \u251c\u2500\u2500 icbc-card-audit-app # \u4e1a\u52a1\u5b9e\u73b0  \n")),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u6b65-\u65b0\u5efa\u914d\u7f6e"},"\u7b2c\u4e8c\u6b65 \u65b0\u5efa\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 nacos \u914d\u7f6e\u4e2d\u5fc3\u521b\u5efa Data Id \u4e3a icbc-card-audit-app \u7684\u914d\u7f6e\u6570\u636e\u3002\u6ce8\u610f\uff1a\u6240\u5c5e\u547d\u540d\u7a7a\u95f4\u9700\u8981\u548c pangu-admin-* \u7684\u914d\u7f6e\u6570\u636e\u6240\u5c5e\u547d\u540d\u7a7a\u95f4\u4fdd\u6301\u4e00\u81f4\u3002"),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u6b65-\u7f51\u5173\u96c6\u6210"},"\u7b2c\u4e09\u6b65 \u7f51\u5173\u96c6\u6210"),(0,a.kt)("p",null,"\u5728\u7f51\u5173\u6a21\u5757 pangu-admin-web \u7684 pom.xml \u4e2d\u6dfb\u52a0\u5bf9\u63a5\u53e3\u6a21\u5757 icbc-card-audit-api \u7684\u4f9d\u8d56\u3002\u5e76\u901a\u8fc7 RestController \u8c03\u7528\u76f8\u5173 api \u63a5\u53e3\u3002 "),(0,a.kt)("h2",{id:"\u7b2c\u56db\u6b65-\u65b0\u5efa\u524d\u7aef\u6a21\u5757"},"\u7b2c\u56db\u6b65 \u65b0\u5efa\u524d\u7aef\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\u250c\u2500\u2500 src       # \u6e90\u4ee3\u7801\n\u2502   \u251c\u2500\u2500 api   # \u5728\u8fd9\u91cc\u5b9a\u4e49\u76f8\u5173\u6a21\u5757 API \u8bf7\u6c42\n\u2502   \u251c\u2500\u2500 views # \u5728\u8fd9\u91cc\u65b0\u5efa\u76f8\u5173\u6a21\u5757\u524d\u7aef\u9875\u9762\n\u2502   \u251c\u2500\u2500 ...   # etc\n")),(0,a.kt)("h2",{id:"\u7b2c\u4e94\u6b65-\u65b0\u5efa\u4e1a\u52a1\u83dc\u5355"},"\u7b2c\u4e94\u6b65 \u65b0\u5efa\u4e1a\u52a1\u83dc\u5355"),(0,a.kt)("p",null,"\u767b\u5f55\u6743\u9650\u7cfb\u7edf\uff0c\u901a\u8fc7\u3010\u8d44\u6e90\u7ba1\u7406\u3011\u83dc\u5355\uff0c\u65b0\u589e\u4e1a\u52a1\u83dc\u5355\u3010\u4fe1\u7528\u5361\u4eba\u5de5\u590d\u6838\u3011\u3002\u5e76\u5c06\u5176\u6388\u6743\u7ed9\u76f8\u5173\u89d2\u8272\u548c\u4eba\u5458\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}m.isMDXComponent=!0}}]);