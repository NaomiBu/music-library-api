const {submitQuery, getInsertId } = require("~root/lib/database");
const selectAllSongs = () => submitQuery`
SELECT * FROM Songs;
`;

module.exports = getInsertId(selectAllSongs);