(function() {
  'use strict'

  const avatar = document.querySelector('#profile img')

  if (! avatar) {
    return
  }
  const u = new URL(avatar.src)
    , d = u.searchParams.get('d')

  if (! d) {
    return
  }

  avatar.src = d
  avatar.removeAttribute('none')
  avatar.removeAttribute('hidden')
  avatar.removeAttribute('style')
})()
