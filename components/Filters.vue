<template>
  <aside class="">
    <!--div class="sticky top-0 p-4 bg-white rounded-xl w-full"-->
    <div class="p-4 bg-white rounded-xl w-full">
      <h2 class="my-4 font-bold text-gray-500">Categories</h2>
      <div class="form-control" v-for="(category, index) in categoriesData" :key="index">
        <label for="category">{{ category }}</label>
        <input 
          :type="inputType" 
          :name="category" 
          :id="category" 
          :value="category" 
          v-model="checkedCategory"
          >
          <!-- <div>
            :checked="checkedCategories.includes(category)"
            @change="handleChange(category)"
            @change="$emit('update:modelValue', $event.target.checked)"</div> -->
      </div>
      <div class="form-control">
        <label for="category">All</label>
        <input 
          :type="inputType" 
          name="all" 
          id="all" 
          value="all" 
          v-model="checkedCategory"
          @click="$emit('handleAll')"
          >
      </div>
      <p>Checked categories: <pre>{{ checkedCategory }}</pre></p>
    </div>
   
  </aside>
</template>

<script setup>
  import {ref, watch} from 'vue'
  //import { useProductStore } from '../../store/products'
  const props = defineProps({
    //categoriesData: { required: true, type: Array },
    inputType: {required: true}
  });
//const productStore = useProductStore()
//const all = ref('all')
//const allCategories = () => {console.log('All cliked')}
const emit = defineEmits(["update:modelValue"])
const checkedCategory = ref([])
watch(checkedCategory, (newVal) => { emit('update:modelValue', newVal) });

//const addCategoryToStore = (category) => productStore.addSelectedCategory(category)

//console.log(productStore.selectedCategories);
// const handleChange = (category) => {
//   if (this.checkedCategories.includes(category)) {
//     // Remove category if already checked
//     this.$emit('update:checkedCategories', this.checkedCategories.filter(item => item !== category));
//   } else {
//     // Add category if not checked
//     this.$emit('update:checkedCategories', [...this.checkedCategories, category]);
//   }
// } 

  const { data:categoriesData } = useFetch('/api/categories')
  // const res = await fetch('https://fakestoreapi.com/products/categories')
  //   const data = await res.json()



//   const categories = ref([])
//   const checkedCategories = computed(() => categories.value
//     .reduce((acc, category) => {
//       return category.isActive
//           ? [...acc, category.name]
//           : acc
//     }, []).join(', ')
// )

// onMounted(() => {
//   getCategories().then((categoryList) => {
//     categories.value = categoryList.map((categoryName) => ({ name: categoryName, isActive: false }))
//   })
// })

</script>

<style scoped>
  .form-control {
    max-width: 170px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .form-control label {
    text-transform: capitalize;
  }
  .form-control input[type="checkbox"] {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
</style>