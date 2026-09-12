import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

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

  const [logoFile, setLogoFile] = useState(null);

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
      toast.error("Unable to load company.");
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

  const handleLogoChange = (e) => {
    if (e.target.files.length > 0) {
      setLogoFile(e.target.files[0]);

      setFormData((prev) => ({
        ...prev,
        logo: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "logo") {
          data.append(key, value);
        }
      });

      if (logoFile) {
        data.append("logo", logoFile);
      }

      if (mode === "create") {
        await createCompany(data);
        toast.success("Company created successfully.");
      } else {
        await updateCompany(id, data);
        toast.success("Company updated successfully.");
      }

      navigate("/recruiter/companies", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      toast.error(
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
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Company Information
        </h2>

        <p className="mt-1 text-slate-500">
          Fill in your company details.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Company Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-[#2E8B78] outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Industry
          </label>

          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-[#2E8B78] outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Website
          </label>

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-[#2E8B78] outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Company Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="w-full rounded-xl border border-slate-300 p-3"
          />

          {formData.logo && (
            <img
              src={formData.logo}
              alt="Company Logo"
              className="mt-4 h-24 w-24 rounded-xl border object-cover"
            />
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-[#2E8B78] outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Company Size
          </label>

          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3"
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

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">
            Founded
          </label>

          <input
            type="number"
            name="founded"
            value={formData.founded}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3"
          />
        </div>

      </div>

      <div className="mt-8">
        <label className="mb-2 block font-medium">
          Company Description
        </label>

        <textarea
          rows={6}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 p-4"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-[#2E8B78] py-4 font-semibold text-white hover:bg-[#236D5E] disabled:opacity-60"
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