const getStyles = (db) => {
  return db.query(`
  
  SELECT * FROM styles
  ORDER BY id;

  `);
};

module.exports = { getStyles };