
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Teja-karu-portfolio/resume.pdf'; // Updated path for GitHub Pages
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 px-4 pt-16 relative overflow-hidden">
      {/* Light Solar System Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars Background */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.4 + 0.1
              }}
            />
          ))}
        </div>

        {/* Sun - Central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-300 rounded-full animate-pulse shadow-lg">
            <div className="w-full h-full bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
          {/* Sun's glow */}
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-xl -translate-x-4 -translate-y-4 animate-pulse"></div>
        </div>

        {/* Orbital Paths */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Orbital rings with light colors */}
          <div className="w-32 h-32 border border-blue-200/40 rounded-full absolute -translate-x-16 -translate-y-16"></div>
          <div className="w-48 h-48 border border-indigo-200/40 rounded-full absolute -translate-x-24 -translate-y-24"></div>
          <div className="w-64 h-64 border border-purple-200/40 rounded-full absolute -translate-x-32 -translate-y-32"></div>
          <div className="w-80 h-80 border border-pink-200/40 rounded-full absolute -translate-x-40 -translate-y-40"></div>
        </div>

        {/* Planets with light colors */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 animate-spin" style={{ animationDuration: '15s' }}>
          <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 w-48 h-48 animate-spin" style={{ animationDuration: '25s' }}>
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 w-64 h-64 animate-spin" style={{ animationDuration: '35s' }}>
          <div className="w-4 h-4 bg-gradient-to-r from-blue-300 to-green-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 shadow-lg"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 animate-spin" style={{ animationDuration: '50s' }}>
          <div className="w-3 h-3 bg-gradient-to-r from-red-300 to-orange-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 animate-fade-in relative z-10">
        {/* Content Section */}
        <div className="text-center">
          {/* Square Profile Image Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 p-1 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  <img
                    src="/lovable-uploads/bc7ae849-11c8-4663-b449-8f4f99951bf5.png"
                    alt="Teja Karu - Data Analyst"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      console.log('Image failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              {/* Enhanced decorative elements with light colors */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/4 -left-6 w-3 h-3 border-2 border-cyan-300/70 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute bottom-1/4 -right-6 w-4 h-4 bg-gradient-to-r from-teal-300/50 to-emerald-300/50 rounded-full animate-bounce delay-2000"></div>
              
              {/* Glow effect with lighter colors */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-300/30 via-indigo-300/30 to-purple-300/30 blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Role under picture */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-2">
              Hi, I'm Teja Karu
            </h2>
            {/* Role prominence - larger and more visible */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 leading-tight">
              Python SQL PySpark Data Analyst
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
              2+ Years Experience | Azure & AWS | Healthcare Data Analytics
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mb-8 mx-auto leading-relaxed">
              Python SQL PySpark Data Analyst with 2+ years in developing scalable data pipelines. Experience with 
              cloud-based platforms (Azure Data Factory, Databricks, Snowflake) and solid skills in Power BI and Tableau in 
              terms of data visualization. Proficient in big data tools Hadoop, Spark, Kafka, and databases like PostgreSQL and 
              MongoDB. Passionate in providing actionable intelligence to help grow businesses.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border-2 border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://github.com/teja-karu" 
              className="text-slate-500 hover:text-blue-500 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-blue-50 backdrop-blur-sm"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/karu-teja" 
              className="text-slate-500 hover:text-blue-500 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-blue-50 backdrop-blur-sm"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:tejakaru13@gmail.com" 
              className="text-slate-500 hover:text-blue-500 transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-blue-50 backdrop-blur-sm"
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
