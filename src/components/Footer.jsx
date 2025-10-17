import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

function Footer() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Fatayer Time</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Herenstraat 20</p>
              <p>2271 CK Voorburg</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+31 6 8510 8263</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@fatayertime.nl</span>
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#hero" onClick={(e) => handleSmoothScroll(e, "hero")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                  About us
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleSmoothScroll(e, "why-us")}>
                  Services
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleSmoothScroll(e, "menu")}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Openingstijden</h4>
            <p>Ma-Za: 12:00 - 21:00</p>
            <p>Zo: 13:00 - 21:00</p>
          </div>

          <div className="col-lg-3 col-md-12 footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Follow us on social media for the latest updates and special offers!</p>
            <div className="social-links d-flex mt-4">
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          &copy; Copyright <strong className="px-1 sitename">Fatayer Time</strong> All Rights Reserved
        </p>
        {/* */}
        {/* Website by */}
        {/* */}
        {/* */}
        {/* FandiCode */}
        {/* */}
        {/* */}
      </div>
    </footer>
  )
}

export default React.memo(Footer)
