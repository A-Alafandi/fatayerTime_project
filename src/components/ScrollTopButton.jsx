import { useState, useEffect } from "react"

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "active" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  )
}

export default ScrollTopButton
