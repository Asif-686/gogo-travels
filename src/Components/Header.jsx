import { Link } from "react-router-dom";
export default function Header() {
  const navItems = [
    { text: "Home", path: "/" },
    { text: "Hotels", path: "/hotels" },
    { text: "Travel Insurance", path: "/insurance" },
    { text: "About Us", path: "/about" },
    { text: "Contact Us", path: "/contact" },
  ];
  return (
    <header className="w-full px-6 md:px-[80px] py-4 md:py-[30px] bg-white shadow-md z-50 relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="h-12 md:h-[72px] flex-shrink-0">
          <img
            src="/logo.png"
            alt="GoGo Travel Group"
            className="h-full object-contain"
          />
        </div>

        {/* Navigation Links */}

        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#073C60] font-semibold text-[14px] font-[Montserrat]">
          {navItems.map(({ text, path }, i) => (
            <Link
              key={i}
              to={path}
              className="relative group transition-colors duration-300"
            >
              {text}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#073C60] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Sign In Button */}
          <button className="group relative overflow-hidden border border-[#073C60] bg-white text-[#073C60] font-semibold text-sm md:text-[14px] font-[Montserrat] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#073C60] hover:text-white hover:shadow-md">
            <span className="relative z-10">Sign In</span>
            <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-[#073C60] z-0 rounded-full origin-left"></span>
          </button>

          {/* Sign Up Button */}
          <button className="group relative overflow-hidden border border-[#073C60] bg-[#073C60] text-white font-semibold text-sm md:text-[14px] font-[Montserrat] px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#073C60] hover:shadow-md">
            <span className="relative z-10">Sign Up</span>
            <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-white z-0 rounded-full origin-left"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
