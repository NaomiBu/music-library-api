const {submitQuery } = require("~root/lib/database");
const selectSongByArtistId = ({artistID}) => submitQuery`
SELECT * FROM Songs
WHERE artist_id = ${artistID};
`;

module.exports = selectSongByArtistId;