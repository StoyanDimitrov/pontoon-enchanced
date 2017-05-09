(function() {
  function countItems()
  {
    let selector = '#entitylist > div:nth-child(1) > div:nth-child(1)'
      , magnifier = document.querySelector(selector)
      , uneditablesCount = Array.from(document.querySelectorAll('.uneditables li')).length
      , editablesCount = Array.from(document.querySelectorAll('.editables li')).length

    if (! magnifier) {
      return
    }

    magnifier.textContent = ` ${uneditablesCount + editablesCount} / ${parseInt(document.querySelector('#progress .menu h2 span').textContent.replace(',', ''), 10)}`
  }

  let uneditables = document.getElementsByClassName('uneditables').item(0)
    , editables = document.getElementsByClassName('editables').item(0)
    , config = {
        childList: true,
      }
    , observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type !== 'childList') {
            return
          }

          countItems()
        })
      })

  if (uneditables) {
    observer.observe(uneditables, config)
  }

  if (editables) {
    observer.observe(editables, config)
  }

  countItems()
})()