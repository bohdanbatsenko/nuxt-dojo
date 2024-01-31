<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" class="product-card">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useProductStore } from '../../store/products'
  import ProductCard from '../../components/ProductCard.vue';
  //import ProductCard from '../../components/ProductCard.vue';
  
  const productStore = useProductStore()

  definePageMeta({
    layout: 'products'
  })

  productStore.loadProducts()
  const { products } = storeToRefs(productStore)

 
  //const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch' }
    ]
  })
</script>
<style scoped></style>