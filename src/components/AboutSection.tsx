
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are PITCHERS - a dynamic team of innovators, creators, and visionaries 
            dedicated to transforming ideas into extraordinary digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passionate</h3>
              <p className="text-gray-600">
                Driven by an unwavering passion for technology and innovation, 
                we pour our hearts into every project we undertake.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">I</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and creative solutions 
                to solve complex challenges and exceed expectations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-indigo-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trustworthy</h3>
              <p className="text-gray-600">
                Built on a foundation of trust and reliability, we deliver 
                consistent results that our clients can depend on.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
