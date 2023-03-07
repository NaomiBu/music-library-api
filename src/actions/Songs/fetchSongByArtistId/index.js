const selectSongByArtistId = require("./queries/selectSongByArtistId");

const fetchSongByArtistId =  async ({artistID}) => {
    const song = await selectSongByArtistId({artistID}) ;
    return {song}
    };

  
  module.exports = fetchSongByArtistId;