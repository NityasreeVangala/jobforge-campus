import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, TrendingUp, Award, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const PlacementDashboard = () => {
  const campusStats = [
    { label: "Total Students", value: "1,245", icon: Users, color: "from-placement to-placement-secondary" },
    { label: "Active Recruiters", value: "89", icon: Building2, color: "from-placement-secondary to-placement-accent" },
    { label: "Job Postings", value: "156", icon: Briefcase, color: "from-placement-accent to-placement-secondary" },
    { label: "Placements", value: "523", icon: Award, color: "from-placement to-placement-accent" },
  ];

  const recentActivity = [
    { type: "placement", company: "Tech Corp", student: "John Doe", package: "12 LPA" },
    { type: "application", company: "StartupXYZ", count: 45, position: "Software Engineer" },
    { type: "interview", company: "Digital Solutions", scheduled: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-placement-light/30 to-background">
      <Navbar userRole="placement" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8 fade-in">
          <h1 className="font-display text-4xl font-bold mb-2 bg-gradient-to-r from-placement to-placement-accent bg-clip-text text-transparent">
            Placement Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Campus recruitment analytics and management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {campusStats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 border-2 border-placement-accent/20 hover-lift slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 p-8 border-2 border-placement-accent/30 fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-placement flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold">Placement Trends</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-placement-light/50 rounded-xl border border-placement-accent/20">
                  <p className="text-sm text-muted-foreground mb-1">Average Package</p>
                  <p className="text-2xl font-bold">8.5 LPA</p>
                  <p className="text-xs text-green-600 mt-1">↑ 12% from last year</p>
                </div>
                <div className="p-4 bg-placement-light/50 rounded-xl border border-placement-accent/20">
                  <p className="text-sm text-muted-foreground mb-1">Highest Package</p>
                  <p className="text-2xl font-bold">45 LPA</p>
                  <p className="text-xs text-green-600 mt-1">↑ 25% from last year</p>
                </div>
                <div className="p-4 bg-placement-light/50 rounded-xl border border-placement-accent/20">
                  <p className="text-sm text-muted-foreground mb-1">Placement Rate</p>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-xs text-green-600 mt-1">↑ 5% from last year</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Top Recruiting Companies</h3>
                <div className="space-y-3">
                  {["Tech Corp", "StartupXYZ", "Digital Solutions", "Innovation Labs"].map((company, index) => (
                    <div key={company} className="flex items-center justify-between p-3 bg-placement-light/30 rounded-lg">
                      <span className="font-medium">{company}</span>
                      <Badge className="gradient-placement">
                        {25 - index * 5} hires
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-placement-accent/30 fade-in">
            <h2 className="font-display text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="p-4 border-2 border-placement-accent/20 rounded-xl hover:border-placement-accent/50 transition-all hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {activity.type === "placement" && (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-placement" />
                        <span className="font-semibold text-sm">New Placement</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {activity.student} placed at {activity.company}
                      </p>
                      <p className="text-xs text-placement font-medium mt-1">
                        Package: {activity.package}
                      </p>
                    </>
                  )}
                  {activity.type === "application" && (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-placement" />
                        <span className="font-semibold text-sm">New Applications</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {activity.count} students applied for {activity.position} at {activity.company}
                      </p>
                    </>
                  )}
                  {activity.type === "interview" && (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-placement" />
                        <span className="font-semibold text-sm">Interviews Scheduled</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {activity.scheduled} interviews with {activity.company}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlacementDashboard;
