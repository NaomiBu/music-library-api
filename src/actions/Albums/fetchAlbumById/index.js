const selectAlbumById = require("./queries/selectAlbumById");

 const fetchAlbumById = async ({albumID}) => {
    const album = await selectArtistById({albumID}) ;
    return {album}
    };

  
  module.exports = fetchAlbumById;