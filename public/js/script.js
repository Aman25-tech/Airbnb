(() => {
  'use strict'

  // ─── Form Validation ───
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })

  // ─── Flash Toast Auto-Dismiss ───
  const toasts = document.querySelectorAll('.flash-toast')
  toasts.forEach(toast => {
    setTimeout(() => {
      toast.classList.add('flash-dismissing')
      setTimeout(() => {
        toast.parentElement?.remove()
      }, 300)
    }, 5000)
  })

  // ─── Navbar Scroll Shadow ───
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    let ticking = false
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            navbar.classList.add('scrolled')
          } else {
            navbar.classList.remove('scrolled')
          }
          ticking = false
        })
        ticking = true
      }
    }, { passive: true })
  }

  // ─── Back to Top Button ───
  const backToTop = document.getElementById('backToTop')
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible')
      } else {
        backToTop.classList.remove('visible')
      }
    }, { passive: true })

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  // ─── Intersection Observer for Card Animations ───
  const cards = document.querySelectorAll('.listing-card')
  if (cards.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    cards.forEach(card => {
      card.style.animationPlayState = 'paused'
      observer.observe(card)
    })
  }
})()