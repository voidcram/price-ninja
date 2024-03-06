import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/Product.js";
import "./models/Change.js";
import "./models/Category.js";

// Create tables if they dont exist
async function syncDatabase() {
    try {
        // Uncomment for reset all tables
        // await sequelize.sync({force: true});
        await sequelize.sync();
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Unable to sync database:', error);
        process.exit(1);
    }
}

syncDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("API running on port:", PORT);
});