const {submitQuery, getInsertId } = require("~root/lib/database");
const selectAllAlbums = () => submitQuery`
SELECT * FROM Albums;
`;

module.exports = getInsertId(selectAllAlbums);