
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Layers, GitBranch, Boxes, Star, Calendar, Users, Package } from "lucide-react";

const DimensionalModeling = () => {
  const modelingConcepts = [
    {
      title: "Star Schema Design",
      icon: Star,
      description: "Implemented star schema architectures for OLAP systems, optimizing query performance by 65%",
      example: "Fact tables surrounded by dimension tables for sales analytics",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Dimension Tables",
      icon: Database,
      description: "Designed Type 2 SCDs (Slowly Changing Dimensions) for historical data tracking",
      example: "Customer, Product, Time, Geography dimensions with proper surrogate keys",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Fact Tables",
      icon: Boxes,
      description: "Created optimized fact tables with appropriate grain and measures",
      example: "Sales facts, inventory snapshots, and transaction-level details",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Data Vault Modeling",
      icon: Layers,
      description: "Applied Data Vault 2.0 methodology for enterprise data warehousing",
      example: "Hubs, Links, and Satellites for scalable and auditable data models",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const architectureFlow = [
    { name: "Source Systems", description: "ERP, CRM, IoT Sensors", icon: Database },
    { name: "Data Lake", description: "Raw Data Storage", icon: Layers },
    { name: "ETL Pipelines", description: "Data Transformation", icon: GitBranch },
    { name: "Data Warehouse", description: "Dimensional Models", icon: Boxes },
    { name: "Analytics Layer", description: "BI & Reporting", icon: Star }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dimensional Modeling Expertise
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Advanced data modeling techniques for enterprise-scale analytics and 
            business intelligence solutions with proven performance optimization.
          </p>
        </div>

        {/* Data Architecture Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Modern Data Architecture</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {architectureFlow.map((step, index) => (
              <div key={index} className="flex items-center">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <step.icon className="mx-auto mb-2 text-blue-300" size={24} />
                    <div className="font-semibold text-sm">{step.name}</div>
                    <div className="text-xs text-blue-200">{step.description}</div>
                  </CardContent>
                </Card>
                {index < architectureFlow.length - 1 && (
                  <div className="hidden md:block mx-2">
                    <GitBranch className="text-blue-300 rotate-90" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modeling Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modelingConcepts.map((concept, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${concept.color}`}>
                    <concept.icon size={24} className="text-white" />
                  </div>
                  {concept.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{concept.description}</p>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-600">
                  <p className="text-blue-300 text-sm font-mono">{concept.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Data Modeling Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">65%</div>
              <div className="text-white">Query Performance Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-white">Storage Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white">Data Quality Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DimensionalModeling;
