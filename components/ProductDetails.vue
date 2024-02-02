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
        @click="$emit('add', product.id)"
        >
          <!-- @click="cartStore.addToCart(product.id)" -->
          <i class="material-icons mr-2">add_shopping_cart</i> 
          <!-- <span>{{ !isProductInCart ? 'In Cart' : 'Add to cart' }}</span> -->
        </button>
        
      </div>
    </div>  
  </div>
</template>

<script setup>
const props = defineProps({
  product: { required: true }
});
//const { product } = defineProps(['product'])

// import { storeToRefs } from 'pinia'
// import { useCartStore } from '../store/cart'

//   const cartStore = useCartStore()
//   const { cart, isProductInCart } = storeToRefs(cartStore)

  //const productInCart = computed(async () => await isProductInCart(props.product.id) !== undefined);

  //const alreadyInCart = (productId) => {
    //return cart.some(item => item.productId === productId);
    //const cart = useCartStore().cart; 
    //console.log(Object.keys(cart))
    //const prodInCart = Object.values(cart.value).some(([id]) => id === productId);
    //return  Object.values(cart.value).includes(productId);
    //console.log(prodInCart)
    // const x = cart.find(el => el.id === product.id)
    // if (x){
    //   return true
    // } else {
    //   return false
    // }
  //}

  // const add = (id) => {
  //   console.log(`Product added ${id}`);
  //   if (isProductInCart){
  //     cartStore.addToCart(id)
  //   } else {
  //     alert(`${id} already in cart`)
  //   }
  // }
</script>

<style scoped>
img {
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>