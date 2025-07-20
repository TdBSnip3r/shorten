'use client';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, useEffect } from 'react';
import { checkAuth } from '@/backend/api/auth';
import { useUserStore } from '@/stores/UserStore';
import { useRouter } from 'next/navigation';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { user, logout } = useUserStore();
  const router = useRouter();
  const { data, error } = useQuery({ queryKey: ['auth-check'], queryFn: checkAuth, enabled: !!user, retry: false, refetchInterval: 60 * 1000});

  useEffect(() => {
    if (error && user) {
        logout()
    }
  }, [error, user, logout, router]);

  return <>{children}</>;
} 