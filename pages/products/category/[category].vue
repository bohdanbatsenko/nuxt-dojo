<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{  category }}</Title>
      <Meta name="description" :content="category"/>
    </Head>
    <h2 class="text-2xl font-bold pb-10">Category: {{ category }}</h2>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(p, index) in products" class="product-card">
        <ProductCard :product="p" :key="index"/>
      </div>
  </div>
  </div>
</template>

<script setup>
  import { useProductStore } from '../../store/products'
  import { storeToRefs } from 'pinia';
  const productStore = useProductStore()
  const { category } = useRoute().params
  productStore.loadProductsByCategory(category)
  const { products } = storeToRefs(productStore)
  //const uri = 'https://fakestoreapi.com/products/category/' + category
  //const productsCat = productStore.loadProductsByCategory(category)
  //const productsCat = $fetch(`https://fakestoreapi.com/products/category/${category}`).then(value => console.log(value));

  
  //const loadedProducts = useFetch(`https://fakestoreapi.com/products/category/${category}`)
  // if (!category.value) {
  //   throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
  // }
  definePageMeta({
    layout: 'products'
  })
  useSeoMeta({
  title: category.title,
  description: category.description,
  ogTitle: category.title,
  ogDescription: category.description,
  ogImage: category.thumbnail,
  twitterTitle: category.title,
  twitterDescription: category.description,
  twitterImage: category.thumbnail,
});
</script>

<style scoped>

</style>