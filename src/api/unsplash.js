import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fa655a52299007b7d4cbd0985e8d5405b3715b0c97a933763b446da2d565a373'
    }
});