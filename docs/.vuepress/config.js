module.exports = {
  title: 'AvaIre Developer Documentation',
  description: 'Documentation made for selfhosting AvaIre.',
  themeConfig: {
    logo: '/avaire-512x512.png',
    lastUpdated: 'Last updated',
    repo: 'https://github.com/avaire/handbook',
    // docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 5,
    editLinkText: 'Recommend a change',

    // Theme config | Credits: https://vuepress-theme-yuu.netlify.app/
    yuu: {
      defaultDarkTheme: true,
    },
    nav: [
      {
        text: 'Home',
        link: 'https://avairebot.com/'
      },
      {
        text: 'Main Page',
        link: '/'
      },

    ],
    sidebar: [{
      collapsable: false,
      title: '🚀 Getting Started',
      children: ['/get-started/getting-started'],
    },
    {
      collapsable: false,
      title: '🤖 Commands',
      children: ['/commands/create-your-first-command'],
    },
    {
      collapsable: false,
      title: '👮‍♂️ Middlewares',
      children: ['/middlewares/what-is-a-middleware', '/middlewares/create-your-first-middleware', '/middlewares/register-and-use-your-middleware'],
     },
/*    {
      collapsable: true,
      title: '💿 Database',
      children: ['/get-started/prerequisites.md'],
    },
    {
      collapsable: true,
      title: '📅 Scheduling Tasks',
      children: ['/get-started/prerequisites.md'],
    },
    {
      collapsable: true,
      title: '📊 Metrics & Servlet',
      children: ['/get-started/prerequisites.md'],
    },
    {
      collapsable: true,
      title: '🔧 Configuration System',
      children: ['/get-started/prerequisites.md'],
    }, */

  ],

    plugins: ['@vuepress/active-header-links']
  }
}
