import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { education, experience, skills, achievements, positions } from "@/data/portfolio-data";

const Resume = () => {
  const getExperienceColor = (color: string) => {
    switch (color) {
      case "green":
        return "border-green-500";
      case "yellow":
        return "border-yellow-500";
      case "purple":
        return "border-purple-500";
      default:
        return "border-blue-500";
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Resume</h1>
            <p className="text-lg text-slate-600">Academic and professional experience</p>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Education</h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-primary pl-8">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{edu.degree}</h3>
                    <span className="text-sm text-slate-500 font-medium">{edu.period}</span>
                  </div>
                  <div className="text-blue-primary font-medium mb-2">{edu.institution}</div>
                  {edu.gpa && (
                    <div className="text-sm text-slate-600 mb-2">
                      <span className="font-medium">GPA:</span> {edu.gpa}
                    </div>
                  )}
                  {edu.awards && (
                    <div className="mb-3">
                      {edu.awards.map((award, awardIndex) => (
                        <Badge key={awardIndex} variant="outline" className="bg-green-100 text-green-800 mr-2 mb-1">
                          {award}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {edu.achievements && (
                    <div className="mb-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <Badge key={achIndex} variant="outline" className="bg-purple-100 text-purple-800 mr-2 mb-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <p className="text-slate-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Research Experience</h2>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className={`border-l-4 pl-8 ${getExperienceColor(exp.color)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <span className="text-sm text-slate-500 font-medium">{exp.period}</span>
                  </div>
                  <div className="text-blue-primary font-medium mb-1">{exp.organization}</div>
                  {exp.location && (
                    <div className="text-sm text-slate-500 mb-1">{exp.location}</div>
                  )}
                  {exp.advisor && (
                    <div className="text-sm text-slate-600 mb-3">
                      <span className="font-medium">Advisor:</span> {exp.advisor}
                    </div>
                  )}
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">ML Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.mlFrameworks.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-green-100 text-green-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Robotic Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.roboticFrameworks.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-purple-100 text-purple-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Cloud & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloudDatabase.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-orange-100 text-orange-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Achievements & Awards</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Positions of Responsibility</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">{position}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleDownload}
              className="bg-blue-primary hover:bg-blue-secondary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
