import axios from 'axios'


const request = axios.create({
    baseURL: 'https://shopping-app-99e26.firebaseio.com/'
})

export default request;