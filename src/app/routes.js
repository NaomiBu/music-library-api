const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");

const postArtist = require("./controllers/Artists/postArtist");
const patchArtistById = require("./controllers/Artists/patchArtistById" );
const getAllArtists = require("./controllers/Artists/getAllArtists");
const deleteArtistById = require("./controllers/Artists/deleteArtistById");
const getArtistById = require("./controllers/Artists/getArtistById");

const postAlbum = require("./controllers/Albums/postAlbum");
const deleteAlbumById = require("./controllers/Albums/deleteAlbumById");
const patchAlbumById = require("./controllers/Albums/patchAlbumById" );
const getAlbumById = require("./controllers/Albums/getAlbumById");
const getAllAlbums = require("./controllers/Albums/getAllAlbums")


const postSong = require("./controllers/Songs/postSong")
const deleteSongById = require("./controllers/Songs/deleteSongById");
const patchSongById = require("./controllers/Songs/patchSongById" );
const getSongById = require("./controllers/Songs/getSongById");
const getAllSongs = require("./controllers/Songs/getAllSongs");
const getSongByAlbumId = require("./controllers/Songs/getSongByAlbumId");
const getSongByArtistId = require("./controllers/Songs/getSongByArtistId");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);


//artists

router.post("/artists", postArtist);

router.patch("/artist/:artistId", patchArtistById);

router.get("/artists", getAllArtists);

router.delete("/artists/:artistID", deleteArtistById);

router.get("/artists/:artistID", getArtistById);

//albums

router.post("/albums", postAlbum);

router.delete("/album/:albumID", deleteAlbumById);

router.get("/album/:albumID", getAlbumById );

router.patch("/album/:albumId", patchAlbumById);

router.get("/albums", getAllAlbums);

//songs

router.post("/songs", postSong);

router.delete("/song/:songID", deleteSongById);

router.get("/song/:songID", getSongById );

router.patch("/song/:songID", patchSongById);

router.get("/songs", getAllSongs);

router.get("/songsInAlbum/:albumID", getSongByAlbumId);

router.get("/songsByArtist/:artistID", getSongByArtistId);

module.exports = router;
