'use client'
import { LoginFormSchema } from "@/forms/LoginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod/v4"
import { ShrtButton } from "./common/ShrtButton/ShrtButton"
import { useCallback } from "react"
import { useMutation } from "@tanstack/react-query"
import { login } from "@/backend/api/auth"
import toast from "react-hot-toast"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { useUserStore } from "@/stores/UserStore"
import { LoginResponse } from "@/backend/types/api-types"
import { useRouter } from "next/navigation";

type LoginForm = z.infer<typeof LoginFormSchema>

export const LoginForm = () => {
    const { setUser } = useUserStore()
    const router = useRouter();
    
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<LoginForm>({ 
        resolver: zodResolver(LoginFormSchema),
        mode: 'onChange'
    })

    const { mutate: loginMutation, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (data: LoginResponse) => {
            console.log(data)
            setUser({...data.user, access_token: data.access_token})
            router.push('/dashboard');
            reset()
        }, onError: (error:any) => {
            toast.error(error.response.data.message)
            reset({password: ""})
        }
    })

    const onSubmit: SubmitHandler<LoginForm> = useCallback(async (value: LoginForm) => {
        loginMutation(value)
    }, []);

    
    return (
        <div className="max-w-lg w-full bg-white shadow-2xl rounded-3xl p-8 flex flex-col gap-6 items-center justify-center border border-gray-100 mx-auto">
            <h1 className="text-2xl font-bold">Login</h1>
            <img src="/logo.svg" alt="logo" className="w-24 h-24" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full max-w-md mx-auto"
            >
                <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="w-full max-w-md p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className="w-full max-w-md p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                <ShrtButton
                    disabled={!isValid || isPending}
                    variant={ButtonVariant.PRIMARY}
                    className="w-full max-w-md py-3 text-lg font-bold transition hover:brightness-110"
                >
                    Login
                </ShrtButton>
            </form>
        </div>
    )
}