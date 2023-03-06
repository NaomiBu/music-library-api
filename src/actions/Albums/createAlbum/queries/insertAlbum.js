const { submitQuery, getInsertId } = require("~root/lib/database");
  
const insertAlbum = ({ name, year, artist_id}) => submitQuery`
INSERT INTO Albums (name, year, artist_id)
VALUES (${name}, ${year}, ${artist_id});
`;

module.exports = getInsertId(insertAlbum);
