import AboutImage from '../assets/img/fatayer.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex align-items-center justify-content-center">
            <img
              src={AboutImage || "/placeholder.svg"}
              className="about-img img-fluid"
              data-aos="fade-up"
              data-aos-delay="150"
              alt="Fatayer Time Keuken"
            />
          </div>

          <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Bij Fatayer Time brengen we de authentieke smaken van Syrië naar Nederland. Onze passie voor
                traditionele recepten en verse ingrediënten maakt elke maaltijd tot een bijzondere ervaring.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all"></i> <span>Verse, dagelijks bereide fatayer</span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i> <span>Traditionele Syrische recepten</span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i> <span>Halal gecertificeerde ingrediënten</span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i> <span>Professionele catering service</span>
                </li>
              </ul>
              <p>
                Met meer dan 15 jaar ervaring in de Syrische keuken, zorgen wij ervoor dat elke hap u terugbrengt naar
                de warme, gastvrije sfeer van het Midden-Oosten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
