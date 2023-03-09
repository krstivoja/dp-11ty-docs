const lodash = require('lodash')

module.exports = {
  layout: 'post',
  eleventyComputed: {
    pluginId: (data) => data.page.filePathStem.split('/')[2], // get the plugin id from foldername
    permalink: (data) => `/plugins/${data.pluginId}/${data.page.fileSlug}/`,
    navigation: (data) => {
      // get all posts for this plugin
      const pluginPosts = data.collections.all.filter((el) => el.data.pluginId === data.pluginId)

      // group them by section
      const sections = lodash.groupBy(pluginPosts, 'data.section')

      // iterate over each group and create a navigation block
      const navBlocks = []
      for (const section of Object.entries(sections)) {
        navBlocks.push({
          title: section[0].replace('-', ' ').toUpperCase(),
          items: section[1].map((item) => {
            return {
              title: item.data.title,
              url: item.url,
              active: item.url === data.page.url,
            }
          }),
        })
      }
      // return the navigation blocks
      return navBlocks
    },
  },
}
