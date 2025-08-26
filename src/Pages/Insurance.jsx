import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Aboutus from "../Components/Aboutus";
import { ArrowUpRight } from "lucide-react";

import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";
import FaqSection from "../Components/FaqSection";
// ✅ import the image from src


export default function Travel() {
  return (
    <div>
      <Header />

      {/* Hero Section (same horizontal padding as About: px-[80px]) */}
      <section className="bg-white px-[80px] py-12 md:px-[80px] px-6 ">
        <div
          className="relative bg-cover bg-center rounded-[32px] overflow-hidden min-h-[636px]"
          style={{ backgroundImage: `url("/Images/Insurance-hero.png")` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content box */}
         <div className="relative z-10 w-full max-w-[610px] rounded-[28px] bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-8 text-[#073C60] mt-[35px] ml-[35px]">

      {/* Heading */}
      <h2 className="font-mont font-semibold tracking-normal text-left">
        <span className="block text-[40px] leading-[120%]">We Secure Your</span>
        {/* second line: Travel + dots */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[40px] leading-[120%]">Travel</span>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#E33B44]" />
            <span className="w-4 h-4 rounded-full bg-[#E33B44]" />
            <span className="w-4 h-4 rounded-full bg-[#E33B44]" />
            <span className="w-4 h-4 rounded-full border-2 border-[#E33B44]" />
          </div>
        </div>
      </h2>

      {/* Body copy */}
      <p className="font-opensans font-normal text-[17px] leading-[140%] text-[#4B4B4B] mt-4 mb-8 text-left">
        Your peace of mind is our priority. Our comprehensive travel insurance
        covers trip cancellations, delays, medical emergencies, and lost luggage.
        Travel confidently knowing we have you covered every step of the way.
      </p>

      {/* CTA (left aligned) */}
      <div className="text-left">
        <button className="inline-flex items-center rounded-full bg-[#073C60] text-white font-mont font-medium text-[15px] leading-[140%] pl-6 pr-2 py-2 shadow-md hover:bg-[#052A43] transition">
          Discover More
          <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-[#EF3D5B]">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>

      {/* Footer (left aligned) */}
      <div className="mt-8 text-left">
        <h3 className="font-mont font-semibold text-[20px] leading-[140%] text-[#073C60]">
          GOGO Travel Group
        </h3>
        <p className="font-opensans font-normal text-[14px] leading-[140%] text-[#7A7A7A] max-w-[420px]">
          Discover unforgettable adventures with easy bookings through us. Your
          gateway to seamless experiences awaits.
        </p>
      </div>
    </div>
        </div>
      </section>

    <section className="bg-white px-[80px] py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div
          className="relative rounded-[24px] overflow-hidden shadow-md bg-cover bg-center w-[583px] h-[503px]"
          style={{ backgroundImage: `url("/Images/about_us-1.png")` }}
        >
          {/* Optional subtle overlay for readability */}
          <div className="absolute inset-0 bg-white/0" />

          {/* Bottom-right content */}
          <div className="absolute right-6 bottom-6 text-right max-w-[60%]">
            <p className="text-[#073C60] text-sm md:text-base mb-4">
              Travel Insurance Coverage as<br />Far-Reaching as Your Passport
            </p>
            <button className="inline-flex justify-center items-center bg-[#073C60] text-white px-6 py-2 rounded-full hover:bg-[#052A43] transition">
              View Details
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative rounded-[24px] overflow-hidden shadow-md bg-cover bg-center w-[583px] h-[503px]"
          style={{ backgroundImage: `url("/Images/about_us-2.png")` }}
        >
          <div className="absolute inset-0 bg-white/0" />
          <div className="absolute right-6 bottom-6 text-right max-w-[60%]">
            <p className="text-[#073C60] text-sm md:text-base mb-4">
              Comprehensive Coverage for<br />Every Journey
            </p>
            <button className="inline-flex justify-center items-center bg-[#073C60] text-white px-6 py-2 rounded-full hover:bg-[#052A43] transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
    <Aboutus />
    <FaqSection />
    <Testimonials />
    <Newsletter />
    <Footer />
  </div>
);
}
