import { UserType } from "@/enums/UserType.enum";
import { ContactEmailRequest, EmailVerificationRequest, ForgotPasswordRequest, GoogleAuthRequest, GoogleRegisterResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ResetPasswordRequest } from "../types/api-types";
import apiClient from "./client";

// ---- Email Auth ----

// Login with email and password
export const login = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post('/auth/login', loginRequest);
    return response.data;
}

// Register with email and password
export const registerWithEmail = async (registerRequest: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post('/auth/register', { ...registerRequest, userType: UserType.USER });
    return response.data;
}

// Delete user (requires JWT token)
export const deleteUser = async () => {
    const response = await apiClient.get('/auth/delete-user');
    return response.data;
}

// Forgot password
export const forgotPassword = async (forgotPasswordRequest: ForgotPasswordRequest) => {
    const response = await apiClient.post('/auth/forgot-password', forgotPasswordRequest);
    return response.data;
}

// Reset password
export const resetPassword = async (resetPasswordRequest: ResetPasswordRequest) => {
    const response = await apiClient.post('/auth/reset-password', resetPasswordRequest);
    return response.data;
}

// Send verification email (requires JWT token)
export const sendVerificationEmail = async () => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    const headers = parsedUser && parsedUser?.state?.user?.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.get('/auth/send-verification-email', { headers });
    return response.data;
}

// Verify email
export const verifyEmail = async (emailVerificationRequest: EmailVerificationRequest) => {
    const response = await apiClient.get('/auth/verify-email', { params: emailVerificationRequest });
    return response.data;
}

// Check email verification status (requires JWT token)
export const checkEmail = async () => {
    const response = await apiClient.get('/auth/check-email');
    return response.data;
}

// ---- Google Auth ----

// Google register
export const googleRegister = async (googleRegisterRequest: GoogleAuthRequest): Promise<GoogleRegisterResponse> => {
    const response = await apiClient.post('/auth/google/register', googleRegisterRequest);
    return response.data;
}

// Google login
export const googleLogin = async (googleLoginRequest: GoogleAuthRequest) => {
    const response = await apiClient.post('/auth/google/login', googleLoginRequest);
    return response.data;
}

export const sendContactEmail = async (contactEmailRequest: ContactEmailRequest) => {
    const user = localStorage.getItem('user-storage')
    const parsedUser = user ? JSON.parse(user) : null
    const headers = parsedUser && parsedUser?.state?.user?.access_token ? {
        'Authorization': `Bearer ${parsedUser.state.user.access_token}`
    } : {}
    const response = await apiClient.post('/contacts/send', contactEmailRequest, {
        headers
    });
    return response.data;
}