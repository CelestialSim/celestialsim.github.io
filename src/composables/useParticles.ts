export function useParticles() {
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const createParticle = () => {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.cssText = `
      position: fixed;
      width: 2px;
      height: 2px;
      background: rgba(200, 162, 75, 0.35);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      left: ${Math.random() * 100}vw;
      top: 100vh;
      animation: float-up ${8 + Math.random() * 12}s linear infinite;
    `

    document.body.appendChild(particle)

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 20000)
  }

  const addParticleStyles = () => {
    if (document.querySelector('#particle-styles')) return

    const style = document.createElement('style')
    style.id = 'particle-styles'
    style.textContent = `
      @keyframes float-up {
        from { transform: translateY(0); opacity: 0.9; }
        to { transform: translateY(-100vh); opacity: 0; }
      }
    `
    document.head.appendChild(style)
  }

  const initParticleSystem = () => {
    if (prefersReducedMotion()) {
      return () => {}
    }

    addParticleStyles()
    const interval = setInterval(createParticle, 2600)

    return () => clearInterval(interval)
  }

  return {
    initParticleSystem
  }
}
