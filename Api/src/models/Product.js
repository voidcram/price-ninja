import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import { Change } from "./Change.js";

export const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // Assign UUID v4 as the default value for 'id'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0",
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0",
    },
    vendor: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "0",
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
    currentPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    originalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    lowestPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);

Change.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(Change, { foreignKey: 'productId' });