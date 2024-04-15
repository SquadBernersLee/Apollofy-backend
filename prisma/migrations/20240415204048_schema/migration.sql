-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "profilePicture" TEXT,
    "country" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "Artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumArtist" (
    "id" SERIAL NOT NULL,
    "artistsId" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "AlbumArtist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistTracks" (
    "id" SERIAL NOT NULL,
    "trackId" INTEGER NOT NULL,
    "playlistId" INTEGER NOT NULL,

    CONSTRAINT "PlaylistTracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikedTracks" (
    "id" SERIAL NOT NULL,
    "trackId" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "LikedTracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowPlaylist" (
    "id" SERIAL NOT NULL,
    "PlaylistId" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "FollowPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikedAlbums" (
    "id" SERIAL NOT NULL,
    "AlbumId" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "LikedAlbums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Followers" (
    "id" SERIAL NOT NULL,
    "followerId" INTEGER NOT NULL,
    "followedUserId" INTEGER NOT NULL,

    CONSTRAINT "Followers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_profilePicture_key" ON "User"("profilePicture");
