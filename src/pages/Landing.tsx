import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, TrendingUp, Shield, Briefcase, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-animated" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base=64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">AI-Powered Campus Recruitment</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white">
              Transform Campus
              <br />
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Recruitment
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Connect students, recruiters, and placement cells with intelligent matching, 
              AI resume analysis, and comprehensive placement management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift px-8 py-6 text-lg">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover-lift px-8 py-6 text-lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 slide-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools for every stakeholder in campus recruitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift border-2 border-student-accent/20 bg-gradient-to-br from-student-light/50 to-background">
              <div className="w-14 h-14 rounded-2xl gradient-student flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">For Students</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-student-accent mt-1">✓</span>
                  <span>AI-powered ATS resume scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-student-accent mt-1">✓</span>
                  <span>Personalized job recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-student-accent mt-1">✓</span>
                  <span>Track application status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-student-accent mt-1">✓</span>
                  <span>Resume improvement insights</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-lift border-2 border-recruiter-accent/20 bg-gradient-to-br from-recruiter-light/50 to-background">
              <div className="w-14 h-14 rounded-2xl gradient-recruiter flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">For Recruiters</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-recruiter-accent mt-1">✓</span>
                  <span>Post and manage job listings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-recruiter-accent mt-1">✓</span>
                  <span>Access pre-screened candidates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-recruiter-accent mt-1">✓</span>
                  <span>View student ATS scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-recruiter-accent mt-1">✓</span>
                  <span>Streamlined application review</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover-lift border-2 border-placement-accent/20 bg-gradient-to-br from-placement-light/50 to-background">
              <div className="w-14 h-14 rounded-2xl gradient-placement flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">For Placement Cells</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-placement-accent mt-1">✓</span>
                  <span>Comprehensive analytics dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-placement-accent mt-1">✓</span>
                  <span>Monitor recruitment activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-placement-accent mt-1">✓</span>
                  <span>Track placement statistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-placement-accent mt-1">✓</span>
                  <span>Manage student-recruiter connections</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="slide-in">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Active Students</div>
            </div>
            <div className="slide-in" style={{ animationDelay: "0.1s" }}>
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Companies</div>
            </div>
            <div className="slide-in" style={{ animationDelay: "0.2s" }}>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div className="slide-in" style={{ animationDelay: "0.3s" }}>
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/80">Campuses</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <Card className="p-12 text-center glass border-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students and recruiters already using CampusCatalyst
            </p>
            <Link to="/register">
              <Button size="lg" className="gradient-primary hover-lift px-8 py-6 text-lg">
                Create Your Account
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
