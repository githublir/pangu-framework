(()=>{"use strict";var e,d,a,f,c,b={},t={};function r(e){var d=t[e];if(void 0!==d)return d.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=b,r.c=t,e=[],r.O=(d,a,f,c)=>{if(!a){var b=1/0;for(i=0;i<e.length;i++){a=e[i][0],f=e[i][1],c=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&c||b>=c)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=f();void 0!==n&&(d=n)}}return d}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[a,f,c]},r.n=e=>{var d=e&&e.__esModule?()=>e.default:()=>e;return r.d(d,{a:d}),d},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};d=d||[null,a({}),a([]),a(a)];for(var t=2&f&&e;"object"==typeof t&&!~d.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((d=>b[d]=()=>e[d]));return b.default=()=>e,r.d(c,b),c},r.d=(e,d)=>{for(var a in d)r.o(d,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:d[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((d,a)=>(r.f[a](e,d),d)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",111:"7c075d35",167:"ab4e345c",379:"345a1c73",431:"0be0bf4d",627:"f97071e9",737:"86b6e08a",743:"5da849fd",885:"a5b91df5",1159:"0ef248ad",1204:"35fd95cc",1223:"8212c30c",1283:"642d33ed",1340:"2b6eb587",1346:"ed65fc25",1465:"8f77c8f7",1534:"ba49b03b",1699:"cb5d812f",1722:"cda5bce0",1847:"20adde69",1888:"c7da0f78",1932:"a95ce2e3",2059:"1666ec65",2770:"1373630d",2996:"b5a19149",3041:"9f5124c9",3085:"1f391b9e",3177:"8d86d40d",3611:"26defb44",3637:"1eed6653",3698:"5180051f",3751:"3720c009",3783:"52cb9ed2",3793:"485cd31f",3921:"26d1d589",4094:"24bc5ad8",4121:"55960ee5",4135:"f19c9843",4195:"c4f5d8e4",4203:"4c7e435d",4505:"2a27ca14",4518:"d1c3716e",4584:"d3f7a30a",4616:"67f69e30",5126:"c5f978b9",5162:"2a665cfe",5214:"f2ed4f2f",5262:"981c5d05",5536:"5c93b3c9",5572:"aa0b6d16",5606:"d0e67d21",5656:"b39302cf",5712:"f07f7269",5943:"8afca26f",5999:"faa271ca",6088:"a99bafa9",6156:"03480e64",6534:"d4df7607",6603:"af45b021",6612:"72ca4b76",6631:"2c397297",6700:"ea9ff353",6778:"afadfd0c",6810:"b7208454",6860:"db8d1fc6",6996:"e7b22fe0",7085:"835b5157",7253:"a3a224e7",7276:"da875cf4",7860:"9ae48bb3",7918:"17896441",7920:"1a4e3797",8010:"e4e8a2d2",8379:"649e3814",8408:"11c46d37",8758:"76952b78",8806:"a29b88e0",9e3:"529f197e",9143:"3ed66d6d",9169:"05a0b490",9215:"2517e4a2",9225:"0311e3fa",9391:"66c51df7",9514:"1be78505",9608:"beeec121",9671:"0e384e19",9763:"d5159757",9764:"26b38241",9924:"df203c0f"}[e]||e)+"."+{53:"b9ae1524",111:"bd57c2df",167:"fae94660",272:"89f0838d",379:"61bc790c",431:"346edb83",627:"8d45928c",737:"a5747978",743:"334344c7",885:"7848b2f0",1159:"d0a586f7",1204:"ac7dd0b0",1223:"0ef6f997",1283:"44846b76",1340:"9e36f163",1346:"a428227f",1465:"4e8b941d",1534:"34f8b2d5",1699:"1bbc9590",1722:"eceeaa9a",1847:"d8dd4f61",1888:"b839d086",1932:"bc052bdc",2059:"5bafc4d8",2770:"e56903ff",2996:"0c454354",3041:"b51ad48f",3085:"92f8f4b3",3177:"7e8d9861",3611:"49d4143d",3637:"75b8f3fc",3698:"f22d438d",3751:"5e822246",3783:"f14a2f75",3793:"9e2f4afc",3921:"c9e08fee",4094:"c00d9edd",4121:"55eaadcc",4135:"4975c302",4195:"45e0e155",4203:"4f73b57c",4505:"3de1c12c",4518:"2046698d",4584:"2741c223",4616:"272b50d5",4972:"75e70401",5126:"5ee647e0",5162:"a2d41dd4",5214:"64f7eceb",5262:"cd35ea65",5525:"03b2ebd7",5536:"71672ed0",5572:"126b1bc3",5606:"771eb6b4",5656:"dca0db55",5712:"91016980",5943:"9b0c5db5",5999:"154b74cb",6088:"1f7e8d64",6156:"e04327b4",6534:"c0f544a3",6603:"a2b06f23",6612:"60d9b82e",6631:"791281c3",6700:"f10be2f1",6778:"12cd5ec1",6810:"7103a087",6860:"846875aa",6996:"13f8ceae",7085:"6c16a352",7253:"bd24cb69",7276:"a763d633",7860:"13d0b83e",7918:"958e7adb",7920:"5f2b155b",8010:"284f3257",8379:"ab509de9",8408:"61e576de",8443:"daf6ec77",8758:"285cdbc6",8806:"a6c829a7",9e3:"900f2234",9143:"f28e9c44",9169:"63a3e04f",9215:"e07b6f78",9225:"084f49a8",9391:"62dce8da",9514:"4a1ec0fd",9608:"a4f5cd97",9671:"f5f8a8ea",9763:"32c26423",9764:"b89c58a8",9924:"b11c7535"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),f={},c="pangu-website:",r.l=(e,d,a,b)=>{if(f[e])f[e].push(d);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+a){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+a),t.src=e),f[e]=[d];var l=(d,a)=>{t.onerror=t.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(a))),d)return d(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/pangu-framework/",r.gca=function(e){return e={17896441:"7918","935f2afb":"53","7c075d35":"111",ab4e345c:"167","345a1c73":"379","0be0bf4d":"431",f97071e9:"627","86b6e08a":"737","5da849fd":"743",a5b91df5:"885","0ef248ad":"1159","35fd95cc":"1204","8212c30c":"1223","642d33ed":"1283","2b6eb587":"1340",ed65fc25:"1346","8f77c8f7":"1465",ba49b03b:"1534",cb5d812f:"1699",cda5bce0:"1722","20adde69":"1847",c7da0f78:"1888",a95ce2e3:"1932","1666ec65":"2059","1373630d":"2770",b5a19149:"2996","9f5124c9":"3041","1f391b9e":"3085","8d86d40d":"3177","26defb44":"3611","1eed6653":"3637","5180051f":"3698","3720c009":"3751","52cb9ed2":"3783","485cd31f":"3793","26d1d589":"3921","24bc5ad8":"4094","55960ee5":"4121",f19c9843:"4135",c4f5d8e4:"4195","4c7e435d":"4203","2a27ca14":"4505",d1c3716e:"4518",d3f7a30a:"4584","67f69e30":"4616",c5f978b9:"5126","2a665cfe":"5162",f2ed4f2f:"5214","981c5d05":"5262","5c93b3c9":"5536",aa0b6d16:"5572",d0e67d21:"5606",b39302cf:"5656",f07f7269:"5712","8afca26f":"5943",faa271ca:"5999",a99bafa9:"6088","03480e64":"6156",d4df7607:"6534",af45b021:"6603","72ca4b76":"6612","2c397297":"6631",ea9ff353:"6700",afadfd0c:"6778",b7208454:"6810",db8d1fc6:"6860",e7b22fe0:"6996","835b5157":"7085",a3a224e7:"7253",da875cf4:"7276","9ae48bb3":"7860","1a4e3797":"7920",e4e8a2d2:"8010","649e3814":"8379","11c46d37":"8408","76952b78":"8758",a29b88e0:"8806","529f197e":"9000","3ed66d6d":"9143","05a0b490":"9169","2517e4a2":"9215","0311e3fa":"9225","66c51df7":"9391","1be78505":"9514",beeec121:"9608","0e384e19":"9671",d5159757:"9763","26b38241":"9764",df203c0f:"9924"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(d,a)=>{var f=r.o(e,d)?e[d]:void 0;if(0!==f)if(f)a.push(f[2]);else if(/^(1303|532)$/.test(d))e[d]=0;else{var c=new Promise(((a,c)=>f=e[d]=[a,c]));a.push(f[2]=c);var b=r.p+r.u(d),t=new Error;r.l(b,(a=>{if(r.o(e,d)&&(0!==(f=e[d])&&(e[d]=void 0),f)){var c=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+d+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,f[1](t)}}),"chunk-"+d,d)}},r.O.j=d=>0===e[d];var d=(d,a)=>{var f,c,b=a[0],t=a[1],o=a[2],n=0;if(b.some((d=>0!==e[d]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(d&&d(a);n<b.length;n++)c=b[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},a=self.webpackChunkpangu_website=self.webpackChunkpangu_website||[];a.forEach(d.bind(null,0)),a.push=d.bind(null,a.push.bind(a))})()})();