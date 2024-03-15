"use server";

async function fetchAPI(endpoint: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/${endpoint}`, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts(search: string = "", page: number = 1) {
  return await fetchAPI(`/products?page=${page}&search=${search}`);
}

export async function getProductsByCategory(category: string, search: string = "", page: number = 1) {
  return await fetchAPI(`/products/categories/${category}?page=${page}&search=${search}`);
}

export async function getCategories() {
  return await fetchAPI(`/categories`);
}