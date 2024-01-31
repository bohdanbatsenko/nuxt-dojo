<template>
<div class="flex flex-col justify-between border border-gray-300 rounded-xl w-full  m-2 p-4">
    <figure class="p-2">
      <img
        :src="cartProduct.image"
        alt="Card Image"
        class="object-contain w-full h-48"
      />
    </figure>
    <div>
      <h2 class="font-semibold mb-4">
        <router-link 
          class="link link-hover" 
          :to="`/products/${cartProduct.id}`">
        </router-link>
      </h2>
      <p>{{ cartProduct.title }}</p>
      <p>{{ cartProduct.price }} USD</p>
      <div class="justify-end ">
        <div class="btn-group">
          <button 
            class="bg-red-300 hover:op70 px-4 py-2 rounded-xl mt-4"
            @click="cartStore.removeProduct(cartProduct.id)
          ">Delete</button>
          <div class="flex">
            <button class="btn "
            @click="$emit('add', cartProduct.id)"
            >
            <i class="material-icons">add</i> 
            </button>
            <span class="font-semibold m-4">{{ cartProduct.quantity }}</span>
            <button class="btn "
              @click="$emit('remove', cartProduct.id)"
              >
              <i class="material-icons">remove</i> 
            </button>
          </div>
          <p>
            {{ cartProduct.quantity }}
            X {{ cartProduct.price }} =
            <strong>
              {{ cartProduct.cost }}
            </strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useCartStore } from '../store/cart'

  const cartStore = useCartStore()
  
  defineProps(['cartProduct'])
</script>
