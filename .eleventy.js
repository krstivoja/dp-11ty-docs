module.exports = function(eleventyConfig) {
  
  // eleventyConfig.addCollection("posts", function(collection) {
  //   return collection.getFilteredByGlob("_post/**/*.md");
  // });

  // eleventyConfig.addFilter("json", function(value) {
  //   return JSON.stringify(value);
  // });

  // eleventyConfig.addFilter("myjson", function(value) {
  //   let cache = [];
  //   let result = JSON.stringify(value, function(key, value) {
  //     if (typeof value === 'object' && value !== null) {
  //       if (cache.indexOf(value) !== -1) {
  //         // Circular reference found, discard key
  //         return;
  //       }
  //       // Store value in our collection
  //       cache.push(value);
  //     }
  //     return value;
  //   }, 2); // add third argument for indentation
  //   cache = null; // Enable garbage collection
  //   return result;
  // });
  
  eleventyConfig.addCollection("groupedPosts", (collectionApi) => {
    const allGroupedPosts = collectionApi.getFilteredByGlob("_post/**/*.md");
    const groups = {};
  
    for (const post of allGroupedPosts) {
      const parts = post.url.split("/");
      const project = parts[parts.length - 2];
  
      if (!groups.hasOwnProperty(project)) {
        groups[project] = [];
      }
  
      groups[project].push(project);
    }
  
    return groups;
  });
  
};

