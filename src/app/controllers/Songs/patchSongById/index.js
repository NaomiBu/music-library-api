const modifySongById  = require("~root/actions/Songs/modifySongById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchSongById = async (req, res) => {

const {songID} = req.params; 
const { name, album_id, artist_id} = req.body; 
 try{
    const { song } = await modifySongById({
        songID,
        name,
        artist_id,
        album_id
      });
  
      res.status(201).send({
        song
      });

    } catch (err) {
        handleAPIError(res, err);
      }


};

module.exports = patchSongById; 

