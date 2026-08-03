const { Pool } = require("pg");

// load env variables
require("dotenv").config();

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL
})