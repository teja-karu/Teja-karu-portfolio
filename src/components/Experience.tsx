
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Innovaccer Inc.",
      role: "Data Engineer",
      duration: "September 2023 – December 2024",
      location: "California, United States",
      achievements: [
        "Designed and automated robust ETL pipelines using Azure Data Factory, ingesting large volumes of raw clinical and claims data (HL7, CCDA, EHR) into Azure Data Lake Storage Gen2 and transforming it into analytics-ready formats in Snowflake, reducing processing time by 60%.",
        "Engineered scalable batch data workflows on Databricks using PySpark to unify disparate healthcare datasets, enabling downstream analytics and regulatory reporting with improved efficiency and reliability.",
        "Developed custom data models and pipelines supporting quality measures, patient risk scoring, and utilization trends, directly powering client-facing Power BI dashboards used in population health management and care optimization.",
        "Orchestrated complex data workflows and dependencies with Apache Airflow, ensuring compliance with data refresh SLAs for payer and provider datasets.",
        "Built and optimized healthcare-specific dimensional models using SQL and PostgreSQL, performing validations and integrity checks to support accurate reporting and billing analytics.",
        "Partnered with clinical SMEs and analysts to curate a centralized data dictionary and reusable transformation logic, enhancing visibility and consistency across all data engineering workflows."
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      company: "Accenture",
      role: "Data Engineer",
      duration: "June 2020 – June 2023",
      location: "Hyderabad, Telangana",
      achievements: [
        "Developed and maintained scalable Oracle PL/SQL and Python-based applications for supply chain analytics, leveraging packages, procedures, functions, and hierarchical queries for complex data processing.",
        "Designed and optimized ETL workflows using Oracle PL/SQL and Python (Pandas), improving system efficiency and reducing query execution time by 45%.",
        "Performed advanced performance tuning using Oracle AWR reports, execution plans, and optimization hints to ensure high data availability and responsiveness.",
        "Automated routine tasks and data refresh workflows using Python scripts and pandas dataframes, streamlining support services and minimizing manual effort.",
        "Collaborated with cross-functional teams in a global delivery model, supporting 24/7 application uptime and adhering to on-call rotational shifts.",
        "Ensured compliance with change management protocols and handled high-priority incidents by proactively monitoring, debugging, and resolving issues within SLAs.",
        "Delivered clean, production-ready code while coordinating across onshore-offshore teams, driving system reliability and consistent data delivery."
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            4+ years of experience as a Data Engineer delivering scalable data engineering 
            solutions in healthcare and enterprise domains.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 shadow-lg border-slate-200">
              <CardHeader className={`bg-gradient-to-r ${exp.color} text-white rounded-t-lg`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-2xl mb-2">
                      <Building2 size={28} />
                      {exp.company}
                    </CardTitle>
                    <p className="text-blue-100 text-lg font-semibold">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-blue-100 mb-1">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-100">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-3 group/achievement">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <p className="text-slate-700 leading-relaxed group-hover/achievement:text-slate-900 transition-colors duration-200">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
