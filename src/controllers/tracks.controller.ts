import { Request, Response } from "express";
import prisma from "../db/prismaClient";
import cloudinary from "../services/cloudinary/cloudinary.services";

export const getAllTracks = async (req: Request, res: Response) => {
  try {
    const allSongs = await prisma.track.findMany();
    res.status(200).send(allSongs);
  } catch (error) {
    res.status(400).send(error);
  }

  export const createTracks = async (req: Request, res: Response) => {
    const { name, url, genreId, albumId } = req.body;
    const thumbnail = req.file?.path;
    const UserId = parseInt(req.params.userId);
    console.log(req.body);
    try {
      const newTrack = await prisma.track.create({
        data: {
          name: name,
          url,
          genreId,
          albumId,
          thumbnail: uploadTrackToCloudinary.secure_url,
        },
      });
      const newArtistTrack = await prisma.artistTracks.create({
        data: { UserId, trackId: newTrack.id },
      });
      const fileName = req.file?.originalname;

      const fileNameWithoutExtention = fileName?.split(".")[0];

      const uploadTrackToCloudinary = await cloudinary.uploader.upload(
        thumbnail,
        {
          folder: "Tracks Thumbnail",
          public_id_img: "track:" + fileNameWithoutExtention + "-" + Date.now(),
        }
      );

      if (!uploadTrackToCloudinary) {
        return res.status(400).send({
          message: "Sync error with cloudinary. The image wasn't uploaded",
        });
      }
      res.status(200).send(newTrack);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  export const trackUpdated = async (req: Request, res: Response) => {
    const { name, url, genreId, albumId, thumbnail } = req.body;
    const userId = parseInt(req.params.userId);
    try {
      const updatedTrack = await prisma.track.update({
        where: { id: userId },
        data: { name, url, genreId, albumId, thumbnail },
      });
      res.status(200).send(updatedTrack);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  function getPublicId(url: any) {
    const splitUrl = url.split("/");
    const concatUrlLastTwoPositions = splitUrl.splice(7).join("/");
    const publicID = concatUrlLastTwoPositions.split(".")[0];

    return publicId;
  }

  const destroyImageAtCloudinary = await cloudinary.uploader.destroy(
    getPublicId(findTrack?.image)
  );

  if (destroyImageAtCloudinary.result === "not found") {
    return res.status(400).send({
      message: "The image wasn't found in cloudinary",
    });
  }

if destroyImageAtCloudinary.result === "ok") {
  console.log("Image deleted succesfully")
  },
  );
}



  export const deleteTrack = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);

    if (!id) {
      return res.status(400).send({ message: "The field id is required" });
    }

    try {
      const findTrack = await prisma.track.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      const trackDeleted = await prisma.track.delete({
        where: { id: userId },
      });
      res.status(200).send(trackDeleted);
    } catch (error) {
      res.status(400).send(error);
    }
  };
};
