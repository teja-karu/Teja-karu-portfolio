
import { ArrowDown, Github, Linkedin, Mail, Database, Cloud, GitBranch, BarChart3, Server, Workflow } from "lucide-react";
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
      {/* Data Engineering Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Data Flow Icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <Database className="w-8 h-8 text-blue-400 dark:text-blue-300 opacity-60" />
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <Cloud className="w-7 h-7 text-indigo-400 dark:text-indigo-300 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-16 animate-bounce delay-500">
          <GitBranch className="w-6 h-6 text-green-400 dark:text-green-300 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-bounce delay-700">
          <BarChart3 className="w-8 h-8 text-purple-400 dark:text-purple-300 opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-20 animate-bounce delay-900">
          <Server className="w-7 h-7 text-teal-400 dark:text-teal-300 opacity-60" />
        </div>
        <div className="absolute top-2/3 left-1/4 animate-bounce delay-1100">
          <Workflow className="w-6 h-6 text-orange-400 dark:text-orange-300 opacity-60" />
        </div>
        
        {/* Data Pipeline Visualization */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 dark:from-green-600/20 dark:to-blue-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Network Pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Connecting Lines for Data Flow */}
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M200,400 Q400,300 600,400 T1000,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        {/* Content Section */}
        <div className="text-center">
          {/* Data Engineering Expertise Badge */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
              <Database className="w-5 h-5" />
              <span className="font-semibold">Data Engineering Specialist</span>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4 font-medium">
              Building Scalable Data Pipelines | Cloud-Native ETL Solutions | 4+ Years Experience
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Transforming raw data into actionable insights through robust ETL pipelines, cloud data architectures, 
              and real-time analytics solutions. Specialized in Azure, AWS, Python, and modern data stack technologies.
            </p>
          </div>

          {/* Profile Image with Data-themed Border */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative group">
              {/* Animated Data Flow Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-50 animate-spin animate-slow"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-700 dark:to-slate-600">
                <img 
                  src="/lovable-uploads/bc7ae849-11c8-4663-b449-8f4f99951bf5.png" 
                  alt="Teja Karu - Data Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Data Flow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Name and Role with Data Engineering Theme */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-2">
              Hi, I'm Teja Karu
            </h2>
            
            <div className="relative mb-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-tight relative z-10 hover:scale-105 transition-transform duration-300">
                Data Engineer
              </h1>
              
              {/* Tech Stack Indicators */}
              <div className="flex justify-center gap-4 mt-4 mb-6">
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-lg">
                  <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">Azure & AWS</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-lg">
                  <GitBranch className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-green-700 dark:text-green-300 font-medium">ETL Pipelines</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-purple-700 dark:text-purple-300 font-medium">Big Data</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons with Data Engineering Theme */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-700 dark:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Database className="w-5 h-5 mr-2" />
              View Data Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
            >
              <Server className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links with Data Theme */}
          <div className="flex justify-center space-x-8 mb-8 animate-fade-in">
            <a 
              href="https://github.com/teja-karu" 
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-lg"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/karu-teja" 
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-lg"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:tejakaru13@gmail.com" 
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-lg"
            >
              <Mail size={28} />
            </a>
          </div>
          
          {/* Contact Info with Data Engineering Context */}
          <div className="text-slate-500 dark:text-slate-400 text-sm animate-fade-in">
            <p className="flex items-center justify-center gap-2">
              <span>Chicago, Illinois 60616 | 312-774-5765</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <Workflow className="w-4 h-4" />
                Available for Data Engineering Opportunities
              </span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator with Data Flow Theme */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <ArrowDown className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300" size={36} />
          <div className="text-xs text-blue-500 dark:text-blue-400 mt-1">Explore Data Solutions</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
