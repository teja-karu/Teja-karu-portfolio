
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Database, GitBranch, Zap, BarChart3, PieChart as PieChartIcon, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataEngineeringShowcase = () => {
  // Data Engineering Pipeline Performance Metrics
  const pipelineMetrics = [
    { name: "Data Ingestion", throughput: 95, latency: 85, reliability: 98 },
    { name: "Data Transformation", throughput: 88, latency: 92, reliability: 96 },
    { name: "Data Loading", throughput: 92, latency: 88, reliability: 99 },
    { name: "Data Quality", throughput: 96, latency: 90, reliability: 97 }
  ];

  // Technology Stack Distribution
  const techStackData = [
    { name: "Cloud Platforms", value: 30, color: "#3B82F6" },
    { name: "Big Data Tools", value: 25, color: "#8B5CF6" },
    { name: "Databases", value: 20, color: "#10B981" },
    { name: "Programming", value: 15, color: "#F59E0B" },
    { name: "Visualization", value: 10, color: "#EF4444" }
  ];

  // Data Volume Processing Over Time
  const dataVolumeData = [
    { month: "Jan", volume: 1.2, quality: 95 },
    { month: "Feb", volume: 1.8, quality: 96 },
    { month: "Mar", volume: 2.4, quality: 94 },
    { month: "Apr", volume: 3.1, quality: 97 },
    { month: "May", volume: 3.8, quality: 98 },
    { month: "Jun", volume: 4.5, quality: 96 }
  ];

  // Skills Radar Chart Data
  const skillsRadarData = [
    { skill: "Data Modeling", level: 95 },
    { skill: "ETL/ELT", level: 90 },
    { skill: "Cloud Architecture", level: 88 },
    { skill: "Big Data", level: 85 },
    { skill: "Data Visualization", level: 92 },
    { skill: "Database Design", level: 90 }
  ];

  const chartConfig = {
    throughput: { label: "Throughput", color: "#3B82F6" },
    latency: { label: "Latency", color: "#8B5CF6" },
    reliability: { label: "Reliability", color: "#10B981" },
    volume: { label: "Data Volume (TB)", color: "#3B82F6" },
    quality: { label: "Data Quality (%)", color: "#10B981" },
    level: { label: "Skill Level", color: "#8B5CF6" }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Data Engineering Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Demonstrating expertise in data pipeline optimization, dimensional modeling, 
            and enterprise-scale data processing with measurable business impact.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Database size={18} />
                Data Processed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">847 TB</div>
              <p className="text-blue-100 text-sm">Monthly Average</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap size={18} />
                Pipeline Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">97.3%</div>
              <p className="text-purple-100 text-sm">SLA Compliance</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp size={18} />
                Cost Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42%</div>
              <p className="text-green-100 text-sm">Reduction Achieved</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BarChart3 size={18} />
                Data Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">99.1%</div>
              <p className="text-orange-100 text-sm">Accuracy Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pipeline Performance Chart */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="text-blue-600" size={20} />
                Pipeline Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <BarChart data={pipelineMetrics}>
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="throughput" fill="#3B82F6" name="Throughput %" />
                  <Bar dataKey="latency" fill="#8B5CF6" name="Latency Score" />
                  <Bar dataKey="reliability" fill="#10B981" name="Reliability %" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Technology Stack Distribution */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="text-purple-600" size={20} />
                Technology Stack Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <PieChart>
                  <Pie
                    data={techStackData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {techStackData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Skills Radar and Data Volume Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Radar Chart */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="text-green-600" size={20} />
                Core Data Engineering Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <RadarChart data={skillsRadarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Data Volume Processing Trends */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-blue-600" size={20} />
                Data Processing Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <LineChart data={dataVolumeData}>
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="volume"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    name="Data Volume (TB)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="quality"
                    stroke="#10B981"
                    strokeWidth={3}
                    name="Data Quality (%)"
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataEngineeringShowcase;
