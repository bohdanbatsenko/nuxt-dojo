<template>
  <div>
      <div>
        <div v-if="!cartStore.formattedCart.length">
          <h1 class="text-xl">Cart is empty.</h1>
        </div>
        <div v-if="cartStore.formattedCart.length">
          <div class="flex flex-wrap">
            <CardCart 
              v-for="item in cartStore.formattedCart" 
              :key="item.id" 
              :cartProduct="item"
              @add="cartStore.addToCart(item.id)"
              @remove="cartStore.remove(item.id)"
              />
          </div>
          <div class="mt-8 text-xl md:text-4xl">Total: {{ cartStore.total }} USD</div>
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