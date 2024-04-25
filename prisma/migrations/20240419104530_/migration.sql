-- CreateTable
CREATE TABLE "ArtistTracks" (
    "id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,

    CONSTRAINT "ArtistTracks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ArtistTracks" ADD CONSTRAINT "ArtistTracks_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistTracks" ADD CONSTRAINT "ArtistTracks_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
