import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import JobCard from "@/components/JobCard";
import { useToast } from "@/hooks/use-toast";

const PlacementJobs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/");
  };

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "10-15 LPA",
      postedDate: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "8-12 LPA",
      postedDate: "1 week ago",
      applicants: 32,
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Digital Solutions",
      location: "Pune, India",
      type: "Full-time",
      salary: "6-10 LPA",
      postedDate: "3 days ago",
      applicants: 28,
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Innovation Labs",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "12-18 LPA",
      postedDate: "1 day ago",
      applicants: 38,
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Delhi, India",
      type: "Full-time",
      salary: "7-11 LPA",
      postedDate: "5 days ago",
      applicants: 22,
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Cloud Systems",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "14-20 LPA",
      postedDate: "4 days ago",
      applicants: 19,
    },
  ];

  const handleView = (jobId: number) => {
    toast({
      title: "Job details",
      description: `Viewing job #${jobId}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-placement-light/30 to-background">
      <Navbar userRole="placement" onLogout={handleLogout} />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8 fade-in">
          <div>
            <h1 className="font-display text-4xl font-bold mb-2 bg-gradient-to-r from-placement to-placement-accent bg-clip-text text-transparent">
              Campus Job Listings
            </h1>
            <p className="text-muted-foreground text-lg">
              Monitor all active recruitment opportunities
            </p>
          </div>
          <Button className="gradient-placement hover-lift">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 slide-in">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search jobs or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Companies</SelectItem>
              <SelectItem value="tech">Tech Corp</SelectItem>
              <SelectItem value="startup">StartupXYZ</SelectItem>
              <SelectItem value="digital">Digital Solutions</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
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
                role="placement"
                onAction={handleView}
                actionLabel="View Details"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementJobs;
