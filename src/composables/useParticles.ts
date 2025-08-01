import { onMounted } from 'vue'

export function useParticles() {
  const createParticle = () => {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.cssText = `
      position: fixed;
      width: 2px;
      height: 2px;
      background: rgba(100, 181, 246, 0.3);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      left: ${Math.random() * 100}vw;
      top: 100vh;
      animation: float-up ${5 + Math.random() * 10}s linear infinite;
    `
    
    document.body.appendChild(particle)
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 15000)
  }

  const addParticleStyles = () => {
    if (document.querySelector('#particle-styles')) return

    const style = document.createElement('style')
    style.id = 'particle-styles'
    style.textContent = `
      @keyframes float-up {
        from {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        to {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
      
      .nav-links a.active {
        color: #64b5f6;
        position: relative;
      }
      
      .nav-links a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: #64b5f6;
        border-radius: 1px;
      }
      
      .btn-highlighted {
        animation: pulse-highlight 1.5s ease-in-out infinite;
        position: relative;
        z-index: 1000;
      }
      
      @keyframes pulse-highlight {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(100, 181, 246, 0.8);
          background: linear-gradient(135deg, #64b5f6, #42a5f5);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 0 10px rgba(100, 181, 246, 0);
          background: linear-gradient(135deg, #81c784, #4caf50);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(100, 181, 246, 0);
          background: linear-gradient(135deg, #64b5f6, #42a5f5);
        }
      }
    `
    document.head.appendChild(style)
  }

  const initParticleSystem = () => {
    addParticleStyles()
    const interval = setInterval(createParticle, 2000)
    
    return () => clearInterval(interval)
  }

  return {
    initParticleSystem
  }
}
