const handleAPIError = require("~root/utils/handleAPIError");
const fetchSongByAlbumId = require("~root/actions/Songs/fetchSongByAlbumId");

const getSongByAlbumId = async (req, res) => {
const {albumID} = req.params; 

    try {
        const {song} = await fetchSongByAlbumId ({albumID});
        res.status(201).send({
            song
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getSongByAlbumId;
