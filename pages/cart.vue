<template>
  <div>
      <div class="flex flex-row">
        <div v-if="!cartStore.formattedCart.length">
          <h1 class="text-xl">Cart is empty.</h1>
        </div>
        <div v-if="cartStore.formattedCart.length" class=" flex justify-between sm:w-[85%] lg:w-[85%]">
          <div class="flex">
            <CardCart 
              v-for="item in cartStore.formattedCart" 
              :key="item.id" 
              :cartProduct="item"
              @add="cartStore.addToCart(item.id)"
              @remove="cartStore.remove(item.id)"
              />
          </div>
          <div class="border border-gray-300 rounded-xl w-full sm:w-[45%] lg:w-[25%] m-2 p-4 mt-8 text-xl md:text-2xl">
            <h3>Subtotal</h3>
            <p class="md:text-4xl mb-4">Total: {{ cartStore.total }} USD</p>  
            <h3>Products in cart</h3>
            <p class="md:text-4xl mb-4">{{ cartStore.productsTotal }}</p> 
        </div>
        </div>
      </div>
      
      <div v-if="cartStore.formattedCart.length">
      <h2 class="cart-page-carousel-title">You may aslo like</h2>
      <carousel :items-to-show="5" class="cart-page-carousel">  
        <slide v-for="slide in products" :key="slide" class="carousel__item">
          <ProductCard :product="slide" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
      </div>
  </div>
</template>

<script setup>
  //import { computed } from 'vue'
  definePageMeta({
    layout: 'products'
  })
  import { storeToRefs } from 'pinia';
  import { useCartStore } from '../store/cart'
  import { useProductStore } from '../store/products'
  import CardCart from '../../components/CardCart.vue';
  
  const cartStore = useCartStore()
  const productStore = useProductStore()
  const { products } = storeToRefs(productStore)
  //const formattedCart = computed(() => cartStore.formattedCart)
</script>

<style scoped>
.cart-page-carousel-title {
  font-size: 32px;
  margin: 44px 0 34px;
}
.cart-page-carousel.carousel__item .card {
  max-width: 200px;
}
</style>