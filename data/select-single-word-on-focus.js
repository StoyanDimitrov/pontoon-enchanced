(function() {
  let input = document.getElementById('translation')

  function selectSingleWordTranslations(event)
  {
    let value = event.target.value.trim()

    // empty or has space inside
    if (value.length === 0
      || value.match(/\s/im)
    ) {
      return
    }

    // wait jQ to change the content
    setTimeout(function() {
      event.target.select()
    }, 5)
  }

  input.addEventListener('focus', selectSingleWordTranslations, false)
  input.addEventListener('click', selectSingleWordTranslations, false)
})()