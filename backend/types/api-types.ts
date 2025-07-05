export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
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

export interface ResolveShortlinkRequest {
    shortlink: string;
}

