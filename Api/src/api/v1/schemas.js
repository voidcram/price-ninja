import Joi from "joi";

// Check if its a url of PcComponentes
function validateURL(value, helpers) {
  try {
    const parsedURL = new URL(value);
    if (parsedURL.hostname === "www.pccomponentes.com") {
      return value; // Return the validated URL
    } else {
      throw new Error("URL is not from the allowed domain");
    }
  } catch (error) {
    return helpers.error("any.invalid");
  }
}

export const updateSchema = Joi.object({
  name: Joi.string().max(50).required(),
  url: Joi.string().uri().custom(validateURL, 'custom validation').required(),
  category: Joi.string().max(30).required(),
  vendor: Joi.string().max(30).required(),
  brand: Joi.string().max(30).required(),
  stock: Joi.boolean().required(),
  currentPrice: Joi.number().precision(2).required(),
  originalPrice: Joi.number().precision(2).required(),
  lowestPrice: Joi.number().precision(2).required()
});

export const scrapeSchema = Joi.object({
  url: Joi.string().uri().custom(validateURL, 'custom validation').required(),
});