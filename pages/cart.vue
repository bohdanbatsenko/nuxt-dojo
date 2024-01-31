<template>
  <div>


      <div class="md-8">
        <div v-if="!cartStore.formattedCart.length">
          <h1 class="text-xl">Cart is empty.</h1>
        </div>
        <div v-if="cartStore.formattedCart.length">
          <div class="flex flex-wrap">
            <CardCart v-for="item in cartStore.formattedCart" :key="item.id" :cartProduct="item" />
            <!-- <div v-for="item in cartStore.formattedCart" :key="item.id">
              <img
                style="width: 90px; height: 90px; object-fit: cover"
                :src="item.image"
              />
              <h3>{{ item.name }}</h3>
            </div> -->
          </div>
          <div class="mt-8 text-xl md:text-4xl">Total: {{ cartStore.total }} USD</div>
        </div>
      </div>
      <div class="md-4">
        <h3>Heheh</h3>
      </div>

  </div>
</template>

<script setup>
  //import { computed } from 'vue'
  import { useCartStore } from '../store/cart'
  //import { useProductStore } from '../store/products'
  import CardCart from '../../components/CardCart.vue';
  
  const cartStore = useCartStore()
  //const productStore = useProductStore()
  //const formattedCart = computed(() => cartStore.formattedCart)
</script>

<style scoped>

</style>