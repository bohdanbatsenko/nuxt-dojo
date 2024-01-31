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
      <div class=""></div>


  </div>
</template>

<script setup>
  //import { computed } from 'vue'
  definePageMeta({
    layout: 'products'
  })
  import { useCartStore } from '../store/cart'
  //import { useProductStore } from '../store/products'
  import CardCart from '../../components/CardCart.vue';
  
  const cartStore = useCartStore()
  //const productStore = useProductStore()
  //const formattedCart = computed(() => cartStore.formattedCart)
</script>

<style scoped>

</style>