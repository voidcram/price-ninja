import puppeteer from "puppeteer";

const scrape = async (url) => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();

    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const productData = await page.evaluate(() => {
      const schema = document.getElementById("microdata-product-script");
      if (!schema)
        throw new Error("Invalid product page, cannot find product schema");

      const schemaJSON = JSON.parse(schema.textContent);
      let offers = schemaJSON.offers;

      // if have nested offers key get that
      if (offers.hasOwnProperty("offers")) offers = offers.offers;

      let priceWithoutIVA = offers.price / (1 + 21 / 100);
      priceWithoutIVA = parseFloat(priceWithoutIVA.toFixed(2));
      const inStock = offers.availability.replace("https://schema.org/", "") == "InStock"

      return {
        name: schemaJSON.name,
        url: schemaJSON.url,
        seller: offers.offeredBy,
        category: schemaJSON.category,
        brand: schemaJSON.brand.name,
        stock: inStock,
        current_price: priceWithoutIVA,
        original_price: priceWithoutIVA,
        lowest_price: priceWithoutIVA
      };
    });

    await browser.close();

    return productData;
  } catch (error) {

    await browser.close();
    throw error;
  }
};

export default { scrape };
