
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { Database, Cloud, BarChart3, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  // Enhanced skill categories with more data engineering focus
  const skillCategories = [
    {
      title: "Data Engineering & ETL",
      icon: Database,
      skills: [
        { name: "Apache Spark", level: 95, experience: "3+ years" },
        { name: "Apache Airflow", level: 90, experience: "2+ years" },
        { name: "Kafka", level: 85, experience: "2 years" },
        { name: "ETL/ELT Pipelines", level: 95, experience: "3+ years" },
        { name: "Data Modeling", level: 92, experience: "2+ years" }
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Cloud & Big Data",
      icon: Cloud,
      skills: [
        { name: "Azure Data Factory", level: 92, experience: "2+ years" },
        { name: "Databricks", level: 88, experience: "2 years" },
        { name: "Snowflake", level: 90, experience: "1+ years" },
        { name: "AWS S3", level: 85, experience: "2 years" },
        { name: "Azure Data Lake", level: 88, experience: "2+ years" }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Programming & Analytics",
      icon: Cpu,
      skills: [
        { name: "Python", level: 96, experience: "3+ years" },
        { name: "PySpark", level: 94, experience: "2+ years" },
        { name: "SQL", level: 95, experience: "3+ years" },
        { name: "R", level: 80, experience: "1+ years" },
        { name: "Scala", level: 75, experience: "1 year" }
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Visualization & BI",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 94, experience: "2+ years" },
        { name: "Tableau", level: 88, experience: "1+ years" },
        { name: "Looker", level: 82, experience: "1 year" },
        { name: "D3.js", level: 78, experience: "1 year" },
        { name: "Matplotlib/Seaborn", level: 90, experience: "2+ years" }
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  // Technology proficiency distribution
  const techProficiencyData = [
    { category: "Expert (90-100%)", count: 8, color: "#10B981" },
    { category: "Advanced (80-89%)", count: 7, color: "#3B82F6" },
    { category: "Intermediate (70-79%)", count: 5, color: "#F59E0B" },
    { category: "Learning (60-69%)", count: 3, color: "#EF4444" }
  ];

  const chartConfig = {
    count: { label: "Number of Technologies", color: "#10B981" }
  };

  const technologies = [
    "NumPy", "Pandas", "Dask", "Polars", "FastAPI", "Docker", "Kubernetes", 
    "Terraform", "Jenkins", "Git", "HDFS", "Hive", "Presto", "ClickHouse",
    "Redis", "Elasticsearch", "Grafana", "Prometheus", "Apache Beam"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical Expertise & Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Comprehensive skill set spanning the entire data engineering lifecycle, 
            from ingestion and processing to analytics and visualization.
          </p>
        </div>

        {/* Skills Overview Chart */}
        <div className="flex justify-center mb-16">
          {/* Technology Proficiency Distribution */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="text-green-600" size={24} />
                Technology Proficiency Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <PieChart>
                  <Pie
                    data={techProficiencyData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ category, count }) => `${category}: ${count}`}
                  >
                    {techProficiencyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Detailed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl">
              <CardHeader className={`bg-gradient-to-r ${category.color} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <category.icon size={20} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium text-sm">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 text-xs">
                            {skill.experience}
                          </span>
                          <span className="text-blue-600 text-sm font-bold">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-2.5 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Technologies Section */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-500">
          <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-t-lg">
            <CardTitle className="text-center text-xl">
              Additional Technologies & Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium border border-slate-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110 hover:shadow-lg transform cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-center">
              <p className="text-slate-600 max-w-3xl mx-auto">
                Continuously expanding expertise across the data engineering ecosystem, 
                staying current with emerging technologies and industry best practices 
                to deliver innovative, scalable solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
