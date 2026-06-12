import { Badge } from "@/components/ui/badge";
import { updates } from "@/data/portfolio-data";

const Updates = () => {
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
    <div className="min-h-screen bg-slate-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Updates Archive</h1>
            <p className="text-lg text-slate-600">
              Academic milestones, research achievements, and professional updates.
            </p>
          </div>

          <div className="space-y-6">
            {updates.map((update, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="text-sm font-medium text-slate-500 w-20">{update.date}</div>
                <div className="w-24">
                  <Badge className={`${getBadgeColor(update.type)} text-center w-full`}>
                    {update.type}
                  </Badge>
                </div>
                <div className="text-slate-700 flex-1">{update.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
