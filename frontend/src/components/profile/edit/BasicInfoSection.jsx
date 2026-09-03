function BasicInfoSection({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E8B78] focus:ring-2 focus:ring-[#2E8B78]/10";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div>

        <h2 className="text-xl font-semibold text-slate-900">
          Basic Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Update your personal details that recruiters will see.
        </p>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {/* Full Name */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClass}
          />

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            value={formData.email}
            disabled
            className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500"
          />

          <p className="mt-1 text-xs text-slate-400">
            Email cannot be changed.
          </p>

        </div>

        {/* Location */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
          />

        </div>

      </div>

      {/* Headline */}

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium">
          Professional Headline
        </label>

        <input
          type="text"
          name="headline"
          placeholder="e.g. Full Stack Developer | MERN Stack | AI Enthusiast"
          value={formData.headline}
          onChange={handleChange}
          className={inputClass}
        />

      </div>

      {/* Bio */}

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium">
          About
        </label>

        <textarea
          rows={6}
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell recruiters about yourself..."
          className={inputClass}
        />

        <p className="mt-2 text-xs text-slate-400">
          Briefly describe yourself, your interests, achievements and career goals.
        </p>

      </div>

    </section>
  );
}

export default BasicInfoSection;