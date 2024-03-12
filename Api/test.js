import { Cluster } from "puppeteer-cluster";
import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";
import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

puppeteer.use(stealthPlugin());

const base_url = "https://www.pccomponentes.com/";
const categories = [
  //   "tarjetas-graficas",
  "placas-base",
  // "procesadores",
  // "discos-duros",
  // "discos-duros-ssd",
  // "memorias-ram",
  // "refrigeracion-liquida",
  // "tarjetas-sonido",
  // "torres",
  // "ventiladores-suplementarios",
  // "fuentes-alimentacion",
  // "ventiladores-cpu",
];

const getNumberOfPages = async (page) => {
  await page.waitForSelector("#paginator");
  return await page.evaluate(() => {
    return document
      .querySelector("#paginator span")
      .textContent.replace("Página 1 de ", "");
  });
};

const getProductsInfo = async (page) => {
  await page.waitForSelector("a[data-product-name]");
  const products = await page.evaluate(() => {
    const productLinks = document.querySelectorAll(
      "a[data-product-category][data-product-category]:not([data-product-category='CATEGORÍA'])"
    );
    const productAttributes = [];

    productLinks.forEach((link) => {
      const thumb = link.querySelector("img").src;
      const img = thumb.replace("thumb", "img").replace(/\/w-\d+-\d+\//, "/");
      const url = link.getAttribute("href");
      const seller = link.getAttribute("data-product-seller");
      const brand = link.getAttribute("data-product-brand");
      const current_price = link.getAttribute("data-product-price");
      const name = link.getAttribute("data-product-name");
      const category = link.getAttribute("data-product-category");
      const stock = true;

      productAttributes.push({
        name,
        url,
        thumb,
        img,
        seller,
        category,
        brand,
        stock,
        current_price,
        original_price: current_price,
        lowest_price: current_price,
      });
    });

    return productAttributes;
  });

  return products;
};

const categoryScraper = async () => {
  // Start cluster
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 1,
    // monitor: true,
    sameDomainDelay: 1500,

    puppeteer,
    puppeteerOptions: {
      headless: "new",
    },
  });

  //   Handle errors
  cluster.on("taskerror", (err, data) => {
    console.log(`Error crawling ${data}: ${err.message}`);
  });

  //   Extract products info
  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);

    const numberPages = await getNumberOfPages(page);
    logger.info(`URL: ${url} | Paginas: ${numberPages}`);

    // go through all the pages start on page 2
    for (let index = 2; index <= numberPages; index++) {
      const nextPage = `${url}?page=${index}`;
      logger.info(`Extracting products info from ${url}?page=${index}`);
      const products = await getProductsInfo(page);
      logger.info(`Products extracted url ${url} | Page: ${index} | Products: ${products.length}`);
      await page.goto(nextPage);
    }
  });

  //   Add to queue all the categories
  for (const category of categories) {
    const url = base_url + category;
    cluster.queue(url);
  }

  await cluster.idle();
  await cluster.close();
};

categoryScraper();
