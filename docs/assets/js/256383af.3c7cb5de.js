"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[1181],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={slug:"caddy-vs-nginx",title:"\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51",authors:["xiongchun"],tags:["Caddy","Nginx","\u7f51\u5173","\u53cd\u5411\u4ee3\u7406","WebServer"],date:new Date("2022-01-30T00:00:00.000Z"),description:"Caddy VS Nginx & \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6700\u4f73\u5b9e\u8df5",hide_table_of_contents:!1},u=void 0,c={permalink:"/pangu-framework/blog/caddy-vs-nginx",editUrl:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/blog/Caddy VS Nginx.md",source:"@site/blog/Caddy VS Nginx.md",title:"\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51",description:"Caddy VS Nginx & \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6700\u4f73\u5b9e\u8df5",date:"2022-01-30T00:00:00.000Z",formattedDate:"January 30, 2022",tags:[{label:"Caddy",permalink:"/pangu-framework/blog/tags/caddy"},{label:"Nginx",permalink:"/pangu-framework/blog/tags/nginx"},{label:"\u7f51\u5173",permalink:"/pangu-framework/blog/tags/\u7f51\u5173"},{label:"\u53cd\u5411\u4ee3\u7406",permalink:"/pangu-framework/blog/tags/\u53cd\u5411\u4ee3\u7406"},{label:"WebServer",permalink:"/pangu-framework/blog/tags/web-server"}],readingTime:1.655,truncated:!0,authors:[{name:"xiongchun",title:"Pangu Dev Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://pangu.pulanit.com/resources/xiongchun.png",key:"xiongchun"}],prevItem:{title:"TLog \u52a9\u529b\u76d8\u53e4\u6846\u67b6\u5b9e\u73b0\u5fae\u670d\u52a1\u94fe\u8def\u65e5\u5fd7\u8ffd\u8e2a",permalink:"/pangu-framework/blog/tlog"},nextItem:{title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173",permalink:"/pangu-framework/blog/pangu-dev-framework-apache-shenyu"}},p={authorsImageUrls:[void 0]},d=[{value:"Caddy \u7279\u6027",id:"caddy-\u7279\u6027",children:[],level:2},{value:"Caddy \u5b9e\u6218",id:"caddy-\u5b9e\u6218",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"Fedora, RHEL/CentOS 8",id:"fedora-rhelcentos-8",children:[],level:4},{value:"RHEL/CentOS 7",id:"rhelcentos-7",children:[],level:4}],level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[],level:3},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:[],level:3},{value:"\u57df\u540d\u89e3\u6790",id:"\u57df\u540d\u89e3\u6790",children:[],level:3}],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Caddy 2 is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go.")),(0,l.kt)("p",{align:"right"}," \u2014 \u6458\u81ea ",(0,l.kt)("a",{href:"https://caddyserver.com/"},"Caddy \u5b98\u7f51")),(0,l.kt)("h2",{id:"caddy-\u7279\u6027"},"Caddy \u7279\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u7701\u542f\u7528HTTP/2 \u534f\u8bae\uff0c\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u7701\u5168\u7ad9HTTPS\uff0c\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u3002\uff08\u81ea\u52a8\u7533\u8bf7\u548c\u7eed\u671f\u8bc1\u4e66\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u53cb\u597d\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u652f\u6301\u5728\u7ebf\u914d\u7f6e API\u3002"),(0,l.kt)("li",{parentName:"ul"},"golang \u5f00\u53d1\uff0c\u51e0\u4e4e\u65e0\u4f9d\u8d56\uff0c\u90e8\u7f72\u7b80\u5355\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5145\u5f53 API Gateway, \u53cd\u5411\u4ee3\u7406\u540e\u7aef\u591a\u4e2a Web \u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5929\u751f\u63d2\u4ef6\u67b6\u6784\uff0c\u793e\u533a\u63d2\u4ef6\u4e30\u5bcc\uff0c\u4e14\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7b80\u5355\uff08\u5199\u4e2a\u63d2\u4ef6\u987a\u4fbf\u8e6d\u4e00\u4e0b golang \u7684\u70ed\u5ea6\uff09\u3002")),(0,l.kt)("h2",{id:"caddy-\u5b9e\u6218"},"Caddy \u5b9e\u6218"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Web Server \u6258\u7ba1\u9759\u6001\u8d44\u6e90\uff0c\u4ee5\u90e8\u7f72\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u9879\u76ee\u5b98\u7f51\u4e3a\u4f8b\u3002",(0,l.kt)("a",{parentName:"p",href:"https://pangu.pulanit.com"},"https://pangu.pulanit.com"))),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h4",{id:"fedora-rhelcentos-8"},"Fedora, RHEL/CentOS 8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ dnf install 'dnf-command(copr)'\n$ dnf copr enable @caddy/caddy\n$ dnf install caddy\n")),(0,l.kt)("h4",{id:"rhelcentos-7"},"RHEL/CentOS 7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ yum install yum-plugin-copr\n$ yum copr enable @caddy/caddy\n$ yum install caddy\n")),(0,l.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"$ systemctl start[stop|restart] caddy\n$ systemctl reload caddy //\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\n$ systemctl status caddy //\u67e5\u770b\u8fd0\u884c\u72b6\u6001\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# vi /etc/caddy/Caddyfile\npangu.pulanit.com {\n        # Set this path to your site's directory.\n        root * /var/www/pangu.pulanit.com\n        encode gzip\n        # Enable the static file server.\n        file_server\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u4e0a\u4f20\u5230\u76ee\u5f55\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"/var/www/pangu.pulanit.com"),"\u3002")),(0,l.kt)("h3",{id:"\u57df\u540d\u89e3\u6790"},"\u57df\u540d\u89e3\u6790"),(0,l.kt)("p",null,"\u57df\u540d\u89e3\u6790\u5730\u5740\u5fc5\u987b\u548c\u4e0a\u8ff0\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u57df\u540d\u4fdd\u6301\u4e00\u81f4\u5373\u53ef\u3002\u5c1d\u8bd5\u8bbf\u95ee\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://pangu.pulanit.com"},"https://pangu.pulanit.com"),"\u3002\u53ef\u89c1\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u7f51\u7ad9\u81ea\u52a8\u5f00\u542f\u4e86HTTPS"),"\u3002"))}m.isMDXComponent=!0}}]);