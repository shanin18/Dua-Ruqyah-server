const db = require("../database");

const getCategories =(req, res) => {
  // Fetch all categories
  const query = "SELECT * FROM category";

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error fetching products:", err.message);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal server error" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(rows));
    }
  });
}

module.exports = { getCategories };