import { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';
import Spinner from './spinner/Spinner';
import MenuPage from './Menu/MenuPage';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can tie this to actual data fetch)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Hero />
      <main>
        <About data-aos="fade-up" />
        <MenuPage data-aos="fade-up" />
        <Services data-aos="fade-up" />
        <Gallery data-aos="fade-up" />
        <Testimonials data-aos="fade-up" />
        <Contact data-aos="fade-up" />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default HomePage;
