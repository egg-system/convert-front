const injectAxiosConfig = ({ $axios, env }) => {
  $axios.setBaseURL(env.API_URL)
  $axios.setHeader('x-api-key', env.API_KEY)
}
export default injectAxiosConfig
