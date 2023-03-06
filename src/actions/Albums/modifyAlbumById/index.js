const updateAlbumById = require("./queries/updateAlbumById");

const modifyAlbumById = async ({albumId, year, name}) => {
    const album = await updateArtistById ({
albumId,
genre,
name
    });

    return {album}; 
};

module.exports = modifyAlbumById; 