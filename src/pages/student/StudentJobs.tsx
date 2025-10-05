import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import { useToast } from "@/hooks/use-toast";

const StudentJobs = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "10-15 LPA",
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "8-12 LPA",
      postedDate: "1 week ago",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Digital Solutions",
      location: "Pune, India",
      type: "Full-time",
      salary: "6-10 LPA",
      postedDate: "3 days ago",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Innovation Labs",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "12-18 LPA",
      postedDate: "1 day ago",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Delhi, India",
      type: "Full-time",
      salary: "7-11 LPA",
      postedDate: "5 days ago",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Cloud Systems",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "14-20 LPA",
      postedDate: "4 days ago",
    },
  ];

  const handleApply = (jobId: number) => {
    toast({
      title: "Application submitted!",
      description: "Your application has been sent to the recruiter",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-student-light/30 to-background">
      <Navbar userRole="student" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8 fade-in">
          <h1 className="font-display text-4xl font-bold mb-2 bg-gradient-to-r from-student to-student-accent bg-clip-text text-transparent">
            Job Listings
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover opportunities that match your skills
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 slide-in">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search jobs, companies, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="pune">Pune</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="md:w-auto">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
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
                role="student"
                onAction={handleApply}
                actionLabel="Apply Now"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentJobs;
