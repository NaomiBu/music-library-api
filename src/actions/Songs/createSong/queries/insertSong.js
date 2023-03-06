const {submitQuery, getInsertId } = require("~root/lib/database");

const insertSong = ({name}) => submitQuery`
INSERT INTO Songs (name)
VALUES (${name});
`;

module.exports = getInsertId(insertSong);