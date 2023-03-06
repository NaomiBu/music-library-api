const handleAPIError = require("~root/utils/handleAPIError");
const fetchSongById = require("~root/actions/Songs/fetchSongById");

const getSongById = async (req, res) => {
const {songID} = req.params; 

    try {
        const {song} = await fetchArtistById ({songID});
        res.status(201).send({
            song
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getSongById;
