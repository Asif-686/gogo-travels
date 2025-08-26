import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I make a reservation?",
    answer:
      "Making a reservation is easy! Simply visit our website, choose your desired dates and destination, select your preferred accommodation, and follow the prompts to complete your booking securely online.",
  },
  {
    question: "What amenities are included with my stay?",
    answer:
      "The amenities included with your stay vary depending on the hotel and room type you choose. However, common amenities may include complimentary Wi-Fi, breakfast, fitness facilities, and concierge services.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, most reservations can be modified or canceled depending on the hotel’s cancellation policy. Be sure to review the terms when booking.",
  },
  {
    question:
      "How do I contact customer support if I have questions or need assistance?",
    answer:
      "You can contact our 24/7 customer support team via live chat, email, or phone. We’re here to help you anytime during your travel planning.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-5 md:px-[80px] py-16 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center text-2xl md:text-[28px] text-[#073C60] font-semibold mb-10">
          When selecting the ideal hotel resort for your vacation
        </h2>

        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-[24px] px-6 md:px-10 py-6 shadow-lg transition-all duration-300 ease-in-out"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1E1E1E]">
                    {item.question}
                  </h3>
                  <div className="bg-[#073C60] rounded-full w-10 h-10 flex items-center justify-center text-white">
                    {isOpen ? (
                      <FaChevronUp className="transition-all duration-300" />
                    ) : (
                      <FaChevronDown className="transition-all duration-300" />
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-left max-w-[1044px] text-[#6D6D6D] font-[Open Sans] text-[16px] font-normal leading-[1.5]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
