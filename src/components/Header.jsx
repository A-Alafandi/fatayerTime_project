import { useEffect, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

import LogoSvg from "../assets/img/logo.png"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleNav = () => {
    setNavOpen((prev) => !prev)
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setIsScrolled(scrollTop > 50)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("mobile-nav-active")
    } else {
      document.body.classList.remove("mobile-nav-active")
    }
  }, [navOpen])

  const handleSmoothScroll = (target) => {
    const element = document.getElementById(target)
    if (element) {
      const headerHeight = 80
      const yOffset = -headerHeight
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
    setNavOpen(false)
  }

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <RouterLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src={LogoSvg || "/placeholder.svg"} alt="Fatayer Time Logo" />

          <h1 className="sitename">Fatayer Time</h1>
        </RouterLink>

        <nav id="navmenu" className={`navmenu ${navOpen ? "mobile-nav-active" : ""}`}>
          <ul>
            <li>
              <button onClick={() => handleSmoothScroll('hero')} className="nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleSmoothScroll('about')} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleSmoothScroll('services')} className="nav-link">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleSmoothScroll('menu')} className="nav-link">
                Menu
              </button>
            </li>
            <li>
              <button onClick={() => handleSmoothScroll('gallery')} className="nav-link">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleSmoothScroll('contact')} className="nav-link">
                Contact
              </button>
            </li>
            <li className="d-xl-none">
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className="d-flex align-items-center">

          <button className="mobile-nav-toggle d-xl-none" onClick={toggleNav} aria-label="Toggle navigation">
            <i className={navOpen ? "bi bi-x" : "bi bi-list"}></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
