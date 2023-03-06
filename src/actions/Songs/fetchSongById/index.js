const selectSongtById = require("./queries/selectSongById");

 const fetchSongById = async ({songID}) => {
    const song = await selectArtistById({songID}) ;
    return {song}
    };

  
  module.exports = fetchSongById;