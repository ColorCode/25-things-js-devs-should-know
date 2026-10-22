const videos = document.querySelectorAll('video')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target
      if (entry.isIntersecting) {
        video.play().catch((error) => {
          console.error('Unable to play video:', error)
        })
      } else {
        video.pause()
      }
    })
  },
  {
    threshold: 1
  }
)

videos.forEach((video) => {
  video.muted = true
  observer.observe(video)
})