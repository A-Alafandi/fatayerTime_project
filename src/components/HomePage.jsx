import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Header from "./Header"
import Hero from "./Hero"
import About from "./About"
import Services from "./Services"
import MenuPage from "./Menu/MenuPage"
import Gallery from "./Gallery"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollTopButton from "./ScrollTopButton"

const HomePage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    })

    // Refresh AOS on route change
    AOS.refresh()

    return () => {
      AOS.refresh()
    }
  }, [])

  return (
    <div className="homepage">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MenuPage />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  )
}

export default HomePage