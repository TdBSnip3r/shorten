import * as z from "zod/v4";

export const RegisterFormSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  repeatPassword: z.string()
}).refine((data) => data.password === data.repeatPassword, {
  message: "errors.passwordsDontMatch",
  path: ["repeatPassword"],
}); 

export const FORM_FIELDS = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "Insert your first name",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Insert your last name",
    type: "text",
  },
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
  {
    label: "Repeat Password",
    name: "repeatPassword",
    placeholder: "Repeat your password",
    type: "password",
  },
]