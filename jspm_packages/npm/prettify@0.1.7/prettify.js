/* */ 
'use strict';
var _ = require("lodash");
var engineOpts = require("./lib/defaults");
function condense(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
}
function padcomments(str) {
  return str.replace(/(\s*<!--)/g, '\n$1');
}
function fixspaces(str) {
  return str.replace(/(<\/(a|span|strong|h1|h2|h3|h4|h5|h6)>(?!(,|\.|!|\?|;|:)))/g, '$1 ');
}
module.exports.register = function(Handlebars, options) {
  var o = options || {};
  Handlebars.registerHelper('prettify', function(options) {
    var opts = {};
    var content = options.fn(this);
    function prettifyBasedOnMode() {
      opts.mode = 'html';
      o.prettify = (opts.mode === 'html') ? o.prettify : o.prettify[opts.mode];
      opts = _.defaults(options.hash, _.extend({}, opts, engineOpts[opts.mode], o.prettify));
      opts.indent_size = opts.indent;
      content = require("js-prettify")[opts.mode](content, opts);
    }
    prettifyBasedOnMode();
    if (opts.mode === 'html') {
      content = (opts.condense === true) ? condense(content) : content;
      content = (opts.padcomments === true) ? padcomments(content) : content;
    }
    return new Handlebars.SafeString(fixspaces(content));
  });
};
