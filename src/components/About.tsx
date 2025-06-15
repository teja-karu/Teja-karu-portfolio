
import { Database, Cloud, BarChart3, Cog, Award, TrendingUp, Users, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building scalable ETL pipelines with Python, PySpark, and SQL"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Expert in Azure Data Factory, Databricks, Snowflake, and AWS"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating insights with Power BI and Tableau dashboards"
    },
    {
      icon: Cog,
      title: "Big Data Tools",
      description: "Proficient in Hadoop, Spark, Kafka, and modern data frameworks"
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      metric: "40%",
      description: "Improved data processing efficiency through optimized ETL pipelines"
    },
    {
      icon: Users,
      metric: "500K+",
      description: "Healthcare records processed and analyzed monthly"
    },
    {
      icon: Award,
      metric: "15+",
      description: "Automated reports and dashboards deployed in production"
    },
    {
      icon: CheckCircle,
      metric: "99.9%",
      description: "Data accuracy maintained across all pipeline processes"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Python SQL PySpark Data Analyst with 2+ years of experience developing scalable data pipelines. 
            I specialize in cloud-based platforms and have solid skills in data visualization, 
            passionate about turning data into actionable business intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-slate-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Key Achievements Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Key Achievements</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.metric}</div>
                <div className="text-gray-300 text-sm leading-tight">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Professional Stats Card */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Professional Overview</h4>
            <p className="text-slate-600">A comprehensive look at my experience and expertise</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">2+</div>
              <div className="text-slate-600 text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">5+</div>
              <div className="text-slate-600 text-sm font-medium">Cloud Platforms</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
              <div className="text-3xl font-bold text-indigo-600 mb-1">10+</div>
              <div className="text-slate-600 text-sm font-medium">Technologies Mastered</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
              <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
              <div className="text-slate-600 text-sm font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
