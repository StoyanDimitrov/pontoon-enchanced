(function() {
  'use strict'

  const titleHolder = document.querySelector('.title.noselect')

    , config = {
        childList: true,
      }
    , observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            changeTitle(titleHolder)
          }
        })
      })

  if (titleHolder) {
    observer.observe(titleHolder, config)
    changeTitle(titleHolder)
  }

  function changeTitle(titleElement)
  {
    document.querySelector('head title').textContent = titleElement.textContent.trim()
  }
})()