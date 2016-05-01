/* */ 
var js_beautify = require("./lib/beautify").js_beautify;
var css_beautify = require("./lib/beautify-css").css_beautify;
var html_beautify = require("./lib/beautify-html").html_beautify;
var beautify = function(src, config) {
  return js_beautify(src, config);
};
beautify.js = js_beautify;
beautify.css = css_beautify;
beautify.html = html_beautify;
beautify.js_beautify = js_beautify;
beautify.css_beautify = css_beautify;
beautify.html_beautify = html_beautify;
module.exports = beautify;
