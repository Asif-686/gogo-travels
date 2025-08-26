export default function AboutSection() {
  return (
    <section className="bg-white px-[80px] py-12">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Image (max 505px) */}
        <div className="w-full md:w-1/2 rounded-[40px] overflow-hidden shadow-md h-auto md:h-[505px] max-h-[505px]">
          <img
            src="/Images/about-image.png"
            alt="About GoGo Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content (max 480px, start at top) */}
        <div className="w-full md:w-1/2 text-[#073C60] text-left md:max-h-[480px] md:self-start md:overflow-hidden">
          {/* About label */}
          <p className="font-mont font-medium text-[20px] leading-[140%] tracking-normal text-[#EF3D5B] uppercase mb-2">
            About
          </p>

          {/* Title */}
          <h2 className="font-mont font-semibold text-[40px] leading-[140%] tracking-normal mb-4">
            GOGO Travel: Discover Your <br /> Dream Destination with Us
          </h2>

          {/* Paragraph */}
          <p className="font-opensans font-normal text-[17px] leading-normal tracking-normal text-gray-700 my-[44px]">
  We are here with the mission to make travelling easy and affordable.
  With relentless effort from our top-notch team, we make sure you
  don’t miss out on anything – be that any hidden gem or any eminent
  destination of this world – you name it! Let us clear the cloud of
  the laborious planning process of planning your vacation and tailor
  it according to your demands!
</p>

          {/* Stats with responsive dividers (vertical on desktop, horizontal on mobile) */}
         <div className="flex w-full items-start md:divide-x divide-gray-300/60">
  {/* Left aligned */}
  <div className="flex-1 text-left pr-8">
    <p className="font-mont font-semibold text-[28px] leading-[140%] text-[#073C60]">10+</p>
    <p className="font-opensans font-normal text-[16px] leading-[140%] text-[#4B4B4B]">
      Years of<br />Experience
    </p>
  </div>

  {/* Center aligned */}
  <div className="flex-1 text-center px-8">
    <p className="font-mont font-semibold text-[28px] leading-[140%] text-[#073C60]">1K+</p>
    <p className="font-opensans font-normal text-[16px] leading-[140%] text-[#4B4B4B]">
      Hotels<br />Listed
    </p>
  </div>

  {/* Right aligned */}
  <div className="flex-1 flex justify-end pl-8">
  <div className="w-fit">
    <p className="font-mont font-semibold text-[28px] leading-[140%] text-[#073C60] text-left">
      2K+
    </p>
    <p className="font-opensans font-normal text-[16px] leading-[140%] text-[#4B4B4B] text-left">
      Happy<br />Customers
    </p>
  </div>
</div>

</div>


        </div>
      </div>
    </section>
  );
}
