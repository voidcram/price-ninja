import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/database.js";

export const Category = sequelize.define("categories",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0",
      unique: true
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
