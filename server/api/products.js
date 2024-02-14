const baseUrl = 'https://fakestoreapi.com'

export const apiLoadProducts = async () => {
  try {
    const res = await fetch(baseUrl + '/' + 'products')
    const data = await res.json()
    return data
  } catch(error) {
    console.error('Error fetching tasks:', error);
  }
}
export const apiLoadProductsByCategory = async (category) => {
  try {
    const res = await fetch(baseUrl + '/' + 'products/category/' + category)
    const data = await res.json()
    return data
  } catch(error) {
    console.error('Error fetching tasks:', error);
  }
}

export const apiLoadCategories = async () => {
  try {
    const res = await fetch(baseUrl + '/' + 'products/categories')
    const data = await res.json()
    return data
  } catch(error) {
    console.error('Error fetching categories', error);
  }
}

export const sortProductsByTitle = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products?sort=desc')
    const data = await res.json()
    return data
  } catch(error) {
    console.error('Error fetching tasks:', error);
  }
}