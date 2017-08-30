(function() {
  'use strict'

  const input = document.getElementById('translation')

  if (input) {
console.log('focus listened')
    input.addEventListener('focus', selectSingleWordTranslations, false)
  }

  function selectSingleWordTranslations(event)
  {
    const value = event.target.value.trim()

    // empty or has space inside
    if (value.length === 0
      || value.match(/\s/im)
    ) {
      return
    }

    // wait jQ change the content
    setTimeout(function() {
      event.target.select()
    }, 5)
  }
})()