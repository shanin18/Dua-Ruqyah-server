const db = require("../database");

// Define a function to handle the request
const getDuasByCategoryAndSubcategory = (cat, subcat_id, req, res) => {

  const query = "SELECT * FROM dua WHERE cat_id = ? AND subcat_id = ?";

  db.all(query, [cat, subcat_id], (err, rows) => {
    if (err) {
      console.error("Error fetching duas:", err.message);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal server error" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(rows));
    }
  });
};

module.exports = { getDuasByCategoryAndSubcategory };
