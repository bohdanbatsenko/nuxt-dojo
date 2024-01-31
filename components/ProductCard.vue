<template>
  <div class="card text-center">
    <div class="thumb-wrapper">
      <img :src="product.image" alt="product thumb" class="thumb">
    </div>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.price }}</p>
    <div class="card-actions flex items-center justify-around">
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4 w-15">View details</p>
      </NuxtLink>
      <button 
        class="btn flex h-9"
        @click="cartStore.addToCart(product.id)
        ">
        <!-- {{ alreadyInCart(product) ? 'In Cart' : 'Add to cart' }} -->
        <i class="material-icons mr-2">add_shopping_cart</i>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { useCartStore } from '../store/cart'
  const { product } = defineProps(['product'])
  const cartStore = useCartStore()

  // const alreadyInCart = (product) => {
  //   const x = cartStore.cart.find(el => el.id === product.id)
  //   if (x.id){
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // const addToCart = (product) => {
  //   if (!alreadyInCart(product)){
  //     cartStore.addToCart(product)
  //   } else {
  //     alert(`${product.title} already in cart`)
  //   }
  // }
</script>

<style scoped>
.thumb-wrapper {
  height: 220px;
  overflow: hidden;
}
.thumb {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
}
</style>