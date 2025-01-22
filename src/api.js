import axios from "axios";


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


export const allBlogs = async () => {
    const res = await api.get('/posts?_limit=21');
    return res.data
};


export const blogById = async (id) => {
    const res = await api.get(`/posts/${id}`)
    return res.data
}