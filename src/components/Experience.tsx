
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Team Tech Solutions",
      role: "Data Analyst",
      duration: "June 2020 – June 2023",
      location: "Hyderabad, Telangana",
      achievements: [
        "Ingested and processed large volumes of healthcare data (Claims, Clinical, Eligibility) using Azure Data Factory and stored it in Azure Data Lake Storage Gen2.",
        "Developed scalable ETL pipelines in Databricks using PySpark, ensuring data was cleaned, standardized, and HIPAA-compliant.",
        "Migrated reporting workflows to Snowflake, reducing query execution time by 40 percent and improving data accessibility.",
        "Created advanced SQL queries and automated reporting pipelines, enabling performance and risk-based analytics for healthcare clients.",
        "Designed interactive Power BI dashboards to visualize quality metrics, utilization trends, and provider performance, cutting manual reporting time by 50 percent.",
        "Built a centralized Data Dictionary and standardized metrics to improve collaboration, data governance, and team efficiency."
      ],
      color: "from-blue-500 to-indigo-600"
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
            3 years of experience as a Data Analyst developing scalable data pipelines 
            and providing actionable intelligence for healthcare domain.
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
