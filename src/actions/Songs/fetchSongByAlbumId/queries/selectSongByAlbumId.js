const {submitQuery } = require("~root/lib/database");
const selectSongByAlbumId = ({albumID}) => submitQuery`
SELECT * FROM Songs
WHERE album_id = ${albumID};
`;

module.exports = selectSongByAlbumId;