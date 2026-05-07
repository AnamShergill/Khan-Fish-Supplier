import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import SEOContent from '@/components/SEOContent';
import AboutUs from '@/components/AboutUs';
import LocalDistribution from '@/components/LocalDistribution';
import DistributorGrid from '@/components/DistributorGrid';
import ProductShowcase from '@/components/ProductShowcase';
import ImportedSeafood from '@/components/ImportedSeafood';
import AreasWeServe from '@/components/AreasWeServe';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <SEOContent />
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/images/bg-image.jpg)',
          backgroundAttachment: 'fixed'
        }}
      />
      {/* Scrollable Content Overlay */}
      <main className="relative z-10 min-h-screen overflow-x-hidden">
        <Header />
        <HeroCarousel />
        <AboutUs />
        <LocalDistribution />
        <DistributorGrid />
        <ProductShowcase />
        <ImportedSeafood />
        <AreasWeServe />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
