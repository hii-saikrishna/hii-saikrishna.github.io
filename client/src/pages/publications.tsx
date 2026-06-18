import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Search, 
  FileText, 
  Github, 
  Play, 
  X, 
  ExternalLink,
  Eye,
  BookOpen
} from "lucide-react";
import { publications, socialLinks } from "@/data/portfolio-data";

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  description: string;
  link: string | null;
  github: string | null;
  video: string | null;
  image: string | null;
  kind?: string;
}

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Flatten and normalize publications with their kinds
  const allPublications = useMemo(() => {
    const list: Publication[] = [
      ...publications.journal.map(p => ({ ...p, kind: "journal" })),
      ...publications.conference.map(p => ({ ...p, kind: "conference" })),
      ...publications.submitted.map(p => ({ ...p, kind: "submitted" }))
    ];
    // Sort primarily by year descending, and then by title
    return list.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, []);

  // Filter and search publications
  const filteredPublications = useMemo(() => {
    return allPublications.filter((pub) => {
      // Tab filter
      if (activeTab === "featured" && !pub.image) return false;
      if (activeTab === "journal" && pub.kind !== "journal") return false;
      if (activeTab === "conference" && pub.kind !== "conference") return false;
      if (activeTab === "submitted" && pub.kind !== "submitted") return false;

      // Search filter
      if (searchTerm.trim() === "") return true;
      const term = searchTerm.toLowerCase();
      const matchTitle = pub.title.toLowerCase().includes(term);
      const matchAuthors = pub.authors.some(a => a.toLowerCase().includes(term));
      const matchDescription = pub.description.toLowerCase().includes(term);
      const matchVenue = pub.venue.toLowerCase().includes(term);

      return matchTitle || matchAuthors || matchDescription || matchVenue;
    });
  }, [allPublications, activeTab, searchTerm]);

  // Count helper
  const counts = useMemo(() => {
    return {
      all: allPublications.length,
      featured: allPublications.filter(p => p.image).length,
      journal: allPublications.filter(p => p.kind === "journal").length,
      conference: allPublications.filter(p => p.kind === "conference").length,
      submitted: allPublications.filter(p => p.kind === "submitted").length,
    };
  }, [allPublications]);

  return (
    <div className="min-h-screen bg-slate-bg py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
              Publications Gallery
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Research contributions in artificial intelligence, multi-robot systems, spatial intelligence, and computer vision.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Papers", count: counts.all },
                  { id: "featured", label: "With Figures", count: counts.featured },
                  { id: "journal", label: "Journals", count: counts.journal },
                  { id: "conference", label: "Conferences", count: counts.conference },
                  { id: "submitted", label: "Preprints", count: counts.submitted },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-blue-primary text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeTab === tab.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search papers, authors, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          {searchTerm && (
            <p className="text-slate-500 mb-6 text-sm">
              Found {filteredPublications.length} results matching &ldquo;{searchTerm}&rdquo;
            </p>
          )}

          {/* Publications List */}
          {filteredPublications.length > 0 ? (
            <div className="space-y-6">
              {filteredPublications.map((pub, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Paper Figure (if exists) */}
                      {pub.image && (
                        <div className="md:w-1/3 xl:w-1/4 relative group min-h-[200px] md:min-h-auto bg-slate-50 border-r border-slate-200 flex items-center justify-center p-4">
                          <img 
                            src={pub.image} 
                            alt={`Figure from: ${pub.title}`}
                            className="max-h-48 md:max-h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                          />
                          <div 
                            onClick={() => setSelectedImage(pub.image)}
                            className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-medium text-sm transition-opacity duration-300 cursor-pointer rounded"
                          >
                            <Eye className="h-5 w-5" />
                            <span>Zoom Figure</span>
                          </div>
                          <span className="absolute top-3 left-3 bg-blue-primary text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-sm">
                            Paper Figure
                          </span>
                        </div>
                      )}

                      {/* Paper Details */}
                      <div className={`p-6 sm:p-8 flex-1 ${pub.image ? "md:w-2/3 xl:w-3/4" : "w-full"}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 uppercase tracking-wide">
                            {pub.kind === "journal" ? "Journal" : pub.kind === "conference" ? "Conference" : "Preprint"}
                          </span>
                          <span className="text-xs font-medium text-slate-400">
                            {pub.year}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug mb-3 hover:text-blue-primary transition-colors">
                          <a href={pub.link || undefined} target="_blank" rel="noopener noreferrer">
                            {pub.title}
                          </a>
                        </h2>

                        <div className="mb-4">
                          {pub.authors.map((author, authorIndex) => {
                            const isMe = author.toLowerCase().includes("sai krishna");
                            return (
                              <span key={authorIndex}>
                                <span className={`text-sm ${isMe ? "text-blue-primary font-bold underline" : "text-slate-600 font-medium"}`}>
                                  {author}
                                </span>
                                {authorIndex < pub.authors.length - 1 && ", "}
                              </span>
                            );
                          })}
                        </div>

                        <div className="text-xs sm:text-sm text-slate-500 font-medium italic mb-4 flex items-center gap-1.5">
                          <BookOpen className="h-4 w-4 shrink-0 text-slate-400" />
                          <span>{pub.venue}</span>
                        </div>

                        {pub.description && (
                          <div className="bg-slate-50 rounded-lg p-4 mb-6 border-l-4 border-blue-primary">
                            <p className="text-slate-600 text-sm leading-relaxed italic">
                              &ldquo;{pub.description}&rdquo;
                            </p>
                          </div>
                        )}

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center gap-3">
                          {pub.link && (
                            <Button size="sm" variant="outline" className="border-slate-300 hover:border-blue-primary hover:text-blue-primary text-slate-700 bg-white" asChild>
                              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                                <FileText className="h-4 w-4 text-slate-500 hover:text-blue-primary" />
                                <span>Paper</span>
                              </a>
                            </Button>
                          )}
                          {pub.github && (
                            <Button size="sm" variant="outline" className="border-slate-300 hover:border-blue-primary hover:text-blue-primary text-slate-700 bg-white" asChild>
                              <a href={pub.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                                <Github className="h-4 w-4 text-slate-500 hover:text-blue-primary" />
                                <span>Code</span>
                              </a>
                            </Button>
                          )}
                          {pub.video && (
                            <Button size="sm" variant="outline" className="border-slate-300 hover:border-blue-primary hover:text-blue-primary text-slate-700 bg-white" asChild>
                              <a href={pub.video} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                                <Play className="h-4 w-4 text-slate-500 hover:text-blue-primary fill-slate-500 hover:fill-blue-primary" />
                                <span>Video</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white rounded-xl shadow-sm border border-slate-200 py-16 px-4">
              <BookOpen className="mx-auto h-12 w-12 text-slate-300 mb-4" />
              <h3 className="text-lg font-bold text-slate-700 mb-1">No publications found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                No publications match your search query or selected filter. Try adjusting your query or resetting the tab.
              </p>
            </div>
          )}

          {/* Google Scholar CTA */}
          <div className="text-center mt-12">
            <Button className="bg-blue-primary hover:bg-blue-secondary text-white px-6 py-5 rounded-lg shadow-md transition-all hover:-translate-y-0.5" asChild>
              <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold cursor-pointer">
                <GraduationCap className="h-5 w-5" />
                <span>View Full Google Scholar Profile</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white hover:text-slate-300 p-2 cursor-pointer bg-slate-800/50 rounded-full"
              aria-label="Close image zoom"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="High-resolution zoomed figure" 
              className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;

