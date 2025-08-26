import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full px-[80px] py-12 flex justify-center">
      <div className="w-full max-w-[1306px]">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-[#1E1E1E] mb-10 text-left">
          {/* Logo + Description + Socials */}
          <div>
            <img src="/logo.png" alt="Logo" className="h-10 mb-4" />
            <p className="mb-4 leading-relaxed text-left">
              Discover unforgettable adventures with easy bookings through us.
              Your gateway to seamless experiences awaits.
            </p>
            <div className="flex gap-4 text-[#EF3D5B] text-base">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaTiktok />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-3 text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-[#1E1E1E]">
              <li>Best Offers</li>
              <li>Popular Accommodation</li>
              <li>News & Blogs</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-3 text-gray-800">Navigation</h4>
            <ul className="space-y-2 text-[#1E1E1E]">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Vacations</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-3 text-gray-800">Company</h4>
            <ul className="space-y-2 text-[#1E1E1E]">
              <li>GOGO Travel Group</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Payment Methods</li>
            </ul>
          </div>

          {/* Get App */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-3 text-gray-800">Get App</h4>
            <ul className="space-y-2 text-[#1E1E1E]">
              <li>App Store</li>
              <li>Google Play Store</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-[#073C60]">
          Copyright © 2024 WebRay Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
