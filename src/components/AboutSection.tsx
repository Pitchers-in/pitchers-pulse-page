import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Search, Users,ChartAreaIcon } from "lucide-react";
import { motion } from "framer-motion";

// const cardData = [
//   {
//     icons: <Search />,
//     title: 'Passionate',
//     description: 'Craft a compelling pitch deck that highlights your startup\'s unique value proposition, market opportunity, and competitive advantage.',
//     gradient: 'from-purple-50 to-blue-50',
//     iconGradient: 'from-purple-600 to-blue-600',
//   },
//   {
//     icons: <Users />,
//     title: 'Innovative',
//     description: 'Browse our network of investors and mentors who are passionate about your startup\'s potential.',
//     gradient: 'from-blue-50 to-indigo-50',
//     iconGradient: 'from-blue-600 to-indigo-600',
//   },
//   {
//     icons: <ChartAreaIcon />,
//     title: 'Trustworthy',
//     description: 'Recieve funding offers and negotiate terms that align with your startup\'s goals.',
//     gradient: 'from-indigo-50 to-purple-50',
//     iconGradient: 'from-indigo-600 to-purple-600',
//   },
// ];

// interface InfoCardProps {
//   icons: React.ReactNode;
//   title: string;
//   description: string;
//   gradient: string;
//   iconGradient: string;
// }

// const InfoCard = ({ icons, title, description, gradient, iconGradient }: InfoCardProps) => (
//   <Card className={cn("group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0", gradient)}>
//     <CardContent className="p-8 text-center">
//       <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300", iconGradient)}>
//         <div>
//           {icons}
//         </div>
//       </div>
//       <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </CardContent>
//   </Card>
// );

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder, GreenTech",
    quote:
      "Pitchers connected us to the right investors in days — the process felt seamless and professional.",
    image: "/avatars/user1.jpg",
  },
  {
    name: "Sanya Mehta",
    role: "Co-founder, FitFlex",
    quote:
      "The platform made it easy to showcase our idea and find genuine mentors who believed in us.",
    image: "/avatars/user2.jpg",
  },
  {
    name: "Rohan Das",
    role: "Investor, SeedStage",
    quote:
      "A brilliant network for early-stage startups — transparency and trust make Pitchers stand out.",
    image: "/avatars/user3.jpg",
  },
  {
    name: "Ishita Roy",
    role: "CEO, MindWell",
    quote:
      "The user experience is fantastic. It feels like a real startup ecosystem in one place.",
    image: "/avatars/user4.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Founder, ShopLink",
    quote:
      "From pitch deck upload to investor calls — everything was streamlined and easy to manage.",
    image: "/avatars/user5.jpg",
  },
];

const InfiniteRow = ({
  reverse = false,
}: {
  reverse?: boolean;
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-6"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((t, index) => (
          <Card
            key={index}
            className="min-w-[320px] bg-white/70 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{t.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  return (
     <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from founders, investors, and mentors who’ve used our platform.
          </p>
        </div>

        {/* First Row (left → right) */}
        <InfiniteRow />

        {/* Second Row (right → left) */}
        <div className="mt-12">
          <InfiniteRow reverse />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
