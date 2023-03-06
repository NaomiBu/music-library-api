const updateSongById = require("./queries/UpdateSongById");

const modifySongById = async ({songId, name}) => {
    const song = await updateSongById ({
songId,
name
    });

    return {song}; 
};

module.exports = modifySongById; 