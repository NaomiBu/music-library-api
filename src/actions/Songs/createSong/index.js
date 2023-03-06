const insertSong = require("./queries/insertSong");
  
  const createSong = async ({name}) => {
      const songId = await insertArtist({ name });
      return { songId };
  };
  
  module.exports = createSong;