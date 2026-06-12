import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { publications, socialLinks } from "@/data/portfolio-data";

const Publications = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Publications</h1>
            <p className="text-lg text-slate-600">
              Research contributions in artificial intelligence and robotics
            </p>
          </div>

          {/* Journal Papers */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Journal Papers</h2>
            <div className="space-y-6">
              {publications.journal.map((paper, index) => (
                <Card key={index} className="bg-slate-bg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{paper.title}</h3>
                    <div className="mb-3">
                      {paper.authors.map((author, authorIndex) => (
                        <span key={authorIndex}>
                          <span className="text-blue-primary font-medium">{author}</span>
                          {authorIndex < paper.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">{paper.venue}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conference Papers */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Conference Papers</h2>
            <div className="space-y-6">
              {publications.conference.map((paper, index) => (
                <Card key={index} className="bg-slate-bg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{paper.title}</h3>
                    <div className="mb-3">
                      {paper.authors.map((author, authorIndex) => (
                        <span key={authorIndex}>
                          <span className="text-blue-primary font-medium">{author}</span>
                          {authorIndex < paper.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">{paper.venue}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Submitted Papers */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Submitted Papers</h2>
            <div className="space-y-6">
              {publications.submitted.map((paper, index) => (
                <Card key={index} className="bg-slate-bg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{paper.title}</h3>
                    <div className="mb-3">
                      {paper.authors.map((author, authorIndex) => (
                        <span key={authorIndex}>
                          <span className="text-blue-primary font-medium">{author}</span>
                          {authorIndex < paper.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">{paper.venue}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-blue-primary hover:bg-blue-secondary" asChild>
              <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
                <GraduationCap className="mr-2 h-4 w-4" />
                View on Google Scholar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
