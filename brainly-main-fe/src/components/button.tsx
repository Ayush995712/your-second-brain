import type { ReactElement } from "react";

interface Buttonprops {
    variant: "primary" | "secondary";
    text: string;
    startIcon: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-400"
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export function Button({variant, text, startIcon, onClick, fullWidth, loading}: Buttonprops) {
    
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full justify-center items-center " : " "}`} disabled={loading}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}

// for horizontal center - use justify center
// for vertical center - use items center