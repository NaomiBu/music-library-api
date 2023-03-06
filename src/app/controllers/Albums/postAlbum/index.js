const handleAPIError = require("~root/utils/handleAPIError");
  const createAlbums = require("~root/actions/Albums/createAlbum"); 
  
  
const postAlbum = async (req, res) => {
    const { name, year, artist_id} = req.body;

    try {
        const { albumId } = await createAlbums({ name, year, artist_id });

        res.status(201).send({
            albumId
        });
    } catch (err) {
        handleAPIError(res, err);
    }
};

module.exports = postAlbum;