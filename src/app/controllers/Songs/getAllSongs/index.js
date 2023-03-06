const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllSongs = require("~root/actions/Songs/fetchAllSongs");

const getAllSongs = async (req, res) => {

    try {
        const {songs} = await fetchAllSongs ();
        res.status(201).send({
            songs
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getAllSongs;
