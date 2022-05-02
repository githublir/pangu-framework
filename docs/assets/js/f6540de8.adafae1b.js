"use strict";(self.webpackChunkpangu_website=self.webpackChunkpangu_website||[]).push([[8473],{5684:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"pangu-dev-framework-apache-shenyu","metadata":{"permalink":"/pangu-framework/blog/pangu-dev-framework-apache-shenyu","editUrl":"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173.md","source":"@site/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173.md","title":"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173","description":"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173","date":"2022-01-29T00:00:00.000Z","formattedDate":"January 29, 2022","tags":[{"label":"\u7f51\u5173","permalink":"/pangu-framework/blog/tags/\u7f51\u5173"},{"label":"ShenYu","permalink":"/pangu-framework/blog/tags/shen-yu"},{"label":"Dubbo","permalink":"/pangu-framework/blog/tags/dubbo"},{"label":"\u6cdb\u5316\u8c03\u7528","permalink":"/pangu-framework/blog/tags/\u6cdb\u5316\u8c03\u7528"}],"readingTime":9.325,"truncated":true,"authors":[{"name":"xiongchun","title":"Pangu Dev Framework maintainer","url":"https://gitee.com/xiong-chun","imageURL":"/pangu-framework/resources/author/xiongchun.png","key":"xiongchun"}],"nextItem":{"title":"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6587\u6863\u6392\u7248\u6307\u5357","permalink":"/pangu-framework/blog/chinese-copywriting-guidelines"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u5b9e\u73b0\u5fae\u670d\u52a1\u7f51\u5173\u63a5\u53e3\u7684\u7f3a\u7701\u59ff\u52bf\u4e3a\u57fa\u4e8e pangu-web \u6a21\u5757\u7684\u4f20\u7edf\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u6587\u6863\uff1a[\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173)](/docs/quick-start/how-to-create-http-api)\u3002\u672c\u6587\u63d0\u4f9b\u53e6\u5916\u4e00\u79cd\u901a\u8fc7\u96c6\u6210Apache ShenYu \u7f51\u5173\u5b9e\u73b0\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u5c06\u5176\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\u7684\u53ef\u9009\u65b9\u6cd5\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## ShenYu \u7f51\u5173\u4ecb\u7ecd\\nShenYu \u7f51\u5173\u57fa\u4e8e Webflex \u975e\u963b\u585e\u6a21\u578b\u901a\u8fc7\u6cdb\u5316\u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002\u4f9d\u8d56 Netty \u4e0d\u9700\u8981 Servlet \u5bb9\u5668\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u5305\u5373\u53ef\u901a\u8fc7 Dubbo \u6cdb\u5316\u8c03\u7528\u670d\u52a1\u63a5\u53e3\u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u5c06\u540e\u7aef Dubbo \u670d\u52a1\u8f6c\u6362\u4e3a HTTP API\u3002\u540c\u65f6\u7f51\u5173\u652f\u6301\u9274\u6743\u3001\u52a8\u6001\u9650\u6d41\u3001\u7194\u65ad\u3001\u9632\u706b\u5899\u3001\u7070\u5ea6\u53d1\u5e03\u7b49\u3002\\n\\n### \u76f8\u5173\u540d\u8bcd\u89e3\u91ca\\n- **shenyu-admin**  \\n\u7f51\u5173\u63d2\u4ef6\u548c\u5143\u6570\u636e\u4fe1\u606f\u914d\u7f6e\u7ba1\u7406\u540e\u53f0\u3002\u72ec\u7acb JAR\uff0c\u9700\u8981\u5355\u72ec\u90e8\u7f72\u3002\\n- **shenyu-gateway**  \\n\u7f51\u5173\u6a21\u5757\uff0c\u4ee3\u7406 Http \u8bf7\u6c42\uff0c\u6cdb\u5316\u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002\u6b64\u6a21\u5757\u8d1f\u8d23\u63a5\u6536 Http \u8bf7\u6c42\u3002\\n- **\u6570\u636e\u540c\u6b65**  \\n\u6570\u636e\u540c\u6b65\u662f\u6307\u5728 ShenYu-Admin \u540e\u53f0\u64cd\u4f5c\u6570\u636e\u4ee5\u540e\uff0c\u4f7f\u7528\u4f55\u79cd\u7b56\u7565\u5c06\u6570\u636e\u540c\u6b65\u5230 ShenYu Gateway \u7f51\u5173\u6a21\u5757\u3002ShenYu \u5f53\u524d\u652f\u6301 ZooKeeper\u3001WebSocket\u3001Http \u957f\u8f6e\u8be2\u3001Nacos \u3001Etcd \u548c Consul \u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002\u76d8\u53e4\u5f00\u53d1\u4f7f\u7528\u7684\u662f WebSocket \u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002\\n- **\u63d2\u4ef6**  \\nShenYu \u4f7f\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\u601d\u60f3\uff0c\u5b9e\u73b0\u63d2\u4ef6\u7684\u70ed\u63d2\u62d4\u3002\u5185\u7f6e\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u5305\u62ec RPC \u4ee3\u7406\u3001\u7194\u65ad\u548c\u9650\u6d41\u3001\u6743\u9650\u8ba4\u8bc1\u3001\u76d1\u63a7\u7b49\u7b49\u3002\\n- **\u9009\u62e9\u5668**  \\n\u6bcf\u4e2a\u63d2\u4ef6\u53ef\u8bbe\u7f6e\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u521d\u6b65\u7b5b\u9009\u3002\\n- **\u89c4\u5219**  \\n\u6bcf\u4e2a\u9009\u62e9\u5668\u53ef\u8bbe\u7f6e\u591a\u4e2a\u89c4\u5219\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u3002\\n\\n### \u7f51\u5173\u8c03\u7528\u7ed3\u6784\u56fe\\n![\u76d8\u53e4\u7f51\u5173\u7cfb\u7edf](/resources/doc/9-pangu-framework-shenyu.png)\\n\\n## ShenYu \u7f51\u5173\u5b9e\u6218\\nShenYu \u7f51\u5173\u63d0\u4f9b\u7684\u529f\u80fd\u975e\u5e38\u591a\uff0c\u8fd9\u91cc\u6211\u4eec\u53ea\u5173\u6ce8 HTTP \u8bf7\u6c42\u4ee3\u7406\u529f\u80fd\u3002\u5373\u4ee3\u7406\u524d\u7aef HTTP \u8bf7\u6c42\uff0c\u901a\u8fc7 Dubbo \u6cdb\u5316\u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002\\n### \u5b89\u88c5\u76f8\u5173\u6a21\u5757\\n\\n<Tabs defaultValue=\\"parent\\">\\n<TabItem value=\\"parent\\" label=\\"\u76d8\u53e4 Parent\\">\\n\\n```jsx\\n<parent>\\n\\t<groupId>com.gitee.pulanos.pangu</groupId>\\n\\t<artifactId>pangu-parent</artifactId>\\n\\t<version>latest.version.xxx</version>\\n\\t<relativePath/>\\n</parent>\\n```\\n</TabItem>\\n<TabItem value=\\"dependency1\\" label=\\"\u57fa\u7840\u6a21\u5757\\">\\n\\n```jsx\\n<dependency>\\n    <groupId>com.gitee.pulanos.pangu</groupId>\\n    <artifactId>pangu-spring-boot-starter</artifactId>\\n</dependency>\\n```\\n</TabItem>\\n<TabItem value=\\"dependency2\\" label=\\"Dubbo \u6a21\u5757\\">\\n\\n```jsx\\n<dependency>\\n\\t<groupId>com.gitee.pulanos.pangu</groupId>\\n\\t<artifactId>pangu-dubbo-spring-boot-starter</artifactId>\\n</dependency>\\n```\\n</TabItem>\\n<TabItem value=\\"dependency3\\" label=\\"\u7f51\u5173\u6a21\u5757\\">\\n\\n```jsx\\n<dependency>\\n\\t<groupId>org.springframework.boot</groupId>\\n\\t<artifactId>spring-boot-starter-webflux</artifactId>\\n</dependency>\\n<dependency>\\n\\t<groupId>org.apache.shenyu</groupId>\\n\\t<artifactId>shenyu-spring-boot-starter-gateway</artifactId>\\n</dependency>\\n<dependency>\\n\\t<groupId>org.apache.shenyu</groupId>\\n\\t<artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\\n</dependency>\\n<dependency>\\n\\t<groupId>org.apache.shenyu</groupId>\\n\\t<artifactId>shenyu-spring-boot-starter-plugin-apache-dubbo</artifactId>\\n</dependency>\\n```\\n</TabItem>\\n\\n</Tabs>\\n\\n:::tip\\n\u57fa\u4e8e ShenYu \u7f51\u5173\u5f00\u53d1\u6a21\u5f0f\u4e0d\u9700\u8981\u5f15\u5165 Dubbo \u670d\u52a1\u63a5\u53e3 Jar\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u670d\u52a1\u63a5\u53e3\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u63a5\u53e3\u3002\u670d\u52a1\u63a5\u53e3\u7684\u5143\u6570\u636e\u4fe1\u606f\u5219\u6839\u636e Dubbo \u670d\u52a1\u5e94\u7528\u4e2d\u7684\u914d\u7f6e\u81ea\u52a8\u4e0a\u4f20\u5230 ShenYu \u7f51\u5173\u7ba1\u7406\u7cfb\u7edf\u3002\u6b64\u5185\u5bb9\u5728\u4e0b\u6587\u4f1a\u7ee7\u7eed\u8bb2\u89e3\u3002\\n:::\\n\\n### \u672c\u5730\u914d\u7f6e\\n\\n> \u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a[\u914d\u7f6e\u4e2d\u5fc3](/docs/advanced-guide/nacos-config-center) \u7ae0\u8282\u3002\\n\\n```jsx {24} title=\\"application-dev.yaml\\"\\nserver:\\n  port: 9090\\n\\nspring:\\n  main:\\n    allow-bean-definition-overriding: true\\n\\nshenyu:\\n  cross:\\n    enabled: true\\n    allowedHeaders:\\n    allowedMethods: \\"*\\"\\n    allowedOrigin: \\"*\\"\\n    allowedExpose: \\"*\\"\\n    maxAge: \\"18000\\"\\n    allowCredentials: true\\n  switchConfig:\\n    local: true\\n  file:\\n    enabled: true\\n    maxSize : 10\\n  sync:\\n    websocket:\\n      urls: ${shenyu.websocket.urls:ws://localhost:9095/websocket}\\n  dubbo:\\n    parameter: multi\\n  exclude:\\n    enabled: false\\n    paths:\\n      - /favicon.ico\\n  extPlugin:\\n    path:\\n    enabled: true\\n    threads: 1\\n    scheduleTime: 300\\n    scheduleDelay: 30\\n  scheduler:\\n    enabled: false\\n    type: fixed\\n    threads: 16\\n  upstreamCheck:\\n    enabled: false\\n    timeout: 3000\\n    healthyThreshold: 1\\n    unhealthyThreshold: 1\\n    interval: 5000\\n    printEnabled: true\\n    printInterval: 60000\\n```\\n\\n#### \u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e\\n- **shenyu.sync.websocket.urls**  \\n\u8868\u793a\u7f51\u5173\u548c ShenYu Admin \u4e4b\u95f4\u4f7f\u7528 Websocket \u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u540c\u6b65\uff0c\u8fd9\u91cc\u662f\u914d\u7f6e ShenYu Admin \u63d0\u4f9b\u7684 Websocket \u6570\u636e\u540c\u6b65\u670d\u52a1\u7684\u5730\u5740\uff08\u652f\u6301\u96c6\u7fa4\uff0c\u9017\u53f7\u5206\u5272\uff09\u3002\\n\\n:::info\\n\u4e0a\u8868\u4e2d\u63d0\u5230\u5230 ShenYu Admin \u662f ShenYu \u7f51\u5173\u6846\u67b6\u7684\u914d\u7f6e & \u5143\u6570\u636e\u7ba1\u7406\u540e\u53f0\u3002\u8fd9\u91cc\u5305\u542b\u4e86\u7f51\u5173\u6a21\u5757\u81ea\u5df1\u7684\u914d\u7f6e\u4fe1\u606f\u4e5f\u5305\u542b\u4e86\u540e\u53f0\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u4fe1\u606f\uff0c\u8fd9\u7406\u7684\u914d\u7f6e\u4fe1\u606f\u548c\u5143\u6570\u636e\u4fe1\u606f\u9700\u8981\u548c\u7f51\u5173\u6a21\u5757\u540c\u6b65\u3002ShenYu \u652f\u6301\u591a\u79cd\u6570\u636e\u540c\u6b65\u65b9\u6848\uff0cWebsocket \u53ea\u662f\u76d8\u53e4\u5f00\u53d1\u9009\u7528\u7684\u4e00\u79cd\u7f3a\u7701\u65b9\u6848\u3002\\n:::\\n\\n### \u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3\\n\\n\u57fa\u4e8e ShenYu \u7684\u7f51\u5173\u5f00\u53d1\u6a21\u5f0f\u65e2\u4e0d\u9700\u8981\u5f15\u5165\u670d\u52a1\u63a5\u53e3 JAR\uff0c\u4e5f\u4e0d\u9700\u8981\u7f16\u5199\u5177\u4f53\u7684\u8c03\u7528\u4ee3\u7801\u3002\u5b8c\u5168\u7531\u7f51\u5173\u6839\u636e\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u8fdb\u884c Dubbo \u6cdb\u5316\u8c03\u7528\u3002\\n\\n:::caution \u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u7f51\u5173\u662f\u5982\u4f55\u77e5\u9053 Dubbo \u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u7684\u5462\uff1f\\n- \u901a\u8fc7 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\uff0c\u300e\u57fa\u7840\u914d\u7f6e->\u5143\u6570\u636e\u7ba1\u7406\u300f\u83dc\u5355\uff0c\u624b\u5de5\u65b0\u589e\u6bcf\u4e00\u4e2a\u63a5\u53e3\u7684\u5143\u6570\u636e\uff0c\u7136\u540e\u5c06\u6570\u636e\u81ea\u52a8\u540c\u6b65\u5230\u7f51\u5173\u6a21\u5757\u3002\uff08\u4e0d\u5efa\u8bae\uff0c\u91cf\u5927\u7684\u8bdd\u592a\u7e41\u7410\uff09\\n- \u5bf9Dubbo\u670d\u52a1\u63d0\u4f9b\u8005\u589e\u52a0 ShenYu Client \u652f\u6301\uff0c\u901a\u8fc7\u5728\u63a5\u53e3\u65b9\u6cd5\u4e0a\u4f7f\u7528\u6ce8\u89e3 `@ShenyuDubboClient` \u6765\u81ea\u52a8\u91c7\u96c6\u4e0a\u4f20\u63a5\u53e3\u5143\u6570\u636e\u5230 ShenYu Admin\uff0c\u7136\u540e\u5c06\u6570\u636e\u81ea\u52a8\u540c\u6b65\u5230\u7f51\u5173\u6a21\u5757\u3002\uff08\u5177\u4f53\u5b9e\u73b0\u89c1\u4e0b\u6587\u6240\u8ff0\uff09\\n:::\\n\\n#### \u6539\u9020 Dubbo \u670d\u52a1\u7aef\uff0c\u81ea\u52a8\u4e0a\u4f20\u63a5\u53e3\u5143\u6570\u636e\\n\u5bf9\u539f Dubbo \u670d\u52a1\u7aef\u505a\u4e00\u4e9b\u914d\u7f6e\u53d8\u66f4\uff0c\u4f7f\u5176\u80fd\u81ea\u52a8\u5c06\u63a5\u53e3\u5143\u6570\u636e\u4e0a\u4f20\u5230 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u3002\\n**\u5b89\u88c5 ShenYu Client \u4f9d\u8d56\u5305**\\n```jsx\\n<dependency>\\n\\t<groupId>org.apache.shenyu</groupId>\\n\\t<artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\\n</dependency>\\n```\\n\\n**\u589e\u52a0\u914d\u7f6e\u9879**\\n```jsx\\nshenyu.client.register-type=http\\nshenyu.client.server-lists=${shenyu.server-lists:http://localhost:9095}\\nshenyu.client.props.contextPath=/dubbo\\n```\\n\\n- **shenyu.client.register-type**  \\n\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u91c7\u96c6\u65b9\u5f0f\uff0c\u53ef\u9009 http \u76f4\u8fde\u6a21\u5f0f\u6216\u914d\u7f6e\u4e2d\u5fc3 zookeeper\u3001etcd\u3001consul \u548c nacos\u3002\u76d8\u53e4\u5f00\u53d1\u91c7\u96c6\u63a5\u53e3\u5143\u6570\u636e\u7f3a\u7701\u9009\u62e9 http \u76f4\u63a5 ShenYu Admin \u7684\u65b9\u5f0f\u3002\\n- **shenyu.client.server-lists**  \\nShenYu Admin \u5730\u5740\u6216\u914d\u7f6e\u4e2d\u5fc3\u5730\u5740\u3002\u96c6\u7fa4\u65f6\u591a\u4e2a\u5730\u5740\u7528\u9017\u53f7\u5206\u5f00\u3002\\n- **shenyu.client.props.contextPath**  \\n\u672c\u670d\u52a1\u5728\u7f51\u5173\u4e2d\u7684\u8def\u7531\u524d\u7f00,\u53ef\u81ea\u5b9a\u4e49\u6309\u9700\u914d\u7f6e\u3002\\n\\n**\u81ea\u52a8\u4e0a\u62a5\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e**  \\n\u5728 Dubbo \u670d\u52a1\u5b9e\u73b0\u7c7b\u7684\u65b9\u6cd5\u4e0a\u4f7f\u7528\u6ce8\u89e3 `@ShenyuDubboClient` \u6807\u8bb0\uff0c\u8868\u793a\u8be5\u63a5\u53e3\u65b9\u6cd5\u5143\u6570\u636e\u81ea\u52a8\u4e0a\u4f20\u5230 ShenYu Admin\u3002\u5982\u4e0b\u4ee3\u7801\u6240\u793a\u3002\\n\\n```jsx {5}\\n@Service(version = \\"1.0.0\\", group = \\"pangu-examples-dubbo-gateway-service\\")\\npublic class UserServiceImpl implements UserService {\\n\\n    @Override\\n    @ShenyuDubboClient(path = \\"/findUserEntity\\", desc = \\"\u67e5\u8be2\u7528\u6237\u4fe1\u606f\\")\\n    public UserEntity findUserEntity(Long id) {\\n\\t\\t...\\n        return userEntity;\\n    }\\n}\\n```\\n\\n**\u914d\u7f6e\u7f51\u5173\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u6240\u9700\u7684\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740**  \\n\u901a\u8fc7 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u300e\u57fa\u7840\u914d\u7f6e->\u63d2\u4ef6\u7ba1\u7406\u300f\u83dc\u5355\uff0c\u542f\u7528 `dubbo\u63d2\u4ef6` \u5e76\u586b\u5165\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\u3002\u6bd4\u5982\uff0c\u6211\u6d4b\u8bd5\u7528\u7684\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\uff1a`nacos://169.188.88.140:1688?namespace=pangu-dev`\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002\\n\\n![\u76d8\u53e4\u6846\u67b6\u7f51\u5173](/resources/doc/4-pangu-framework-shenyu-dubbo.png)\\n\\n**\u91cd\u542f\u670d\u52a1\u63d0\u4f9b\u8005**  \\n- \u8fdb\u5165 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u7684\u300e\u57fa\u7840\u914d\u7f6e->\u5143\u6570\u636e\u7ba1\u7406\u300f\u83dc\u5355\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u4e0a\u62a5\u7684\u670d\u52a1\u5143\u6570\u636e\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002\\n\\n![\u76d8\u53e4\u5f00\u53d1\u7f51\u5173](/resources/doc/2-pangu-framework-shenyu-metadata.png)\\n- \u8fdb\u5165 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u7684\u300e\u63d2\u4ef6\u5217\u8868-> proxy -> dubbo\u300f\u83dc\u5355\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002\\n\\n![\u76d8\u53e4\u5f00\u53d1\u7f51\u5173](/resources/doc/3-pangu-framework-shenyu-plugin.png)\\n\\n### \u542f\u52a8\u5165\u53e3\\n\\n```jsx\\n@SpringBootApplication\\npublic class WebApiGatewayApplication {\\n\\tpublic static void main(String[] args) {\\n\\t\\tPanGuApplicationBuilder.init(WebApiGatewayApplication.class).run(args);\\n\\t}\\n}\\n```\\n\\n### \u7f51\u5173\u8bf7\u6c42URL\\n\\n\u81f3\u6b64\uff0c\u7f51\u5173\u5c31\u53ef\u4ee5\u8c03\u7528 Dubbo \u670d\u52a1\u4e86\u3002\u4f46\u662f\uff0c\u5982\u4f55\u786e\u5b9a Dubbo \u670d\u52a1\u5bf9\u5e94\u7684\u8bf7\u6c42 url \u5730\u5740\u5462\uff1f\\n- \u7531\u7f51\u5173\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u53ef\u77e5\u7f51\u5173\u5e94\u7528\u7aef\u53e3\u662f `9090`\u3002\\n- Dubbo \u670d\u52a1\u7684\u914d\u7f6e\u9879 shenyu.client.props.contextPath \u4e3a `/dubbo`\u3002\\n- Dubbo \u65b9\u6cd5\u901a\u8fc7 @ShenyuDubboClient \u6807\u8bb0\u7684 path \u5c5e\u6027\u4e3a\uff1a`/findUserEntity`\u3002  \\n\\n\u7efc\u4e0a\uff0cDubbo \u670d\u52a1 UserService#findUserEntity \u7684\u5b8c\u6574\u8bf7\u6c42\u5730\u5740\u4e3a\uff1a`http://localhost:9090/dubbo/findUserEntity`\u3002\\n\\n#### \u53c2\u6570\u8bf4\u660e\\n\u901a\u8fc7 http \u534f\u8bae\uff0cpost \u65b9\u5f0f\u8bbf\u95ee\u7f51\u5173\u3002\u5728 http body \u4e2d\u4f20\u5165 json \u683c\u5f0f\u7684\u53c2\u6570\u3002\\n\\n#### \u8bf7\u6c42\u793a\u4f8b\\n```jsx title=\\"CURL\u811a\u672c\\"\\ncurl --location --request POST \'http://127.0.0.1:9090/dubbo/findUserEntity\' \\\\\\n--header \'Content-Type: application/json\' \\\\\\n--data \'{id=1}\'\\n```\\n```jsx title=\\"\u8fd4\u56de\u7ed3\u679c\\"\\n{\\n\\t\\"code\\": 200,\\n\\t\\"message\\": \\"Access to success!\\",\\n\\t\\"data\\": {\\n\\t\\t\\"name\\": \\"\u4e91\u5357\u7801\u519c\u5927\u718a\\",\\n\\t\\t\\"id\\": 1,\\n\\t\\t\\"userType\\": 2,\\n\\t}\\n}\\n```\\n\\n### \u672c\u8303\u4f8b\u6e90\u7801\\n- [pangu-examples-dubbo-api](https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-api)\uff1aDubbo \u670d\u52a1\u63a5\u53e3\u5305\\n- [pangu-examples-dubbo-gateway-shenyu-service](https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-gateway-shenyu-service)\uff1aDubbo \u670d\u52a1\u63d0\u4f9b\u8005\uff08\u652f\u6301\u63a5\u53e3\u5143\u6570\u636e\u4e0a\u4f20\u5230\u7f51\u5173\u7cfb\u7edf\uff09\\n- [pangu-examples-webapi-gateway-shenyu-based](https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-webapi-gateway-shenyu-based)\uff1a\u57fa\u4e8e ShenYu \u7f51\u5173\u5c06 Dubbo \u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\\n\\n## \u53c2\u8003\u6587\u732e\\n- [\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173)](/docs/quick-start/how-to-create-http-api)\\n- [\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb](/docs/intro)"},{"id":"chinese-copywriting-guidelines","metadata":{"permalink":"/pangu-framework/blog/chinese-copywriting-guidelines","editUrl":"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-website/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6587\u6863\u6392\u7248\u6307\u5357.md","source":"@site/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6587\u6863\u6392\u7248\u6307\u5357.md","title":"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6587\u6863\u6392\u7248\u6307\u5357","description":"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6587\u6863\u6392\u7248\u6307\u5357","date":"2022-01-18T00:00:00.000Z","formattedDate":"January 18, 2022","tags":[],"readingTime":4.41,"truncated":true,"authors":[{"name":"xiongchun","title":"Pangu Dev Framework maintainer","url":"https://gitee.com/xiong-chun","imageURL":"/pangu-framework/resources/author/xiongchun.png","key":"xiongchun"}],"prevItem":{"title":"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173","permalink":"/pangu-framework/blog/pangu-dev-framework-apache-shenyu"}},"content":"\u7f16\u5236\u6b64\u6392\u7248\u6307\u5357\u7684\u76ee\u7684\u662f\u7edf\u4e00\u548c\u4f18\u5316\u300c\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u300d\u76f8\u5173\u4e2d\u6587\u6587\u6848\u6392\u7248\u683c\u5f0f\uff0c\u964d\u4f4e\u7528\u6237\u9605\u8bfb\u6210\u672c\uff0c\u589e\u5f3a\u7f51\u7ad9\u6c14\u8d28\uff0c\u63d0\u5347\u54c1\u724c\u5f71\u54cd\u529b\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u7a7a\u683c\\n\u300c\u6709\u7814\u7a76\u663e\u793a\uff0c\u6253\u5b57\u65f6\u5019\u4e0d\u559c\u6b22\u5728\u4e2d\u6587\u548c\u82f1\u6587\u4e4b\u95f4\u52a0\u7a7a\u683c\u7684\u4eba\uff0c\u611f\u60c5\u8def\u90fd\u8d70\u5f97\u5f88\u8f9b\u82e6\u3002\u6709\u4e03\u6210\u7684\u6bd4\u4f8b\u4f1a\u5728 34 \u5c81\u7684\u65f6\u5019\u8ddf\u81ea\u5df1\u4e0d\u7231\u7684\u4eba\u7ed3\u5a5a\uff0c\u800c\u5176\u4f59\u4e09\u6210\u7684\u4eba\u6700\u540e\u53ea\u80fd\u628a\u9057\u4ea7\u7559\u7ed9\u81ea\u5df1\u7684\u732b\u3002\u6bd5\u7adf\u7231\u60c5\u8ddf\u4e66\u5199\u90fd\u9700\u8981\u9002\u65f6\u5730\u7559\u767d\u3002\u300d\u6458\u5f55\u81ea [vinta/pangu.js](https://github.com/vinta/pangu.js#readme)\u3002\\n\\n### \u4e2d\u82f1\u6587\u4e4b\u95f4\u589e\u52a0\u7a7a\u683c \\n\\n**\u6b63\u786e** \\n\\n> \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u57fa\u4e8e Apache-2.0 \u534f\u8bae\u5f00\u6e90\u53d1\u5e03\uff0c\u4e14\u662f\u514d\u8d39\u7684\u3002\\n\\n**\u9519\u8bef**\\n\\n> \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u57fa\u4e8eApache-2.0\u534f\u8bae\u5f00\u6e90\u53d1\u5e03\uff0c\u4e14\u662f\u514d\u8d39\u7684\u3002\\n\\n### \u4e2d\u6587\u4e0e\u6570\u5b57\u4e4b\u95f4\u589e\u52a0\u7a7a\u683c\\n\\n**\u6b63\u786e** \\n\\n> \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5728 GitEE \u7f51\u7ad9\u4e0a\u5df2\u7ecf\u6709 2500 \u4e2a Stars \u4e86\u3002\\n\\n**\u9519\u8bef**\\n\\n> \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5728 GitEE \u7f51\u7ad9\u4e0a\u5df2\u7ecf\u67092500\u4e2a Stars \u4e86\u3002\\n\\n### \u6570\u5b57\u4e0e\u5355\u4f4d\u4e4b\u95f4\u589e\u52a0\u7a7a\u683c\\n\\n**\u6b63\u786e** \\n\\n> \u6211\u7684\u8ba1\u7b97\u673a\u6709 16 GB \u5185\u5b58\u548c 512 GB \u56fa\u6001\u5b58\u50a8\u3002\\n\\n**\u9519\u8bef**\\n\\n> \u6211\u7684\u8ba1\u7b97\u673a\u6709 16GB \u5185\u5b58\u548c 512GB \u56fa\u6001\u5b58\u50a8\u3002\\n\\n### \u94fe\u63a5\u4e0e\u5b57\u7b26\u4e4b\u95f4\u589e\u52a0\u7a7a\u683c\\n\\n**\u6b63\u786e** \\n\\n> \u901a\u8fc7\u6211\u4eec\u7684 [\u5f00\u53d1\u8005\u793e\u533a](/docs/community) \u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002\\n\\n**\u9519\u8bef**\\n\\n> \u901a\u8fc7\u6211\u4eec\u7684[\u5f00\u53d1\u8005\u793e\u533a](/docs/community)\u5bfb\u6c42\u66f4\u591a\u5e2e\u52a9\u3002\\n\\n### \u5168\u89d2\u6807\u70b9\u4e0e\u5b57\u7b26\u4e4b\u95f4\u4e0d\u52a0\u7a7a\u683c\\n\\n**\u6b63\u786e** \\n\\n> \u6211\u81ea\u4ece\u7528\u4e0a\u4e86 Manjaro Linux\uff0c\u518d\u4e5f\u4e0d\u7528\u9762\u5bf9 Windows \u6076\u5fc3\u7684\u84dd\u5c4f\u4e86\u3002\\n\\n**\u9519\u8bef**\\n\\n> \u6211\u81ea\u4ece\u7528\u4e0a\u4e86 Manjaro Linux \uff0c\u518d\u4e5f\u4e0d\u7528\u9762\u5bf9 Windows \u6076\u5fc3\u7684\u84dd\u5c4f\u4e86\u3002\\n\\n## \u6807\u70b9\u7b26\u53f7\\n\\n### \u4e0d\u91cd\u590d\u4f7f\u7528\u6807\u70b9\u7b26\u53f7\\n\\n**\u6b63\u786e** \\n\\n> \u5927\u718a\uff0c\u4f60\u7684\u7a0b\u5e8f\u600e\u4e48\u53c8\u51fa bug \u4e86\uff1f\\n\\n> \u5927\u718a\u5c3d\u7136\u8bf4\uff1a\u8ba9\u6211\u91cd\u542f\u7535\u8111\u8bd5\u8bd5\uff1f\uff01\\n\\n**\u9519\u8bef**\\n\\n> \u5927\u718a\uff0c\u4f60\u7684\u7a0b\u5e8f\u600e\u4e48\u53c8\u51fa bug \u4e86\uff1f\uff1f\uff1f\\n\\n> \u5927\u718a\u5c3d\u7136\u8bf4\uff1a\u8ba9\u6211\u91cd\u542f\u7535\u8111\u8bd5\u8bd5\uff1f\uff01\uff01\\n\\n### \u4e2d\u6587\u4f7f\u7528\u5168\u89d2\u6807\u70b9\\n\\n**\u6b63\u786e** \\n\\n> \u55e8\uff01\u4f60\u77e5\u9053\u5417\uff1f\u4eca\u5929\u524d\u53f0\u7684\u5c0f\u59b9\u8ddf\u6211\u8bf4\u300c\u55b5\u300d\u4e86\u54ce\uff01\\n\\n**\u9519\u8bef**\\n\\n> \u55e8! \u4f60\u77e5\u9053\u561b? \u4eca\u5929\u524d\u53f0\u7684\u5c0f\u59b9\u8ddf\u6211\u8bf4 \u201c\u55b5\u201d \u4e86\u54ce!\\n\\n### \u82f1\u6587\u4f7f\u7528\u534a\u89d2\u6807\u70b9\\n\\n**\u6b63\u786e** \\n\\n> \u4e54\u5e03\u65af\u90a3\u53e5\u8bdd\u662f\u600e\u4e48\u8bf4\u7684\uff1f\u300cStay hungry, Stay foolish.\u300d\\n\\n**\u9519\u8bef**\\n\\n> \u4e54\u5e03\u65af\u90a3\u53e5\u8bdd\u662f\u600e\u4e48\u8bf4\u7684\uff1f\u300cStay hungry\uff0cStay foolish\u3002\u300d\\n\\n## \u540d\u8bcd\\n\\n### \u4f7f\u7528\u6b63\u786e\u7684\u5927\u5c0f\u5199\\n\\n\u5927\u5c0f\u5199\u76f8\u5173\u7528\u6cd5\u539f\u5c5e\u4e8e\u82f1\u6587\u4e66\u5199\u8303\u7574\uff0c\u4f46\u90e8\u5206\u4e13\u6709\u540d\u8bcd\u4ee5\u5176\u5b98\u65b9\u4e66\u5199\u89c4\u8303\u4e3a\u51c6\u3002\uff08\u5982\uff1aGitEE\u3001GitHub\u3001PanGu Dev Framework\u7b49\uff09\\n\\n**\u6b63\u786e** \\n\\n> \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\uff08PanGu Dev Framework\uff09\u7684\u4ee3\u7801\u6258\u7ba1\u5230\u4e86\u56fd\u5185 Gitee \u548c \u56fd\u5916 GitHub \u5e73\u53f0\u3002\\n\\n**\u9519\u8bef**\\n\\n> \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\uff08Pangu Dev Framework\uff09\u7684\u4ee3\u7801\u6258\u7ba1\u5230\u4e86\u56fd\u5185 gitee \u548c \u56fd\u5916 Github \u5e73\u53f0\u3002\\n\\n### \u4e0d\u4f7f\u7528\u4e0d\u5730\u9053\u7684\u7f29\u5199\\n\\n**\u6b63\u786e** \\n\\n> \u6211\u4eec\u9700\u8981\u4e00\u4f4d\u719f\u6089 JavaScript\u3001HTML5\u3001Element Plus \u548c PanGu Dev Framework \u7684\u5168\u6808\u5f00\u53d1\u8005\u3002\\n\\n**\u9519\u8bef**\\n\\n> \u6211\u4eec\u9700\u8981\u4e00\u4f4d\u719f\u6089 Js\u3001h5\u3001element+ \u548c PGDF \u7684\u5168\u6808\u5f00\u53d1\u8005\u3002\\n\\n## \u5176\u5b83\\n\\n### \u6bb5\u9996\u4e0d\u7f29\u8fdb\\n\\n**\u6b63\u786e** \\n\\n> \u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u5b8c\u5168\u72ec\u7acb\u4e8e Spring Cloud \u751f\u6001\u7684\u4e00\u5957\u8f7b\u91cf\u7075\u6d3b\u3001\u6210\u719f\u53ef\u9760\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u548c\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5782\u76f4\u5355\u4f53\u5206\u5c42\u67b6\u6784)\u3002\u5b83\u57fa\u4e8e [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) \u534f\u8bae**\u5f00\u6e90**\u53d1\u5e03\uff0c\u4e14\u662f**\u514d\u8d39**\u7684\u3002\\n\\n**\u9519\u8bef**\\n\\n> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u662f\u5b8c\u5168\u72ec\u7acb\u4e8e Spring Cloud \u751f\u6001\u7684\u4e00\u5957\u8f7b\u91cf\u7075\u6d3b\u3001\u6210\u719f\u53ef\u9760\u7684\u5de5\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u548c\u6cbb\u7406\u6846\u67b6\uff08\u517c\u5bb9\u5782\u76f4\u5355\u4f53\u5206\u5c42\u67b6\u6784)\u3002\u5b83\u57fa\u4e8e [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) \u534f\u8bae**\u5f00\u6e90**\u53d1\u5e03\uff0c\u4e14\u662f**\u514d\u8d39**\u7684\u3002\\n\\n## \u53c2\u8003\u6587\u732e\\n- [sparanoid/chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-Hans.md)\\n- [vinta/pangu.js](https://github.com/vinta/pangu.js#readme)"}]}')}}]);