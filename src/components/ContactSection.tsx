import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mohameda.shaker16@gmail.com',
      href: 'mailto:mohameda.shaker16@gmail.com',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+20 1121348952 ',
      href: 'tel:+201234567890',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cairo, Egypt',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/Megamind22', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-shaker-19b377289', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="section bg-gradient-hero">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-gradient">
          Contact US
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Ready to transform your ideas into intelligent solutions?  
          Let's discuss how AI can revolutionize your business.  
          I'm here to help you harness the power of machine learning and artificial intelligence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          {contactMethods.map(({ icon: Icon, title, value, href, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-card p-6 rounded-2xl hover-glow hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{title}</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition">
                {value}
              </p>
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h4 className="font-semibold text-foreground mb-6 text-xl">Connect with Me</h4>
          <div className="flex justify-center space-x-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
