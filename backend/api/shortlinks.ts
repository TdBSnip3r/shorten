import { CreateShortlinkRequest, CreateShortlinkResponse, ResolveShortlinkRequest } from "../types/api-types";
import apiClient from "./client";

// ---- Shortlink ----

// Generate shortlink
export const createShortlink = async (createShortlinkRequest: CreateShortlinkRequest) : Promise<CreateShortlinkResponse> => {
    const response = await apiClient.post('/shortlink/generate', createShortlinkRequest);
    return response.data;
}

// Resolve shortlink
export const resolveShortlink = async (resolveShortlinkRequest: ResolveShortlinkRequest) => {
    const response = await apiClient.get('/shortlink/resolve', { params: resolveShortlinkRequest });
    return response.data;
}