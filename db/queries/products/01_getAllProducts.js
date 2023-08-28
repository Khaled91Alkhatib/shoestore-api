const getAllProducts = (db) => {
  return db.query(`

  SELECT products.id as id, products.sku as sku,
  categories.id as category_id, categories.cat as category,
  styles.id as style_id, styles.style as style,
  colors.id as color_id, colors.color as color,
  products.name as name,
  products.description as description, products.image1 as image1,
  products.image2 as image2, products.image3 as image3,
  products.price as price, products.disp as disp
  FROM products
  JOIN categories ON category_id = categories.id
  JOIN styles ON style_id = styles.id
  JOIN colors ON color_id = colors.id
  ORDER BY products.id;

  `);
};

module.exports = { getAllProducts };