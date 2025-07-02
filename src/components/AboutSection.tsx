import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Search, Users,ChartAreaIcon } from "lucide-react";

const cardData = [
  {
    icons: <Search />,
    title: 'Passionate',
    description: 'Craft a compelling pitch deck that highlights your startup\'s unique value proposition, market opportunity, and competitive advantage.',
    gradient: 'from-purple-50 to-blue-50',
    iconGradient: 'from-purple-600 to-blue-600',
  },
  {
    icons: <Users />,
    title: 'Innovative',
    description: 'Browse our network of investors and mentors who are passionate about your startup\'s potential.',
    gradient: 'from-blue-50 to-indigo-50',
    iconGradient: 'from-blue-600 to-indigo-600',
  },
  {
    icons: <ChartAreaIcon />,
    title: 'Trustworthy',
    description: 'Recieve funding offers and negotiate terms that align with your startup\'s goals.',
    gradient: 'from-indigo-50 to-purple-50',
    iconGradient: 'from-indigo-600 to-purple-600',
  },
];

interface InfoCardProps {
  icons: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
}

const InfoCard = ({ icons, title, description, gradient, iconGradient }: InfoCardProps) => (
  <Card className={cn("group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0", gradient)}>
    <CardContent className="p-8 text-center">
      <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300", iconGradient)}>
        <div>
          {icons}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform simplifies the pitching process for startups and entrepreneurs.
            Connection you with the right investors and mentors to help you grow your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
