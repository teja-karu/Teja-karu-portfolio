
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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-16 w-8 h-8 border border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 right-12 w-4 h-4 bg-blue-400/20 rotate-45 animate-bounce"></div>
        
        {/* Dots Pattern */}
        <div className="absolute top-1/4 left-1/3">
          <div className="grid grid-cols-6 gap-4 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
            ))}
          </div>
        </div>
        
        {/* Lines */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-purple-400/30 to-transparent"></div>
        
        {/* Code-like elements */}
        <div className="absolute top-1/4 left-8 text-blue-400/20 font-mono text-sm">
          <div className="animate-pulse">{'<data>'}</div>
          <div className="animate-pulse delay-500">{'</analysis>'}</div>
        </div>
        <div className="absolute bottom-1/4 right-8 text-purple-400/20 font-mono text-sm">
          <div className="animate-pulse delay-1000">{'SELECT *'}</div>
          <div className="animate-pulse delay-1500">{'FROM insights'}</div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 animate-fade-in relative z-10">
        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Teja Karu</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Python SQL PySpark Data Analyst
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              Experienced data analyst with 2+ years in developing scalable data pipelines. 
              Passionate about providing actionable intelligence to help grow businesses through 
              cloud-based platforms and advanced analytics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border-gray-400 text-gray-300 hover:bg-white/10 transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-start space-x-6 mb-12">
            <a href="https://github.com/teja-karu" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/karu-teja" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tejakaru13@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="/lovable-uploads/bc7ae849-11c8-4663-b449-8f4f99951bf5.png"
                  alt="Teja Karu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 border border-blue-400/30 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
