import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN'
    }
});

export const get = async (path, options = {}) => {
    const reponse = await request.get(path, options);
    return reponse.data;
}

export default request;