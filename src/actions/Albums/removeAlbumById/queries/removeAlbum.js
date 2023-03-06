const {submitQuery} = require("~root/lib/database");

const deleteAlbum = ({albumID}) => submitQuery`
DELETE FROM Albums
WHERE album_id = ${albumID};
`;

module.exports = deleteAlbum;
