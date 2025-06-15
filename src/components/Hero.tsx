
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Teja Karu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Python SQL PySpark Data Analyst
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Experienced data analyst with 2+ years in developing scalable data pipelines. 
            Passionate about providing actionable intelligence to help grow businesses through 
            cloud-based platforms and advanced analytics.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
        
        <div className="flex justify-center space-x-6 mb-12">
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
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
