import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl hero-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl hero-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          
          {/* Job title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Freelance Developer & Designer
          </p>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 font-light">
            From Visual Concepts to Functional Code
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft beautiful, high-performance web applications that seamlessly blend stunning design 
            with robust functionality. Specializing in React, TypeScript, and modern development practices, 
            I help businesses bring their digital visions to life.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')} 
              className="btn-hero px-8 py-6 text-lg rounded-xl"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              className="btn-outline-glow px-8 py-6 text-lg rounded-xl"
            >
              Let's Talk
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;