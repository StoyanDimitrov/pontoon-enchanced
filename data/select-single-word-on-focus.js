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

  event.target.select()
}

// does not react to jQ focus event
input.addEventListener('focus', selectSingleWordTranslations, false)
input.addEventListener('click', selectSingleWordTranslations, false)
