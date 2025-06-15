
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Data Pipeline",
      description: "Built a scalable pipeline to extract data from Spotify API, transform using AWS services, and load into Snowflake for analytics and Power BI reporting. Implemented Airflow DAG for automated data extraction and enhanced reporting efficiency by 55%.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
      tags: ["Airflow", "Apache Spark", "Amazon S3", "Snowflake", "Power BI"],
      date: "August 2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Data Pipeline",
      description: "Developed an end-to-end data pipeline to ingest raw data into Azure Data Lake Storage, transform using Apache Spark on Databricks, and create interactive Power BI dashboards. Achieved 30% faster data processing through optimized Apache Spark implementation.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["Azure Data Lake", "Apache Spark", "Power BI", "PySpark", "Databricks"],
      date: "February 2025",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Data Analytics Platform",
      description: "Ingested and processed large volumes of healthcare data using Azure Data Factory. Developed scalable ETL pipelines in Databricks with PySpark, ensuring HIPAA compliance. Created advanced Power BI dashboards for quality metrics and performance analytics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      tags: ["Azure Data Factory", "Databricks", "PySpark", "Power BI", "Healthcare"],
      date: "2020-2023",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Snowflake Data Migration",
      description: "Migrated reporting workflows from traditional systems to Snowflake, reducing query execution time by 40% and improving data accessibility. Built centralized Data Dictionary and standardized metrics for improved collaboration and data governance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Snowflake", "SQL", "Data Migration", "Performance Optimization"],
      date: "2022-2023",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some key data engineering and analytics projects that showcase my experience 
            in building scalable data pipelines and delivering actionable business insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                  {project.date}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-500 text-gray-300 hover:bg-white/10 text-xs">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-500 text-gray-300 hover:bg-white/10 text-xs">
                    <Github size={14} />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-gray-400 text-gray-300 hover:bg-white/10 transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
