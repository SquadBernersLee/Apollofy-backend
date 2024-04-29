

import cloudinary from "../src/services/cloudinary/cloudinary.services";

export function getPublicId(url: any) {
	const splitUrl = url.split("/");
	const concatUrlLastTwoPositions = splitUrl.splice(7).join("/");
	const publicId = concatUrlLastTwoPositions.split(".")[0];
	return publicId;
}

export async function uploadImageToCloudinary(image: any) {
	console.log("entro en uploadImageToCloudinary");

	const fileName = image?.originalname;

	const fileNameWithoutExtension = fileName?.split(".")[0];
	console.log({ fileNameWithoutExtension });

	const uploadImageToCloudinary = await cloudinary.uploader.upload(image, {
		folder: "movies",
		public_id: "movie_hub" + fileNameWithoutExtension + "-" + Date.now(),
	});

	if (!uploadImageToCloudinary) {
		return "Sync error with cloudinary. The image wasn't uploaded";
	}
	console.log({ uploadImageToCloudinary });

	return uploadImageToCloudinary.secure_url;
}

export async function deleteImageFromClodinary(publicId: any) {
	try {
		const destroyImageAtCloudinary = await cloudinary.uploader.destroy(
			publicId
		);
		if (destroyImageAtCloudinary.result === "not found") {
			return `The image wasn't found in cloudinary`;
		}
		if (destroyImageAtCloudinary.result === "ok") {
			return `Image deleted successfully`;
		}
	} catch (error) {
		return `Error deleting image: ${error}`;
	}
}
