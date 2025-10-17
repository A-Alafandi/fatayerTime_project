import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import Testimonials1 from '../assets/img/testimonials/testimonials-1.jpg';
import Testimonials2 from '../assets/img/testimonials/testimonials-2.jpg';
import Testimonials3 from '../assets/img/testimonials/testimonials-3.jpg';


const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Klant",
      image: Testimonials1 || "/placeholder.svg",
      text:
        "De beste Syrische fatayer in Nederland! De smaken zijn authentiek en herinneren me aan thuis. Zeer aanbevolen voor iedereen die echte Syrische keuken wil proeven.",
    },
    {
      name: "Maria van der Berg",
      role: "Event Organizer",
      image: Testimonials2 || "/placeholder.svg",
      text:
        "Fatayer Time heeft onze bedrijfsfeest perfect verzorgd. Professionele service, heerlijk eten en alle gasten waren zeer tevreden. Zeker voor herhaling vatbaar!",
    },
    {
      name: "Omar Al-Rashid",
      role: "Food Blogger",
      image: Testimonials3 || "/placeholder.svg",
      text:
        "Als food blogger heb ik veel Midden-Oosterse restaurants bezocht, maar Fatayer Time springt er echt uit. De kwaliteit en authenticiteit zijn ongeëvenaard.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Wat Onze Klanten Zeggen</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>{testimonial.text}</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      className="testimonial-img"
                      alt={testimonial.name}
                      loading="lazy"
                    />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.role}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
