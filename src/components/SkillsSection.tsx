import { 
  Brain, 
  Database, 
  Code, 
  BarChart3, 
  Eye, 
  MessageSquare, 
  Cpu, 
  Zap,
  GitBranch,
  Cloud,
  Terminal,
  TrendingUp,
  Layers,
  Activity,
  Server,
  BarChart,
  FileCode,
  Globe,
  Languages,
  Package,
  Workflow,
  FlaskConical,
  Box,
  LucideSquareDivide,
  BrainCircuitIcon,
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning", icon: Activity, level: 92 },
        { name: "Deep Learning", icon: BrainCircuitIcon, level: 92 },
        { name: "Computer Vision", icon: Eye, level: 88 },
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: Code, level: 95 },
        { name: "Java", icon: Code, level: 90 },
        { name: "PHP", icon: FileCode, level: 88 },
        { name: "SQL", icon: Database, level: 92 },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "TensorFlow", icon: Brain, level: 95 },
        { name: "PyTorch", icon: Zap, level: 90 },
        { name: "Scikit-learn", icon: BarChart3, level: 93 },
      ]
    },
    {
      title: "MLOps",
      skills: [
        { name: "Deployment", icon: Server, level: 85 },
        { name: "Docker", icon: Cloud, level: 88 },
        { name: "API Integration", icon: LucideSquareDivide, level: 87 },
        { name: "Data Pipelines (basic)", icon: Workflow, level: 75 },
      ]
    },
    {
      title: "Visualization",
      skills: [
        { name: "Power BI", icon: BarChart, level: 85 },
        { name: "Pandas", icon: Database, level: 95 },
        { name: "NumPy", icon: BarChart3, level: 92 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: GitBranch, level: 92 },
        { name: "FastAPI", icon: FlaskConical, level: 85 },
        { name: "Postman", icon: Box, level: 82 },
        { name: "Selenium", icon: Globe, level: 80 },
      ]
    },
    // {
    //   title: "Data & Analytics",
    //   skills: [
    //     { name: "Data Analysis", icon: TrendingUp, level: 93 },
    //     { name: "Jupyter", icon: Terminal, level: 90 },
    //   ]
    // },
    {
      title: "Languages",
      skills: [
        { name: "Arabic", icon: Languages, level: 100 },
        { name: "English", icon: Languages, level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-gradient-hero">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-gradient-card p-8 rounded-xl hover-glow shadow-xl transition-transform transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center border-b border-primary/30 pb-3">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/20 p-2 rounded-lg">
                          <skill.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* <span className="text-primary font-semibold">
                        {skill.level}%
                      </span> */}
                    </div>
                    
                    {/* <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
