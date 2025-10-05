import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    postedDate: string;
    applicants?: number;
  };
  role: "student" | "recruiter" | "placement";
  onAction: (jobId: number) => void;
  actionLabel?: string;
}

const JobCard = ({ job, role, onAction, actionLabel = "Apply Now" }: JobCardProps) => {
  const getGradient = () => {
    switch (role) {
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

  const getBorderColor = () => {
    switch (role) {
      case "student":
        return "border-student-accent/20 hover:border-student-accent/50";
      case "recruiter":
        return "border-recruiter-accent/20 hover:border-recruiter-accent/50";
      case "placement":
        return "border-placement-accent/20 hover:border-placement-accent/50";
      default:
        return "border-accent/20";
    }
  };

  return (
    <Card className={`p-6 border-2 ${getBorderColor()} transition-all hover-lift`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-xl font-semibold mb-1">{job.title}</h3>
          <p className="text-muted-foreground font-medium">{job.company}</p>
        </div>
        <Badge variant="secondary">{job.type}</Badge>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <DollarSign className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Posted {job.postedDate}</span>
        </div>
      </div>

      {job.applicants !== undefined && (
        <p className="text-sm text-muted-foreground mb-4">
          {job.applicants} applicants
        </p>
      )}

      <Button
        className={`w-full ${getGradient()} hover-lift`}
        onClick={() => onAction(job.id)}
      >
        {actionLabel}
      </Button>
    </Card>
  );
};

export default JobCard;
