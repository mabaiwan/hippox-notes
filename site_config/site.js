// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8088, // 本地开发服务器的启动端口
  domain: 'www.hippox.cn', // 站点部署域名，无需协议和path等
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/start/什么是Hippo.html',
      },
      // {
      //   key: 'blog',
      //   text: '博客',
      //   link: '/zh-cn/blog/index.html',
      // },
      // {
      //   key: 'community',
      //   text: '社区',
      //   link: '/zh-cn/community/index.html',
      // },
    ],
    disclaimer: {
      title: '愿景',
      content: 'Hippo 打造成线程池参数动态配置、监控报警、实时查看等多位一体的强大平台，X 也意味着更多的可能性。',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/demo1.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/demo2.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2021 Someone. All rights reserved.',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/start/什么是Hippo.html',
      },
      // {
      //   key: 'blog',
      //   text: '博客',
      //   link: '/zh-cn/blog/index.html',
      // },
      // {
      //   key: 'community',
      //   text: '社区',
      //   link: '/zh-cn/community/index.html',
      // },
    ],
    disclaimer: {
      title: '愿景',
      content: 'Hippo 打造成线程池参数动态配置、监控报警、实时查看等多位一体的强大平台，X 也意味着更多的可能性。',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/start/什么是Hippo.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/demo/如何运行Demo.html',
        },
        {
          text: '开发者指南',
          link: '-',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '-',
        },
        {
          text: '社区',
          link: '-',
        },
      ],
    },
    copyright: 'Copyright © 2021 Someone. All rights reserved.',
  },
};
