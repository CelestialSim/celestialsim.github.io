export function useRedditEmbeds() {
  const loadRedditEmbeds = () => {
    const redditEmbeds = document.querySelectorAll('.reddit-embed-bq')
    
    if (redditEmbeds.length > 0) {
      if (!document.querySelector('script[src*="embed.reddit.com"]')) {
        const script = document.createElement('script')
        script.src = 'https://embed.reddit.com/widgets.js'
        script.async = true
        script.charset = 'UTF-8'
        
        script.onload = function () {
          console.log('Reddit embeds loaded successfully')
        }

        script.onerror = function () {
          console.warn('Failed to load Reddit embeds')
          // Show fallback content
          redditEmbeds.forEach(embed => {
            const linkElement = embed.querySelector('a')
            if (linkElement) {
              const fallback = document.createElement('div')
              fallback.className = 'reddit-embed-fallback'
              fallback.innerHTML = '<p>Reddit embed temporarily unavailable. <a href="' +
                linkElement.href + '" target="_blank">View on Reddit</a></p>'
              if (embed.parentNode) {
                embed.parentNode.replaceChild(fallback, embed)
              }
            }
          })
        }
        
        document.head.appendChild(script)
      }
    }
  }

  const initLazyRedditEmbeds = () => {
    const redditEmbeds = document.querySelectorAll('.reddit-embed-bq')
    
    if (redditEmbeds.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadRedditEmbeds()
            observer.disconnect()
          }
        })
      }, {
        rootMargin: '50px'
      })
      
      redditEmbeds.forEach(embed => observer.observe(embed))
    } else {
      loadRedditEmbeds()
    }
  }

  return {
    initLazyRedditEmbeds
  }
}
