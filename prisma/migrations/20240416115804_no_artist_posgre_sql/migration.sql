/*
  Warnings:

  - You are about to drop the column `artistsId` on the `AlbumArtist` table. All the data in the column will be lost.
  - You are about to drop the `Artists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `artistId` to the `AlbumArtist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `albumId` on the `Track` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `genreId` on the `Track` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `genreId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `popularity` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rolId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `profilePicture` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateOfBirth` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_profilePicture_key";

-- AlterTable
ALTER TABLE "AlbumArtist" DROP COLUMN "artistsId",
ADD COLUMN     "artistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "albumId",
ADD COLUMN     "albumId" INTEGER NOT NULL,
DROP COLUMN "genreId",
ADD COLUMN     "genreId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "genreId" INTEGER NOT NULL,
ADD COLUMN     "popularity" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rolId" INTEGER NOT NULL,
ALTER COLUMN "profilePicture" SET NOT NULL,
ALTER COLUMN "dateOfBirth" SET NOT NULL;

-- DropTable
DROP TABLE "Artists";

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumArtist" ADD CONSTRAINT "AlbumArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumArtist" ADD CONSTRAINT "AlbumArtist_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistTracks" ADD CONSTRAINT "PlaylistTracks_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistTracks" ADD CONSTRAINT "PlaylistTracks_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedTracks" ADD CONSTRAINT "LikedTracks_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedTracks" ADD CONSTRAINT "LikedTracks_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowPlaylist" ADD CONSTRAINT "FollowPlaylist_PlaylistId_fkey" FOREIGN KEY ("PlaylistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowPlaylist" ADD CONSTRAINT "FollowPlaylist_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedAlbums" ADD CONSTRAINT "LikedAlbums_AlbumId_fkey" FOREIGN KEY ("AlbumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedAlbums" ADD CONSTRAINT "LikedAlbums_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "Followers_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "Followers_followedUserId_fkey" FOREIGN KEY ("followedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
