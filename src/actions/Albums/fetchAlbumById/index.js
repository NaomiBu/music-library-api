const selectAlbumById = require("./queries/selectAlbumById");

 const fetchAlbumById = async ({albumID}) => {
    const album = await selectAlbumById({albumID}) ;
    return {album}
    };

  
  module.exports = fetchAlbumById;