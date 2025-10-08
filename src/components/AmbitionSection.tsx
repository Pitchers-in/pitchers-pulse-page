
import { Card, CardContent } from "@/components/ui/card";

const AmbitionSection = () => {
  return (
    <section id="ambition" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Ambition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To shape the future of innovation by delivering transformative digital solutions that empower businesses and uplift global communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Innovation Leadership</h3>
                <p className="text-gray-300">
                  "Pioneering the next wave of digital transformation."
                  At Pitchers, we are committed to pushing the boundaries of what's possible in the digital realm.
                  We don't follow trends — we create them. Through continuous innovation, we empower startups, businesses, and industries to achieve more.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Global Impact</h3>
                <p className="text-gray-300">
                  "Creating solutions that go beyond borders."
                  Our ambition reaches across markets, industries, and cultures. We aim to build solutions that foster growth, strengthen businesses, and positively shape the future of communities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  ∞
                </div>
                <p className="text-xl font-semibold text-gray-300">
                  Limitless Possibilities
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbitionSection;
