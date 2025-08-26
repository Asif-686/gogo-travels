import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Booknow from "../Components/Booknow";
import Aboutus from "../Components/Aboutus";
import PackagesGoGo from "../Components/PackagesGoGo";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import FaqSection from "../Components/FaqSection";
<FaqSection />;

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Booknow />
      <Aboutus />
      <PackagesGoGo />
      <FaqSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
