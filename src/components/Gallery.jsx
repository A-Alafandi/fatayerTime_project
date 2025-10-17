import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import gallery1 from '../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../assets/img/gallery/gallery-6.jpg';
import gallery7 from '../assets/img/gallery/gallery-7.jpg';
import gallery8 from '../assets/img/gallery/gallery-8.jpg';

const Gallery = () => {
  const galleryImages = [
    { src: gallery1 || "/placeholder.svg", alt: "Fatayer variëteiten" },
    { src: gallery2 || "/placeholder.svg?height=300&width=400", alt: "Fatayer variëteiten" },
    { src: gallery3  || "/placeholder.svg?height=300&width=400", alt: "Restaurant interieur" },
    { src: gallery4  || "/placeholder.svg?height=300&width=400", alt: "Kookproces" },
    { src: gallery5  || "/placeholder.svg?height=300&width=400", alt: "Verse ingrediënten" },
    { src: gallery6 ||"/placeholder.svg?height=300&width=400", alt: "Catering opstelling" },
    { src: gallery7 ||"/placeholder.svg?height=300&width=400", alt: "Catering opstelling" },
    { src: gallery8 ||"/placeholder.svg?height=300&width=400", alt: "Catering opstelling" },
  ]


  return (

    <section id="gallery" className="gallery section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Galerij</h2>
          <p>Onze Keuken & Gerechten</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="gallery-swiper"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery-item">
                    <img src={image.src || "/placeholder.svg"} className="img-fluid" alt={image.alt} loading="lazy" />
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

export default Gallery
