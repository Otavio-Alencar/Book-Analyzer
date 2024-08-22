import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3',
  timeout: 1000,
})
