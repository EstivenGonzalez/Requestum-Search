import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github+json',
  },
})
