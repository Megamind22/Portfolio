import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap,
  Database,
  TrendingUp,
  Shield,
  Cpu
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Model Development",
      description: "Custom ML models tailored to your business needs, from predictive analytics to recommendation systems.",
      features: ["Supervised & Unsupervised Learning", "Model Training & Optimization", "Performance Evaluation", "Production Deployment"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "Deep Learning Solutions",
      description: "Advanced neural network architectures for complex pattern recognition and decision-making tasks.",
      features: ["Neural Network Design", "Transfer Learning", "Model Fine-tuning"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Intelligent text analysis, sentiment analysis, chatbots, and language understanding systems.",
      features: ["Text Classification", "Sentiment Analysis"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Eye,
      title: "Computer Vision Applications",
      description: "Image and video analysis solutions for object detection, classification, and visual intelligence.",
      features: ["Object Detection", "Image Classification", "Face Recognition", "Video Analytics"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable insights through statistical analysis and visualization.",
      features: ["Data Exploration", "Statistical Analysis", "Data Visualization", "Predictive Modeling"],
      gradient: "from-indigo-500 to-purple-500"
    },
    // {
    //   icon: Zap,
    //   title: "AI Consulting & Strategy",
    //   description: "Strategic guidance on AI implementation, technology selection, and digital transformation.",
    //   features: ["AI Strategy Development", "Technology Assessment", "Implementation Planning", "Team Training"],
    //   gradient: "from-yellow-500 to-orange-500"
    // }
  ];

  return (
    <section id="services" className="section bg-gradient-hero">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Services Offered
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-card p-8 rounded-xl hover-glow h-full">
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                {/* <div className="mt-6 pt-6 border-t border-border">
                  <button className="w-full text-center text-primary font-medium hover:text-primary/80 transition-colors">
                    Learn More →
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Overview */}
        {/* <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-12">
            My Development Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Database, title: "Data Analysis", description: "Understanding your data and requirements" },
              { icon: Cpu, title: "Model Design", description: "Creating optimal AI architecture" },
              { icon: TrendingUp, title: "Training & Testing", description: "Iterative improvement and validation" },
              { icon: Shield, title: "Deployment", description: "Secure, scalable production release" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;