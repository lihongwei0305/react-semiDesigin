import axios from 'axios'

const request = axios.create({
    // baseURL: '',
    timeout: 5000
})

request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default request