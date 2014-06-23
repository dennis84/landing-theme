function load(username, repo) {
  // Make sections
  $('body > :first-child,h1,h2').each(function() {
    $(this)
      .nextUntil("h1,h2")
      .andSelf()
      .wrapAll('<section><div class="container"></section>')
  })

  // Make buttons
  var section = document.querySelector('section:first-child')
    , button = document.createElement('a')
    , wrapper = document.createElement('div')

  button.setAttribute('href', 'http://github.com/' + username + '/' + repo)
  button.setAttribute('class', 'btn btn-default')
  button.innerHTML = 'View on GitHub'
  wrapper.setAttribute('class', 'text-center buttons')
  wrapper.appendChild(button)
  section.querySelector('.container').appendChild(wrapper)
}
