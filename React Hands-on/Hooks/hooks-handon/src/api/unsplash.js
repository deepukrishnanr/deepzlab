import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: "Client-ID nTq7UPWcl6_DxhfcE5FqgTf5VIK7W6VGZJxJehEfKOw"
    },
    baseURL: "https://api.unsplash.com/search/photos"

})