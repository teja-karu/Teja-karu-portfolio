
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful interfaces with attention to detail"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications for great UX"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 group"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-600 mb-4">
                Started as a curious student who loved solving puzzles, I've evolved into a 
                full-stack developer who enjoys building products that users love.
              </p>
              <p className="text-slate-600">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source, or planning my next adventure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Projects Completed</span>
                  <span className="font-semibold text-slate-900">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Happy Clients</span>
                  <span className="font-semibold text-slate-900">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Years Experience</span>
                  <span className="font-semibold text-slate-900">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Coffee Cups</span>
                  <span className="font-semibold text-slate-900">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
