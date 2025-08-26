// src/components/HotelShowcase.js
import React from "react";

const HotelShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Our 1000+ Hotels Worldwide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Hotel Cards */}
          <div className="bg-white shadow-lg rounded-lg">
            <img
              src="hotel-image.jpg"
              alt="Hotel"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Beach Resort</h3>
              <p className="text-gray-500 mb-4">Enjoy a luxurious beach vacation.</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Explore More
              </button>
            </div>
          </div>
          {/* Repeat for more hotels */}
        </div>
      </div>
    </section>
  );
};

export default HotelShowcase;
