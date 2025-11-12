
const Footer = () => {
  return (
    <footer className="text-white py-20 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 rounded-lg py-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            PITCHERS
          </h3>
          <p className="text-gray-400 mb-8">
            Crafting Digital Excellence Through Innovation
          </p>
          <p className="text-gray-400 mb-8">
            Contact us on dev@pitchers.in
          </p>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
            <a href="#ambition" className="text-gray-400 hover:text-white transition-colors duration-300">Ambition</a>
            <a href="#goals" className="text-gray-400 hover:text-white transition-colors duration-300">Goals</a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 PITCHERS. All rights reserved. Built with passion and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
