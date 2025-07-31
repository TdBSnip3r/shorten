'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod/v4"
import { ShrtButton } from "./common/ShrtButton/ShrtButton"
import { useCallback } from "react"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { useUserStore } from "@/stores/UserStore"
import { useRouter } from "next/navigation";
import { RegisterFormSchema, FORM_FIELDS } from "@/forms/RegisterFormSchema"
import { registerWithEmail } from "@/backend/api/auth"
import { RegisterResponse } from "@/backend/types/api-types"
import LoginRegisterWithGoogle from "./common/LoginRegisterWithGoogle"
import Link from "next/link"

type RegisterForm = z.infer<typeof RegisterFormSchema>

export const RegisterForm = () => {
    const { setUser } = useUserStore()
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<RegisterForm>({
        resolver: zodResolver(RegisterFormSchema),
        mode: 'onChange'
    })

    const { mutate: registerMutation, isPending } = useMutation({
        mutationFn: (registerData: RegisterForm) => registerWithEmail(registerData),
        onSuccess: (data: RegisterResponse) => {
            console.log(data)
            setUser({ ...data.user, access_token: data.access_token })
            toast.success(data.message)
            router.push('/dashboard');
            reset()
        }, onError: (error: any) => {
            toast.error(error?.response?.data?.message)
            reset({ password: "", repeatPassword: "" })
        }
    })

    const onSubmit: SubmitHandler<RegisterForm> = useCallback(async (value: RegisterForm) => {
        registerMutation(value)
    }, []);


    return (
        <div className="max-w-lg w-full shadow-2xl rounded-3xl p-8 flex flex-col gap-6 items-center justify-center border border-gray-100 mx-auto">
            <h1 className="text-2xl font-bold text-white">Register</h1>
            <img src="/logo.svg" alt="logo" className="w-24 h-24" />
            <LoginRegisterWithGoogle type="register" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full max-w-md mx-auto"
            >
                {FORM_FIELDS.map((field) => (
                    <div key={field.name}>
                        <input
                            key={field.name}
                            type={field.type}
                            {...register(field.name as keyof RegisterForm)}
                            placeholder={field.placeholder}
                            className="w-full max-w-md p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-white"
                        />
                        {errors[field.name as keyof RegisterForm] && <p className="text-red-500 text-sm">{errors[field.name as keyof RegisterForm]?.message}</p>}
                    </div>
                ))
                }
                <ShrtButton
                    disabled={!isValid || isPending}
                    variant={ButtonVariant.PRIMARY}
                    className="w-full max-w-md py-3 text-lg font-bold transition hover:brightness-110"
                >
                    Register
                </ShrtButton>
                <p className="text-sm text-gray-500">Already have an account? <Link href="/landing/login" className="text-blue-500 hover:underline">Login</Link></p>
            </form>
        </div>
    )
}