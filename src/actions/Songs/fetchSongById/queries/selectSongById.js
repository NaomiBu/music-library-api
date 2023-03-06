const {submitQuery } = require("~root/lib/database");
const selectSongById = ({songID}) => submitQuery`
SELECT * FROM Songs
WHERE song_id = ${songID};
`;

module.exports = selectSongById;