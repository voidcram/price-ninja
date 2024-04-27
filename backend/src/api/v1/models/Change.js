import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/database.js";

export const Change = sequelize.define("changes",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
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
