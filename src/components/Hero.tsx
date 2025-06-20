
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 px-4 pt-16 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple dots pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        {/* Content Section */}
        <div className="text-center">
          {/* Content above picture */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
              4+ Years Experience | Azure & AWS | Healthcare & Enterprise Data Solutions
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Detail-oriented Data Engineer with over 4 years of experience delivering scalable data engineering solutions 
              in healthcare and enterprise domains. Specialized in developing robust ETL pipelines using Python, Oracle PL/SQL, 
              and PySpark across cloud platforms like Azure and AWS.
            </p>
          </div>

          {/* Square Profile Image Section - Using a placeholder */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-slate-300 shadow-xl bg-slate-100 flex items-center justify-center">
                <div className="text-slate-400 text-center">
                  <div className="w-20 h-20 bg-slate-300 rounded-full mx-auto mb-4"></div>
                  <p className="text-lg font-medium">Teja Karu</p>
                  <p className="text-sm">Data Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Name and Role under picture */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-2">
              Hi, I'm Teja Karu
            </h2>
            {/* Role prominence - larger and more impressive */}
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 leading-tight relative z-10">
                Data Engineer
              </h1>
              {/* Creative background elements with subtle colors */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200/20 via-slate-300/20 to-slate-200/20 rounded-lg blur-sm -z-10 transform -rotate-1"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-slate-100/30 to-transparent rounded-lg -z-10 transform rotate-1"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('experience')}
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border-2 border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://github.com/teja-karu" 
              className="text-slate-500 hover:text-slate-700 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-slate-100"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/karu-teja" 
              className="text-slate-500 hover:text-slate-700 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-slate-100"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:tejakaru13@gmail.com" 
              className="text-slate-500 hover:text-slate-700 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-slate-100"
            >
              <Mail size={28} />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="text-slate-500 text-sm">
            <p>Chicago, Illinois 60616 | 312-774-5765</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400 hover:text-slate-600 transition-colors duration-300" size={36} />
      </div>
    </section>
  );
};

export default Hero;
