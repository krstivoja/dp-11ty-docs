const lodash = require('lodash')

module.exports = {
  layout: 'post',
  eleventyComputed: {
    pluginId: (data) => data.page.filePathStem.split('/')[2], // get the plugin id from foldername
    permalink: (data) => `/plugins/${data.pluginId}/${data.section}/${data.page.fileSlug}/`,
    navigation: (data) => {
      // get all posts for this plugin
      const pluginPosts = data.collections.all.filter((el) => el.data.pluginId === data.pluginId)

      // group them by section
      // const groups = lodash.groupBy(pluginPosts, 'data.section')

      // console.log(groups['getting-started']?.[0].data.title)

      return pluginPosts
    },
  },
}
