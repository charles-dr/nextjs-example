import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'X-Dev-User-Id': '53f24b85-94da-4bf2-882b-3ff5ca16d86f'
  }
})

axios.defaults.headers.post['Content-Type'] = 'application/json'
export default axios
