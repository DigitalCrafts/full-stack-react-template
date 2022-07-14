// it is best not to edit this file and instead adjust the values inside of the
// .env file at the root of the project. Only make changes here if you're sure
// you know what you are doing

require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'fullstackreact',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  },
}
