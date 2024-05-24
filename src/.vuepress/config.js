import { hopeTheme } from "vuepress-theme-hope";

export default {
  // site config
  lang: "en-US",
  title: "Polaris",
  description: "Anime Streaming Template",

  // theme
  theme: hopeTheme({
    // theme config
  }),
};

module.exports = {
    themeConfig: {
      // ...
    },
    plugins: [
      [
        '@vuepress/plugin-register-components',
        {
          componentsDir: __dirname + '/src/components'
        }
      ]
    ],
    chainWebpack: config => {
      config.plugin('vue').use(require('vue-router'), [{
        routes: [
          {
            path: '/login',
            component: 'Login'
          },
          {
            path: '/dashboard',
            component: 'Dashboard'
          }
        ]
      }]);
    }
  };