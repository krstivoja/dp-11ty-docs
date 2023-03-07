module.exports = (eleventyConfig) => {
  // copy images to output folder
  eleventyConfig.addPassthroughCopy({ 'src/assets/logo.svg': '/logo.svg' })
  eleventyConfig.addPassthroughCopy('src/plugins/**/img/**')
  eleventyConfig.setServerPassthroughCopyBehavior('copy')

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
