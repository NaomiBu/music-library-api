const {submitQuery } = require("~root/lib/database");
const selectAlbumById = ({albumID}) => submitQuery`
SELECT * FROM Albums
WHERE album_id = ${albumID};
`;

module.exports = selectAlbumById;