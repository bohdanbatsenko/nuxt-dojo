<template>
  <div class="card text-center">

    <div class="thumb-wrapper">
      <img :src="product.image" alt="product thumb" class="thumb">
    </div>
    <p class="product-title font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.price }}</p>
    <p class="font-regular text-gray-500 m-2 truncate">Cat:{{ product.category }}</p>
    <div class="card-actions flex items-center justify-around">
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4 w-15">View details</p>
      </NuxtLink>
      <button 
        class="btn flex h-9"
        @click="add(product.id)
        ">
        <span>{{ productIsInCart ? 'In cart' : 'Add to cart' }}</span>
        <!-- {{ alreadyInCart(product) ? 'In Cart' : 'Add to cart' }} -->
        <i class="material-icons mr-2">add_shopping_cart</i>
      </button>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
  import { useCartStore } from '../store/cart'
  //const { product } = defineProps(['product'])
  const props = defineProps(['product'])
  const cartStore = useCartStore()

  const productIsInCart = computed(() => cartStore.isProductInCart(props.product.id))
  const add = (productId) => {
    if (!productIsInCart.value) {
      cartStore.addToCart(productId)
    } else {
      alert(`${props.product.title} already in cart!`)
    }
  }
</script>

<style scoped>
.product-title {
  /* width: 200px;
  overflow:hidden;
  line-height: 2rem;
  max-height: 8rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4; */
  white-space: wrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.thumb-wrapper {
  height: 220px;
  overflow: hidden;
}
.thumb {
  display: block;
  max-width: 220px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
}
</style>