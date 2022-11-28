import axios from "axios";

const api = axios.create({
  withCredentials: true,
  // baseURL: process.env.API_URL ? process.env.API_URL : 'http://localhost/api/v2',
  baseURL: process.env.API_URL ? process.env.API_URL : 'http://176.53.161.216/api/v2',
})

api.interceptors.request.use(config=>{
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
})
api.interceptors.response.use(config=>{
  return config
}, async (error) => {
  const originalResponse = error.config
  if (error.response.status === 401 && error.config && !error.config._isRetry){
    originalResponse._isRetry = true
    try {
      console.log('Ошибка в запросе')
      // const res = await axios.post('http://localhost/api/v2/refresh_token',{withCredentials: true})
      const res = await api.post('/refresh_token')
      localStorage.setItem('access_token', res.data.access_token)
      return api.request(originalResponse)
    } catch (e) {
      console.log('Не авторизован')
    }
  }
  throw Error
}
)

export default api