import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Category = sequelize.define("categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0",
    },
  },
  {
    timestamps: false,
    updatedAt: false,
    createdAt: 'created_at',
    indexes: [
      {
        unique: false,
        fields: ["id"],
      },
    ],
  }
);
