const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/helena.strada/Documents/_git/react-docz-template/worldz/README.md"))),
  "component---src-components-title-index-mdx": hot(preferDefault(require("/Users/helena.strada/Documents/_git/react-docz-template/worldz/src/components/Title/index.mdx"))),
  "component---src-docz-index-mdx": hot(preferDefault(require("/Users/helena.strada/Documents/_git/react-docz-template/worldz/src/docz/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/helena.strada/Documents/_git/react-docz-template/worldz/.docz/src/pages/404.js")))
}

