import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import Research from "@/pages/research";
import Publications from "@/pages/publications";
import Updates from "@/pages/updates";
import Resume from "@/pages/resume";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import { personalInfo } from "@/data/portfolio-data";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/research" component={Research} />
      <Route path="/publications" component={Publications} />
      <Route path="/updates" component={Updates} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Router />
          </main>
          
          {/* Footer */}
          <footer className="bg-white border-t border-slate-200 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-slate-600">© 2026 {personalInfo.name}. All rights reserved.</p>
                <p className="text-sm text-slate-500 mt-2">
                  {personalInfo.title}, {personalInfo.affiliation}
                </p>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
