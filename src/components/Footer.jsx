import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLeaf,
  FaShoppingBag,
  FaLink,
  FaPhoneAlt
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Wave Divider */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24 text-green-50"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64V120H0Z"
          ></path>
        </svg>
      </div>

      <footer className="bg-gradient-to-b from-green-50 to-white">

        {/* Stay Connected */}
        <div className="max-w-5xl mx-auto py-16 px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Stay Connected
          </h2>

          <p className="text-gray-600 mb-8">
            Subscribe to get updates on new products, healthy recipes,
            and exclusive offers from Coorg Collection.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-green-300 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Subscribe
            </button>

          </div>
        </div>

        {/* Footer Cards */}
        <div className="max-w-7xl mx-auto px-6 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <div className="flex items-center gap-3 mb-4">
              <FaLeaf className="text-green-600 text-xl" />
              <h3 className="text-xl font-bold text-green-700">
                Coorg Collection
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Bringing pure and authentic products from the beautiful
              hills of Coorg. We work directly with farmers to deliver
              natural, healthy and sustainable food to your home.
            </p>

          </div>

          {/* Shop */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <div className="flex items-center gap-3 mb-4">
              <FaShoppingBag className="text-green-600" />
              <h4 className="font-semibold text-gray-900">Shop</h4>
            </div>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">🧈 Pure Ghee</li>
              <li className="hover:text-green-600 cursor-pointer">🥥 Coconut Oil</li>
              <li className="hover:text-green-600 cursor-pointer">🍯 Honey</li>
              <li className="hover:text-green-600 cursor-pointer">🌶 Spices</li>
              <li className="hover:text-green-600 cursor-pointer">☕ Coffee</li>
            </ul>

          </div>

          {/* Useful Links */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <div className="flex items-center gap-3 mb-4">
              <FaLink className="text-green-600" />
              <h4 className="font-semibold text-gray-900">
                Useful Links
              </h4>
            </div>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">About Us</li>
              <li className="hover:text-green-600 cursor-pointer">Our Story</li>
              <li className="hover:text-green-600 cursor-pointer">Contact</li>
              <li className="hover:text-green-600 cursor-pointer">Cart</li>
              <li className="hover:text-green-600 cursor-pointer">My Account</li>
            </ul>

          </div>

          {/* Contact */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-green-600" />
              <h4 className="font-semibold text-gray-900">
                Contact Us
              </h4>
            </div>

            <p className="mb-2 text-gray-600">📞 +91 98765 43210</p>
            <p className="mb-2 text-gray-600">📧 hello@coorgcollection.com</p>
            <p className="mb-2 text-gray-600">📍 Coorg, Karnataka, India</p>
            <p className="text-gray-600">🕒 Mon - Sun | 9AM - 8PM</p>

          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pb-6 text-gray-600 text-lg">

          <a href="#" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>

          <a href="#" className="hover:text-pink-600 transition">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>

        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pb-6 border-t border-green-100 pt-4">
          © 2026 Coorg Collection. All Rights Reserved.
        </div>

      </footer>
    </>
  );
}

export default Footer;