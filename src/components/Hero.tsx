
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Database, Server, Zap, GitBranch, Cloud, BarChart3 } from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 px-4 pt-16 relative overflow-hidden">
      {/* Enhanced Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated floating tech icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <Code className="w-8 h-8 text-blue-400 dark:text-blue-500 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <Database className="w-6 h-6 text-green-400 dark:text-green-500 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute bottom-40 left-16 animate-bounce delay-500">
          <Server className="w-7 h-7 text-purple-400 dark:text-purple-500 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce delay-700">
          <Cloud className="w-6 h-6 text-indigo-400 dark:text-indigo-500 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-1000">
          <BarChart3 className="w-5 h-5 text-orange-400 dark:text-orange-500 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Data Flow Animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-2 bg-gradient-to-l from-transparent via-green-400 to-transparent opacity-30 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 animate-pulse delay-1000"></div>
        
        {/* Enhanced geometric shapes with glow effects */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse shadow-2xl shadow-blue-500/20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000 shadow-2xl shadow-green-500/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-400/15 to-pink-400/15 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent bg-[length:20px_20px] bg-repeat animate-pulse"></div>
        </div>
        
        {/* Enhanced dots pattern with different sizes */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-40 animate-pulse ${
                i % 3 === 0 ? 'w-2 h-2 bg-blue-300 dark:bg-blue-600' :
                i % 3 === 1 ? 'w-1 h-1 bg-green-300 dark:bg-green-600' :
                'w-1.5 h-1.5 bg-purple-300 dark:bg-purple-600'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating data connections */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
                left: `${Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pulse ${2 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        {/* Content Section */}
        <div className="text-center">
          {/* Enhanced content above picture with typing effect */}
          <div className="mb-8 animate-fade-in">
            <div className="relative mb-6">
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-4 font-bold tracking-wide">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  4+ Years Experience | Azure & AWS | Healthcare & Enterprise Data Solutions
                </span>
              </p>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-lg blur-sm animate-pulse"></div>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/30 dark:bg-slate-800/30 p-6 rounded-2xl border border-white/20 dark:border-slate-700/20 shadow-lg">
              Detail-oriented <span className="font-semibold text-blue-600 dark:text-blue-400">Data Engineer</span> with over 4 years of experience delivering scalable data engineering solutions 
              in <span className="font-semibold text-green-600 dark:text-green-400">healthcare</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">enterprise</span> domains. 
              Specialized in developing robust <span className="font-semibold text-indigo-600 dark:text-indigo-400">ETL pipelines</span> using Python, Oracle PL/SQL, 
              and PySpark across cloud platforms like Azure and AWS.
            </p>
          </div>

          {/* Enhanced Profile Image Section with multiple effects */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative group">
              {/* Multiple layered glow effects */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse delay-300"></div>
              
              {/* Main image container with enhanced effects */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                <img 
                  src="/Teja-karu-portfolio/lovable-uploads/bc7ae849-11c8-4663-b449-8f4f99951bf5.png" 
                  alt="Teja Karu - Data Engineer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                />
                
                {/* Overlay with tech icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                    <GitBranch className="w-6 h-6 text-green-400 animate-pulse delay-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Name and Role section */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-2">
              Hi, I'm <span className="font-bold text-blue-600 dark:text-blue-400">Teja Karu</span>
            </h2>
            
            {/* Enhanced role section with multiple creative effects */}
            <div className="relative mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text mb-4 leading-tight relative z-10 hover:scale-105 transition-transform duration-300 animate-pulse">
                Data Engineer
              </h1>
              
              {/* Multiple creative background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-indigo-500/20 rounded-2xl blur-sm -z-10 transform -rotate-1 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/20 dark:via-slate-700/20 to-transparent rounded-2xl -z-10 transform rotate-1"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-blue-200/30 dark:via-blue-800/30 to-transparent rounded-3xl -z-20 animate-pulse delay-500"></div>
            </div>
            
            {/* Tech specializations with icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Database, text: "ETL Pipelines", color: "text-blue-500" },
                { icon: Cloud, text: "Cloud Architecture", color: "text-green-500" },
                { icon: BarChart3, text: "Data Analytics", color: "text-purple-500" },
                { icon: Server, text: "Big Data", color: "text-indigo-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:scale-105 transition-transform duration-300">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced buttons with better animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-transparent hover:border-white/20"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View My Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 dark:hover:from-slate-800 dark:hover:to-indigo-900 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 backdrop-blur-sm"
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          {/* Enhanced social links with better hover effects */}
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in">
            {[
              { href: "https://github.com/teja-karu", icon: Github, color: "hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" },
              { href: "https://linkedin.com/in/karu-teja", icon: Linkedin, color: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20" },
              { href: "mailto:tejakaru13@gmail.com", icon: Mail, color: "hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className={`text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-125 transform p-4 rounded-full hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-white/20 dark:hover:border-slate-600/20 ${social.color}`}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
          
          {/* Enhanced Contact Info */}
          <div className="text-slate-500 dark:text-slate-400 text-sm animate-fade-in backdrop-blur-sm bg-white/20 dark:bg-slate-800/20 px-6 py-3 rounded-full border border-white/30 dark:border-slate-700/30 inline-block">
            <p className="flex items-center justify-center space-x-4">
              <span>📍 Chicago, Illinois 60616</span>
              <span>•</span>
              <span>📞 312-774-5765</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-full backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:scale-110 transition-transform duration-300">
          <ArrowDown className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
