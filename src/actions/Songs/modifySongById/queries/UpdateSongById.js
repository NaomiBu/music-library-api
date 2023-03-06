const { submitQuery, sql, sqlReduce } = require("~root/lib/database");
  
  const updateSongById = ({ songID, name = null, artist_id = null, album_id = null }) => {
    const updates = [];
  

    if (name !== null) {
      updates.push(sql`name = ${name}`);
    }
  
    if (artist_id !== null) {
      updates.push(sql`artist_id = ${artist_id}`);
    }
  
    if (album_id !== null) {
      updates.push(sql`album_id = ${album_id}`);
    }
  
    if (updates.length !== 0) {
      return submitQuery`
     UPDATE
       Songs
     SET
       ${updates.reduce(sqlReduce)}
     WHERE
       song_id = ${songID};
   `;
    }
    return Promise.resolve();
  };
  
  module.exports = updateSongById;