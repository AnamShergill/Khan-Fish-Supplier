import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Khan Fish Supplier',
  description: 'Terms of Service for Khan Fish Supplier',
};

export default function TermsOfService() {
  return (
    <>
      <Header forceBlueBackground={true} />
      <main className="min-h-screen pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-navy mb-8">
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <p className="text-gray-600 text-lg mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This Terms of Service page is currently being prepared. These terms govern your use of Khan Fish Supplier's website and services.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Use of Website</h2>
              <p className="text-gray-700 mb-6">
                This website is provided for informational purposes about our seafood products and services. You agree to use this website only for lawful purposes.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Product Information</h2>
              <p className="text-gray-700 mb-6">
                We strive to provide accurate information about our seafood products. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our Terms of Service, please contact us at:
              </p>
              <ul className="list-none text-gray-700 mb-6">
                <li className="mb-2"><strong>Email:</strong> info@khanfishsupplier.com</li>
                <li className="mb-2"><strong>Phone:</strong> +92-310-2061037 / +92-322-2666392</li>
                <li className="mb-2"><strong>Address:</strong> Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road, Karachi, Pakistan</li>
              </ul>

              <div className="bg-gold/10 border-l-4 border-gold p-6 mt-8">
                <p className="text-gray-700 font-semibold">
                  📝 Note: This is a placeholder page. Comprehensive Terms of Service will be added soon.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/"
                className="inline-block bg-gold text-deep-navy px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
