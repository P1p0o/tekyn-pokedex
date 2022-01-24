import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 5000,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
