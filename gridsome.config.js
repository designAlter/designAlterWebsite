// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/main.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Design alter',
  siteUrl: 'https://desingalterboutique.com',
  icon: {
    favicon: './src/favicon.png',
  },
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ["/exclude-me"],
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
        }
      }
    },
    {
      use: 'klaro-gridsome',
      options: {
          privacyPolicy: '/privacy',
          cookieName: 'consent',
          translations: {
              en: {
                  consentModal: {
                      description: 'Customise the information that we collect about you.',
                  },
                  googleAnalytics: {
                      description: 'All cookies enabled'
                  },
                  purposes: {
                      analytics: 'Analytics'
                  },
              },
          },
          apps: [
              {
                  name: 'googleAnalytics',
                  default: true,
                  title: 'Cookies',
                  //purposes: ['analytics'],
                  cookies: [
                      '_ga',
                      '_gcl_au',
                      '_gid',
                      '_gat'
                  ],
                  required: true,
                  optOut: false,
                  onlyOnce: true
              }
          ]
      }
    }
    
  ],
}
