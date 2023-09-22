function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector('#profile img');
  if (html.classList.contains('light')) {
    localStorage.setItem('theme', 'dark')
    img.setAttribute('src', './assets/avatar.png')
    html.classList.remove('light')
  } else {
    html.classList.add('light')
    localStorage.setItem('theme', 'light')
    img.setAttribute('src', './assets/avatar-light.png')
  }
}

function toggleThemeFromStorage() {
  const html = document.documentElement;
  html.classList.remove('light')
  html.classList.remove('dark')
  html.classList.add(localStorage.getItem('theme'))
}