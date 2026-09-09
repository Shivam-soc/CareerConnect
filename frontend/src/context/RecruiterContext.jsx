import { createContext, useContext, useEffect, useState } from "react";
import {
  getDashboard,
  getMyJobs,
} from "../api/recruiterApi";

const RecruiterContext = createContext();

export const RecruiterProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();
      setDashboard(response.data.dashboard);
    } catch (error) {
      console.error("Dashboard Error:", error);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await getMyJobs();
      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Jobs Error:", error);
    }
  };

  const refreshRecruiter = async () => {
    setLoading(true);

    await Promise.all([
      fetchDashboard(),
      fetchJobs(),
    ]);

    setLoading(false);
  };

  useEffect(() => {
    refreshRecruiter();
  }, []);

  return (
    <RecruiterContext.Provider
      value={{
        dashboard,
        jobs,
        loading,
        fetchDashboard,
        fetchJobs,
        refreshRecruiter,
      }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};

export const useRecruiter = () =>
  useContext(RecruiterContext);