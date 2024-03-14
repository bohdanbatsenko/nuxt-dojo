<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{  product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <!-- <ProductDetails :product="product" @add="cartStore.addToCart(product.id)"/> -->
    <ProductDetails :product="product"  @add="cartStore.addToCart(product.id)"/>

  </div>
</template>

<script setup>
  //import { storeToRefs } from 'pinia';
  import { useCartStore } from '../store/cart'
  //import { useProductStore } from '../../store/products'
  import ProductDetails from '../../components/ProductDetails.vue';
  
  const cartStore = useCartStore()
  //const productStore = useProductStore()
  //const { products } = storeToRefs(productStore)

  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id
  const { data: product } = await useFetch(uri, { key: id })
  
  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
  }

  definePageMeta({
    layout: 'products'
  })
  useSeoMeta({
  title: product.title,
  description: product.description,
  ogTitle: product.title,
  ogDescription: product.description,
  ogImage: product.thumbnail,
  twitterTitle: product.title,
  twitterDescription: product.description,
  twitterImage: product.thumbnail,
});
</script>

<style scoped>

</style>