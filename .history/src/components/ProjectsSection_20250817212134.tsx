import { Github, ExternalLink } from 'lucide-react';
import image1 from "../../public//images/laravi.jpg"
import image2 from "../../public//images/signs.jpg"
import image3 from "../../public//images/go.jpg"

const ProjectsSection = () => {
  const projects = [
    {
      title: "LRAVI App",
      description:
        "AI-powered mobile app for voice-impaired individuals. Converts lip movements into spoken or text output with high accuracy. Deployed with FastAPI.",
      image:image1,
      technologies: [
        "ResNet-18",
        "CTC-Transformer",
        "wav2vec",
        "TensorFlow",
        "FastAPI",
      ],
      github: "https://github.com/Megamind22/lstArab100words",
      live: "#",
      featured: true,
      metrics: {
        dataset: "~25K Arabic videos",
        models: "CNN + Transformer",
        deploy: "FastAPI",
      },
    },
    {
      title: "Signs Recognition",
      description:
        "Implemented ANN and SVM for sign image classification. Compared models on testing data with Loss curve, Accuracy, Confusion Matrix, and ROC curve visualizations.",
      image:image1,
      technologies: ["Python", "Scikit-learn", "TensorFlow"],
      github: "https://github.com/Megamind22/ML-Models",
      live: "#",
      featured: false,
      metrics: {
        models: "ANN & SVM",
        evaluation: "Loss/Acc/ROC/Confusion",
        framework: "Sk-learn",
      },
    },
    {
      title: "AI GO Game",
      description:
        "An AI-powered implementation of the strategic board game Go. Built using search algorithms and reinforcement learning concepts.",
      image:image3,
      technologies: ["Python", "AI Search", "Reinforcement Learning"],
      github: "https://github.com/Megamind22/Ai-GoGamePlayer",
      live: "#",
      featured: true,
      metrics: {
        type: "Strategy Game",
        AI: "Search + RL",
        status: "Prototype",
      },
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Featured Projects
        </h2>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-card rounded-xl overflow-hidden hover-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>

                    {/* <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-xl overflow-hidden hover-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-semibold text-primary">{value}</div>
                        <div className="text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-muted-foreground text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      style={{ display:"flex",alignItems:"center",gap:"10px" }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>

                    {/* <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
