const AboutSection = () => {
  return (
    <section id="about" className="section bg-gradient-hero">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative w-82 h-82 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-primary/30">
              <img
                src="/images/b2.jpg" // غيّر المسار حسب مكان الصورة عندك
                alt="Mohamed Shaker"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                I am a passionate AI and Data Science graduate with hands-on experience spanning both academic research and industry applications.
                I specialize in Deep Learning, Natural Language Processing (NLP), and MLOps, working with tools such as TensorFlow and PyTorch
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl hover-glow text-center">
                <div className="text-3xl font-bold text-primary mb-2">1+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass p-6 rounded-xl hover-glow text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="glass p-6 rounded-xl hover-glow text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">AI Models Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
