(function() {
  'use strict'

  const uneditables = document.getElementsByClassName('uneditables').item(0)
    , editables = document.getElementsByClassName('editables').item(0)
    , config = {
        childList: true,
      }
    , observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type !== 'childList') {
            return
          }

          countLoadedStrings()
        })
      })

  if (uneditables) {
    observer.observe(uneditables, config)
  }

  if (editables) {
    observer.observe(editables, config)
  }

  countLoadedStrings()

  function countLoadedStrings()
  {
    const selector = '#entitylist > div:nth-child(1) > div:nth-child(1)'
      , magnifier = document.querySelector(selector)

    if (! magnifier) {
      return
    }

    const translateableCount = Array.from(document.querySelectorAll('.uneditables li')).length
        + Array.from(document.querySelectorAll('.editables li')).length
      , allStringCount = parseInt(document.querySelector('#progress .menu h2 span').textContent.replace(',', ''), 10)

    magnifier.textContent = ` ${translateableCount} / ${allStringCount}`
  }
})()