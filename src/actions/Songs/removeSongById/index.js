const deleteSong = require("./queries/removeSong");

const removeSongById = async ({songID}) => {
  const song = await deleteSong({songID});
  return { song };
};

module.exports = removeSongById;
