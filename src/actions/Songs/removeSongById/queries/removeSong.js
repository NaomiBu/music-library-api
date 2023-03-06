const {submitQuery} = require("~root/lib/database");

const deleteSong = ({songID}) => submitQuery`
DELETE FROM Songs
WHERE song_id = ${songID};
`;

module.exports = deleteSong;
