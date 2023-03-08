module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksShortcode('youtube', (id, props) => {
    const output = `videocode${id} class="${props.class}"`

    return `output`
  })
}

// usage: {% youtube 'id', class="XXX" %}
