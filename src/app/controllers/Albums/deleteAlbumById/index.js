const handleAPIError = require("~root/utils/handleAPIError");
const removeAlbumById = require("~root/actions/Albums/removeAlbumById")

const deleteAlbumById  = async (req, res) => {
  const {albumID} = req.params; 
  try {
  const { album } = await removeAlbumById({albumID});
    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteAlbumById;
