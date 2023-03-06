const handleAPIError = require("~root/utils/handleAPIError");
  const createSong = require("~root/actions/Songs/createSong"); 
  
  
const postSong = async (req, res) => {
    const { name} = req.body;

    try {
        const { artistId } = await createSong({ name });

        res.status(201).send({
            artistId
        });
    } catch (err) {
        handleAPIError(res, err);
    }
};

module.exports = postSong;