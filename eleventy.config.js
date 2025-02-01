export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("maryhansen.css");
    eleventyConfig.addPassthroughCopy("hdlogo.jpg");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("fonts");
};