
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Teja-karu-portfolio/resume.pdf';
    link.download = 'Teja_Karu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 pt-16 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated floating icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <Code className="w-8 h-8 text-slate-300 dark:text-slate-600 opacity-60" />
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <Database className="w-6 h-6 text-slate-300 dark:text-slate-600 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-16 animate-bounce delay-500">
          <Sparkles className="w-7 h-7 text-slate-300 dark:text-slate-600 opacity-60" />
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Dots pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        {/* Content Section */}
        <div className="text-center">
          {/* Content above picture */}
          <div className="mb-8 animate-fade-in">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
              4+ Years Experience | Azure & AWS | Healthcare & Enterprise Data Solutions
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Detail-oriented Data Engineer with over 4 years of experience delivering scalable data engineering solutions 
              in healthcare and enterprise domains. Specialized in developing robust ETL pipelines using Python, Oracle PL/SQL, 
              and PySpark across cloud platforms like Azure and AWS.
            </p>
          </div>

          {/* Square Profile Image Section with creative border */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img 
                  src="/Teja-karu-portfolio/lovable-uploads/bc7ae849-11c8-4663-b449-8f4f99951bf5.png" 
                  alt="Teja Karu - Data Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Name and Role under picture */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-2">
              Hi, I'm Teja Karu
            </h2>
            {/* Role prominence with creative background */}
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4 leading-tight relative z-10 hover:scale-105 transition-transform duration-300">
                Data Engineer
              </h1>
              {/* Creative background elements with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-blue-500/10 rounded-lg blur-sm -z-10 transform -rotate-1 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-slate-100/30 dark:via-slate-700/30 to-transparent rounded-lg -z-10 transform rotate-1"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-600 dark:hover:to-slate-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8 animate-fade-in">
            <a 
              href="https://github.com/teja-karu" 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-lg"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/karu-teja" 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-lg"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:tejakaru13@gmail.com" 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-lg"
            >
              <Mail size={28} />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="text-slate-500 dark:text-slate-400 text-sm animate-fade-in">
            <p>Chicago, Illinois 60616 | 312-774-5765</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300" size={36} />
      </div>
    </section>
  );
};

export default Hero;
