## 如何运行 Demo？

目前动态线程池功能已经完成，可以直接把代码拉到本地运行。导入 [Hippo 初始化 SQL 语句](https://github.com/acmenlt/dynamic-threadpool/blob/develop/server/src/main/resources/hippo_manager.sql)

1. 启动 `dynamic-threadpool-server` 模块下 ServerApplication 应用类
2. 启动 `dynamic-threadpool-example` 模块下 ExampleApplication 应用类

<br/>

通过接口修改线程池中的配置。HTTP POST 路径：http://localhost:6691/v1/cs/configs ，Body 请求体如下：

```json
{
    "ignore": "tenantId、itemId、tpId 代表唯一线程池，请不要修改",
    "tenantId": "prescription",
    "itemId": "dynamic-threadpool-example",
    "tpId": "message-produce",
    "coreSize": 10,
    "maxSize": 15,
    "queueType": 9,
    "capacity": 100,
    "keepAliveTime": 10,
    "rejectedType": 3,
    "isAlarm": 0,
    "capacityAlarm": 81,
    "livenessAlarm": 82
}
```

<br/>

接口调用成功后，观察 dynamic-threadpool-example 控制台日志输出，日志输出包括不限于此信息即为成功

```tex
[🔥 MESSAGE-PRODUCE] Changed thread pool. coreSize :: [11=>10], maxSize :: [15=>15], queueType :: [9=>9]
capacity :: [100=>100], keepAliveTime :: [10000=>10000], rejectedType :: [7=>7]
```

<br/>

现阶段已集成钉钉消息推送，后续会持续接入企业微信、邮箱、飞书、短信等通知渠道。可以通过添加钉钉群体验消息推送，群号：31764717


<figure class="half">
    <img src="https://images-machen.oss-cn-beijing.aliyuncs.com/image-20211013122816688.png" width="350"/>
    <img src="https://images-machen.oss-cn-beijing.aliyuncs.com/image-20211013113649068.png" width="350"/>
</figure>
