module.exports = {
    title: "Baofeng's BB",
    description: 'San Baofeng\'s BB，茫茫网海中能遇到你是我的缘分，停下你的匆匆的步伐，且听我来 BB 几句吧。',
    extend: '@vuepress/theme-default',
    base: '/',
    evergreen: true,
    theme: 'vuepress-theme-bb',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        navbar: true,
        search: false,
        logo: '/logo.png',
        lang: 'zh-CN',
        lastUpdated: 'Updated'
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-80885450-8'
            }
        ],
        ['vuepress-plugin-new'],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    const moment = require('moment');
                    moment.locale(lang);
                    return moment(timestamp).format('YYYY-MM-DD HH:mm');
                }
            }
        ]
    ],
}
