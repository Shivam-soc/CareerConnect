import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getCompanies } from "../../api/companyApi";
import {
  createJob,
  updateJob,
  getJobById,
} from "../../api/jobApi";

function JobForm({ mode = "create" }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    employmentType: "Full-Time",
    experience: "0-1 Years",
    salary: "",
    description: "",
    responsibilities: "",
    requirements: "",
    skills: "",
    deadline: "",
  });

  useEffect(() => {
    fetchCompanies();

    if (mode === "edit") {
      fetchJob();
    }
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getCompanies();
      setCompanies(response.data.companies || []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchJob = async () => {
    try {
      const response = await getJobById(id);

      const job = response.data.job;

      setFormData({
        title: job.title || "",
        company: job.company?._id || "",
        location: job.location || "",
        employmentType: job.employmentType || "Full-Time",
        experience: job.experience || "",
        salary: job.salary || "",
        description: job.description || "",
        responsibilities:
          job.responsibilities?.join(", ") || "",
        requirements:
          job.requirements?.join(", ") || "",
        skills:
          job.skills?.join(", ") || "",
        deadline: job.deadline
          ? job.deadline.substring(0, 10)
          : "",
      });
    } catch (error) {
      console.error(error);
      alert("Unable to load job.");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formData,

        responsibilities: formData.responsibilities
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        requirements: formData.requirements
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        skills: formData.skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      if (mode === "create") {
        await createJob(payload);
        alert("Job created successfully!");
      } else {
        await updateJob(id, payload);
        alert("Job updated successfully!");
      }

      navigate("/recruiter/dashboard");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Unable to save job."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">

        {/* Job Title */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Job Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Software Engineer"
            required
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Company */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Company
          </label>

          <select
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          >
            <option value="">Select Company</option>

            {companies.map((company) => (
              <option
                key={company._id}
                value={company._id}
              >
                {company.name}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Bangalore"
            required
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Salary */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Salary
          </label>

          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="₹12 LPA"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Employment Type */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Employment Type
          </label>

          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Experience */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Experience
          </label>

          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="0-2 Years"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Deadline */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Application Deadline
          </label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

      </div>

      {/* Description */}

      <div className="mt-8">
        <label className="mb-2 block font-medium text-slate-700">
          Job Description
        </label>

        <textarea
          rows={7}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the job role, responsibilities, and expectations..."
          required
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#2E8B78]"
        />
      </div>

      {/* Responsibilities */}

      <div className="mt-6">
        <label className="mb-2 block font-medium text-slate-700">
          Responsibilities
        </label>

        <textarea
          rows={4}
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          placeholder="Build REST APIs, Collaborate with team, Write clean code"
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#2E8B78]"
        />
      </div>

      {/* Requirements */}

      <div className="mt-6">
        <label className="mb-2 block font-medium text-slate-700">
          Requirements
        </label>

        <textarea
          rows={4}
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Bachelor's Degree, 2+ Years Experience, Strong Problem Solving"
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#2E8B78]"
        />
      </div>

      {/* Skills */}

      <div className="mt-6">
        <label className="mb-2 block font-medium text-slate-700">
          Skills
        </label>

        <textarea
          rows={3}
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="React, Node.js, Express.js, MongoDB"
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#2E8B78]"
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-[#2E8B78] py-4 font-semibold text-white transition hover:bg-[#236D5E] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creating Job..." : "Create Job"}
      </button>
    </form>
  );
}

export default JobForm;