const sqlite3 = require("sqlite3").verbose();
const dbPath = "./dua_main.sqlite";

let db = new sqlite3.Database(dbPath, (err)=>{
    if(err){
        console.error(err.message)
    }
    else{
        console.log("connected to the database");
    }
});

module.exports = db;