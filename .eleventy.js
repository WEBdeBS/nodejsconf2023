// inspired by https://github.com/webpixels/bootstrap-starter-kit

module.exports = function(config) {
  config.addPassthroughCopy('src/assets')
  config.addWatchTarget("./src/scss/");
  config.addLayoutAlias("base", "layouts/base.njk");

  return { 
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}
