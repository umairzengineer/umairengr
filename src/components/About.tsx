import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "React, TypeScript, Node.js, Next.js, Python"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX Design, Figma, Adobe Creative Suite"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "SEO Optimization, Core Web Vitals, Accessibility"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Agile Development, Team Leadership, Client Relations"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 6 years of experience in web development and design, I'm passionate about 
              creating digital experiences that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Building the web, one pixel at a time
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer and designer based in San Francisco, with a deep passion for 
                  creating meaningful digital experiences. My journey began with a simple curiosity about 
                  how websites work, and it has evolved into a career dedicated to crafting elegant solutions 
                  to complex problems.
                </p>
                
                <p>
                  I believe that great software is not just functional—it's beautiful, intuitive, and 
                  accessible to everyone. Whether I'm designing a user interface or architecting a backend 
                  system, I approach every project with attention to detail and a commitment to excellence.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                  projects, or hiking the beautiful trails around the Bay Area. I'm always excited to take on 
                  new challenges and collaborate with teams who share my passion for innovation.
                </p>
              </div>
            </div>

            {/* Right column - Skills grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="card-hover bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{skill.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;