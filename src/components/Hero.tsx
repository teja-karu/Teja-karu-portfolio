
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-black px-4 pt-16 relative overflow-hidden">
      {/* Solar System Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars Background */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>

        {/* Sun - Central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-pulse shadow-2xl">
            <div className="w-full h-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
          {/* Sun's glow */}
          <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-xl -translate-x-4 -translate-y-4 animate-pulse"></div>
        </div>

        {/* Orbital Paths */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Mercury Orbit */}
          <div className="w-32 h-32 border border-gray-400/20 rounded-full absolute -translate-x-16 -translate-y-16"></div>
          {/* Venus Orbit */}
          <div className="w-48 h-48 border border-gray-400/20 rounded-full absolute -translate-x-24 -translate-y-24"></div>
          {/* Earth Orbit */}
          <div className="w-64 h-64 border border-gray-400/20 rounded-full absolute -translate-x-32 -translate-y-32"></div>
          {/* Mars Orbit */}
          <div className="w-80 h-80 border border-gray-400/20 rounded-full absolute -translate-x-40 -translate-y-40"></div>
          {/* Jupiter Orbit */}
          <div className="w-96 h-96 border border-gray-400/20 rounded-full absolute -translate-x-48 -translate-y-48"></div>
        </div>

        {/* Planets */}
        {/* Mercury */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 animate-spin" style={{ animationDuration: '15s' }}>
          <div className="w-2 h-2 bg-gray-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"></div>
        </div>

        {/* Venus */}
        <div className="absolute top-1/2 left-1/2 w-48 h-48 animate-spin" style={{ animationDuration: '25s' }}>
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5"></div>
        </div>

        {/* Earth */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 animate-spin" style={{ animationDuration: '35s' }}>
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 shadow-lg"></div>
        </div>

        {/* Mars */}
        <div className="absolute top-1/2 left-1/2 w-80 h-80 animate-spin" style={{ animationDuration: '50s' }}>
          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5"></div>
        </div>

        {/* Jupiter */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 animate-spin" style={{ animationDuration: '70s' }}>
          <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-600 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 shadow-xl"></div>
        </div>

        {/* Additional Space Elements */}
        <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/4 w-4 h-4 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-sm animate-pulse delay-2000"></div>

        {/* Shooting Stars */}
        <div className="absolute top-1/4 left-10 w-1 h-20 bg-gradient-to-b from-white to-transparent opacity-60 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-16 bg-gradient-to-b from-blue-300 to-transparent opacity-50 rotate-12 animate-pulse delay-3000"></div>
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
