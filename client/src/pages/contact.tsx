import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, University, GraduationCap, Github, Linkedin } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission - in a real app, this would send the email
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! This is a demo - no email was actually sent.",
    });
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact</h1>
            <p className="text-lg text-slate-600">
              Get in touch for research collaboration and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Email</h3>
                    <p className="text-slate-600">{personalInfo.emailDisplay || personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Location</h3>
                    <p className="text-slate-600">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <University className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Affiliation</h3>
                    <p className="text-slate-600">
                      {personalInfo.lab}, {personalInfo.affiliation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-slate-800 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href={socialLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <GraduationCap className="h-5 w-5 text-slate-600" />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Github className="h-5 w-5 text-slate-600" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Linkedin className="h-5 w-5 text-slate-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Collaboration Information */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Research Collaboration</h2>

              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Interested in Collaborating?
                    </h3>
                    <p className="text-base text-slate-600 mb-8">
                      I'm actively seeking collaboration opportunities in robotics and AI research. 
                      Please reach out through email or LinkedIn.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button asChild className="bg-blue-primary hover:bg-blue-secondary">
                        <a href={`mailto:${personalInfo.email}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Email Me
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
