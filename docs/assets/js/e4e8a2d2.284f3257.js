"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[8010],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,b=c["".concat(o,".").concat(p)]||c[p]||m[p]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const s={title:"\u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883",tags:["\u76d8\u53e4 Admin"],sidebar_position:2,slug:"/how-to-create-frontend-environment"},o=void 0,d={unversionedId:"quick-start/\u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883",id:"quick-start/\u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883",title:"\u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883",description:"\u76d8\u53e4 Admin | \u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883 | \u76d8\u53e4\u5f00\u53d1\u6846\u67b6",source:"@site/admin/quick-start/\u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883.md",sourceDirName:"quick-start",slug:"/how-to-create-frontend-environment",permalink:"/pangu-framework/admin/how-to-create-frontend-environment",draft:!1,tags:[{label:"\u76d8\u53e4 Admin",permalink:"/pangu-framework/admin/tags/\u76d8\u53e4-admin"}],version:"current",lastUpdatedBy:"xiongchun",sidebarPosition:2,frontMatter:{title:"\u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883",tags:["\u76d8\u53e4 Admin"],sidebar_position:2,slug:"/how-to-create-frontend-environment"},sidebar:"tutorialSidebar",previous:{title:"\u642d\u5efa\u540e\u7aef\u5f00\u53d1\u73af\u5883",permalink:"/pangu-framework/admin/how-to-create-backend-environment"},next:{title:"\u65b0\u589e\u4e1a\u52a1\u529f\u80fd\u6a21\u5757",permalink:"/pangu-framework/admin/new-module"}},u={},c=[{value:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e",id:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e",level:2},{value:"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa",level:2},{value:"\u5b89\u88c5 &amp; \u542f\u52a8",id:"\u5b89\u88c5--\u542f\u52a8",level:3},{value:"Admin \u6743\u9650\u7cfb\u7edf\u622a\u5c4f",id:"admin-\u6743\u9650\u7cfb\u7edf\u622a\u5c4f",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],m={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"\u76d8\u53e4 Admin | \u642d\u5efa\u524d\u7aef\u5f00\u53d1\u73af\u5883 | \u76d8\u53e4\u5f00\u53d1\u6846\u67b6"),(0,r.kt)("meta",{name:"keywords",content:"\u76d8\u53e4 Admin | \u5feb\u901f\u5f00\u59cb | SUCI(Vue3\u3001Element-Plus) | \u76d8\u53e4\u5f00\u53d1\u6846\u67b6"})),(0,r.kt)("h2",{id:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e"},"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e"),(0,r.kt)("p",null,"\u76d8\u53e4 Admin \u524d\u7aef\u4ed3\u5e93\u4ee3\u7801\u8def\u5f84\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"pangu-framework/pangu-admin/pangu-admin-frontend"),"\u3002"),(0,r.kt)("h2",{id:"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"\u524d\u7aef\u5f00\u53d1\u73af\u5883\u642d\u5efa"),(0,r.kt)("p",null,"\u524d\u7aef IDE \u53ef\u4ee5\u81ea\u7531\u9009\u62e9\uff0c\u63a8\u8350 vscode\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5--\u542f\u52a8"},"\u5b89\u88c5 & \u542f\u52a8"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u4f9d\u8d56\u548c\u542f\u52a8\u9700\u4f9d\u8d56npm\u3002\u5b89\u88c5\u65b9\u6cd5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/"},"https://nodejs.org/zh-cn"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\ncd pangu-framework/pangu-admin/pangu-admin-frontend\n# \u5b89\u88c5\u4f9d\u8d56\nnpm i\n# \u542f\u52a8\u9879\u76ee (\u5f00\u53d1\u6a21\u5f0f)\nnpm run serve\n# \u6784\u5efa\u90e8\u7f72\uff08\u751f\u4ea7\u6a21\u5f0f\uff09\uff1a\u5c06\u6839\u76ee\u5f55\u751f\u6210 dist \u6587\u4ef6\u5939\u53d1\u5e03\u5230\u670d\u52a1\u5668\u5373\u53ef\nnpm run build\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u542f\u52a8\u6210\u529f\u540e\u53ef\u901a\u8fc7\u63a7\u5236\u53f0\u63d0\u793a\u4fe1\u606f\u5f00\u59cb\u8bbf\u95ee\u3002\u5982\uff1ahttp://localhost:2800"),(0,r.kt)("h2",{id:"admin-\u6743\u9650\u7cfb\u7edf\u622a\u5c4f"},"Admin \u6743\u9650\u7cfb\u7edf\u622a\u5c4f"),(0,r.kt)("p",null,"\u5982\u4e0b\u4e3a\u6743\u9650\u7cfb\u7edf\u53c2\u8003\u5b9e\u73b0\u7684\u90e8\u5206\u622a\u5c4f\u3002\u5b8c\u6574\u4f53\u9a8c\u8bf7\u8bbf\u95ee\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://pangu-admin.pulanit.com"},"\u5728\u7ebf\u6f14\u793a\u7cfb\u7edf"),"\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",label:"1",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(2990).Z,width:"2874",height:"1578"}))),(0,r.kt)(i.Z,{value:"2",label:"2",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(3613).Z,width:"2878",height:"1582"}))),(0,r.kt)(i.Z,{value:"3",label:"3",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(6176).Z,width:"2880",height:"1582"}))),(0,r.kt)(i.Z,{value:"4",label:"4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(1652).Z,width:"2876",height:"1584"}))),(0,r.kt)(i.Z,{value:"5",label:"5",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(3074).Z,width:"2880",height:"1584"}))),(0,r.kt)(i.Z,{value:"6",label:"6",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(9008).Z,width:"2880",height:"1582"}))),(0,r.kt)(i.Z,{value:"7",label:"7",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(9773).Z,width:"2874",height:"1586"}))),(0,r.kt)(i.Z,{value:"8",label:"8",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(7677).Z,width:"2880",height:"1586"}))),(0,r.kt)(i.Z,{value:"9",label:"9",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(1703).Z,width:"2874",height:"1582"}))),(0,r.kt)(i.Z,{value:"10",label:"10",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(2828).Z,width:"2878",height:"1584"}))),(0,r.kt)(i.Z,{value:"11",label:"11",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(3739).Z,width:"2880",height:"1584"}))),(0,r.kt)(i.Z,{value:"12",label:"12",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(9461).Z,width:"2874",height:"1584"}))),(0,r.kt)(i.Z,{value:"13",label:"13",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(6582).Z,width:"2880",height:"1586"}))),(0,r.kt)(i.Z,{value:"14",label:"14",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 Admin",src:a(1150).Z,width:"2876",height:"1582"})))),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb\u5176\u5b83\u7ae0\u8282\u83b7\u53d6\u4f60\u60f3\u8981\u7684\u7b54\u6848\u6216\u901a\u8fc7\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/community"},"\u5f00\u53d1\u8005\u793e\u533a")," \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002"))}p.isMDXComponent=!0},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),s=a(7392),o=a(7094),d=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:p,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,o.U)(),[w,Z]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=p){const e=v[p];null!=e&&e!==w&&f.some((t=>t.value===e))&&Z(e)}const O=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==w&&(x(t),Z(n),null!=p&&y(p,String(n)))},A=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:A,onClick:O},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},2990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/38-pangu-admin-8fd00b65afe3e10fa86d89da0824b77b.png"},3613:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/39-pangu-admin-fbb440059bfc8cfbc6b5026001ad7acb.png"},6176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/40-pangu-admin-ad1dd9e7711793db5b348f73687c2f60.png"},1652:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/41-pangu-admin-57ba140bcfb2b45834a5855dc7fd8831.png"},3074:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/42-pangu-admin-f4422cb9f17440a291264bf97850fada.png"},9008:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/43-pangu-admin-4b1ab7691d2b0c891215a686f5d109cb.png"},9773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/44-pangu-admin-79df08a6afac1c0c203185951a5a4add.png"},7677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/45-pangu-admin-24c8467891fc61f6bd41e082d00db857.png"},1703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/46-pangu-admin-c3d2cc1d8f420786cf9e3138cc35f2cf.png"},2828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/47-pangu-admin-049f9d2f4b2bf9d075fa27778b5fed8a.png"},3739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/48-pangu-admin-e9e17c01a74b8693278c9c1bedc7537f.png"},1150:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/49-pangu-admin-d8bc1b4c5bc06e3d48faed2c23b5694b.png"},6582:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/50-pangu-admin-a324e2508d61c1d156a6500bea34c705.png"},9461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/51-pangu-admin-b7296a4a5e20475550d11b4ae3b99b35.png"}}]);