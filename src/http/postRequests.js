import { api } from "./api";

export const getPostsRequest = (data) => api.get('/posts', {params: data})

export const searchPostsRequest = (data) => api.get(`/posts/search`, {params: data})

export const getProductsRequest = (data) => api.get('/products', {params: data})

export const getProductByIdRequest = (id) => api.get(`/products/${id}`)
