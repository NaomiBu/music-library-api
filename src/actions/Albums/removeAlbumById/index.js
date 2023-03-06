const deleteAlbum = require("./queries/removeAlbum");

const removeAlbumById = async ({albumID}) => {
  const album = await deleteAlbum({albumID});
  return { album };
};

module.exports = removeAlbumById;
