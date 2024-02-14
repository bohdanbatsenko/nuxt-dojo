<template>
  <div>

    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet nam vitae quisquam nisi. Ab repellat officia excepturi facere explicabo.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet nam vitae quisquam nisi. Ab repellat officia excepturi facere explicabo.</p>
    <div>{{ dataCurrency }}</div>

  <div v-if="isError">Error Fetching Data</div>
  <div v-if="isLoading">Loading</div>
  <div v-if="data">
    <div style="border: 1px dotted green; padding: 10px">
      <pre style="color: red; padding: 2px;">Ref  = {{ postToFetch.id }}</pre>
      <h2>Post Id: {{ data.id }} </h2>
      <h3>Title: {{ data.title }}</h3>
      <p>Content: {{ data.body}}</p>
    </div>
  </div>
  <button @click="onClick">Fetch Next Post</button>

  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { usePostData } from '../server/api/usePost'

  const { data: dataCurrency } = await useFetch('./api/currency/GBP')

  const postToFetch = ref({
    id: 1
  })
  const onClick = () => {
    postToFetch.value.id++;
  }
  const { data, isError, isLoading} = usePostData(postToFetch);

</script>
<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>