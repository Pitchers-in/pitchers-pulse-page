
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Content Production & Reel Marketing",
      description: "From Ideation to Execution - we crafts cinematic reels and motion visuals that drive engagement, trust and conversions",
      tags: ["Reel Shoots", "Story Concepts", "Editing & Transitions", "Sound Syncing", "On-site Direction"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Brand Identity & Strategy",
      description: "Position your business with a distinctive voice, visual identity, and brand narrative that connects emotionally and commercially",
      tags: ["Logo Systems", "Brand Guidelines", "Messaging Frameworks", "Visual Storyboarding"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Presence & Audience Growth",
      description: "From ideation to execution — we craft cinematic reels and motion visuals that drive engagement, trust, and conversions",
      tags: ["Reel Shoots", "Story Concepts", "Editing & Transitions", "Sound Syncing", "On-site Direction"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Visual Communication & Campaign Graphics",
      description: "From ideation to execution — we craft cinematic reels and motion visuals that drive engagement, trust, and conversions",
      tags: ["Social Banners", "Ad Design", "Campaign Concepts", "Brand Consistency"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Integration",
      description: "Leveraging artificial intelligence to enhance business processes and user experiences",
      tags: ["Machine Learning", "NLP", "Computer Vision"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Strategic Consulting & Premium Partnerships",
      description: "Work 1:1 with our creative directors to design brand systems, plan launch campaigns, and scale engagement across platforms",
      tags: ["Brand Launch Roadmap", "Content Calender Strategy", "Influencer Mapping"],
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Growth, Designed for Modern Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our work blends strategy, storytelling, and design precision to build brands people don’t just see — they remember.
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
