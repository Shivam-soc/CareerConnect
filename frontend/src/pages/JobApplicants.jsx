import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import ApplicantsTable from "../components/recruiter/ApplicantsTable";

import { getJobApplications } from "../api/applicationApi";
import { ArrowLeft, Users } from "lucide-react";

function JobApplicants() {
  const { jobId } = useParams();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, [jobId]);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const response = await getJobApplications(jobId);

      setApplications(response.data.applications);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}

      <section className="mb-8 flex items-center justify-between">
        <div>
          <Link
            to="/recruiter/dashboard"
            className="mb-4 inline-flex items-center gap-2 text-[#2E8B78] hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-[#E8F7F3] p-3">
              <Users className="text-[#2E8B78]" size={24} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Job Applicants
              </h1>

              <p className="mt-1 text-slate-500">
                Review and manage applications for this job.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-[#E8F7F3] px-5 py-3">
          <p className="text-sm text-slate-500">
            Total Applicants
          </p>

          <h2 className="text-2xl font-bold text-[#2E8B78]">
            {applications.length}
          </h2>
        </div>
      </section>

      {/* Table */}

      <ApplicantsTable
        applications={applications}
        loading={loading}
        refresh={fetchApplications}
      />
    </DashboardLayout>
  );
}

export default JobApplicants;