let pageMod = require('sdk/page-mod')

exports.main = function() {

  let mod = pageMod.PageMod({
    include: ['*.pontoon.mozilla.org'],
    contentScriptFile: [
        './title-changer.js',
        './items-count.js',
        './select-single-word-on-focus.js',
      ],
    attachTo: ['existing', 'top'],
  })
}