import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Automation Test Engineer",
      company: "ZData",
      period: "Nov 2023",
      type: "Full-time",
      responsibilities: [
        "Worked in Agile methodology environment",
        "Automated Web UI testing using Selenium",
        "Performed API testing using Postman",
      ],
      technologies: ["Selenium", "Postman", "Agile"]
    },
    {
      title: "Machine Learning Intern",
      company: "CodeAlpha",
      period: "May 2024",
      type: "Internship",
      responsibilities: [
        "Developed NLP projects using TensorFlow & PyTorch",
        "Implemented text preprocessing and deep learning models",
      ],
      technologies: ["TensorFlow", "PyTorch", "NLP"]
    },
    {
      title: "AI Trainer",
      company: "Outlier",
      period: "Sep 2024",
      type: "Contract",
      responsibilities: [
        "Trained AI models to provide better and context-aware responses",
        "Improved conversational AI datasets and evaluation metrics",
      ],
      technologies: ["AI Training", "Data Labeling", "LLMs"]
    },
    {
      title: "Teaching Assistant",
      company: "Ain Shams University",
      period: "Mar 2025",
      type: "Part-time",
      responsibilities: [
        "Assisted in teaching computer science and AI-related courses",
        "Guided students in labs and project-based learning",
      ],
      technologies: ["Python", "Machine Learning", "Teaching"]
    },
    {
      title: "AI & Data Science Trainee",
      company: "DEPI",
      period: "Jun 2025",
      type: "Training Program",
      responsibilities: [
        "Hands-on training in AI and Data Science",
        "Worked on supervised & unsupervised learning projects",
        "Collaborated with peers on real-world case studies",
      ],
      technologies: ["Python", "Data Science", "Machine Learning"]
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-card p-8 rounded-xl hover-glow shadow-lg transition-transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    
                    <p className="text-primary font-medium text-lg mb-3">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-muted-foreground text-sm">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
