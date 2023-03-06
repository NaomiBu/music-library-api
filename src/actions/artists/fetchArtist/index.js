const selectArtistById = require("./queries/selectArtistById");

 const fetchArtistById = async ({artistID}) => {
    const artist = await selectArtistById({artistID}) ;
    return {artist}
    };

  
  module.exports = fetchArtistById;