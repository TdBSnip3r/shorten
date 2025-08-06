import { MySlugsRequest } from "../types/api-types";
import apiClient from "./client";

export const fetchMySlugs = async (page: number, limit: number): Promise<MySlugsRequest> => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    const headers = parsedUser && parsedUser?.state?.user?.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.get(`/shortlink/my-slugs?page=${page}&limit=${limit}`, {
        headers
    });
    return response.data;
};

export const checkSlug = async (slug: string) => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    const headers = parsedUser && parsedUser?.state?.user?.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.post(`/shortlink/check-slug`, {
        slug: slug
    }, {
        headers
    });
    return response.data;
}