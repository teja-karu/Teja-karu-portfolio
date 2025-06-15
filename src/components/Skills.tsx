
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "PySpark", level: 85 },
        { name: "R", level: 75 },
        { name: "Bash", level: 80 }
      ]
    },
    {
      title: "Big Data & Cloud",
      skills: [
        { name: "Apache Spark", level: 90 },
        { name: "Hadoop", level: 85 },
        { name: "Azure Data Factory", level: 88 },
        { name: "Databricks", level: 85 },
        { name: "Snowflake", level: 82 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 88 },
        { name: "Kafka", level: 75 }
      ]
    }
  ];

  const technologies = [
    "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow",
    "HDFS", "Hive", "Airflow", "AWS S3", "Azure Data Lake", "Git", "Excel"
  ];

  return (
    <section className="py-20 px-4 bg-slate-50" style={{ perspective: '1000px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proficient in modern data analytics tools and cloud platforms. 
            Here are the technologies I work with to deliver scalable data solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-slate-200 cursor-pointer transition-all duration-500 transform-gpu hover:scale-110 hover:rotate-x-12 hover:rotate-y-6 hover:shadow-2xl hover:shadow-blue-500/20 hover:z-10 relative group"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                const rotateX = (mouseY / rect.height) * -20;
                const rotateY = (mouseX / rect.width) * 20;
                
                e.currentTarget.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                const rotateX = (mouseY / rect.height) * -20;
                const rotateY = (mouseX / rect.width) * 20;
                
                e.currentTarget.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg) translateZ(0px)';
              }}
            >
              {/* 3D Card Inner Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group-hover:transform group-hover:translateZ-10">
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm group-hover:text-blue-600 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-500 group-hover:to-purple-500 group-hover:shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500 pointer-events-none" />
              
              {/* 3D Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 transform-gpu cursor-pointer"
             style={{ transformStyle: 'preserve-3d' }}
             onMouseEnter={(e) => {
               e.currentTarget.style.transform = 'scale(1.05) rotateX(5deg) translateZ(20px)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.transform = 'scale(1) rotateX(0deg) translateZ(0px)';
             }}>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110 hover:shadow-lg transform-gpu cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) translateZ(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateZ(0px)';
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-600 max-w-2xl mx-auto">
              Continuously expanding my expertise in emerging data technologies and cloud platforms 
              to stay current with industry best practices and deliver innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
