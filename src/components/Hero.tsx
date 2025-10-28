
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}

      {/* Sliding background image */}
      <div className="absolute inset-0 bg-[url('/images/EveryPeak.png')] bg-cover bg-center animate-slide-bg opacity-40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/40 to-slate-900/50 mix-blend-overlay" />

      {/* ✅ Navbar */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-14 py-6 z-20">
        {/* Left: Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent cursor-pointer">
          Pitchers
        </div>

        {/* Right: Links + Buttons */}
        <nav className="flex items-center space-x-8">
          {/* Links */}
          <a href="#about" className="text-gray-100 text-lg hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#work" className="text-gray-100 text-lg hover:text-white transition-colors duration-200">
            Work
          </a>
          <a href="#prices" className="text-gray-100 text-lg hover:text-white transition-colors duration-200">
            Prices
          </a>

          {/* Buttons */}
          <Button
            className="text-black text-lg bg-white hover:text-white transition-all"
          >
            Book a Call
            <ArrowUpRight />
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg">
            Login
          </Button>

          {/* Language Dropdown */}
          <div className="relative group">
            <button className="text-gray-300 text-lg hover:text-white transition-colors duration-200 flex items-center gap-1">
              🌐 Language
              <svg
                className="w-4 h-4 ml-1 text-gray-400 group-hover:text-white transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
              <ul className="py-2 text-gray-300 text-sm">
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">English</li>
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">Hindi</li>
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">Italian</li>
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">French</li>
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">Spanish</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          PITCH BUILD GROW
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in delay-500">
          Pitchers helps founders build powerful products, grow their businesses, and connect with the right investors — all in one ecosystem
        </p>
        <Button
          onClick={scrollToNext}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in delay-1000"
        >
          Based in India, Italy, France, Germany, UK, USA
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
