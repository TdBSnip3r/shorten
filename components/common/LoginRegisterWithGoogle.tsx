"use client"
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { AxiosError } from 'axios';
import { useUserStore } from '@/stores/UserStore';
import { GoogleLoginResponse, GoogleRegisterResponse } from '@/backend/types/api-types';
import { googleLogin, googleRegister } from '@/backend/api/auth';

interface LoginRegisterWithGoogleProps {
  type: 'login' | 'register';
}

const LoginRegisterWithGoogle: React.FC<LoginRegisterWithGoogleProps> = ({ type }) => {
  const { setUser } = useUserStore()
  //REGISTRAZIONE
  const googleRegisterMutation = useMutation({
    mutationFn: (googleToken: string) => googleRegister({ googleToken }),
    onSuccess: (data: GoogleRegisterResponse) => {
      toast.success('Register with Google success');
      setUser({ ...data.user, access_token: data.access_token })
    },
    onError: (error: AxiosError) => {
      if (error.status === 409) {
        toast.success('Try login with google', { duration: 8000 });
      }
    }
  });
  //LOGIN
  const googleLoginMutation = useMutation({
    mutationFn: (googleToken: string) => googleLogin({ googleToken }),
    onSuccess: (data: GoogleLoginResponse) => {
      toast.success('Login with Google success');
      setUser({ ...data.user, access_token: data.access_token })
    },
    onError: (error: AxiosError) => {
      toast.error('Login with Google error');
      if (error.status === 409) {
        toast.error('Try login with google', { duration: 8000 });
        return;
      }
      if (error.status === 401) {
        toast.error('Try register with google', { duration: 8000 });
        return;
      }
      toast.error('Login with Google error');
    }
  });


  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_APP_GOOGLE_CLIENT_ID as string}>
      <div className="flex items-center justify-center w-full relative mt-2">
        <div className="absolute top-0 left-0 w-full h-auto opacity-0">
          <GoogleLogin
            onSuccess={({ credential }) => {
              if (credential) {
                type === 'login' ? googleLoginMutation.mutate(credential) : googleRegisterMutation.mutate(credential)
              }
            }}
            onError={() => type === 'login' ? toast.error('Errore nel login con Google') : toast.error('Errore nel registrazione con Google')}
          />
        </div>
        <button
          disabled={googleLoginMutation.isPending}
          className={` w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-full shadow-sm h-[44px] min-h-[44px] px-4 font-semibold text-gray-800 text-base transition-all duration-150 hover:border-gray-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {googleLoginMutation.isPending ? (
            <span className="ml-2">{"Login with Google"}...</span>
          ) : (
            <>
              <img src="/icons/google.svg" alt="Google" width={20} height={20} className="mr-2" style={{ display: 'inline-block' }} />
              <span>{type === 'login' ? "Login with Google" : "Register with Google"}</span>
            </>
          )}
        </button>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginRegisterWithGoogle; 