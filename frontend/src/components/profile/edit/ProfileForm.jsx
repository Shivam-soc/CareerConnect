import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { updateProfile } from "../../../api/userApi";

import BasicInfoSection from "./BasicInfoSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import CertificationsSection from "./CertificationsSection";
import SocialLinksSection from "./SocialLinksSection";
import ResumeSection from "./ResumeSection";
import ProfilePictureSection from "./ProfilePictureSection";
import CoverPhotoSection from "./CoverPhotoSection";

function ProfileForm() {
  const { user, updateUser } = useAuth();

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    headline: "",
    bio: "",

    skills: [],
    education: [],
    experience: [],
    projects: [],
    certifications: [],

    socialLinks: {
      github: "",
      linkedin: "",
      portfolio: "",
      leetcode: "",
      geeksforgeeks: "",
    },

    resume: "",
    profilePicture: "",
    coverPhoto: "",
  });

  useEffect(() => {
    if (!user) return;

    setFormData({
      fullName: user.fullName || "",
      phone: user.phone || "",
      location: user.location || "",
      headline: user.headline || "",
      bio: user.bio || "",

      skills: user.skills || [],
      education: user.education || [],
      experience: user.experience || [],
      projects: user.projects || [],
      certifications: user.certifications || [],

      socialLinks: user.socialLinks || {
        github: "",
        linkedin: "",
        portfolio: "",
        leetcode: "",
        geeksforgeeks: "",
      },

      resume: user.resume || "",
      profilePicture: user.profilePicture || "",
      coverPhoto: user.coverPhoto || "",
    });
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const response = await updateProfile(formData);

      updateUser(response.data.user);

      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);

      alert(
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
      className="space-y-8"
    >
      <CoverPhotoSection
        formData={formData}
        setFormData={setFormData}
      />

      <ProfilePictureSection
        formData={formData}
        setFormData={setFormData}
      />

      <BasicInfoSection
        formData={formData}
        setFormData={setFormData}
      />

      <SkillsSection
        formData={formData}
        setFormData={setFormData}
      />

      <EducationSection
        formData={formData}
        setFormData={setFormData}
      />

      <ExperienceSection
        formData={formData}
        setFormData={setFormData}
      />

      <ProjectsSection
        formData={formData}
        setFormData={setFormData}
      />

      <CertificationsSection
        formData={formData}
        setFormData={setFormData}
      />

      <SocialLinksSection
        formData={formData}
        setFormData={setFormData}
      />

      <ResumeSection
        formData={formData}
        setFormData={setFormData}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-[#2E8B78] px-8 py-3 font-semibold text-white transition hover:bg-[#256f61] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;