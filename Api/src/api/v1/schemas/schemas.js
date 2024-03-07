import Joi from "joi";

// Check if its a url of PcComponentes
function validateURL(value, helpers) {
  try {
    const parsedURL = new URL(value);
    if (parsedURL.hostname === "www.pccomponentes.com") {
      return value; // Return the validated URL
    }
    throw new Error();
  } catch (error) {
    return helpers.error("any.invalid", { message: "url have to be a valid url from PcComponentes domain" });
  }
}

export const productSchema = Joi.object({
  name: Joi.string().max(50).required(),
  url: Joi.string().uri().custom(validateURL, 'custom validation').required(),
  category: Joi.string().max(30).required(),
  seller: Joi.string().max(30).required(),
  brand: Joi.string().max(30).required(),
  stock: Joi.boolean().required(),
  current_price: Joi.number().precision(2).required(),
  original_price: Joi.number().precision(2).required(),
  lowest_price: Joi.number().precision(2).required()
});

export const patchSchema = Joi.object({
  name: Joi.string().max(50),
  url: Joi.string().uri().custom(validateURL, 'custom validation'),
  category: Joi.string().max(30),
  seller: Joi.string().max(30),
  brand: Joi.string().max(30),
  stock: Joi.boolean(),
  current_price: Joi.number().precision(2),
  original_price: Joi.number().precision(2),
  lowest_price: Joi.number().precision(2)
});

export const scrapeSchema = Joi.object({
  url: Joi.string().uri().custom(validateURL, 'custom validation').required(),
});