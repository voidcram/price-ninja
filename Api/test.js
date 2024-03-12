import { Cluster } from "puppeteer-cluster";
import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(stealthPlugin());

const base_url = "https://www.pccomponentes.com/";
const categories = [
  "tarjetas-graficas",
  //   "placas-base",
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
  await page.waitForSelector("a[data-product-id]");
  return await page.evaluate(() => {
    
  });
//   const products = await page.$$eval("a[data-product-id]", (productLinks) => {
//     return productLinks.map((link) => {
//       const name = link.getAttribute("data-product-name");
//       const url = link.getAttribute("href");
//       const category = link.getAttribute("data-product-category");
//       return { name, url, category };
//     });
//   });
//   return products;
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
    console.log(`URL: ${url} | Paginas: ${numberPages}`);

    // go through all the pages start on page 2
    for (let index = 2; index <= 3; index++) {
      const products = await getProductsInfo(page);
      console.log(
        `Products extracted url ${url} | Page: ${index} | ${JSON.stringify(
          products,
          null,
          2
        )}`
      );
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
