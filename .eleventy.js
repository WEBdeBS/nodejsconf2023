// inspired by https://github.com/webpixels/bootstrap-starter-kit

const markdownIt = require("markdown-it");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

const isDev = process.env.ELEVENTY_ENV === 'development';
const site = {
  url: process.env.URL || "http://localhost:8080",
  title: "The Node.js Italian Conference 2023",
  description: "The Italian Nodejsconf is back!",
  image: "/assets/fb_banner.png",
  twitter: "webdebresa",
}

/**
 * Prefixes the given URL with the site's base URL.
 * @param {string} url
 */
const toAbsoluteUrl = (url) => {
  return new URL(url, site.url).href;
}



module.exports = function(config) {
  config.addPassthroughCopy('src/assets')
  config.addWatchTarget("./src/");
  config.addWatchTarget("./src/scss");
  config.addLayoutAlias("layout1", "layout1.njk");

  config.addFilter('toAbsoluteUrl', toAbsoluteUrl);

  config.addPlugin(EleventyRenderPlugin);

  config.addCollection("talks",(collection) => {
    return collection.getFilteredByGlob("./src/content/talks/*.md");
  });

  config.addCollection("sponsor_packages",(collection) => {
    return collection
    .getFilteredByGlob("./src/content/sponsor_packages/*.md")
    .sort((a, b) => {
      return a.data.weight - b.data.weight;
    })
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
