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
  <div class="container p-2 mx-auto">
    <div class="flex flex-row flex-wrap py-4">
      
      <!-- <Filters
      inputType="checkbox"
      :categoriesData="categories" 
      v-model="checkedCategories" 
      @change="filterCategory"
      @handleAll="clickedAll"
      /> -->
      <div class="w-full sm:w-1/4 md:w-1/4 lg:w-1/6 px-2">
        <Sorting v-model="sortBy" @reset-sort="handleReset"/>
        <!-- <Sorting v-model="sortBy" @change="sortByTitle"/> -->
       
      <Filters
        inputType="radio"
        v-model="checkedCategories"
        @change="filterCategory"
        
      />  
      </div>
   
      <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        <div class="grid grid-cols-4 gap-5">
          <div v-for="(p, index) in sortedProducts" class="product-card">
            <ProductCard :product="p" :key="index"/>
         </div>
        </div>
      </main>
    </div>
  </div>
  </div>
</template>

<script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { ref, computed } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useProductStore } from '../../store/products'
  import ProductCard from '../../components/ProductCard.vue';
  const productStore = useProductStore()

  definePageMeta({
    layout: 'products'
  })
  productStore.loadProducts()
//   const filteredProducts = computed(() => {
//    return state.categoryId === 'all' 
//      ? products
//      : products.filter((product) => product.productCategoryID === categoryId);
// })
  const { products } = storeToRefs(productStore)
  const checkedCategories = ref();
  
  const filterCategory = () => {
    if (checkedCategories.value === 'all'){
      productStore.loadProducts()
    } else {
      productStore.loadProductsByCategory(checkedCategories.value)
    }
  }
  //const clickedAll = () => { productStore.loadProducts()}
  //const filteredProducts = ref([])

  //const catProducts = ref([])
  // watch(checkedCategories, async () => {
  //   const { data: catProducts } = await useFetch(`https://fakestoreapi.com/products/category/jewelery?limit=3`)
  // });
  //const { data: products } = await useFetch('https://fakestoreapi.com/products')

  const sortBy = ref('reset')
  // Sort using action store
  // const sortByTitle = () => {
  //   if (sortBy.value === 'title') {
  //     productStore.sortByTitle()
  //   } 
  //   if (sortBy.value === 'price') {
  //     productStore.sortByPrice
  //   }
  // }
  //const sortedByPrice = ref(productStore.sortByPrice)
  //const sortedByPrice = computed(()=> products = productStore.sortByPrice)
  const sortedProducts = computed(() => {
    return Object.values(products.value).sort((a, b) => {
      if (sortBy.value === 'reset') { return }
      if (sortBy.value === 'title') {
        console.log('Choose by title')
        // Crashes - don't use
        //productStore.sortByTitle()
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      }
      if (sortBy.value === 'price') {
        //productStore.sortByPrice
        return a.price - b.price;
      }
    });
  })

  const handleReset = () => {
    console.log('Reset clicked')
  }

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