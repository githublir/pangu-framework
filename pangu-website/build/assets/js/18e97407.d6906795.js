"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[4639],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,g=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5240:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],u={title:"\u6570\u636e\u6301\u4e45\u5316",tags:["\u6570\u636e\u6301\u4e45\u5316","MyBatis","MyBatis-Plus"],sidebar_position:5,slug:"/advanced-guide/guide2"},c=void 0,d={unversionedId:"advanced-guide/\u6570\u636e\u5e93\u6301\u4e45\u5316\u64cd\u4f5c",id:"advanced-guide/\u6570\u636e\u5e93\u6301\u4e45\u5316\u64cd\u4f5c",title:"\u6570\u636e\u6301\u4e45\u5316",description:"\u5f69\u86cb\uff1a\u70ed\u5207\u6362\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b",source:"@site/docs/advanced-guide/\u6570\u636e\u5e93\u6301\u4e45\u5316\u64cd\u4f5c.md",sourceDirName:"advanced-guide",slug:"/advanced-guide/guide2",permalink:"/pangu-framework/docs/advanced-guide/guide2",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/docs/advanced-guide/\u6570\u636e\u5e93\u6301\u4e45\u5316\u64cd\u4f5c.md",tags:[{label:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/pangu-framework/docs/tags/\u6570\u636e\u6301\u4e45\u5316"},{label:"MyBatis",permalink:"/pangu-framework/docs/tags/my-batis"},{label:"MyBatis-Plus",permalink:"/pangu-framework/docs/tags/my-batis-plus"}],version:"current",sidebarPosition:5,frontMatter:{title:"\u6570\u636e\u6301\u4e45\u5316",tags:["\u6570\u636e\u6301\u4e45\u5316","MyBatis","MyBatis-Plus"],sidebar_position:5,slug:"/advanced-guide/guide2"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u5173\u7cfb\u7edf",permalink:"/pangu-framework/docs/advanced-guide/gateway"},next:{title:"\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58",permalink:"/pangu-framework/docs/advanced-guide/guide3"}},l=[{value:"\u5f69\u86cb\uff1a\u70ed\u5207\u6362\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b",id:"\u5f69\u86cb\u70ed\u5207\u6362\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b",children:[],level:2}],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5f69\u86cb\u70ed\u5207\u6362\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b"},"\u5f69\u86cb\uff1a\u70ed\u5207\u6362\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b"))}p.isMDXComponent=!0}}]);