import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Khan Fish Supplier',
  description: 'Privacy Policy for Khan Fish Supplier',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header forceBlueBackground={true} />
      <main className="min-h-screen pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-navy mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <p className="text-gray-600 text-lg mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This Privacy Policy page is currently being prepared. Khan Fish Supplier is committed to protecting your privacy and ensuring the security of your personal information.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                When you contact us through our website, we may collect information such as your name, email address, phone number, and message content.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-6">
                We use the information you provide to respond to your inquiries, process your requests, and improve our services.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our Privacy Policy, please contact us at:
              </p>
              <ul className="list-none text-gray-700 mb-6">
                <li className="mb-2"><strong>Email:</strong> info@khanfishsupplier.com</li>
                <li className="mb-2"><strong>Phone:</strong> +92-310-2061037 / +92-322-2666392</li>
                <li className="mb-2"><strong>Address:</strong> Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road, Karachi, Pakistan</li>
              </ul>

              <div className="bg-gold/10 border-l-4 border-gold p-6 mt-8">
                <p className="text-gray-700 font-semibold">
                  📝 Note: This is a placeholder page. A comprehensive Privacy Policy will be added soon.
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
