
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Academic foundation supporting advanced data analysis expertise
          </p>
        </div>
        
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-slate-200">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <GraduationCap size={32} />
              <div>
                <div className="text-2xl font-bold">Lindsey Wilson College</div>
                <div className="text-indigo-100 text-lg font-medium">
                  Masters in Computer/Information Technology Administration and Management
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar size={20} className="text-indigo-500" />
                <span className="font-medium">Aug. 2023 – May 2025</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={20} className="text-purple-500" />
                <span className="font-medium">Columbia, Kentucky</span>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
              <p className="text-slate-700 leading-relaxed">
                Advanced graduate program focusing on information technology management, 
                data systems administration, and enterprise-scale technology solutions. 
                Curriculum emphasizing cloud architecture, data governance, and strategic 
                IT leadership in modern data-driven organizations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
