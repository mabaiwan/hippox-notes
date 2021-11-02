export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'HippoX',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'hippoX',
        children: [
          {
            title: 'Hippo是什么？',
            opened: true,
            children: [
              {
                title: '简介',
                link: '/zh-cn/docs/start/什么是Hippo.html'
              },
              {
                title: '架构',
                link: '/zh-cn/docs/start/Hippo架构.html'
              }
            ]
          },
          {
            title: '快速开始',
            opened: true,
            children: [
              {
                title: '如何运行 Demo',
                link: '/zh-cn/docs/demo/如何运行Demo.html',
              },
            ]
          },
        ],
      },
    ],
    barText: 'HippoX',
  },
};
