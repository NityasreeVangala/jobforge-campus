import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Briefcase, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeRole, setActiveRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Mock login - redirect to appropriate dashboard
    toast({
      title: "Welcome back!",
      description: `Logging in as ${activeRole}`,
    });
    
    navigate(`/${activeRole}/dashboard`);
  };

  const getRoleGradient = () => {
    switch (activeRole) {
      case "student":
        return "gradient-student";
      case "recruiter":
        return "gradient-recruiter";
      case "placement":
        return "gradient-placement";
      default:
        return "gradient-primary";
    }
  };

  return (
    <div className="min-h-screen gradient-animated flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <Card className="w-full max-w-md glass border-2 p-8 fade-in relative z-10">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 rounded-2xl ${getRoleGradient()} flex items-center justify-center mx-auto mb-4 hover-lift`}>
            {activeRole === "student" && <GraduationCap className="w-8 h-8 text-white" />}
            {activeRole === "recruiter" && <Briefcase className="w-8 h-8 text-white" />}
            {activeRole === "placement" && <Building2 className="w-8 h-8 text-white" />}
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <Tabs value={activeRole} onValueChange={setActiveRole} className="mb-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="student" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Student</span>
            </TabsTrigger>
            <TabsTrigger value="recruiter" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Recruiter</span>
            </TabsTrigger>
            <TabsTrigger value="placement" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Placement</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeRole} className="mt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <Button type="submit" className={`w-full ${getRoleGradient()} hover-lift`}>
                Sign In
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link to="/register" className="text-accent hover:underline font-medium">
            Register here
          </Link>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
