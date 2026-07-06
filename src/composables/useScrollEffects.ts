import { nextTick } from 'vue'

export function useScrollEffects() {
  const initSmoothScrolling = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]')
    
    navLinks.forEach(link => {
      link.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault()
        
        const targetId = this.getAttribute('href')
        const targetSection = document.querySelector(targetId!)
        
        if (targetSection) {
          const headerEl = document.querySelector('.header') as HTMLElement
          const headerHeight = headerEl?.offsetHeight || 0
          const targetPosition = (targetSection as HTMLElement).offsetTop - headerHeight
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      })
    })
  }

  const updateActiveNav = () => {
    const sections = document.querySelectorAll('.section, .hero')
    const navItems = document.querySelectorAll('.nav-links a')
    
    const headerEl = document.querySelector('.header') as HTMLElement
    const headerHeight = headerEl?.offsetHeight || 0
    const scrollPosition = window.scrollY + headerHeight + 20
    
    sections.forEach((section, index) => {
      const sectionTop = (section as HTMLElement).offsetTop
      const sectionHeight = (section as HTMLElement).offsetHeight
      const sectionId = section.getAttribute('id') || (index === 0 ? 'home' : '')
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => item.classList.remove('active'))
        const activeNav = document.querySelector(`a[href="#${sectionId}"]`)
        if (activeNav) {
          activeNav.classList.add('active')
        }
      }
    })
  }

  const initParallaxEffect = () => {
    const hero = document.querySelector('.hero')
    const planet = document.querySelector('.planet')
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      
      if (hero && planet) {
        (planet as HTMLElement).style.transform = `translate(-50%, -50%) translateY(${rate}px) rotate(${scrolled * 0.1}deg)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }

  const initScrollEffects = async () => {
    await nextTick()

    initSmoothScrolling()
    window.addEventListener('scroll', updateActiveNav)
    updateActiveNav()

    const cleanupParallax = initParallaxEffect()

    return () => {
      cleanupParallax()
      window.removeEventListener('scroll', updateActiveNav)
    }
  }

  return {
    initScrollEffects
  }
}
