
## 为什么写这个项目？

[美团线程池文章](https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html "美团线程池文章") 介绍中，因为业务对线程池参数没有合理配置，触发过几起生产事故，进而引发了一系列思考。最终决定封装线程池动态参数调整，扩展线程池监控以及消息报警等功能

在开源平台找了挺多动态线程池项目，从功能性以及健壮性而言，个人感觉不满足企业级应用

因为对动态线程池比较感兴趣，加上想写一个有意义的项目，所以决定自己来造一个轻量级的轮子

想给项目起一个简单易记的名字，类似于 Eureka、Nacos、Redis；后和朋友商量，决定以动物命名：**Hippo**



## 它解决了什么问题？

线程池在业务系统应该都有使用到，帮助业务流程提升效率以及管理线程，多数场景应用于大量的异步任务处理

虽然线程池提供了我们许多便利，但也并非尽善尽美，比如下面这些问题就无法很好解决

![](https://images-machen.oss-cn-beijing.aliyuncs.com/image-20211023160830084.png)

<br/>

如果线程池的配置涉及到上述问题，那么就有可能需要发布业务系统来解决；如果发布后参数仍不合理，继续发布......

Hippo 很好解决了这个问题，它将业务中所有线程池统一管理，遇到上述问题不需要发布系统就可以替换线程池参数

![](https://images-machen.oss-cn-beijing.aliyuncs.com/image-20211023142726818.png)


##  它有什么特性？

应用系统中线程池并不容易管理。参考美团的设计，Hippo 按照租户、项目、线程池的维度划分。再加上系统权限，让不同的开发、管理人员负责自己系统的线程池操作

举个例子，小编在一家公司的公共组件团队，团队中负责消息、短链接网关等项目。公共组件是租户，消息或短链接就是项目

<br/>

| 模块                                   | 模块名称           | 注释                                     |
| -------------------------------------- | ------------------ | ---------------------------------------- |
| dynamic-threadpool-auth                | 用户权限           | -                                        |
| dynamic-threadpool-common              | 公共模块           | -                                        |
| dynamic-threadpool-config              | 配置中心           | 提供线程池准实时更新功能                 |
| dynamic-threadpool-console             | 控制台             | 对接前端项目                             |
| dynamic-threadpool-discovery           | 注册中心           | 提供线程池项目实例注册、续约、下线等功能 |
| dynamic-threadpool-spring-boot-starter | SpringBoot Starter | -                                        |
| dynamic-threadpool-example             | 示例项目           | -                                        |
| dynamic-threadpool-server              | 服务端             | Server 集成各组件                        |
| dynamic-threadpool-tools               | 抽象工具类         | GitHub 变更监控、操作日志等组件          |


<br/>

Hippo 除去动态修改线程池，还包含实时查看线程池运行时指标、负载报警、配置日志管理等


![](https://images-machen.oss-cn-beijing.aliyuncs.com/image-20211023101844619.png)

