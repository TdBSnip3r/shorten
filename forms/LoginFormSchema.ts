import * as z from "zod/v4";

export const LoginFormSchema = z.object({
    email: z.email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
});

export const FORM_FIELDS = [
    {
        label: "Email",
        name: "email",
        placeholder: "Insert your email",
        type: "email",
    },
    {
        label: "Password",
        name: "password",
        placeholder: "Insert your password",
        type: "password",
    },
]