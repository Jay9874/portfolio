// for active navbar links on scroll
const navLinks = document.querySelectorAll('.navbar-links-container a')
const sections = document.querySelectorAll('body section')
const aboutSection = document.querySelector('.intro-section')
const navbarName = document.querySelector('.navbar-name')

window.onscroll = () => {
  doAnimatin()
}

function doAnimatin () {
  sections.forEach(i => {
    let top = window.scrollY
    let offset = i.offsetTop - 200
    let height = i.offsetHeight
    const introHeight = aboutSection.offsetHeight
    const introOffset = aboutSection.offsetTop
    let id = i.getAttribute('id')
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        document
          .querySelector('.navbar-links-container a[href*=' + id + ']')
          .classList.add('active')
      })
    }
    document.body.style.setProperty(
      '--scroll',
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    )
  })
}

// Media query for navbar
const mediaQuery = window.matchMedia('(max-width: 768px)')
const navbar = document.querySelector('.navbar-links-container')

// Navbar toggle
const navbarToggle = document.querySelector('.navbar-arrow')
const navbarContainer = document.querySelector('.navbar-mobile-menu')
const navbarTopBar = document.querySelector("#arrow-top-bar")
const navbarBottomBar = document.querySelector("#arrow-bottom-bar")

navbarToggle.addEventListener('click', () => {
  navbarTopBar.classList.toggle('active')
  navbarBottomBar.classList.toggle('active')
  navbarToggle.classList.toggle('active')
  navbarContainer.classList.toggle('active')
})
