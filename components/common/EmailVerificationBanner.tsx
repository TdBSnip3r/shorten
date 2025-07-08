"use client"
import { sendVerificationEmail } from "@/backend/api/auth";
import { useUserStore } from "@/stores/UserStore";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ShrtButton } from "./ShrtButton/ShrtButton";
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum";

const EmailVerificationBanner = () => {

    const { user } = useUserStore()

    if (user?.isEmailVerified) return null

    const { mutate: resendEmailVerificationMutation, isPending, data } = useMutation({
        mutationFn: () => sendVerificationEmail(),
        onSuccess: () => {
            toast.success("Controlla la tua casella di posta per verificare la tua email")
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return (<div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 py-2 px-4 flex flex-col md:flex-row items-center justify-center text-sm md:text-base font-medium shadow-sm gap-2">
        <span className="inline-block">
            ⚠️ Devi verificare la tua email per accedere a tutte le funzionalità. Controlla la tua casella di posta e segui il link di verifica!
        </span>
        <ShrtButton
            disabled={isPending}
            className={`${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => resendEmailVerificationMutation()}
            variant={ButtonVariant.SECONDARY}>
            {isPending ? "Sending..." : "Send"}
        </ShrtButton>

    </div>);
};

export default EmailVerificationBanner;
