import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Change = sequelize.define("changes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "unknown",
    },
    old: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0",
    },
    new: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0",
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: 'created_at',
    indexes: [
      {
        unique: false,
        fields: ["product_id"],
      },
    ],
  }
);
