import axios from 'axios';

// const url = 'http://localhost:5000/posts';
const API = axios.create({ baseURL: 'https://socialmedianodejs.herokuapp.com/' });
// middleware cannot work without this
API.interceptors.request.use((req) => {
   if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
      req.headers.theId = JSON.parse(localStorage.getItem('profile')).result?._id;
   }
   return req;
})
export const getPosts = async (page) => {
   const res = await API.get(`/posts?page=${page}`);
   return res;
}

export const getPost = async (id) => {
   const res = await API.get(`/posts/${id}`);
   return res;
}

export const createPost = (newPost) => API.post('/posts', newPost);
export const commentPost = (id, value) => {
   return API.patch(`/posts/${id}/commentPost`, {value})
   // console.log('ee', comment)
};
export const searchPost = (query) => API.get(`/posts/search?searchQuery=${query.search || 'none'}&tags=${query.tags}`);
export const updatePost = (id, newPost) => API.patch(`/posts/${id}`, newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);