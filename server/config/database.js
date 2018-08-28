require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: "postgres"
  }
}

