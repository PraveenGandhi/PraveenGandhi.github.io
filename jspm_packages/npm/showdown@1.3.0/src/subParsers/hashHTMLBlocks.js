/* */ 
(function(process) {
  showdown.subParser('hashHTMLBlocks', function(text, options, globals) {
    'use strict';
    text = text.replace(/\n/g, '\n\n');
    text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, showdown.subParser('hashElement')(text, options, globals));
    text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside|address|audio|canvas|figure|hgroup|output|video)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, showdown.subParser('hashElement')(text, options, globals));
    text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));
    text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));
    text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));
    text = text.replace(/\n\n/g, '\n');
    return text;
  });
})(require("process"));
