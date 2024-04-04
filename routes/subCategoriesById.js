const db = require("../database");

const getSubCategoriesById = (cat_id, req, res) => {
  // Fetch all subCategories
  const query = "SELECT * FROM sub_category where cat_id = ?";

  db.all(query, [cat_id], (err, rows) => {
    if (err) {
      console.error("Error fetching products:", err.message);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal server error" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(rows));
    }
  });
};

module.exports = { getSubCategoriesById };
