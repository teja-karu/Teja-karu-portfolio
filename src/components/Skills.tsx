
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 88 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 88 }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm constantly learning and improving my skills. Here's what I'm currently 
            working with and what I'm passionate about.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
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
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Always Learning</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends, frameworks, and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI/ML", "Web3", "Rust", "Go", "Kubernetes"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm"
                >
                  Currently exploring {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
