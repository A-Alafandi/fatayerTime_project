const Services = () => {
  const services = [
    {
      icon: "bi-truck",
      title: "Catering Service",
      description: "Professionele catering voor al uw evenementen, van kleine bijeenkomsten tot grote feesten.",
    },
    {
      icon: "bi-calendar-event",
      title: "Event Planning",
      description: "Complete organisatie van uw Syrische thema-evenementen met authentieke decoratie en entertainment.",
    },
    {
      icon: "bi-house-heart",
      title: "Thuisbezorging",
      description: "Verse, warme maaltijden bezorgd aan huis in Den Haag, Voorburg en omgeving.",
    },
  ]

  return (
    <section id="services" className="why-us section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Onze Services</h2>
          <p>Wat Wij Bieden</p>
        </div>

        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card-item">
                <span>
                  <i className={service.icon}></i>
                </span>
                <h4>
                  <a href="#" className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
