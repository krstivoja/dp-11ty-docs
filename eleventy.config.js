module.exports = (eleventyConfig) => {
  // copy images to output folder
  eleventyConfig.addPassthroughCopy('src/plugins/**/img/**')
  eleventyConfig.setServerPassthroughCopyBehavior('copy')

  /****************************************************************************************************
   * import all config files
   ****************************************************************************************************/
  const glob = require('glob')
  const path = require('path')

  const configFiles = glob.sync('./src/config/*.js')
  configFiles.forEach((file) => {
    const relativeFilePath = './' + path.relative(__dirname, file) // needed for require()
    eleventyConfig.addPlugin(require(relativeFilePath))
  })
  /****************************************************************************************************/

  return {
    // folder structure
    dir: {
      input: 'src',
      output: 'dist',
      includes: '', // now you can include from anywhere
      layouts: 'layouts',
    },
    // run nunjucks on all html & md files, so you can use it there too
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
