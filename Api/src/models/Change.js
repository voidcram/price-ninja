import {DataTypes} from "sequelize";
import {sequelize} from "../database.js";

export const Change = sequelize.define('changes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0'
    },
    old: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    new: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: true // Sequelize will automatically manage 'createdAt' and 'updatedAt' fields
  });