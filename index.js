let pageMod = require('sdk/page-mod')

exports.main = function() {

  let mod = pageMod.PageMod({
    include: ['*.pontoon.mozilla.org'],
    contentScriptFile: './items-count.js',
    contentScriptWhen: 'ready',
    attachTo: ['existing', 'top'],
  })
}
