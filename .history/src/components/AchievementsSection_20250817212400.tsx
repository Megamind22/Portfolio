import { Award, Trophy } from 'lucide-react';
import b1 from "../../public/images/b1.jpeg"
import b2 from "../../public/images/b1.jpeg"
import b1 from "../../public/images/b1.jpeg"
const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "We Hear What They Say: Lip Reading in Arabic for the Voice Impaired (LRAVI)",
      organization: "NIGSD Governance & AI Research Competition",
      year: "2024",
      description: `
        • Created the first Arabic 100-word custom dataset  
        • Pretrained models on the BBC dataset (~450k videos)  
        • Achieved 28.1% CER and 39.8% WER on unseen speakers  
        • Awarded 1st Place among 80+ research submissions across Egypt
      `,
      type: "award",
      image: "/images/b1.jpeg"
    },
    {
      icon: Award,
      title: "3rd Place Medal",
      organization: "Ministry of Youth and Sports & UNESCO, National Youth Hackathon",
      year: "2023",
      description: `
        • LRAVI project won 3rd place among 150+ participating teams across Egypt
      `,
      type: "competition",
      image: "/images/b3.jpg"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award': return 'from-yellow-500 to-orange-500';
      case 'competition': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'award': return 'Award';
      case 'competition': return 'Competition';
      default: return 'Achievement';
    }
  };

  return (
    <section id="achievements" className="section bg-gradient-hero">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Achievements & Recognition
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-card p-6 rounded-xl hover-glow flex flex-col">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getTypeColor(achievement.type)} p-3 flex-shrink-0`}>
                  <achievement.icon className="w-full h-full text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${getTypeColor(achievement.type)} text-white`}>
                      {getTypeBadge(achievement.type)}
                    </span>
                    <span className="text-primary font-semibold text-sm">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-primary text-sm font-medium mb-2">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
