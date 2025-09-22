import { Monitor, Smartphone, Globe, Zap, Palette, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Custom React applications with modern JavaScript, TypeScript, and the latest frameworks. Focused on performance, accessibility, and user experience.",
      features: ["React & Next.js", "TypeScript", "Performance Optimization", "Responsive Design"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user-centered principles. From wireframes to high-fidelity prototypes and design systems.",
      features: ["User Research", "Figma Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "Complete web applications from database design to deployment. Building scalable, secure, and maintainable solutions for your business needs.",
      features: ["Node.js & Express", "Database Design", "API Development", "Cloud Deployment"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native. Native performance with shared codebase for iOS and Android platforms.",
      features: ["React Native", "Cross-Platform", "Native Performance", "App Store Deployment"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications with performance audits, code optimization, and implementation of best practices for Core Web Vitals.",
      features: ["Performance Audits", "Core Web Vitals", "Bundle Optimization", "SEO Improvements"]
    },
    {
      icon: Monitor,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance for your web applications. Security updates, feature enhancements, and technical support.",
      features: ["Security Updates", "Bug Fixes", "Feature Updates", "Technical Support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Can I <span className="gradient-text">Help?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I offer a comprehensive range of services to bring your digital vision to life. 
              From concept to deployment, I'll help you build something amazing.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover h-full bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;