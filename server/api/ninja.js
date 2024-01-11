export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event)
  // handle post data
  // const age = await getQuery(event)
  // api call with provate key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_XHDqGLvzvfHSBwtqy8MgHavEpIbGewEH0SorB6zN')
  
  return {
    message: data
  }
})