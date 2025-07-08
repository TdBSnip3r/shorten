import { CreateShortlinkRequest, CreateShortlinkResponse, DeleteShortlinkRequest, DeleteShortlinkResponseFailed, DeleteShortlinkResponseSuccess, ListLinkShortRequest, ListLinkShortResponse, ResolveShortlinkRequest } from "../types/api-types";
import apiClient from "./client";

// ---- Shortlink ----

// Generate shortlink
export const createShortlink = async (createShortlinkRequest: CreateShortlinkRequest) : Promise<CreateShortlinkResponse> => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    const headers = parsedUser && parsedUser?.state?.user?.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.post('/shortlink/generate', createShortlinkRequest, {
        headers
    });
    return response.data;
}

// Delete shortlink
export const deleteShortlink = async (deleteShortlinkRequest: DeleteShortlinkRequest) : Promise<DeleteShortlinkResponseSuccess | DeleteShortlinkResponseFailed> => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    const headers = parsedUser && parsedUser?.state?.user?.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.post('/shortlink/delete', deleteShortlinkRequest, {
        headers
    });
    return response.data;
}

// List shortlinks
export const listShortlinks = async (listShortDto: ListLinkShortRequest) : Promise<ListLinkShortResponse> => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    const headers = parsedUser && parsedUser?.state?.user?.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.post('/shortlink/list', listShortDto, {
        headers
    });
    return response.data;
}

// Resolve shortlink
export const resolveShortlink = async (shortlink: string) => {
    const response = await apiClient.post(`/shortlink/resolve`, {
        shortlink: shortlink
    });
    return response.data;
}