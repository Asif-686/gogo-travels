import { useState } from "react";

export default function PackagesSection() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Best Seller", "City Escapes", "Sea", "Mountain"];

  const packageData1 = [
    {
      image: "/Images/law.png", // ✅ use /public/Images
      title: "USA City Tour",
      days: "7 Days, 6 Nights",
      price: "$1,299 / person",
      category: "City Escapes",
    },
    {
      image: "/Images/frame2.png",
      title: "Jerusalem Escape",
      days: "5 Days, 4 Nights",
      price: "$999 / person",
      category: "Best Seller",
    },
    {
      image: "/Images/canada.png",
      title: "Canada Explorer",
      days: "6 Days, 5 Nights",
      price: "$1,199 / person",
      category: "Mountain",
    },
  ];

  // Filtering logic
  const filteredPackages =
    active === "All"
      ? packageData1
      : packageData1.filter((pkg) => pkg.category === active);

  return (
    <section className="bg-white px-[80px] py-12 w-full max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-[#EF3D5B] text-sm font-semibold uppercase">
          Explore Our City Destinations
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#073C60]">
          Hotels Across Cities
        </h2>
      </div>

      {/* Filter Button Box */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? "bg-[#E33B44] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPackages.map((pkg, index) => (
          <div
            key={index}
            className="rounded-[32px] overflow-hidden shadow-md bg-white border border-gray-100"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-[468px] object-cover"
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
