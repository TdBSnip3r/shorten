import { CreateShortlinkRequest, CreateShortlinkResponse, ResolveShortlinkRequest } from "../types/api-types";
import apiClient from "./client";

// ---- Shortlink ----

// Generate shortlink
export const createShortlink = async (createShortlinkRequest: CreateShortlinkRequest) : Promise<CreateShortlinkResponse> => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    console.log(parsedUser)
    const headers = parsedUser && parsedUser.state.user.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.post('/shortlink/generate', createShortlinkRequest, {
        headers
    });
    return response.data;
}

// Resolve shortlink
export const resolveShortlink = async (resolveShortlinkRequest: ResolveShortlinkRequest) => {
    const response = await apiClient.get('/shortlink/resolve', { params: resolveShortlinkRequest });
    return response.data;
}