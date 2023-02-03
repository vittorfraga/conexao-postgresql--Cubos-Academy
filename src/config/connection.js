const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
});

pool.connect((err) => {
  if (err) {
    console.error(`Failed to connect to the database: ${err}`);
    process.exit(1);
  } else {
    console.log("Successfully connected to the database.");
  }
});

module.exports = pool;
