import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";
import FaqSection from "../Components/FaqSection";
export default function Hotels() {
  return (
    <div>
      <Header />
    <section className="px-[80px] py-12">
      {/* Main card with custom shadow */}
      <div
        className="mx-auto max-w-[1180px] rounded-[28px] bg-white overflow-hidden"
        style={{ boxShadow: "0px 0px 60px 30px #00000008" }}
      >
        <div className="flex flex-col md:flex-row">
          {/* LEFT: Contact info panel */}
          <aside className="md:w-[40%] bg-[#0B4661] text-white p-8 md:p-10 m-[10px] rounded-[16px]">
            <h3 className="text-white font-semibold text-[28px] leading-[140%] text-left">
              Contact Information
            </h3>
            <p className="text-white/80 mt-1 mb-8 text-[14px] text-left">
              Say something to start a live chat!
            </p>

            <ul className="space-y-8 mt-6">
              <li className="flex items-center gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={18} />
                </span>
                <span className="text-[15px]">845-991-4646</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={18} />
                </span>
                <span className="text-[15px]">sales@gogotravelgroup.com</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                  <MapPin size={18} />
                </span>
                <span className="text-[15px] text-left">
                  54 Decatur Ave, Spring Valley, NY 10977, United States
                </span>
              </li>
            </ul>
          </aside>

          {/* RIGHT: Form */}
          <div className="md:w-[60%] p-8 md:p-10">
            
<h2 className="font-poppins font-semibold text-[28px] leading-[100%] text-[#111827] mb-8 text-left">
  Contact Us
</h2>


            {/* 2-col fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <label className="block">
                <span className="block text-[13px] text-black/70 text-left">First Name</span>
                <input
                  type="text"
                  className="mt-2 w-full bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#0B4661] py-2"
                />
              </label>

              <label className="block">
                <span className="block text-[13px] text-black/70 text-left">Last Name</span>
                <input
                  type="text"
                  className="mt-2 w-full bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#0B4661] py-2"
                />
              </label>

              <label className="block">
                <span className="block text-[13px] text-black/70 text-left">Email</span>
                <input
                  type="email"
                  className="mt-2 w-full bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#0B4661] py-2"
                />
              </label>

              <label className="block">
                <span className="block text-[13px] text-black/70 text-left">Phone Number</span>
                <input
                  type="tel"
                  className="mt-2 w-full bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#0B4661] py-2"
                />
              </label>
            </div>

            {/* Subject radios */}
           <div className="mt-8">
  <p className="text-[13px] text-black/70 mb-3 text-left">Select Subject?</p>
  <div className="flex flex-wrap gap-x-8 gap-y-4">
    {[
      "General Inquiry",
      "Booking Issue",
      "Complain",
      "Refund & Settlement",
    ].map((label, i) => (
      <label
        key={label}
        className="inline-flex items-center gap-2 cursor-pointer"
      >
        <input
          type="radio"
          name="subject"
          defaultChecked={i === 0}
          className="peer sr-only"
        />
        {/* custom radio */}
        <span
          className="relative w-4 h-4 rounded-full border border-black/30
                     after:content-[''] after:absolute after:inset-1 after:rounded-full
                     after:bg-[#0B4661] after:scale-0 peer-checked:after:scale-100
                     transition-transform"
        />
        <span className="text-[14px]">{label}</span>
      </label>
    ))}
  </div>
</div>


            {/* Message */}
            <div className="mt-8">
              <label className="block">
                <span className="block text-[13px] text-black ont-bold text-left">Message</span>
                <textarea
                  rows={2}
                  className="mt-2 w-full bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#0B4661] py-2 resize-none"
                  placeholder="Write your message.."
                />
              </label>
            </div>

            {/* Divider */}
            

            {/* Submit */}
            <div className="mt-6 flex">
              <button className="ml-auto inline-flex items-center justify-center rounded-full bg-[#E33B44] text-white px-8 py-3 shadow-[0_8px_24px_rgba(227,59,68,0.35)] hover:brightness-95 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FaqSection />
    <Testimonials />
    <Newsletter />
    
    <Footer />
  </div>
);
}