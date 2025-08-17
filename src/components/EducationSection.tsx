import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Science in Computer Science",
      institution: "Helwan University",
      year: "2019 - 2023",
      description: "Specialized in Computer Science with a strong foundation in algorithms, data structures, software engineering principles and Machine Learning Concepts .",
      gpa: "3.7/4.0"
    }
  ];

  const certifications = [
    {
      title: "Supervised machine learning: regression and classification",
      provider: "DeepLearning.AI (Coursera)",
    },
    {
      title: "Python : Master Programming and Development with 15 Projects",
      provider: "Udemy",
    },
    {
      title: "Deep Learning for Computer Vision",
      provider: "Stanford University",
    },
    {
      title: "Machine Learning Course",
      provider: "Stanford University",
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Education & Certifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-card p-8 rounded-xl hover-glow">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <edu.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-primary font-medium mb-2">
                      {edu.institution}
                    </p>
                    
                    <p className="text-muted-foreground text-sm mb-3">
                      {edu.year} • GPA: {edu.gpa}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Award className="w-8 h-8 text-accent mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-card p-6 rounded-xl hover-glow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/20 p-2 rounded-lg">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {cert.title}
                      </h4>
                      
                      <div className="flex justify-between items-center">
                        <p className="text-muted-foreground text-sm">
                          {cert.provider}
                        </p>
                        {/* <span className="text-primary text-sm font-medium">
                          {cert.year}
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;