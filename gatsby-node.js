/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require("fs")

const dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}
