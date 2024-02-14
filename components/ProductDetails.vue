<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product img" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex"
        @click="add(product.id)"
        >
        <!-- <div>@click="$emit('add', product.id)"</div> -->
          <!-- @click="cartStore.addToCart(product.id)" -->
          <i class="material-icons mr-2">add_shopping_cart</i> 
          <span>{{ productIsInCart ? 'In cart' : 'Add to cart' }}</span>
        </button>
        
      </div>
    </div>  
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const props = defineProps({
  product: { required: true }
});
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
img {
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>