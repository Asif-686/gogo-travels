import { ArrowUpRight, CalendarDays, MapPin, UserPlus } from "lucide-react";
import HomeHero from "/Images/HomeHero.png"; // ✅ Using your imported image

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[636px] px-6 md:px-20 py-10 flex items-center justify-center"
      style={{ backgroundImage: `url(${HomeHero})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
        {/* LEFT CONTENT */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-[30px] p-8 md:p-10 shadow-xl">
          <h1 className="font-[Montserrat] font-bold text-[#073C60] text-[32px] md:text-[40px] leading-[140%] mb-4">
            Plan Your Next <br />
            Perfect Stay
          </h1>

          <div className="flex space-x-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="w-3 h-3 bg-[#D93F45] rounded-full" />
            ))}
            <span className="w-3 h-3 border-2 border-[#D93F45] rounded-full" />
          </div>

          <p className="text-[#4B4B4B] text-sm md:text-base leading-relaxed mb-6">
            Embark on your dream journey where each click awaits endless
            possibilities. Your desire may differ, but our handpicked selection
            is ready to offer you everything – tranquility, thrilling adventure,
            or indulgent luxury! Trust your travel experience with GOGO Travel’s
            unforgettable arrangements today.
          </p>

          <button className="flex items-center gap-2 bg-[#073C60] text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:bg-[#052a43] hover:shadow-lg">
            Discover More <ArrowUpRight size={18} />
          </button>

          <div className="mt-6">
            <h3 className="font-bold text-[#073C60] text-base md:text-lg font-[Montserrat]">
              GOGO Travel Group
            </h3>
            <p className="text-[#4B4B4B] text-sm mt-1 max-w-md">
              Discover unforgettable adventures with easy bookings through us.
              Your gateway to seamless experiences awaits.
            </p>
          </div>
        </div>

        {/* RIGHT BOOKING OVERLAY */}
        <div className="relative flex justify-end items-end min-h-[300px] w-full">
          <div className="bg-white bg-opacity-90 rounded-[30px] shadow-2xl p-6 md:p-8 w-full relative">
            {/* Top Tab */}
            <div className="absolute -top-6 right-6">
              <div className="bg-[#073C60] text-white text-sm md:text-base font-semibold px-6 py-2 rounded-t-[40px] rounded-b-[12px] shadow-md">
                Ultimate Relaxation Experience
              </div>
            </div>

            {/* Header */}
            <h3 className="text-[#073C60] font-bold text-lg md:text-xl font-[Montserrat]">
              Room Booking
            </h3>
            <p className="text-sm text-[#4B4B4B] mb-6">
              Book Your Perfect Retreat Today
            </p>

            {/* Booking Fields */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-[#073C60]" />
                <div>
                  <p className="font-bold text-sm text-[#073C60]">Check in</p>
                  <p className="text-sm text-[#4B4B4B]">DD/MM/YYYY</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="text-[#073C60]" />
                <div>
                  <p className="font-bold text-sm text-[#073C60]">Check out</p>
                  <p className="text-sm text-[#4B4B4B]">DD/MM/YYYY</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#073C60]" />
                <div>
                  <p className="font-bold text-sm text-[#073C60]">Location</p>
                  <p className="text-sm text-[#4B4B4B]">Click option</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <UserPlus className="text-[#073C60]" />
                <div>
                  <p className="font-bold text-sm text-[#073C60]">Guest</p>
                  <p className="text-sm text-[#4B4B4B]">Click option</p>
                </div>
              </div>
              <div>
                <button className="bg-[#073C60] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#052a43] hover:shadow-md transition-all duration-300 w-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
