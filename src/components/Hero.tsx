
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf file to the public folder
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 pt-16 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-1/4 w-8 h-8 border-2 border-blue-400/40 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-16 w-6 h-6 border-2 border-purple-400/40 rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 right-12 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce"></div>
        <div className="absolute top-40 left-1/3 w-5 h-5 bg-purple-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-20 w-7 h-7 border border-cyan-400/40 rounded-full animate-pulse"></div>
        
        {/* Enhanced Dots Pattern */}
        <div className="absolute top-1/4 left-1/3">
          <div className="grid grid-cols-8 gap-3 opacity-20">
            {Array.from({ length: 32 }).map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" 
                style={{ animationDelay: `${i * 150}ms` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Animated Lines and Paths */}
        <div className="absolute top-0 left-1/2 w-px h-36 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent transform -translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-28 bg-gradient-to-t from-transparent via-purple-400/40 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/2 right-8 h-px w-32 bg-gradient-to-l from-transparent via-pink-400/40 to-transparent animate-pulse delay-3000"></div>
        
        {/* Enhanced Code-like elements */}
        <div className="absolute top-1/4 left-8 text-blue-400/30 font-mono text-sm leading-relaxed">
          <div className="animate-pulse">{'<DataAnalyst>'}</div>
          <div className="animate-pulse delay-500 ml-4">{'skills: ["Python", "SQL"]'}</div>
          <div className="animate-pulse delay-1000">{'</DataAnalyst>'}</div>
        </div>
        <div className="absolute bottom-1/4 right-8 text-purple-400/30 font-mono text-sm leading-relaxed">
          <div className="animate-pulse delay-1000">{'SELECT insights'}</div>
          <div className="animate-pulse delay-1500 ml-2">{'FROM data'}</div>
          <div className="animate-pulse delay-2000 ml-2">{'WHERE value > 0'}</div>
        </div>
        
        {/* Additional Creative Elements */}
        <div className="absolute top-16 left-20 w-16 h-16 border border-gradient-to-r from-blue-400/20 to-purple-400/20 rotate-12 animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 animate-fade-in relative z-10">
        {/* Content Section */}
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Teja Karu</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6 font-medium">
              Python SQL PySpark Data Analyst
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mb-8 mx-auto leading-relaxed">
              Experienced data analyst with 2+ years in developing scalable data pipelines. 
              Passionate about providing actionable intelligence to help grow businesses through 
              cloud-based platforms and advanced analytics.
            </p>
          </div>

          {/* Square Profile Image Section - Perfectly Centered */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Square container with gradient border */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  <img
                    src="/lovable-uploads/bc7ae849-11c8-4663-b449-8f4f99951bf5.png"
                    alt="Teja Karu"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Enhanced decorative elements around the image */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/4 -left-6 w-3 h-3 border-2 border-cyan-400/50 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute bottom-1/4 -right-6 w-4 h-4 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 rounded-full animate-bounce delay-2000"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border-2 border-gray-300/50 text-gray-200 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://github.com/teja-karu" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/karu-teja" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:tejakaru13@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-300 hover:text-white transition-colors duration-300" size={36} />
      </div>
    </section>
  );
};

export default Hero;
