const divs = document.querySelectorAll('div')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  },
  {
    threshold: 1,
  }
)

divs.forEach((div) => {
  observer.observe(div)
})