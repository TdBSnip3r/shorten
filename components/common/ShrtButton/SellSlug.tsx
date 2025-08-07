import toast from "react-hot-toast";
import DollarIcon from "./DollarIcon";
import PencilIcon from "./PencilIcon";

export enum SellSlugButtonMode {
    SELL = 'sell',
    EDIT = 'edit'
}

interface SellSlugButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode: SellSlugButtonMode;
    onSellRequest?: () => void;
    onEditSellPrice?: () => void;
}

const SellSlugButton = ({ mode, onSellRequest, onEditSellPrice, ...props }: SellSlugButtonProps) => {
    return (
        <button
            {...props}
            onClick={() => {
                if (mode === SellSlugButtonMode.SELL) {
                    onSellRequest?.();
                } else if (mode === SellSlugButtonMode.EDIT) {
                    onEditSellPrice?.();
                }
            }}
            className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-md transition-all duration-150 cursor-pointer"
            title="Vendi Slug"
        >
            {mode === SellSlugButtonMode.SELL ? <DollarIcon className="h-5 w-5" /> : <PencilIcon className="h-5 w-5" />}
        </button>
    )
}

export default SellSlugButton;
