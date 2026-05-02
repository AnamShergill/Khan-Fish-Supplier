import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUs from '@/components/AboutUs';
import DistributorGrid from '@/components/DistributorGrid';
import ProductShowcase from '@/components/ProductShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <DistributorGrid />
      <ProductShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
}
