// inspired by https://github.com/webpixels/bootstrap-starter-kit

const markdownIt = require("markdown-it");
const { EleventyRenderPlugin } = require("@11ty/eleventy");


module.exports = function(config) {
  config.addPassthroughCopy('src/assets')
  config.addWatchTarget("./src/");
  config.addWatchTarget("./src/scss");
  config.addLayoutAlias("layout1", "layout1.njk");

  config.addPlugin(EleventyRenderPlugin);

  config.addCollection("talks",(collection) => {
    return collection.getFilteredByGlob("./src/contents/talks/*.md")
    .sort((a, b) => {
      return a.data.weight - b.data.weight;
    });
  });

  config.addCollection("sponsor_packages",(collection) => {
    return collection
    .getFilteredByGlob("./src/contents/sponsor_packages/*.md")
    .sort((a, b) => {
      return a.data.weight - b.data.weight;
    })
  });

  config.addCollection("sponsors_platinum",(collection) => {
    return collection
    .getFilteredByGlob("./src/contents/sponsors/*.md")
    .filter(s => s.data.level == "platinum")
    .sort((a, b) => a.data.weight - b.data.weight)
  });

  config.addCollection("sponsors_silver",(collection) => {
    return collection
    .getFilteredByGlob("./src/contents/sponsors/*.md")
    .filter(s => s.data.level == "silver")
    .sort((a, b) => a.data.weight - b.data.weight)
  });

  /*
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  config.setLibrary("md", markdownIt(options));
  */

  return { 
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      //data: "data", // relative to input
    },
    site: {},
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    //passthroughFileCopy: true
  };
}
