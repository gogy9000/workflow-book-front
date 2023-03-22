import axios, { AxiosError } from 'axios'
import { storage } from 'app/storage/storage'
import { setIsAuth } from 'app/guards/slice/actions'


export const notAuthedInstance = axios.create()
export const instance = axios.create()

instance.interceptors.request.use(async (value) => {
  const token = await storage.getItem('token')
  if (token) {
    value.headers.Authorization = `Bearer ${token}`
  }
  return Promise.resolve(value)
})

instance.interceptors.response.use(async (response) => {
    if (response && response.data && response.data.token) {
      await storage.setItem('token', response.data.token)
    }
    return response
  },
  async (error: AxiosError) => {
    const { store } = await import('../../store')
    const condition = error.isAxiosError && error.response && error.response.status >= 400 && error.response.status < 500
    if (condition) {
     await store.dispatch(setIsAuth(false))
    }
    return Promise.reject(error)
  })

