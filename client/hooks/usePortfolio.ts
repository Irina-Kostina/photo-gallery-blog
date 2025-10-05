import { useEffect } from "react"

export const usePortfolioEffects = () => {
  useEffect(() => {
    // ---- HERO ROTATION ----
    const heroTexts = [
      { title: "Moments in<br>Time", subtitle: "Visual Stories Through Photography" },
      { title: "Light &<br>Shadow", subtitle: "Capturing the Essence of Life" },
      { title: "Through the<br>Lens", subtitle: "Stories Worth Telling" },
      { title: "Frozen<br>Forever", subtitle: "Preserving Fleeting Beauty" },
    ]

    let currentIndex = 0
    const heroTitle = document.querySelector(".hero-title") as HTMLElement | null
    const heroSubtitle = document.querySelector(".hero-subtitle") as HTMLElement | null

    function rotateHeroText() {
      if (!heroTitle || !heroSubtitle) return
      heroTitle.style.opacity = "0"
      heroSubtitle.style.opacity = "0"
      heroTitle.style.transform = "translateY(20px)"
      heroSubtitle.style.transform = "translateY(20px)"

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % heroTexts.length
        heroTitle.innerHTML = heroTexts[currentIndex].title
        heroSubtitle.innerHTML = heroTexts[currentIndex].subtitle
        heroTitle.style.opacity = "1"
        heroSubtitle.style.opacity = "0.8"
        heroTitle.style.transform = "translateY(0)"
        heroSubtitle.style.transform = "translateY(0)"
      }, 400)
    }

    setTimeout(() => setInterval(rotateHeroText, 4000), 3000)

    // ---- SMOOTH SCROLL ----
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", e => {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute("href")!)
        if (target) {
          const navHeight = (document.querySelector(".navbar") as HTMLElement).offsetHeight
          const targetPosition = (target as HTMLElement).offsetTop - navHeight
          window.scrollTo({ top: targetPosition, behavior: "smooth" })
        }
      })
    })

    // ---- FADE-IN OBSERVER ----
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )
    document.querySelectorAll<HTMLElement>(".fade-in").forEach(el => observer.observe(el))

    // ---- NAVBAR HIDE ON SCROLL ----
    let lastScroll = 0
    const navbar = document.querySelector(".navbar") as HTMLElement
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY
      navbar.style.transform =
        currentScroll > lastScroll && currentScroll > 100 ? "translateY(-100%)" : "translateY(0)"
      lastScroll = currentScroll
    })

    // ---- MOBILE MENU ----
    const mobileBtn = document.querySelector(".mobile-menu-btn") as HTMLElement
    const navMenu = document.querySelector(".nav-menu") as HTMLElement
    mobileBtn?.addEventListener("click", () => {
      const open = navMenu.style.display === "flex"
      navMenu.style.display = open ? "none" : "flex"
      if (!open) {
        Object.assign(navMenu.style, {
          flexDirection: "column",
          position: "absolute",
          top: "100%",
          left: "0",
          right: "0",
          background: "var(--black)",
          padding: "2rem",
          gap: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        })
      }
    })

    navMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) navMenu.style.display = "none"
      })
    )

    // Cleanup on unmount
    return () => observer.disconnect()
  }, [])
}
