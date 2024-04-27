import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/database.js";
import { Change } from "./Change.js";
import { Category } from "./Category.js";

export const Product = sequelize.define("products",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0",
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "0",
    },
    thumb: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "0",
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "0",
    },
    seller: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "0",
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "0",
    },
    stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    current_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    original_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    lowest_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',

    indexes: [
      {
        unique: false,
        fields: ["id"],
      },
      {
        unique: false,
        fields: ["url"],
      },
    ],
  }
);

Change.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(Change, { foreignKey: 'product_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });