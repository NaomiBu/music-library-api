const handleAPIError = require("~root/utils/handleAPIError");
const fetchSongByArtistId = require("~root/actions/Songs/fetchSongByArtistId");

const getSongByArtistId = async (req, res) => {
const {artistID} = req.params; 

    try {
        const {song} = await fetchSongByArtistId ({artistID});
        res.status(201).send({
            song
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getSongByArtistId;