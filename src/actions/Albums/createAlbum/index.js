const insertAlbum = require("./queries/insertAlbum");

const createAlbums = async ({ name, year, artist_id }) => {
    const albumId = await insertAlbum({ name, year, artist_id});
    return { albumId };
};

module.exports = createAlbums;