import { User } from "@/types/User";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string
    user: User
    access_token: string
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    message: string
    user: User
    access_token: string
}

export interface ForgotPasswordRequest {
    email: string;
}

export interface ResetPasswordRequest {
    token: string;
    newPassword: string;
}

export interface EmailVerificationRequest {
    email: string;
    token: string;
}

export interface GoogleAuthRequest {
    googleToken: string;
}

export interface GoogleAuthResponse {
    token: string;
}

export interface CreateShortlinkRequest {
    url: string;
    slug?: string;
}

export interface CreateShortlinkResponse {
    id: string
    url: string
    slug?: string
    shortUrl: string
    createdAt: string
    updatedAt: string
}

export interface SlugResponse {
    slug: string;
    user?: User;
    sellPrice: number;
}

export interface ResolveShortlinkRequest {
    shortlink: string;
}

export interface ListLinkShortRequest {
    page: number;
    limit: number;
}

export interface ListLinkShortResponse {
    results: CreateShortlinkResponse[];
    pagination: {
        currentPage: number;
        elementsPerPage: number;
        totalPage: number;
        totalCount: number;
    };
}

export interface MySlugsRequest {
    results: SlugResponse[];
    pagination: {
        currentPage: number;
        elementsPerPage: number;
        totalPage: number;
        totalCount: number;
    };
}

export interface FindSlugRequest {
    message: string;
    slug: {
        slug: string;
        isUsed: boolean;
        isBuyable: boolean;
        price: number;
        isYour: boolean;
    };
}


export interface DeleteShortlinkRequest {
    shortlink: string;
}

export interface DeleteShortlinkResponseSuccess {
    message: string;
}

export interface DeleteShortlinkResponseFailed {
    message: string;
    error: string;
    statusCode: number;
}

export interface ContactEmailRequest {
    title: string;
    content: string;
}

export interface ContactEmailResponse {
    message: string;
}

export interface GoogleRegisterResponse {
    message: string;
    user: User;
    access_token: string;
}

export interface GoogleLoginResponse {
    message: string;
    user: User;
    access_token: string;
}

export interface SetPriceRequest {
    slug: string;
    price: number;
}

export interface SetPriceResponse {
    message: string;
    slug: string;
    price: number;
}