export default function AboutSection() {
    return (
      <section className="bg-white px-[80px] py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2 rounded-[40px] overflow-hidden shadow-md">
            <img
              src={require('../Images/about-image.png')} // Replace with your actual image path
              alt="About GoGo Travel"
              className="w-full h-auto object-cover"
            />
          </div>
  
          {/* Right Content */}
          <div className="w-full md:w-1/2 text-[#073C60]">
            <p className="text-sm font-semibold text-[#EF3D5B] uppercase mb-2">About</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              GOGO Travel: Discover Your <br /> Dream Destination with Us
            </h2>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              We are here with the mission to make travelling easy and affordable.
              With relentless effort from our top-notch team, we make sure you don’t miss out
              on anything – be that any hidden gem or any eminent destination of this world – 
              you name it! Let us clear the cloud of the laborious planning process of planning 
              your vacation and tailor it according to your demands!
            </p>
  
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="text-[#073C60] text-xl font-bold">10+</p>
                <p className="text-sm text-[#4B4B4B]">Years of Experience</p>
              </div>
              <div>
                <p className="text-[#073C60] text-xl font-bold">1K+</p>
                <p className="text-sm text-[#4B4B4B]">Hotels Listed</p>
              </div>
              <div>
                <p className="text-[#073C60] text-xl font-bold">2K+</p>
                <p className="text-sm text-[#4B4B4B]">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  