const handleAPIError = require("~root/utils/handleAPIError");
const fetchAlbumById = require("~root/actions/Albums/fetchAlbumById");

const getAlbumById = async (req, res) => {
const {albumID} = req.params; 

    try {
        const {album} = await fetchAlbumById ({albumID});
        res.status(201).send({
            album
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getAlbumById;
