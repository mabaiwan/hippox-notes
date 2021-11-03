import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'HippoX 动态线程池',
      briefIntroduction: '强大的动态线程池，并附带监控报警功能，没有依赖中间件。',
      buttons: [
        {
          text: '前往Github',
          link: 'https://github.com/acmenlt/dynamic-threadpool',
          type: 'primary',
        },
        {
          text: '立即开始',
          link: '/zh-cn/docs/start/什么是Hippo.html',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'Hippo 功能简介',
      desc: '线程池在业务系统应该都有使用到，帮助业务流程提升效率以及管理线程，多数场景应用于大量的异步任务处理。Hippo 负责封装线程池动态参数调整，扩展线程池监控以及消息报警等功能',
      img: '/img/custome/动态更新.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '参数动态修改',
          content: '线程池配置变更准实时修改',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '线程池监控',
          content: '线程池埋点：活跃度报警、阻塞队列报警、拒绝策略执行报警等',
        },
        {
          img: '/img/feature_service.png',
          title: '用户权限',
          content: '根据企业级应用，权限分为租户、项目、线程池实例',
        },
        {
          img: '/img/feature_hogh.png',
          title: '运行状态查看',
          content: '可实时查看线程池在集群中运行时的参数状态',
        },

      ],
    },
    start: {
      title: '快速开始',
      desc: '部署 Server 端，与 SpringBoot Client 端完成线程池交互',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/start/什么是Hippo.html',
      },
    },
    users: {
      title: '谁在使用 Hippo',
      desc: <span>开发阶段，暂无用户生产环境使用</span>,
      list: [],
    },
  },
  'en-us': {
    brand: {
      brandName: 'HippoX 动态线程池',
      briefIntroduction: '强大的动态线程池，并附带监控报警功能，没有依赖中间件。',
      buttons: [
        {
          text: '前往Github',
          link: 'https://github.com/acmenlt/dynamic-threadpool',
          type: 'primary',
        },
        {
          text: '立即开始',
          link: '/zh-cn/docs/start/什么是Hippo.html',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'Hippo 功能简介',
      desc: '线程池在业务系统应该都有使用到，帮助业务流程提升效率以及管理线程，多数场景应用于大量的异步任务处理。Hippo 负责封装线程池动态参数调整，扩展线程池监控以及消息报警等功能',
      img: '/img/custome/动态更新.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '参数动态修改',
          content: '线程池配置变更准实时修改',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '线程池监控',
          content: '线程池埋点：活跃度报警、阻塞队列报警、拒绝策略执行报警等',
        },
        {
          img: '/img/feature_service.png',
          title: '用户权限',
          content: '根据企业级应用，权限分为租户、项目、线程池实例',
        },
        {
          img: '/img/feature_hogh.png',
          title: '运行状态查看',
          content: '可实时查看线程池在集群中运行时的参数状态',
        },

      ],
    },
    start: {
      title: '快速开始',
      desc: '部署 Server 端，与 SpringBoot Client 端完成线程池交互',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/start/什么是Hippo.html',
      },
    },
    users: {
      title: '谁在使用 Hippo',
      desc: <span>开发阶段，暂无用户生产环境使</span>,
      list: [],
    },
  },
};
