import { FaStar } from "react-icons/fa";

export default function HotelHighlightSection() {
  return (
    <section className="bg-white px-[80px] py-16 flex justify-center">
      <div className="w-full max-w-[1306px] flex flex-col md:flex-row justify-between items-start gap-10">
        {/* LEFT SIDE */}
        <div className="w-full max-w-[616px] relative bg-white">
          {/* Title */}
          <h2 className="text-[#073C60] text-[24px] font-bold leading-tight mb-4 text-left">
            Explore Our 1000+ Hotels Worldwide
          </h2>

          {/* Paragraph */}
          <p className="text-[#4B4B4B] text-sm leading-[1.6] mb-6 text-left">
            Our global hospitality is one of a kind. Indulge in our hub of 1000+
            hotels worldwide, each representing a unique scenario of either
            bustling metropolises or beautiful suburbs. Let us guide you to your
            perfect accommodation today.
          </p>

          {/* Button */}
          <div className="mb-8 text-left" >
            <button className="bg-[#073C60] text-white text-sm px-6 py-2 rounded-full mb-6 hover:bg-[#052c48] transition ">
              Explore More
            </button>
          </div>

          {/* Feature Card */}
          <div
            className="relative bg-white rounded-[30px] shadow-md p-6 h-[213px] py-[21px] px-[37px] "
            style={{
              filter: "drop-shadow(-4px 8px 40px rgba(0, 0, 0, 0.07))",
            }}
          >
            <h4 className="font-semibold text-[#1E1E1E] mb-4 text-[15px] font-bold text-left">
              Unveiling Beachside Bliss and Urban Adventures
            </h4>
            <div className="flex flex-col md:flex-row gap-[60px] pt-[40px]">
              {/* Beach Resorts */}
              <div className="flex-1 w-[227px]">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src="/Icons/villa.svg"
                    alt="Beach Icon"
                    className="h-5 w-5"
                  />
                  <p className="font-semibold text-[#1E1E1E] text-sm text-left">
                    Beach Resorts
                  </p>
                </div>
                <p className="text-sm text-[#4B4B4B] text-left">
                  Embrace the azure shores with our exclusive beach resort.
                </p>
              </div>

              {/* City Escapes */}
              <div className="flex-1 w-[227px]">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src="/Icons/villa.svg"
                    alt="City Icon"
                    className="h-5 w-5"
                  />
                  <p className="font-semibold text-[#1E1E1E] text-sm text-left">
                    City Escapes
                  </p>
                </div>
                <p className="text-sm text-[#4B4B4B] text-left">
                  Enjoy the heartbeat of the metropolises where unexpected joy
                  awaits in every corner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Cards side-by-side */}
        <div className="w-full md:w-[464px] flex flex-row gap-6 justify-end">
          <HotelCard
            image="Images/Left.png"
            title="Hotel Schweizerhof"
            location="Bern, Switzerland"
          />
          <HotelCard
            image="Images/Right.png"
            title="The Seminyak Resort"
            location="Bali, Indonesia"
          />
        </div>
      </div>
    </section>
  );
}

function HotelCard({ image, title, location }) {
  return (
    <div
      className="w-[260px] h-[500px] rounded-[120px] overflow-hidden relative bg-cover bg-center shadow-xl flex-shrink-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md p-4 text-center rounded-b-[120px]">
        <h3 className="text-sm font-semibold text-[#073C60]">{title}</h3>
        <p className="text-xs text-[#073C60] mb-1">{location}</p>
        <div className="flex justify-center gap-1 text-[#EF3D5B] text-xs mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
        <button className="bg-[#073C60] text-white text-xs px-4 py-1 rounded-full hover:bg-[#052c48] transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
