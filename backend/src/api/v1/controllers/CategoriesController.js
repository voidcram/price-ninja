import { Category } from "../models/index.js";
import logger from "../../../config/logger.js";

export async function getAll(req, res) {
  try {
    const categories = await Category.findAll();
    return res.json(categories);
  } catch (error) {
    logger.error(error, "Error getting all categories");
    return res.status(500).json({ message: "Internal Server Error" });
  }
}