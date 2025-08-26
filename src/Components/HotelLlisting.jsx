const HotelCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 border border-gray-200 rounded-xl shadow-sm p-4 bg-white">
      {/* Image */}
      <div className="relative w-full md:w-1/3 rounded-xl overflow-hidden">
        <img
          src="/Images/hotel.jpg"
          alt="Hotel"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
          9 Images
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 text-left">
            Ambassador Hotel, Bangkok
          </h3>
          <p className="text-sm text-gray-600 text-left">
            Sukimvit Soi 6, Bangkok, Thailand
          </p>

          <div className="flex items-center mt-2 text-sm text-gray-700">
            <span className="text-yellow-500 text-base mr-1">★★★★★</span>
            <span className="ml-2">5 Star Hotel</span>
            <span className="mx-2">•</span>
            <span>20+ Amenities</span>
          </div>

          <div className="flex items-center mt-2">
            <span className="bg-gray-100 text-sm font-medium text-gray-800 px-2 py-1 rounded">
              4.2
            </span>
            <span className="ml-2 text-sm text-gray-700">
              <span className="font-semibold">Very Good</span> 371 reviews
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-right">
            <span className="text-lg font-semibold text-gray-900">$240</span>
            <span className="text-sm text-gray-500">/night</span>
            <span className="block text-xs text-gray-400">excl. tax</span>
          </p>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-100">
              <span className="text-xl text-red-500">♡</span>
            </button>
            <button className="bg-[#D92C48] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#b61f38]">
              View Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HotelList = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {[...Array(6)].map((_, i) => (
        <HotelCard key={i} />
      ))}
    </div>
  );
};

export default HotelList;
