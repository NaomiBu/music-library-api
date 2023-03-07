const selectSongByAlbumId = require("./queries/selectSongByAlbumId");

const fetchSongByAlbumId =  async ({albumID}) => {
    const song = await selectSongByAlbumId({albumID}) ;
    return {song}
    };

  
  module.exports = fetchSongByAlbumId;