export default function PackagesSection() {
    // Inline data array
    const packageData1 = [
      {
        image: "/Images/law.png",
        title: "USA City Tour",
        days: "7 Days, 6 Nights",
        price: "$1,299 / person",
      },
      {
        image: "/Images/frame2.png",
        title: "Jerusalem Escape",
        days: "5 Days, 4 Nights",
        price: "$999 / person",
      },
      {
        image: "/Images/canada.png",
        title: "Canada Explorer",
        days: "6 Days, 5 Nights",
        price: "$1,199 / person",
      },
    ];
  
    return (
      <section className="bg-white px-[80px] py-12 w-full max-w-[1440px] mx-auto h-[803px]">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-[#EF3D5B] text-sm font-semibold uppercase">
            Choose Your Package
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#073C60]">
            Handpicked Packages For Your Travel
          </h2>
        </div>
  
        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageData1.map((pkg, index) => (
            <div
              key={index}
              className="rounded-[32px] overflow-hidden shadow-md bg-white border border-gray-100"
            >
              <img
                src={require('../Images/canada.png')}
                alt={pkg.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-5 text-[#073C60]">
                <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{pkg.days}</p>
                <p className="text-md font-semibold text-[#EF3D5B]">{pkg.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  