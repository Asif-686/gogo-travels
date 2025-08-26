import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  return (
    <section className="bg-white px-[80px] py-16 flex justify-center">
      <div className="w-full max-w-[1306px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-[#EF3D5B] text-sm font-semibold uppercase">
              What our clients say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#073C60]">
              Testimonials
            </h2>
          </div>
          <a
            href="@"
            className="text-sm text-[#EF3D5B] border border-[#EF3D5B] px-4 py-1 rounded-full hover:bg-[#ef3d5b]/10"
          >
            See All
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <TestimonialCard
            quote="“A real sense of community, nurtured”"
            detail="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping us through everything smoothly."
            name="Joel Schwartz"
            position="CEO, Atikim Auctions"
            image="/Images/testimonial3.png"
          />

          {/* Card 2 */}
          <TestimonialCard
            quote="“The facilities are superb. Clean, slick, bright.”"
            detail="A real sense of community, nurtured. Really appreciate the help and support from the staff during the move-in and settling process. Everything was seamless!"
            name="Alex Roberts"
            position="Executive, Studio 87"
            image="/Images/Testimonial2.png"
          />

          {/* Card 3 */}
          <TestimonialCard
            quote="“Best support I’ve ever experienced”"
            detail="From the first call to the end of the process, I felt heard and supported. The space, the community, and the staff are simply amazing. Highly recommended!"
            name="Avanti Samson"
            position="Avanti Associates"
            image="/Images/Testimonial1.png"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, detail, name, position, image }) {
  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between h-full">
      {/* Text content area */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col mb-6">
          <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-2 leading-snug min-h-[52px]">
            {quote}
          </h3>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed min-h-[84px]">
            {detail}
          </p>
          <p className="text-sm font-semibold text-[#1E1E1E] mb-4">View more</p>
        </div>

        {/* Bottom identity + rating block */}
        <div>
          <div className="flex items-center gap-1 text-[#EF3D5B] text-sm mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>

          <div className="text-left">
            <p className="text-sm text-[#1E1E1E] font-bold">{name}</p>
            <p className="text-xs text-gray-500">{position}</p>
            <img src="/google.png" alt="Google Logo" className="h-5 w-5 mt-2" />
          </div>
        </div>
      </div>

      {/* Image at bottom */}
      <div className="mt-5">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-[150px] object-cover"
        />
      </div>
    </div>
  );
}
