const {submitQuery } = require("~root/lib/database");
const selectArtistById = ({artistID}) => submitQuery`
SELECT * FROM Artists
WHERE artist_id = ${artistID};
`;

module.exports = selectArtistById;