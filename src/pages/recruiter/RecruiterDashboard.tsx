import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, TrendingUp, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";

const RecruiterDashboard = () => {
  const postedJobs = [
    { id: 1, title: "Senior Developer", applications: 45, status: "active" },
    { id: 2, title: "Product Manager", applications: 32, status: "active" },
    { id: 3, title: "UX Designer", applications: 28, status: "closed" },
  ];

  const recentApplicants = [
    { id: 1, name: "Alice Johnson", position: "Senior Developer", atsScore: 92 },
    { id: 2, name: "Bob Smith", position: "Product Manager", atsScore: 88 },
    { id: 3, name: "Carol Williams", position: "Senior Developer", atsScore: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-recruiter-light/30 to-background">
      <Navbar userRole="recruiter" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8 fade-in">
          <div>
            <h1 className="font-display text-4xl font-bold mb-2 bg-gradient-to-r from-recruiter to-recruiter-accent bg-clip-text text-transparent">
              Recruiter Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your job postings and applications
            </p>
          </div>
          <Button className="gradient-recruiter hover-lift">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-2 border-recruiter-accent/20 hover-lift slide-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-recruiter flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-recruiter-accent/20 hover-lift slide-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-recruiter flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-recruiter-accent/20 hover-lift slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-recruiter flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Shortlisted</p>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-8 border-2 border-recruiter-accent/30 fade-in">
            <h2 className="font-display text-2xl font-bold mb-6">Posted Jobs</h2>
            <div className="space-y-4">
              {postedJobs.map((job, index) => (
                <div
                  key={job.id}
                  className="p-4 border-2 border-recruiter-accent/20 rounded-xl hover:border-recruiter-accent/50 transition-all hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.applications} applications
                      </p>
                    </div>
                    <Badge variant={job.status === "active" ? "default" : "secondary"}>
                      {job.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 hover-lift">
                      View Details
                    </Button>
                    <Button className="flex-1 gradient-recruiter hover-lift">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 border-2 border-recruiter-accent/30 fade-in">
            <h2 className="font-display text-2xl font-bold mb-6">Recent Applicants</h2>
            <div className="space-y-4">
              {recentApplicants.map((applicant, index) => (
                <div
                  key={applicant.id}
                  className="p-4 border-2 border-recruiter-accent/20 rounded-xl hover:border-recruiter-accent/50 transition-all hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{applicant.name}</h3>
                      <p className="text-sm text-muted-foreground">{applicant.position}</p>
                    </div>
                    <Badge className="gradient-recruiter">
                      ATS: {applicant.atsScore}%
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 hover-lift">
                      View Resume
                    </Button>
                    <Button className="flex-1 gradient-recruiter hover-lift">
                      Shortlist
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
