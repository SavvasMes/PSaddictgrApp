import axios from 'axios';


export default axios.create({
    baseURL: 'https://psaddict.gr/wp-json/better-rest-endpoints/v1'
});