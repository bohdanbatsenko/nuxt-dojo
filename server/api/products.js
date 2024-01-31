const baseUrl = 'https://fakestoreapi.com/products'

export const apiLoadProducts = async () => {
  try {
    const res = await fetch(baseUrl)
    const data = await res.json()
    return data
  } catch(error) {
    console.error('Error fetching tasks:', error);
  }
}