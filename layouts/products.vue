<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
          <li><NuxtLink to="/cart">
            <i class="material-icons material-symbols-outlined">shopping_cart_checkout</i> 
             {{ count }}
            </NuxtLink></li>
        </ul>
      </nav>
    </header>
    <!-- <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header> -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/cart">
            <i class="material-icons material-symbols-outlined">shopping_cart_checkout</i> 
             ({{ count }})
            </NuxtLink></li>
        </ul>      
    </footer>
  </div>
</template>
<script setup>
  import { computed } from 'vue'
  import { useCartStore } from '../store/cart'
  const cartStore = useCartStore()
  const count = computed(() => cartStore.productsTotal)
</script>
<style>
  .router-link-exact-active {
    color: #12b488;
  }
  .router-link-active.router-link-exact-active.btn {
    color: #fff;
  }
  </style>
