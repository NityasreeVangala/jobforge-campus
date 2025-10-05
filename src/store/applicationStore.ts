// Shared application store using localStorage
export interface Application {
  id: string;
  studentName: string;
  jobId: number;
  jobTitle: string;
  company: string;
  atsScore: number;
  appliedDate: string;
  status: "pending" | "shortlisted" | "rejected";
}

const STORAGE_KEY = "campus_applications";

export const applicationStore = {
  getAll: (): Application[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  add: (application: Omit<Application, "id" | "appliedDate" | "status">): Application => {
    const applications = applicationStore.getAll();
    const newApplication: Application = {
      ...application,
      id: Date.now().toString(),
      appliedDate: new Date().toISOString(),
      status: "pending",
    };
    applications.push(newApplication);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    return newApplication;
  },

  getByJob: (jobId: number): Application[] => {
    return applicationStore.getAll().filter(app => app.jobId === jobId);
  },

  updateStatus: (id: string, status: Application["status"]) => {
    const applications = applicationStore.getAll();
    const index = applications.findIndex(app => app.id === id);
    if (index !== -1) {
      applications[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    }
  },
};
