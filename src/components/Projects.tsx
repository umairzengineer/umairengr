import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMobile from "@/assets/project-mobile.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard built with React and D3.js, featuring real-time data visualization, custom charts, and advanced filtering capabilities.",
      image: projectDashboard,
      tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://dashboard-demo.com",
      githubUrl: "https://github.com/username/dashboard"
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced product filtering, payment integration, and admin panel. Features include inventory management and order tracking.",
      image: projectEcommerce,
      tech: ["Next.js", "Stripe", "Prisma", "TailwindCSS", "Vercel"],
      liveUrl: "https://shop-demo.com",
      githubUrl: "https://github.com/username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Mobile-first task management application with drag-and-drop functionality, team collaboration features, and real-time synchronization across devices.",
      image: projectMobile,
      tech: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      liveUrl: "https://tasks-demo.com",
      githubUrl: "https://github.com/username/tasks"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stuff I've <span className="gradient-text">Built</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my favorite projects that showcase my skills in development 
              and design. Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project image */}
                  <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  </div>

                  {/* Project content */}
                  <div className={`flex flex-col justify-center p-6 lg:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project links */}
                      <div className="flex gap-4">
                        <Button 
                          asChild 
                          className="btn-hero"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          asChild 
                          variant="outline" 
                          className="btn-outline-glow"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;