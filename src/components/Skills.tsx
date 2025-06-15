
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
    <section className="py-20 px-4 bg-slate-50">
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
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
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
