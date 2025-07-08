import * as z from "zod/v4";

export const ContactsFormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    email: z.string().email("Invalid email").optional()
});