import { toRef } from 'vue'
async function fetchPost(postId) {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json())
}

export function usePostData(postToFetch) { 
return useQuery({
  queryKey: ['post', toRef(() => postToFetch.value.id)],
  queryFn: () => fetchPost(postToFetch.value.id),
  refetchOnWindowFocus: false
})
}