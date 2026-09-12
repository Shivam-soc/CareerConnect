import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "../../api/userApi";
import { toast } from "react-hot-toast";

function RecruiterProfileForm() {
  const { user, updateUser } = useAuth();

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    designation: "",
    location: "",
    bio: "",
    linkedin: "",
    profilePicture: "",
  });

  useEffect(() => {
    if (!user) return;

    setFormData({
      fullName: user.fullName || "",
      email: user.email || "",
      phone: user.phone || "",
      designation: user.designation || "",
      location: user.location || "",
      bio: user.bio || "",
      linkedin: user.linkedin || "",
      profilePicture: user.profilePicture || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const response = await updateProfile(formData);

      updateUser(response.data.user);

      toast.success("Profile updated successfully.");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update profile."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#2E8B78]"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Email
          </label>

          <input
            type="email"
            value={formData.email}
            disabled
            className="w-full rounded-xl border border-slate-300 bg-slate-100 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#2E8B78]"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Designation
          </label>

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="HR Manager"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#2E8B78]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Bangalore"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#2E8B78]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            LinkedIn
          </label>

          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#2E8B78]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Profile Picture URL
          </label>

          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#2E8B78]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            About
          </label>

          <textarea
            rows={5}
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell candidates about yourself..."
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#2E8B78]"
          />
        </div>

      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-[#2E8B78] px-8 py-3 font-semibold text-white transition hover:bg-[#256f61]"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}

export default RecruiterProfileForm;