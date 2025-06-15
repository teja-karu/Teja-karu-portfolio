
import { Database, Cloud, BarChart3, Cog } from "lucide-react";

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
        
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-600 mb-4">
                Currently pursuing my Masters in Computer/Information Technology Administration 
                and Management at Lindsey Wilson College. My journey in data analytics has been 
                driven by a passion for transforming complex data into meaningful insights.
              </p>
              <p className="text-slate-600">
                At Team Tech Solutions, I've had the opportunity to work with large volumes of 
                healthcare data, develop scalable ETL pipelines, and create impactful dashboards 
                that drive business decisions.
              </p>
            </div>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Professional Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Years Experience</span>
                  <span className="font-semibold text-slate-900">2+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Data Platforms</span>
                  <span className="font-semibold text-slate-900">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Current Role</span>
                  <span className="font-semibold text-slate-900">Data Analyst</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Location</span>
                  <span className="font-semibold text-slate-900">Chicago, IL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
