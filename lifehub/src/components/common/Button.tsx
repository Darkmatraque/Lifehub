import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;

    variant?: "primary" | "secondary" | "danger";

}

export default function Button({

    children,

    variant = "primary",

    ...props

}: ButtonProps) {

    return (

        <button
            className={`lh-button ${variant}`}
            {...props}
        >

            {children}

        </button>

    );

}
