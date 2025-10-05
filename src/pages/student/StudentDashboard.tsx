import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, TrendingUp, Briefcase, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const StudentDashboard = () => {
  const { toast } = useToast();
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 30) + 70; // 70-100
      setAtsScore(mockScore);
      setAnalyzing(false);
      toast({
        title: "Resume analyzed!",
        description: `Your ATS score is ${mockScore}%`,
      });
    }, 2000);
  };

  const recommendedJobs = [
    { id: 1, title: "Software Engineer", company: "Tech Corp", match: 95 },
    { id: 2, title: "Frontend Developer", company: "StartupXYZ", match: 88 },
    { id: 3, title: "Full Stack Developer", company: "Digital Solutions", match: 82 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-student-light/30 to-background">
      <Navbar userRole="student" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8 fade-in">
          <h1 className="font-display text-4xl font-bold mb-2 bg-gradient-to-r from-student to-student-accent bg-clip-text text-transparent">
            Student Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome back! Here's your recruitment journey overview
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-2 border-student-accent/20 hover-lift slide-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-student flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Applications</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-student-accent/20 hover-lift slide-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-student flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Interview Calls</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-student-accent/20 hover-lift slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-student flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Offers</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-8 border-2 border-student-accent/30 fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-student flex items-center justify-center">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold">AI Resume Analyzer</h2>
            </div>

            <div className="space-y-6">
              <div className="border-2 border-dashed border-student-accent/30 rounded-xl p-8 text-center hover:border-student-accent/60 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-student-accent" />
                  <p className="font-medium mb-2">Upload your resume</p>
                  <p className="text-sm text-muted-foreground">PDF, DOC, or DOCX (Max 5MB)</p>
                </label>
              </div>

              {analyzing && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Analyzing resume...</p>
                  <Progress value={66} className="h-2" />
                </div>
              )}

              {atsScore !== null && !analyzing && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">ATS Score</span>
                    <span className="text-2xl font-bold text-student">{atsScore}%</span>
                  </div>
                  <Progress value={atsScore} className="h-3" />

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-sm">Strengths</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Clear formatting</li>
                        <li>• Relevant keywords</li>
                        <li>• Quantified achievements</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-orange-600" />
                        <span className="font-medium text-sm">Improvements</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Add more skills</li>
                        <li>• Include projects</li>
                        <li>• Optimize length</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-8 border-2 border-student-accent/30 fade-in">
            <h2 className="font-display text-2xl font-bold mb-6">Recommended Jobs</h2>
            <div className="space-y-4">
              {recommendedJobs.map((job, index) => (
                <div
                  key={job.id}
                  className="p-4 border-2 border-student-accent/20 rounded-xl hover:border-student-accent/50 transition-all hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge className="gradient-student">{job.match}% Match</Badge>
                  </div>
                  <Button className="w-full gradient-student hover-lift">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
