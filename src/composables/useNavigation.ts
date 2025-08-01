export function useNavigation() {
  const highlightButton = (button: HTMLElement) => {
    button.classList.add('btn-highlighted')
    setTimeout(() => {
      button.classList.remove('btn-highlighted')
    }, 6000)
  }

  const handleButtonHighlight = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const highlightParam = urlParams.get('highlight')
    
    if (highlightParam === 'copyBtn') {
      setTimeout(() => {
        const copyBtn = document.getElementById('copyDemoCode')
        if (copyBtn) {
          copyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' })
          highlightButton(copyBtn)
        }
      }, 500)
    }
  }

  const initTypingEffect = () => {
    const heroTitle = document.querySelector('.hero-title')
    if (heroTitle) {
      const originalText = heroTitle.textContent!
      heroTitle.textContent = ''
      
      let i = 0
      const typeEffect = setInterval(() => {
        if (i < originalText.length) {
          heroTitle.textContent += originalText.charAt(i)
          i++
        } else {
          clearInterval(typeEffect)
        }
      }, 50)
    }
  }

  const initPerformanceMonitoring = () => {
    console.log(`
      🌍 CelestialSim - Advanced Procedural Planet Simulation
      
      Thanks for checking out our organization website!
      
      GitHub: https://github.com/celestialsim
      Features: Dynamic LOD, Water Simulation, Ecosystem Generation
      
      Built with passion for graphics and simulation technology.
    `)

    if ('performance' in window) {
      window.addEventListener('load', function () {
        setTimeout(function () {
          const timing = performance.timing
          const loadTime = timing.loadEventEnd - timing.navigationStart
          console.log(`Page loaded in ${loadTime}ms`)
        }, 0)
      })
    }
  }

  return {
    highlightButton,
    handleButtonHighlight,
    initTypingEffect,
    initPerformanceMonitoring
  }
}
