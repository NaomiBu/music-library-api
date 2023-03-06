const handleAPIError = require("~root/utils/handleAPIError");
const removeSongById = require("~root/actions/Songs/removeSongById")

const deleteSongById  = async (req, res) => {
  const {songID} = req.params; 
  try {
  const { song } = await removeSongById({songID});
    res.status(201).send({
      song
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteSongById;
