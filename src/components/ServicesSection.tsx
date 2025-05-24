
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, modern web applications using cutting-edge technologies",
      tags: ["React", "TypeScript", "Node.js"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Mobile Solutions",
      description: "Building native and cross-platform mobile applications for iOS and Android",
      tags: ["React Native", "Flutter", "Swift"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive user interfaces with exceptional user experiences",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Cloud Solutions",
      description: "Implementing scalable cloud infrastructure and deployment strategies",
      tags: ["AWS", "Docker", "Kubernetes"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Integration",
      description: "Leveraging artificial intelligence to enhance business processes and user experiences",
      tags: ["Machine Learning", "NLP", "Computer Vision"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Consulting",
      description: "Providing strategic technology consulting to help businesses grow and innovate",
      tags: ["Strategy", "Architecture", "Planning"],
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that drive innovation and growth for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs group-hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
