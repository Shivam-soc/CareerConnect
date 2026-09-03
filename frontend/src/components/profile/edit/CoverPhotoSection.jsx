import { useRef } from "react";
import { ImagePlus, Trash2 } from "lucide-react";

function CoverPhotoSection({ formData, setFormData }) {
  const fileInputRef = useRef(null);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      coverPhoto: file,
      coverPhotoPreview: preview,
    }));
  };

  const removeCover = () => {
    setFormData((prev) => ({
      ...prev,
      coverPhoto: "",
      coverPhotoPreview: "",
    }));
  };

  const cover =
    formData.coverPhotoPreview ||
    formData.coverPhoto ||
    "";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div>

        <h2 className="text-xl font-semibold text-slate-900">
          Cover Photo
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload a banner image that represents your profile.
        </p>

      </div>

      <div className="mt-8">

        {cover ? (

          <img
            src={cover}
            alt="Cover"
            className="h-56 w-full rounded-2xl object-cover border"
          />

        ) : (

          <div className="flex h-56 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">

            <ImagePlus
              size={48}
              className="text-slate-400"
            />

            <p className="mt-4 text-slate-500">
              No Cover Photo
            </p>

          </div>

        )}

        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileInputRef}
          onChange={handleCoverChange}
        />

        <div className="mt-6 flex gap-4">

          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="rounded-xl bg-[#2E8B78] px-6 py-3 font-medium text-white hover:bg-[#236d5e]"
          >
            Upload Cover
          </button>

          {cover && (

            <button
              type="button"
              onClick={removeCover}
              className="flex items-center gap-2 rounded-xl border border-red-300 px-6 py-3 text-red-600 hover:bg-red-50"
            >
              <Trash2 size={18} />
              Remove
            </button>

          )}

        </div>

      </div>

    </section>
  );
}

export default CoverPhotoSection;