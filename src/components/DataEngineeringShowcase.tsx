
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { Database, Cloud, Zap, TrendingUp, GitBranch, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataEngineeringShowcase = () => {
  // Pipeline Performance Data with light colors
  const pipelinePerformanceData = [
    { pipeline: "Healthcare ETL", before: 100, after: 40, improvement: 60 },
    { pipeline: "Supply Chain", before: 85, after: 47, improvement: 45 },
    { pipeline: "E-commerce", before: 90, after: 63, improvement: 30 },
    { pipeline: "Employee Analytics", before: 60, after: 42, improvement: 30 },
    { pipeline: "Spotify Pipeline", before: 120, after: 66, improvement: 45 }
  ];

  // Core Data Engineering Skills
  const coreSkillsData = [
    { skill: "ETL/ELT Design", proficiency: 95, experience: "4+ years" },
    { skill: "Cloud Architecture", proficiency: 92, experience: "3+ years" },
    { skill: "Data Modeling", proficiency: 90, experience: "4+ years" },
    { skill: "Performance Tuning", proficiency: 88, experience: "3+ years" },
    { skill: "Pipeline Orchestration", proficiency: 93, experience: "3+ years" },
    { skill: "Data Quality", proficiency: 91, experience: "4+ years" }
  ];

  // Data Processing Trends
  const processingTrendsData = [
    { month: "Jan", volume: 2.1, latency: 45 },
    { month: "Feb", volume: 2.3, latency: 42 },
    { month: "Mar", volume: 2.8, latency: 38 },
    { month: "Apr", volume: 3.2, latency: 35 },
    { month: "May", volume: 3.5, latency: 32 },
    { month: "Jun", volume: 3.8, latency: 28 },
    { month: "Jul", volume: 4.1, latency: 25 },
    { month: "Aug", volume: 4.3, latency: 22 },
    { month: "Sep", volume: 4.6, latency: 20 },
    { month: "Oct", volume: 4.8, latency: 18 },
    { month: "Nov", volume: 5.1, latency: 15 },
    { month: "Dec", volume: 5.4, latency: 12 }
  ];

  // Technology Stack Distribution
  const technologyStackData = [
    { category: "Cloud Platforms", technologies: ["Azure (ADF, Databricks, ADLS)", "AWS (S3, EC2, EMR)", "Snowflake"], count: 3 },
    { category: "Programming", technologies: ["Python", "PySpark", "SQL", "R"], count: 4 },
    { category: "Big Data", technologies: ["Apache Spark", "Hadoop", "Kafka", "Hive"], count: 4 },
    { category: "Orchestration", technologies: ["Apache Airflow", "Azure Data Factory"], count: 2 },
    { category: "Visualization", technologies: ["Power BI", "Tableau"], count: 2 },
    { category: "Databases", technologies: ["PostgreSQL", "MongoDB", "Oracle"], count: 3 }
  ];

  const chartConfig = {
    before: { label: "Before Optimization", color: "#93C5FD" },
    after: { label: "After Optimization", color: "#60A5FA" },
    volume: { label: "Data Volume (TB)", color: "#93C5FD" },
    latency: { label: "Processing Latency (min)", color: "#60A5FA" },
    proficiency: { label: "Proficiency Level", color: "#60A5FA" },
    count: { label: "Technology Count", color: "#93C5FD" }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Data Engineering Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Demonstrating expertise across the complete data engineering lifecycle with 
            proven performance improvements and scalable architecture design.
          </p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <Database className="mx-auto mb-3 text-blue-600" size={32} />
              <div className="text-3xl font-bold text-blue-700 mb-1">60%</div>
              <div className="text-blue-600 text-sm">Max Processing Time Reduction</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-100 border-indigo-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <Cloud className="mx-auto mb-3 text-indigo-600" size={32} />
              <div className="text-3xl font-bold text-indigo-700 mb-1">5.4TB</div>
              <div className="text-indigo-600 text-sm">Monthly Data Processing</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <TrendingUp className="mx-auto mb-3 text-purple-600" size={32} />
              <div className="text-3xl font-bold text-purple-700 mb-1">4+</div>
              <div className="text-purple-600 text-sm">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <Zap className="mx-auto mb-3 text-pink-600" size={32} />
              <div className="text-3xl font-bold text-pink-700 mb-1">18</div>
              <div className="text-pink-600 text-sm">Technologies Mastered</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pipeline Performance Improvements */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-slate-200">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-lg border-b border-blue-200">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <GitBranch className="text-blue-600" size={24} />
                Pipeline Performance Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80">
                <BarChart data={pipelinePerformanceData}>
                  <XAxis dataKey="pipeline" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="before" fill="#93C5FD" name="Before (minutes)" />
                  <Bar dataKey="after" fill="#60A5FA" name="After (minutes)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Core Skills Radar */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-slate-200">
            <CardHeader className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-t-lg border-b border-indigo-200">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Layers className="text-indigo-600" size={24} />
                Core Data Engineering Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80">
                <RadarChart data={coreSkillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Proficiency"
                    dataKey="proficiency"
                    stroke="#60A5FA"
                    fill="#93C5FD"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Data Processing Trends */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-slate-200">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-t-lg border-b border-purple-200">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <TrendingUp className="text-purple-600" size={24} />
                Data Processing Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80">
                <LineChart data={processingTrendsData}>
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#93C5FD" strokeWidth={3} name="Volume (TB)" />
                  <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#60A5FA" strokeWidth={3} name="Latency (min)" />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-slate-200">
            <CardHeader className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-t-lg border-b border-pink-200">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Database className="text-pink-600" size={24} />
                Technology Stack Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80">
                <BarChart data={technologyStackData} layout="horizontal">
                  <XAxis type="number" />
                  <YAxis dataKey="category" type="category" width={100} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="#93C5FD" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Technology Expertise Grid */}
        <Card className="shadow-xl border-slate-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-t-lg border-b border-slate-200">
            <CardTitle className="text-center text-2xl text-slate-800">
              Technology Expertise & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyStackData.map((stack, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-slate-800 mb-3 text-lg">{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="bg-white px-3 py-2 rounded-lg border border-blue-100 text-sm text-slate-700 shadow-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DataEngineeringShowcase;
