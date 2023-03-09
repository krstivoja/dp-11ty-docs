module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksShortcode('test', (id, props) => {
    const output = `videocode${id}  class="${props.class}"`

    return output;
  })
}

// usage: {% youtube 'id', class="XXX" %}
