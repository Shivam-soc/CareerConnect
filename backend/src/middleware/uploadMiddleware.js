import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folder = "careerconnect";

    if (file.fieldname === "resume") {
      folder = "careerconnect/resumes";
    } else if (file.fieldname === "profilePicture") {
      folder = "careerconnect/profile-pictures";
    } else if (file.fieldname === "coverPhoto") {
      folder = "careerconnect/cover-photos";
    } else if (file.fieldname === "logo") {
      folder = "careerconnect/company-logos";
    }

    return {
      folder,
      resource_type: "auto",
      allowed_formats: [
        "jpg",
        "jpeg",
        "png",
        "pdf",
        "webp",
      ],
    };
  },
});

const upload = multer({
  storage,
});

export default upload;