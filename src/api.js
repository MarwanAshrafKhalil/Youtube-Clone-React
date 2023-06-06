import axios from 'axios'

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params:{
        key:"AIzaSyD0sLlj9hmMB-erANy4_9TA-RSDRbcvV3M",
    },
})

export default request;

