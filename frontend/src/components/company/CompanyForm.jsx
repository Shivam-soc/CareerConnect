import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  createCompany,
  updateCompany,
  getCompanyById,
} from "../../api/companyApi";

function CompanyForm({ mode = "create" }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    website: "",
    industry: "",
    location: "",
    size: "",
    founded: "",
    description: "",
  });

  useEffect(() => {
    if (mode === "edit" && id) {
      fetchCompany();
    }
  }, [mode, id]);

  const fetchCompany = async () => {
    try {
      setFetching(true);

      const response = await getCompanyById(id);
      const company = response.data.company;

      setFormData({
        name: company.name || "",
        logo: company.logo || "",
        website: company.website || "",
        industry: company.industry || "",
        location: company.location || "",
        size: company.size || "",
        founded: company.founded || "",
        description: company.description || "",
      });
    } catch (error) {
      console.error(error);
      alert("Unable to load company.");
    } finally {
      setFetching(false);
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

      if (mode === "create") {
        await createCompany(formData);
        alert("Company created successfully.");
      } else {
        await updateCompany(id, formData);
        alert("Company updated successfully.");
      }

      navigate("/recruiter/companies");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Unable to save company."
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center">
        Loading company...
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-sm"
    >
      {/* Company Information */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Company Information
        </h2>

        <p className="mt-1 text-slate-500">
          Fill in your company details.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company Name */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Company Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Google"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Industry */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Industry
          </label>

          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="Information Technology"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Website */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Website
          </label>

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://company.com"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Logo */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Logo URL
          </label>

          <input
            type="url"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
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
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>

        {/* Company Size */}

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Company Size
          </label>

          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          >
            <option value="">Select Size</option>
            <option>1-10 Employees</option>
            <option>11-50 Employees</option>
            <option>51-200 Employees</option>
            <option>201-500 Employees</option>
            <option>501-1000 Employees</option>
            <option>1000+ Employees</option>
          </select>
        </div>

        {/* Founded */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Founded
          </label>

          <input
            type="number"
            name="founded"
            value={formData.founded}
            onChange={handleChange}
            placeholder="2005"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-[#2E8B78]"
          />
        </div>
      </div>

      {/* Description */}

      <div className="mt-8">
        <label className="mb-2 block font-medium text-slate-700">
          Company Description
        </label>

        <textarea
          rows={6}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell students about your company..."
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#2E8B78]"
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-[#2E8B78] py-4 font-semibold text-white transition hover:bg-[#236D5E] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? mode === "edit"
            ? "Updating Company..."
            : "Creating Company..."
          : mode === "edit"
          ? "Update Company"
          : "Create Company"}
      </button>
    </form>
  );
}

export default CompanyForm;