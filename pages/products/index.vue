<template>
  <div>
    <carousel class="products-page-carousel">
    <slide v-for="slide in slides" :key="slide" class="carousel__item">
      <img :src="slide.image">
      <div class="slide-content">
        <h2 class="slide-title">{{ slide.title }}</h2>
        <h3 class="slide-descr">{{ slide.descr }}</h3>
      </div>

    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" class="product-card">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useProductStore } from '../../store/products'
  import ProductCard from '../../components/ProductCard.vue';
  //import ProductCard from '../../components/ProductCard.vue';
  const productStore = useProductStore()

  definePageMeta({
    layout: 'products'
  })

  productStore.loadProducts()
  const { products } = storeToRefs(productStore)

 
  //const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch' }
    ]
  })

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const slides = ref([
    {
      title: 'Title 1',
      descr: 'Descr 1',
      image: `https://picsum.photos/seed/${getRandomInt(1, 1000)}/1280/230`
    },
    {
      title: 'Title 2',
      descr: 'Descr 2',
      image: `https://picsum.photos/seed/${getRandomInt(1, 1000)}/1280/230`
    },
    {
      title: 'Title 3',
      descr: 'Descr 3',
      image: `https://picsum.photos/seed/${getRandomInt(1, 1000)}/1280/230`
    }
  ])
  const images = ref([]);
  for (let i = 0; i < 10; i++) {
    const width = 1280; // Random width between 200 and 600
    const height = 230; // Random height between 200 and 600
    const seed = getRandomInt(1, 1000); // Random seed between 1 and 1000
    images.value.push(`https://picsum.photos/seed/${seed}/${width}/${height}`);
  }
</script>
<style scoped>
.carousel.products-page-carousel {
  margin-bottom: 24px;
}
.slide-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  padding: 24px;
  color: #fff;
}

.slide-content .slide-title {
  font-size: 44px;
  color: #fff;
}

</style>