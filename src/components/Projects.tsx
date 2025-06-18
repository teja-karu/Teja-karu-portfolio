
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Building Spotify Data Pipeline",
      description: "Built a scalable pipeline to extract data from Spotify API, transform using AWS services, and load into Snowflake for analytics and Power BI reporting. Created an Airflow DAG to manage data extraction and log metrics into AWS CloudWatch. Transformed data with AWS Lambda and Apache Spark (PySpark), improving processing speed by 40%.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
      tags: ["Airflow", "Apache Spark", "Amazon S3", "Snowflake", "Power BI", "AWS Lambda", "PySpark"],
      date: "May 2023",
      achievements: [
        "Reduced ETL processing time by 45%",
        "Enhanced reporting efficiency by 55%",
        "Improved processing speed by 40%"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Data Pipeline using Databricks",
      description: "Developed an end-to-end data pipeline to ingest raw data into Azure Data Lake Storage, transform it using Apache Spark on Databricks, and create interactive dashboards in Power BI. Set up automated mechanisms to upload raw data files and used Apache Spark on Databricks to clean, join, and structure the raw data for analysis.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["Azure Data Lake", "Apache Spark", "Power BI", "PySpark", "Databricks"],
      date: "August 2024",
      achievements: [
        "Achieved 30% faster data processing",
        "Enabled better insights into e-commerce trends",
        "Automated data ingestion mechanism"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Employee Performance Analysis",
      description: "Developed a streamlined system to extract, clean, analyze, and visualize employee performance data to help HR and management make data-driven decisions. Extracted performance data from internal HR system using SQL and cleaned the data using Python scripts. Created interactive Power BI dashboards to visualize employee KPIs and performance metrics.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      tags: ["SQL", "Power BI", "Python", "HTML", "Data Analysis"],
      date: "February 2025",
      achievements: [
        "Reduced manual reporting time by 30%",
        "Improved speed and accuracy of performance evaluations",
        "Created interactive KPI dashboards"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Key data engineering and analytics projects showcasing expertise in building 
            scalable data pipelines and delivering actionable business insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-slate-200 bg-white shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-sm font-medium text-slate-700 shadow-lg">
                  <Calendar size={14} className="inline mr-1" />
                  {project.date}
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-slate-800 mb-3">{project.title}</CardTitle>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-slate-600 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs rounded-full border border-blue-200/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 border-slate-300 text-slate-600 hover:bg-slate-50 text-xs">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 border-slate-300 text-slate-600 hover:bg-slate-50 text-xs">
                    <Github size={14} />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-slate-300 text-slate-600 hover:bg-slate-50 transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
