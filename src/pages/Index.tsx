import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Code, Bot, Zap, Database, MoveRight, Laptop, Smartphone, Brain } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      title: "Full-Stack Engineering",
      description: "We design and build robust web and mobile apps using modern frameworks like React, Next.js, Django, and FastAPI.",
      icon: <Code size={24} />,
      imageSrc: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      link: "/services#fullstack"
    },
    {
      title: "AI Integration",
      description: "We integrate GPT, LangChain, and other AI models into your products to enhance UX, automate tasks, and drive user value.",
      icon: <Bot size={24} />,
      imageSrc: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      link: "/services#ai"
    },
    {
      title: "MVP Development",
      description: "We help startups rapidly go from idea to working prototype and iterate toward product–market fit.",
      icon: <Zap size={24} />,
      imageSrc: "/lovable-uploads/03e83f18-76a1-4349-a197-dbde03a93343.png",
      link: "/services#mvp"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">What We Do</h2>
              <p className="text-gray-400 max-w-2xl">
                We're not just coders — we're technical partners that help founders and teams launch scalable, AI-powered products quickly and reliably.
              </p>
            </div>
            <Link 
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors"
            >
              View all services
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Work With Us Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Why Work With Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built by engineers, not a digital agency. We act as an embedded team focused on real product outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Built by Engineers", icon: <Code size={32} />, description: "Not a digital agency" },
              { name: "AI-Native", icon: <Brain size={32} />, description: "We use AI to speed up workflows" },
              { name: "Fast Cycles", icon: <Zap size={32} />, description: "Clear deliverables, tight collaboration" },
              { name: "Embedded Team", icon: <Laptop size={32} />, description: "Not a one-off vendor" },
              { name: "Startup Focused", icon: <Smartphone size={32} />, description: "Early-stage and real outcomes" },
              { name: "Full-Stack", icon: <Database size={32} />, description: "End-to-end product development" }
            ].map((item, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="mailto:hello@vtxlabs.io"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Start Your Project
              <MoveRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Together</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you're validating a new idea or scaling a v1 product, we help you move faster with full-stack AI engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@vtxlabs.io"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Email Us
                <MoveRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/services"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
