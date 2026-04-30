import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            QurbaniHat
          </h2>
          <p className="text-sm leading-6">
            A modern livestock marketplace where users can explore,
            view details and book animals for Qurbani easily and securely.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <Link href="/animals" className="hover:text-green-400">All Animals</Link>
            <Link href="/login" className="hover:text-green-400">Login</Link>
            <Link href="/register" className="hover:text-green-400">Register</Link>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Contact Info
          </h2>
          <p className="text-sm">📍 Bogura, Bangladesh</p>
          <p className="text-sm">📞 +880 1234-567890</p>
          <p className="text-sm">📧 support@qurbanihat.com</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-white">
            <a href="#" className="hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-400">Twitter</a>
            <a href="#" className="hover:text-green-400">Instagram</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
}