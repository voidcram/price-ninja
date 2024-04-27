"use server";

async function fetchAPI(endpoint: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/${endpoint}`, {
      headers: new Headers({ "x-api-key": process.env.API_KEY ?? "default_key" }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts(search: string = "", page: number = 1, limit: number = 20) {
  return await fetchAPI(`products?page=${page}&limit=${limit}&search=${search}`);
}

export async function getProductyById(productId: string) {
  return await fetchAPI(`products/${productId}`);
}

export async function getProductsByCategory(category: string, search: string = "", page: number = 1, limit: number = 20) {
  return await fetchAPI(`products/categories/${category}?page=${page}&limit=${limit}&search=${search}`);
}

export async function getCategories() {
  return await fetchAPI(`categories`);
}