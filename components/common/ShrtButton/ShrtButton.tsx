import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { ShrtPrimaryVariant } from "./variants/ShrtPrimaryVariant"
import { ShrtSecondaryVariant } from "./variants/ShrtSecondaryVariant"
import { ShrtButtonProps } from "@/interfaces/ShrtButton.interface"

export const ShrtButton: React.FC<ShrtButtonProps> = ({ children, variant = ButtonVariant.PRIMARY, ...props }) => {
    return (
        <>
            {
                variant === ButtonVariant.PRIMARY && <ShrtPrimaryVariant {...props}>{children}</ShrtPrimaryVariant>
            }
            {
                variant === ButtonVariant.SECONDARY && <ShrtSecondaryVariant {...props}>{children}</ShrtSecondaryVariant>
            }
        </>
    )
}