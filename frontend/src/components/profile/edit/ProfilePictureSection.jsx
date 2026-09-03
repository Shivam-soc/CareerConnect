import { useRef } from "react";
import { Camera, Trash2 } from "lucide-react";

function ProfilePictureSection({ formData, setFormData }) {
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      profilePicture: file,
      profilePicturePreview: preview,
    }));
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      profilePicture: "",
      profilePicturePreview: "",
    }));
  };

  const image =
    formData.profilePicturePreview ||
    formData.profilePicture ||
    "";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div>

        <h2 className="text-xl font-semibold">
          Profile Picture
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload a professional profile picture.
        </p>

      </div>

      <div className="mt-8 flex flex-col items-center">

        {image ? (
          <img
            src={image}
            alt="Profile"
            className="h-40 w-40 rounded-full object-cover border-4 border-[#E8F7F3]"
          />
        ) : (
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#E8F7F3]">

            <Camera
              size={48}
              className="text-[#2E8B78]"
            />

          </div>
        )}

        <input
          type="file"
          hidden
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        <div className="mt-6 flex gap-4">

          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="rounded-xl bg-[#2E8B78] px-6 py-3 text-white hover:bg-[#236d5e]"
          >
            Upload Picture
          </button>

          {image && (

            <button
              type="button"
              onClick={removeImage}
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

export default ProfilePictureSection;