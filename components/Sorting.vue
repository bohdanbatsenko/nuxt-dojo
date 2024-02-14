<template>
  <div>
    <div class="p-4 bg-white rounded-xl w-full">
      <h2 class="my-4 font-bold text-gray-500">Sort</h2>
      <label for="sorting">Sort by</label>
      <select class="py-4" name="sorting" id="sorting" v-model="sortBy">
      <!-- <select name="sorting" id="sorting" v-model="sortBy" @update:modelValue="sortByTitle"> -->
        <option value="price">Price</option>
        <option value="title">Title</option>
      </select>
      <button class="btn flex h-9 my-4" @click="$emit('reset-sort')"><span>Reset</span></button>
      <p>Sorting selected: <pre>{{ sortBy }}</pre></p>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  const props = defineProps({
    modelValue: {required: true}
  });
  const emit = defineEmits(['update:modelValue', 'reset-sort'])
  const sortBy = ref()
  watch(sortBy, (newVal) => { emit('update:modelValue', newVal) });
</script>

