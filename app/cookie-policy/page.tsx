import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy | Khan Fish Supplier',
  description: 'Cookie Policy for Khan Fish Supplier',
};

export default function CookiePolicy() {
  return (
    <>
      <Header forceBlueBackground={true} />
      <main className="min-h-screen pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-navy mb-8">
            Cookie Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <p className="text-gray-600 text-lg mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This Cookie Policy page is currently being prepared. This policy explains how Khan Fish Supplier uses cookies and similar technologies on our website.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-6">
                We may use cookies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our website performance</li>
                <li>Provide relevant content and advertisements</li>
              </ul>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-6">
                You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience.
              </p>

              <h2 className="text-2xl font-bold text-deep-navy mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <ul className="list-none text-gray-700 mb-6">
                <li className="mb-2"><strong>Email:</strong> info@khanfishsupplier.com</li>
                <li className="mb-2"><strong>Phone:</strong> +92-310-2061037 / +92-322-2666392</li>
                <li className="mb-2"><strong>Address:</strong> Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road, Karachi, Pakistan</li>
              </ul>

              <div className="bg-gold/10 border-l-4 border-gold p-6 mt-8">
                <p className="text-gray-700 font-semibold">
                  📝 Note: This is a placeholder page. A comprehensive Cookie Policy will be added soon.
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
                className="inline-block bg-gold text-deep-navy px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
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
