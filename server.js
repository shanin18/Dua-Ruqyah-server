// Importing required modules
const http = require("http");
const url = require("url");
const { getSubCategoriesById } = require("./routes/subCategoriesById");
const { getCategories } = require("./routes/category");
const { getDuasByCategoryAndSubcategory } = require("./routes/duasByCategoryAndSubcategory");
const { getAllDua } = require("./routes/allDua");
const { getSubCategories } = require("./routes/subCategories");

// Create HTTP server
const server = http.createServer((req, res) => {
  // Parsing request URL
  const { pathname, query } = url.parse(req.url, true);

  // Set CORS headers to allow requests from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Routing
  if (pathname === "/categories" && req.method === "GET") {
    // Handle request for categories
    getCategories(req, res);

  } else if (pathname === "/sub-categories" && req.method === "GET") {
    // Handle request for sub-categories
    const { cat_id } = query;
    if (cat_id) {
      getSubCategoriesById(cat_id, req, res);
    } else {
      getSubCategories(req, res);
    }

  } else if (pathname === "/duas" && req.method === "GET") {
    // Handle request for duas
    const { cat, subcat_id } = query;
    if (cat && subcat_id) {
      getDuasByCategoryAndSubcategory(cat, subcat_id, req, res);
    } else {
      getAllDua(req, res);
    }
    
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
