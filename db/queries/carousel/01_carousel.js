const getCarouselImages = (db) => {
  return db.query(`

  SELECT * FROM carousel
  ORDER BY id;
  
  `);
};

module.exports = { getCarouselImages }