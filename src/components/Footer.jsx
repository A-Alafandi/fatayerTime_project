import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../main.css';

function Footer() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link to="/" className="logo d-flex align-items-center">
                <span className="sitename">Fatayer Time</span>
              </Link>
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
                  <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
                    About us
                  </a>
                </li>
                <li>
                  <a href="#why-us" onClick={(e) => handleSmoothScroll(e, 'why-us')}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={(e) => handleSmoothScroll(e, 'menu')}>
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Openingstijden</h4>
              <ul>
                <li>Ma-Za: 12:00 - 21:00</li>
                <li>Zo: 13:00 - 21:00</li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Follow us on social media for the latest updates and special offers!</p>
              <div className="social-links d-flex mt-3">
                <a href="https://wa.me/31685108263" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://facebook.com/fatayertime" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com/fatayertime" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Fatayer Time</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Website by{' '}
            <a href="https://afandilabs.nl" target="_blank" rel="noopener noreferrer">
              AfandiLabs
            </a>
          </div>
        </div>
      </footer>
  );
}

export default React.memo(Footer);