import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Mohamed's AI expertise transformed our medical imaging platform. His deep learning model achieved 97% accuracy, exceeding our expectations. Outstanding technical skills and professionalism."
    },
    {
      name: "David Chen",
      role: "Product Manager",
      company: "FinanceAI Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Working with Mohamed on our trading algorithm was exceptional. He delivered a robust ML solution that increased our portfolio returns by 23%. Highly recommend his services."
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Engineering",
      company: "TechStartup Inc",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Mohamed's NLP solution revolutionized our customer service. The chatbot now handles 80% of queries automatically with incredible accuracy. Excellent communication and delivery."
    },
    {
      name: "Michael Thompson",
      role: "Research Director",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Mohamed contributed significantly to our computer vision research. His innovative approach and deep understanding of AI algorithms led to breakthrough results. A true AI expert."
    },
    {
      name: "Lisa Wang",
      role: "VP of Technology",
      company: "DataDriven Solutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The predictive analytics dashboard Mohamed built for us is incredible. Real-time insights with 95% forecast accuracy have transformed our business decisions. Outstanding work!"
    },
    {
      name: "Robert Kim",
      role: "Manufacturing Manager",
      company: "AutoTech Industries",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Mohamed's quality control system reduced our defect rates by 40%. The computer vision solution is now integral to our production line. Professional and results-driven."
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-card p-6 rounded-xl hover-glow">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary opacity-50" />
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  
                  <p className="text-primary text-sm">
                    {testimonial.role}
                  </p>
                  
                  <p className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by Leading Companies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[
              "HealthTech Innovations",
              "FinanceAI Corp", 
              "TechStartup Inc",
              "Innovation Labs",
              "DataDriven Solutions",
              "AutoTech Industries",
              "AI Research Institute",
              "Digital Transform Co"
            ].map((company, index) => (
              <div key={index} className="text-muted-foreground font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Join these satisfied clients and let's build something amazing with AI.
            </p>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;