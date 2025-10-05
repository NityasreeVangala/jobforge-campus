import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import { useToast } from "@/hooks/use-toast";

const RecruiterJobs = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Your Company",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "10-15 LPA",
      postedDate: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Your Company",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "8-12 LPA",
      postedDate: "1 week ago",
      applicants: 32,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Your Company",
      location: "Pune, India",
      type: "Full-time",
      salary: "15-22 LPA",
      postedDate: "3 days ago",
      applicants: 28,
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Your Company",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "12-18 LPA",
      postedDate: "1 day ago",
      applicants: 38,
    },
  ];

  const handleEdit = (jobId: number) => {
    toast({
      title: "Edit job posting",
      description: `Editing job #${jobId}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-recruiter-light/30 to-background">
      <Navbar userRole="recruiter" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8 fade-in">
          <div>
            <h1 className="font-display text-4xl font-bold mb-2 bg-gradient-to-r from-recruiter to-recruiter-accent bg-clip-text text-transparent">
              My Job Postings
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your active job listings
            </p>
          </div>
          <Button className="gradient-recruiter hover-lift">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </div>

        <div className="flex gap-4 mb-8 slide-in">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search your job postings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <JobCard
                job={job}
                role="recruiter"
                onAction={handleEdit}
                actionLabel="Edit Job"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruiterJobs;
