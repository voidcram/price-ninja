import Sequelize from "sequelize";
import 'dotenv/config';
import logger from "./logger.js"

export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  logging: process.env.NODE_ENV == "development" ? console.log : false,
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  }
});

// Create tables if they dont exist
async function syncDatabase() {
  try {
      // Uncomment for reset all tables
      // await sequelize.sync({force: true});
      await sequelize.sync();
      logger.info(`Database synchronized successfully`)
  } catch (error) {
      logger.error(error, "Unable to sync database");
      process.exit(1);
  }
}

syncDatabase();