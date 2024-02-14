const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "jwttutorial",
  port: 5432,
  password: "h123",
  host: "localhost",
});

module.exports = pool;
