function countItems()
{
  var selector = '#entitylist > div:nth-child(1) > div:nth-child(1)'
    , magnifier = document.querySelector(selector)
    , uneditablesCount = Array.from(document.querySelectorAll('.uneditables li')).length
    , editablesCount = Array.from(document.querySelectorAll('.editables li')).length

  magnifier.textContent = ' ' + (uneditablesCount + editablesCount)
}

var uneditables = document.getElementsByClassName('uneditables').item(0)
  , editables = document.getElementsByClassName('editables').item(0)
  , config = {
      childList: true,
    }
  , observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
          countItems()
        }
      })
    })

observer.observe(uneditables, config)
observer.observe(editables, config)
countItems();
