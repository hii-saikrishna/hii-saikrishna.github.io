import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, Github, Linkedin, Eye, Brain, Bot, Network } from "lucide-react";
import { personalInfo, socialLinks, researchInterests, updates } from "@/data/portfolio-data";
import TypingAnimation from "@/components/typing-animation";

const Home = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-100 text-purple-600";
      case "red":
        return "bg-red-100 text-red-600";
      case "pink":
        return "bg-pink-100 text-pink-600";
      case "blue":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Robot Learning":
        return <Brain className="w-6 h-6" />;
      case "Multi-Robot Systems":
        return <Network className="w-6 h-6" />;
      case "Computer Vision":
        return <Eye className="w-6 h-6" />;
      case "Machine Learning":
        return <Bot className="w-6 h-6" />;
      default:
        return <Bot className="w-6 h-6" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Publication":
        return "bg-green-100 text-green-800";
      case "Education":
        return "bg-blue-100 text-blue-800";
      case "Experience":
        return "bg-yellow-100 text-yellow-800";
      case "Recognition":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-start">
              <div className="lg:col-span-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
                  <TypingAnimation text={personalInfo.name} speed={80} />
                </h1>
                <h2 className="text-xl text-blue-primary font-medium mb-8">
                  {personalInfo.title}
                </h2>

                <div className="prose prose-slate max-w-none">
                  {personalInfo.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-slate-600 mb-6 ${
                        index === 0 ? "text-lg" : "text-base"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" asChild>
                    <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Google Scholar
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 flex justify-center pt-12">
                <img
                  src="attached_assets/Profile_Pic.png"
                  alt={personalInfo.name}
                  className="rounded-full w-96 h-96 object-cover mx-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Research Interests</h2>
              <p className="text-lg text-slate-600">
                Exploring cutting-edge technologies in AI and robotics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchInterests.map((interest, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(
                        interest.color
                      )}`}
                    >
                      {getIcon(interest.title)}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-slate-600">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Preview */}
      <section className="py-16 bg-slate-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Recent Updates</h2>
            </div>

            <div className="space-y-4 mb-8">
              {updates.map((update, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-medium text-slate-500">
                          {update.date}
                        </div>
                        <Badge className={getBadgeColor(update.type)}>
                          {update.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600">{update.description}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/updates">
                <Button>
                  View All Updates
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
