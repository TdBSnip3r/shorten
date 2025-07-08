"use client"
import { useCallback, useState } from "react";
import { ContactsFormSchema } from "@/forms/ContactsForm"
import * as z from "zod/v4"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/backend/api/auth";
import { ContactEmailRequest, ContactEmailResponse } from "@/backend/types/api-types";
import { useUserStore } from "@/stores/UserStore";

type ContactsForm = z.infer<typeof ContactsFormSchema>;

const ContactsPage = () => {
    const [sent, setSent] = useState(false);
    const {user} = useUserStore()

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ContactsForm>({
        resolver: zodResolver(ContactsFormSchema),
        mode: "onChange"
    });

    const mutation = useMutation({
        mutationFn: (value: ContactsForm) => {
            const payload : ContactEmailRequest = { title: value.title, content: value.content, ...(user ? {} : { email: value.email })}
            return sendContactEmail(payload)
        },
        onSuccess: (data: ContactEmailResponse) => {
            toast.success("URL shortened successfully")
        },
        onError: (error: any) => {
            console.log(error)
            toast.error(error.response.data.message)
        },
    })

    const onSubmit: SubmitHandler<ContactsForm> = useCallback(async (value: ContactsForm) => {mutation.mutate(value)}, []);


    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-12 px-4">
            <div className="max-w-lg w-full text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contattaci</h1>
                <p className="text-lg text-gray-600 mb-8">Hai domande, suggerimenti o richieste particolari? Compila il modulo qui sotto e ti risponderemo il prima possibile!</p>
                {sent ? (
                    <div className="bg-green-100 text-green-700 rounded-xl p-6 font-semibold">Messaggio inviato con successo! Ti risponderemo presto.</div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-left">
                        <input
                            type="text"
                            {...register("title")}
                            placeholder="Il tuo titolo"
                            className="w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        {!user && (
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="La tua email"
                                className="w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                required
                            />
                        )}
                        {!user && errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        <textarea
                            {...register("content")}
                            placeholder="Il tuo messaggio"
                            rows={5}
                            className="w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                        />
                        {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
                        <button
                            disabled={mutation.isPending || !isValid}
                            type="submit"
                            className={`w-full py-3 text-lg font-bold bg-blue-500 text-white rounded-xl transition hover:brightness-110 ${mutation.isPending || !isValid ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Invia
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactsPage;