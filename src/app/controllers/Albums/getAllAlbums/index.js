const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllAlbums = require("~root/actions/Albums/fetchAllAlbums");

const getAllAlbums = async (req, res) => {

    try {
        const {albums} = await fetchAllAlbums ();
        res.status(201).send({
            albums
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getAllAlbums;
