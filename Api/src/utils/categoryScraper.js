import 'dotenv/config';
import { Cluster } from "puppeteer-cluster";
import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";
import axios from "axios";
import logger from "../config/logger.js"

puppeteer.use(stealthPlugin());

const BASE_URL = "https://www.pccomponentes.com/";
const API_URL_CREATE_PRODUCT = "http://localhost:4000/api/v1/products";
const API_KEY = process.env.API_KEY
const CONFIG_API = {
  headers: {
    'x-api-key': API_KEY
  }
}

const CATEGORIES_SLUG = [
  "tarjetas-graficas",
  "placas-base",
  "procesadores",
  "discos-duros",
  "discos-duros-ssd",
  "memorias-ram",
  "refrigeracion-liquida",
  "tarjetas-sonido",
  "torres",
  "ventiladores-suplementarios",
  "fuentes-alimentacion",
  "ventiladores-cpu",
];

const getNumberOfPages = async (page) => {
  await page.waitForSelector("#paginator");
  return await page.evaluate(() => {
    return document
      .querySelector("#paginator span")
      .textContent.replace("Página 1 de ", "");
  });
};

const scrapeProductsInfo = async ({ page, data: url }) => {
  logger.info(`Scraping ${url}`)
  await page.goto(url)
  await page.waitForSelector("a[data-product-name]");

  const products = await page.evaluate(() => {
    const productLinks = document.querySelectorAll("a[data-product-category][data-product-category]:not([data-product-category='CATEGORÍA'])");
    const products = [];

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

      let priceWithoutIVA = parseFloat(current_price)
      priceWithoutIVA = parseFloat((priceWithoutIVA / (1 + 21 / 100)).toFixed(2));

      // const removeAccents = (str) => {
      //   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      // }

      products.push({
        name,
        url,
        thumb,
        img,
        seller,
        category,
        brand,
        stock,
        current_price: priceWithoutIVA,
        original_price: priceWithoutIVA,
        lowest_price: priceWithoutIVA,
      });
    });

    return products;
  });

  for (const product of products) {
    // Create product using the api
    axios.post(API_URL_CREATE_PRODUCT, product, CONFIG_API)
      .then(function (response) {
        logger.info(`Created ${product.name}`)
      })
      .catch(function (error) {
        if (error.response) {
          // If the error its 409 it means the product its already on the database
          if (error.response.status !== 409) {
            logger.error(error, `Creating product ${product.name}`)
          }else{
            logger.error(`${product.name} already exists`)
          }
        }
      });
  }
};

const categoryScraper = async () => {
  // Start cluster
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
    // monitor: true,
    sameDomainDelay: 2000,
    retryLimit: 2,

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

    await scrapeProductsInfo({page, data: url})
    
    // go through all the pages start page 2
    for (let index = 2; index <= numberPages; index++) {
      const nextPage = `${url}?page=${index}`;
      logger.info(`Adding to queue ${nextPage}`)
      cluster.queue(nextPage, scrapeProductsInfo);
    }
  });

  //   Add to queue all the categories
  for (const slug of CATEGORIES_SLUG) {
    const url = BASE_URL + slug;
    cluster.queue(url);
  }

  await cluster.idle();
  await cluster.close();
};

categoryScraper();