const deleteSong = require("./queries/removeSong");

const removeSongById = async ({songID}) => {
  const song = await deleteAlbum({songID});
  return { song };
};

module.exports = removeSongById;
