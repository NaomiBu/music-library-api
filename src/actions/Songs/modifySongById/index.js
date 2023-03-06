const updateSongById = require("./queries/UpdateSongById");

const modifySongById = async ({songID, name, artist_id, album_id}) => {
    const song = await updateSongById ({
songID,
name,
album_id,
artist_id
    });

    return {song}; 
};

module.exports = modifySongById; 