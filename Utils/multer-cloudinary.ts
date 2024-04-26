import multer from "multer";
import cloudinary from "../src/services/cloudinary/cloudinary.services";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

const filter = (req: any, file: any, cb: any) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
    return cb(
      new Error("Only images with jpg, jpeg, png, or gif formats are allowed"),
      false
    );
  }
  cb(null, true);
};

const multerCloudinaryConnect = multer({
  storage: storage,
  fileFilter: filter,
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb
  },
});

console.log("multerCloudinaryConnect", multerCloudinaryConnect);

export default multerCloudinaryConnect;
