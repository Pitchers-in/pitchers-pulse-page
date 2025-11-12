import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  const goals = [
    {
      title: "2025",
      subtitle: "Foundation Year",
      objectives: [
        "Establish a strong digital footprint",
        "Build core team of innovators",
        "Launch flagship products to validate vision"
      ],
      status: "In Progress",
      color: "bg-green-500"
    },
    {
      title: "2026",
      subtitle: "Expansion Phase",
      objectives: [
        "Expand global market reach",
        "Develop AI-powered, investor-focused solutions",
        "Forge strategic partnerships for accelerated growth"
      ],
      status: "Planned",
      color: "bg-blue-500"
    },
    {
      title: "2027",
      subtitle: "Innovation Era",
      objectives: [
        "Launch next-gen investment platform",
        "Establish a dedicated R&D innovation lab",
        "Lead with thought leadership across industries"
      ],
      status: "Future",
      color: "bg-purple-500"
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Pitchers
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-white font-semibold">Pitchers</span>, we aim to bridge the gap between
            entrepreneurs and investors by creating a transparent, scalable, and innovation-driven ecosystem.
            Our journey from foundation to innovation is focused on building a sustainable impact that empowers
            startups to scale confidently.
          </p>
        </div>

        {/* Goal Cards */}
        <div className="space-y-10">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="group bg-gray-900/40 border border-gray-800 hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-md"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className={`w-3 h-3 ${goal.color} rounded-full shadow-md`}></div>
                    <h3 className="text-3xl font-bold text-white">{goal.title}</h3>
                    <h4 className="text-lg text-gray-400">{goal.subtitle}</h4>
                  </div>
                  <Badge
                    variant={goal.status === "In Progress" ? "default" : "secondary"}
                    className={`text-sm px-4 py-2 ${
                      goal.status === "In Progress"
                        ? "bg-green-500 text-white"
                        : goal.status === "Planned"
                        ? "bg-blue-500 text-white"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    {goal.status}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {goal.objectives.map((objective, objIndex) => (
                    <div
                      key={objIndex}
                      className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 group-hover:border-purple-400/40 transition-all duration-300"
                    >
                      <p className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 text-sm md:text-base">
                        {objective}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none shadow-lg">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold mb-4">Building the Future, Together.</h3>
              <p className="text-lg mb-6 text-gray-200">
                Join our mission to revolutionize how startups connect with investors. 
                Let’s empower innovation, collaboration, and global growth.
              </p>
              <a
                href="https://calendly.com/dev-pitchers/30min"
                className="inline-block mt-4 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Book a Call
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pitchers. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
