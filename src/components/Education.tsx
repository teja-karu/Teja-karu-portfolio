
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Illinois Institute of Technology",
      location: "Chicago, Illinois",
      date: "Expected May 2025",
      details: [
        "Current GPA: 3.85/4.0",
        "Relevant Coursework: Machine Learning, Big Data Analytics, Statistical Methods, Data Mining",
        "Research Focus: Advanced Analytics and Predictive Modeling"
      ]
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      school: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      date: "May 2020",
      details: [
        "GPA: 3.2/4.0",
        "Relevant Coursework: Data Structures, Algorithms, Database Management Systems",
        "Final Year Project: IoT-based Data Collection and Analysis System"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic foundation supporting advanced data analysis expertise
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <GraduationCap className="text-blue-600" size={24} />
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-slate-700">
                      {edu.school}
                    </CardDescription>
                  </div>
                  <div className="text-right text-slate-600">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={16} />
                      <span>{edu.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-slate-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
