import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import heroBg1 from '../../public/images/b1.jpeg';
import heroBg2 from '../../public/images/b2.jpg';
import heroBg3 from '../../public/images/b3.jpg';
import heroBg4 from '../../public/images/b4.jpg';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {[heroBg1, heroBg3].map((bg, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={bg}
                alt={`AI Background ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-80" />
              <div className="absolute inset-0 bg-gradient-glow" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center animate-fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mt-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient text-2xl lg:text-5xl">Mohamed Shaker</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mb-8 mt-20">
              AI Engineer & Data Scientist
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed  sm:mt-10">
            
              I design and deliver AI solutions that turn complex problems into measurable results— I bridge advanced research and real-world applications.I bring both technical depth and cultural insight to create solutions that work for diverse markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow"
              >
                View My Work
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover-glow transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              {[
                { icon: Github, href: 'https://github.com/Megamind22', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-shaker-19b377289', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:mohameda.shaker16@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-lg hover-glow hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
