import axios from 'axios'
import { storage } from 'app/storage/storage'


export const notAuthedInstance = axios.create()
export const instance = axios.create()

instance.interceptors.request.use(async (value) => {
  const token = await storage.getItem('token')
  if (token) {
    value.headers.Authorization = `Bearer ${token}`
  }
  return value
})

instance.interceptors.response.use(async (response) => {
  if (response && response.data && response.data.token) {
    await storage.setItem('token', response.data.token)
  }
  return response
})

