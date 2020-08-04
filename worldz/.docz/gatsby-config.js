const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Worldz',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Worldz',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz',
          templates:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/node_modules/docz-core/dist/templates',
          docz:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz',
          cache:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/.cache',
          app:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/app',
          appPackageJson:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/package.json',
          appTsConfig:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/tsconfig.json',
          gatsbyConfig:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/gatsby-config.js',
          gatsbyBrowser:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/gatsby-browser.js',
          gatsbyNode:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/gatsby-node.js',
          gatsbySSR:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/gatsby-ssr.js',
          importsJs:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/app/imports.js',
          rootJs:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/app/root.jsx',
          indexJs:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/app/index.jsx',
          indexHtml:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/app/index.html',
          db:
            '/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
