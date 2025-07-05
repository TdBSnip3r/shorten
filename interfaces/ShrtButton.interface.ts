import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum";

export interface ShrtButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}