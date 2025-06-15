
import { Calendar, MapPin, TrendingUp, Database, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Team Tech Solutions",
      location: "Remote",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading healthcare data analytics initiatives, developing scalable ETL pipelines, and creating impactful business intelligence solutions.",
      achievements: [
        "Architected data pipelines processing 500K+ healthcare records monthly",
        "Improved data processing efficiency by 40% through pipeline optimization",
        "Deployed 15+ automated reports and real-time dashboards",
        "Maintained 99.9% data accuracy across all pipeline processes"
      ],
      technologies: ["Python", "PySpark", "Azure Data Factory", "Databricks", "Power BI", "SQL"]
    },
    {
      title: "Junior Data Analyst",
      company: "Healthcare Analytics Corp",
      location: "Atlanta, GA",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Supported data analysis projects, built reporting solutions, and contributed to healthcare data processing workflows.",
      achievements: [
        "Developed automated reporting systems reducing manual work by 60%",
        "Collaborated on HIPAA-compliant data processing pipelines",
        "Created interactive dashboards for quality metrics tracking",
        "Supported migration of legacy reporting systems to cloud platforms"
      ],
      technologies: ["SQL", "Python", "Excel", "Tableau", "Azure", "Power BI"]
    }
  ];

  const education = {
    degree: "Master's in IT Administration",
    school: "Lindsey Wilson College",
    period: "2023 - Present",
    focus: "Data Architecture, Advanced Analytics, Cloud Computing",
    description: "Pursuing advanced knowledge in data management, cloud technologies, and business intelligence systems."
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey in data analytics, from junior analyst to leading complex healthcare data initiatives.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'} md:w-1/2`}>
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                    </div>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Award size={16} />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-600 text-sm flex items-start gap-2">
                          <TrendingUp size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Database size={16} />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Education</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h4 className="text-2xl font-bold text-white mb-2">{education.degree}</h4>
              <h5 className="text-xl text-blue-400 mb-4">{education.school}</h5>
              
              <div className="flex items-center justify-center gap-4 mb-4 text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span className="text-sm">{education.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{education.description}</p>
              
              <div className="bg-slate-700/50 p-4 rounded-xl">
                <h6 className="font-semibold text-white mb-2">Areas of Focus:</h6>
                <p className="text-blue-300">{education.focus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
