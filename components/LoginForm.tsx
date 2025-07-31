'use client'
import { LoginFormSchema, FORM_FIELDS } from "@/forms/LoginFormSchema"
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
import Link from "next/link"
import LoginRegisterWithGoogle from "./common/LoginRegisterWithGoogle"

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
        <div className="max-w-lg w-full shadow-2xl rounded-3xl p-8 flex flex-col gap-6 items-center justify-center border border-gray-100 mx-auto">
            <h1 className="text-2xl font-bold text-white">Login</h1>
            {/* <img src="/logo.svg" alt="logo" className="w-24 h-24" /> */}
            <LoginRegisterWithGoogle type="login" />
            {/* <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full max-w-md mx-auto"
            >
                {
                    FORM_FIELDS.map((field) => (
                        <div key={field.name}>
                            <input
                                type={field.type}
                                {...register(field.name as keyof LoginForm)}
                                placeholder={field.placeholder}
                                className="w-full max-w-md p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-white"
                            />
                            {errors[field.name as keyof LoginForm] && <p className="text-red-500 text-sm">{errors[field.name as keyof LoginForm]?.message}</p>}
                        </div>
                    ))
                }
                <ShrtButton
                    disabled={!isValid || isPending}
                    variant={ButtonVariant.PRIMARY}
                    className="w-full max-w-md py-3 text-lg font-bold transition hover:brightness-110"
                >
                    Login
                </ShrtButton>
                <p className="text-sm text-gray-500">Don't have an account? <Link href="/landing/register" className="text-blue-500 hover:underline">Register</Link></p>
            </form> */}
        </div>
    )
}