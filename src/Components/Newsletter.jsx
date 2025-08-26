import { FaPaperPlane } from "react-icons/fa";

export default function NewsletterSection() {
  return (
    <section className="bg-white px-[80px] py-12 w-full flex justify-center">
      <div className="bg-[#DC143C] rounded-[30px] px-6 md:px-12 py-16 text-white w-full max-w-[1306px] text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Don't Miss out on our daily updates!
        </h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
          Sign Up for Our Newsletter. Exclusive travel deals, insider tips, and stories to ignite your explorer spirit.
          Subscribe now to get awe-inspiring journey ideas and expert advice delivered straight to your inbox!
        </p>

        {/* Input Row */}
        <div className="flex justify-center">
          <div className="flex items-center bg-white rounded-full overflow-hidden px-4 py-2 w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter Your email address"
              className="flex-1 outline-none text-sm text-black bg-transparent placeholder-gray-500"
            />
            <button className="bg-[#DC143C] text-white p-2 rounded-full hover:bg-[#b01030] transition">
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
