import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

interface NavbarProps {
  userRole?: "student" | "recruiter" | "placement" | null;
  onLogout?: () => void;
}

const Navbar = ({ userRole, onLogout }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover-lift">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CampusCatalyst
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {!userRole ? (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="hover-lift">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="gradient-primary hover-lift">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to={`/${userRole}/dashboard`}>
                  <Button variant="ghost" className="hover-lift">
                    Dashboard
                  </Button>
                </Link>
                <Link to={`/${userRole}/jobs`}>
                  <Button variant="ghost" className="hover-lift">
                    Jobs
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={onLogout}
                  className="hover-lift"
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
