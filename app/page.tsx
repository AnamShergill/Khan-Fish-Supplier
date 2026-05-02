import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUs from '@/components/AboutUs';
import LocalDistribution from '@/components/LocalDistribution';
import DistributorGrid from '@/components/DistributorGrid';
import ProductShowcase from '@/components/ProductShowcase';
import ImportedSeafood from '@/components/ImportedSeafood';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <LocalDistribution />
      <DistributorGrid />
      <ProductShowcase />
      <ImportedSeafood />
      <ContactSection />
      <Footer />
    </main>
  );
}
