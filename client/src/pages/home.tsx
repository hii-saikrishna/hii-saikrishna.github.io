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
                <div className="prose prose-slate max-w-none">
                  {personalInfo.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-slate-600 mb-6 prose-a:text-blue-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-2 ${
                        index === 0 ? "text-lg" : "text-base"
                      } ${
                        index === 2 ? "bg-amber-50 border-l-4 border-amber-300 rounded-r-md px-4 py-3 font-medium text-slate-700" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>

                {/* Social & Contact Links (neutral icons, improved text) */}
                <div className="flex flex-wrap gap-4 items-center mt-6">
                  <a href="https://scholar.google.com/citations?user=lrK_Y8AAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.25l-8.45-4.22 1.4.68L12 10.41l7.05-3.7 1.4-.68L12 9.25zM12 13l8-4v7c0 2.21-3.58 4-8 4s-8-1.79-8-4v-7l8 4z" fill="currentColor"/></svg>
                    Scholar
                  </a>
                  <a href="https://github.com/sai-krishna-ghanta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" /></svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/sai-krishna-ghanta-320ab0211/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.7 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.26V22H7.92V8z" /></svg>
                    LinkedIn
                  </a>
                  <a href="https://sai-krishna-ghanta.github.io/portfolio/attached_assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 18H6V4h7v5h5v11zm-6-3h2v2h-2v-2zm0-8h2v6h-2V9z"/></svg>
                    CV / Résumé
                  </a>
                  <a href="mailto:sai.krishna@uga.edu" className="inline-flex items-center gap-2 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6.5L12 13L2 6.5"/></svg>
                    <span>
                      I’ll be happy to hear from you about research, collaboration, ideas, or anything else — feel free to reach out to <span className="font-mono text-[0.95em]">sai.krishna@uga.edu</span>.
                    </span>
                  </a>
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
