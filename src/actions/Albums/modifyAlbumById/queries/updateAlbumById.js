const { submitQuery, sql, sqlReduce } = require("~root/lib/database");
  
  const updateAlbumById = ({ albumId, year = null, name = null }) => {
    const updates = [];
  
    if (year !== null) {
      updates.push(sql`genre = ${year}`);
    }
  
    if (name !== null) {
      updates.push(sql`name = ${name}`);
    }
  
    if (updates.length !== 0) {
      return submitQuery`
     UPDATE
       Albums
     SET
       ${updates.reduce(sqlReduce)}
     WHERE
       album_id = ${albumId};
   `;
    }
    return Promise.resolve();
  };
  
  module.exports = updateAlbumById;
  
  