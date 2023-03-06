const selectSongById = require("./queries/selectSongById");

 const fetchSongById = async ({songID}) => {
    const song = await selectSongById({songID}) ;
    return {song}
    };

  
  module.exports = fetchSongById;