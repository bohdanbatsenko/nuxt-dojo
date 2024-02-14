//import { useQuery } from "@tanstack/vue-query"
const categoriesUrl = 'https://fakestoreapi.com/products/categories'

export default defineEventHandler(async() =>{
  // handle query params
  //const { category } = useQuery(event)
  const data = await $fetch(categoriesUrl)

  return  data
})