const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
/**
 * @typedef {{
 *   sequelize: import('sequelize').Sequelize,
 *   Sequelize: import('sequelize')
 * } & {
 *   [key: string]: typeof import('sequelize/lib').Model & {
 *     associate?: (db: ModelsExport) => void,
 *     [key: string]: any
 *   },
 * }} ModelsExport
 */
/** @type {ModelsExport} */
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize.Sequelize(process.env[config.use_env_variable] || '', config);
} else {
  sequelize = new Sequelize.Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  const model = db[modelName];
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
