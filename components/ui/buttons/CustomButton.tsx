import { FC } from "react";

interface CustomButtonProps {
    children?: React.ReactNode | React.ReactNode[];
    variant?: "primary" | "secondary" |"text";
    onClick?: () => void;
    additionalClasses?: string;
    style?: React.CSSProperties;
}

const variantClass = (variant: string = "") => {
    switch (variant) {
        case "primary":
            return "bg-tertiary	hover:bg-green-700 text-gray-100 font-semibold";
        case "secondary":
            return "bg-gray-200 hover:bg-gray-300 text-gray-900";
        case "text":
            return "text-uppercase text-gray-300 font-semibold";
        default:
            return "bg-green-500 hover:bg-green-600 ";
    }
}



export const CustomButton: FC<CustomButtonProps> = ({
    variant = "primary",
    children = "Button",
    additionalClasses = "",
    onClick = () => {},
    style = {},
}) => {
    return <button
    style={style}
    className={`${variantClass(variant)} 
    py-3 px-8 rounded-md ${additionalClasses}
    `}
    onClick={onClick}
    >
        {children}
    </button>
}