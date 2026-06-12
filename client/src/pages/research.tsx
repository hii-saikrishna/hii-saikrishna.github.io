import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const Research = () => {
  const researchThrusts = [
    {
      id: "T1",
      title: "Robot Learning",
      description: "My research in Robot Learning centers on embodied AI and reasoning frameworks for understanding spatial phenomena such as WiFi signal strength and humidity. I am developing frameworks that enable robots to effectively interact with humans while performing autonomous environmental monitoring. This research bridges the gap between low-level sensor data and high-level semantic understanding.",
      icon: "🧠",
      image: "attached_assets/Robot_Learning.png"
    },
    {
      id: "T2",
      title: "Multi-Robot Systems",
      description: "My research on Multi-Robot Systems focuses on developing robust and scalable distributed mapping frameworks for multiple autonomous robots. I have developed the SPACE framework for 3D spatial cooperation and exploration that mitigates ghosting trail effects in 3D reconstructions. Additionally, I am investigating 3DS-SLAM, which integrates 3D object detection into semantic SLAM for dynamic indoor environments.",
      icon: "🤖",
      image: "attached_assets/Multi_Robot_Systems.png"
    },
    {
      id: "T3",
      title: "Computer Vision",
      description: "My Computer Vision research spans probabilistic scene graph reasoning and SLAM frameworks for dynamic environments. I focus on developing scene graph representations that capture semantic relationships between objects in 3D scenes. Additionally, I research SLAM frameworks specifically designed for dynamic object filtering and multi-robot collaborative mapping.",
      icon: "👁️",
      image: "attached_assets/Computer_Vision.png"
    },
    {
      id: "T4",
      title: "Machine Learning",
      description: "My Machine Learning research focuses on developing novel ML models for robotics and embodied AI tasks. I have worked extensively with Gaussian Processes for uncertainty quantification in distributed localization, developing MGPRL for multi-robot relative localization using Wi-Fi signals. Recently, I have been exploring cognitive ML architectures that combine classical and deep learning approaches.",
      icon: "🔬",
      image: "attached_assets/Machine_Learning.png"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Research</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              My research focuses on advancing multi-robot systems, computer vision, and AI frameworks for autonomous navigation and cooperative exploration.
            </p>
          </div>

          <div className="space-y-12">
            {researchThrusts.map((thrust) => (
              <Card key={thrust.id} className="shadow-sm">
                <CardContent className="p-12">
                  <div className="flex items-start gap-6">
                    {thrust.image && (
                      <div className="w-2/5 flex-shrink-0">
                        <img src={thrust.image} alt={thrust.title} className="w-full rounded-lg" />
                      </div>
                    )}
                    <div className="w-3/5">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">{thrust.title}</h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-4">{thrust.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/publications">
              <Button className="bg-blue-primary hover:bg-blue-secondary">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
