const handleAPIError = require("~root/utils/handleAPIError");
const fetchArtistById = require("~root/actions/artists/fetchArtist");

const getArtistById = async (req, res) => {
const {artistID} = req.params; 

    try {
        const {artist} = await fetchArtistById ({artistID});
        res.status(201).send({
            artist
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getArtistById;
