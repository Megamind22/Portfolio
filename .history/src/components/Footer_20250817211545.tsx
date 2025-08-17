import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import logo from '../../public/images/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-xl font-bold text-gradient pt-1" style={{ width:"150px",}}>
              <img  src=  alt='logo' style={{ width:"100%" }}/>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI Engineer specializing in Machine Learning, Deep Learning, and intelligent solutions. 
              Transforming ideas into reality through cutting-edge artificial intelligence.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:mohamed.shaker@email.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="bg-muted p-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Machine Learning',
                'Deep Learning',
                'Computer Vision',
                'NLP Solutions',
                'AI Consulting',
                'Data Science'
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mahmoud Ashraf. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <span>Mahmoud Ashraf</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;