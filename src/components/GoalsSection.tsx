
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GoalsSection = () => {
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
        "Forge Strategic partnerships for accelerated growth"
      ],
      status: "Planned",
      color: "bg-blue-500"
    },
    {
      title: "2027",
      subtitle: "Innovation Era",
      objectives: [
        "Launch next-gen investment platform",
        "Established a dedicated R&D innovation lab",
        "Lead with thought leadership across industries"
      ],
      status: "Future",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="goals" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {/* Our Goals */}
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic journey focuses on sustainable growth, innovation-driven solutions, and expanding our global impact. From strong foundations to groundbreaking innovation, we are committed to shaping the future of startups and investment ecosystems.
          </p>
        </div>

        <div className="space-y-8">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-purple-500"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className={`w-3 h-3 ${goal.color} rounded-full`}></div>
                    <h3 className="text-3xl font-bold text-gray-900">{goal.title}</h3>
                    <h4 className="text-xl text-gray-600">{goal.subtitle}</h4>
                  </div>
                  <Badge
                    variant={goal.status === "In Progress" ? "default" : "secondary"}
                    className="text-sm px-4 py-2"
                  >
                    {goal.status}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {goal.objectives.map((objective, objIndex) => (
                    <div
                      key={objIndex}
                      className="p-4 bg-gray-50 rounded-lg group-hover:bg-purple-50 transition-colors duration-300"
                    >
                      <p className="text-gray-700 group-hover:text-purple-700 transition-colors duration-300">
                        {objective}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h3>
              <p className="text-lg">
                Join our community of entrepreneurs and investors and start your journey to success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
