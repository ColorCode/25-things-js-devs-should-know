


const divs = document.querySelectorAll('div')
const threshold = 0.7

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if(entry.intersectionRatio >= threshold) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    });
  },
  {
    threshold: threshold,
  }
)

divs.forEach((div) => {
  observer.observe(div)
})