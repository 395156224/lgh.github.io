module.exports = {
    // 左上角标题
    title: "Hello Sunny",
    // 描述
    description: '前端小菜菜的学习笔记',
    // 头部部署，右上角小图标
    head: [
        // ico 配置
        ['link', {
            rel: 'icon',
            href: '/img/logo.ico'
        }]
    ],
    // 主题部署
    themeConfig: {
        /**
         * 右侧导航条
         * text - 显示字段
         * link - 链接：注意前后带 / 符号
         */
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '笔记',
                link: '/notes/'
            },
            /**
             * 多级菜单
             * 开头 text 为一级标题
             * 数组内 text 为二级标题
             * link 为链接，注意带 /
             */
            {
                text: '博文',
                items: [
                    {
                        text: '使用 GitHub Pages 和 VuePress 搭建网站',
                        link: 'https://github.com/LiangJunrong/document-library/blob/master/other-library/Website/GithubPages/DocumentLibrary.md'
                    },
                    {
                        text: '文档库',
                        link: 'https://github.com/LiangJunrong/document-library'
                    }
                ]
            },
            {
                text: '关于',
                link: '/about/'
            },
            // 链接到网站
            {
                text: 'Github',
                link: 'https://github.com/395156224'
            }
        ],
        sidebar: {
            // 侧边栏在 /index/ 目录上
            '/notes/': [
                ['', '前言'],
                ['markdown', 'Markdown语法'],
                ['GithubPages', 'GithubPages'],
                ['VuePress', 'VuePress']
                ['TravisCI', 'TravisCI'],
                ['VueRouter', 'VueRouter'],
            ],
            // 侧边栏在 /about/ 目录上
            '/about/': [
                ['', 'README']
            ]
        }
    }
}