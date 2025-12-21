import type React from "react"
import './Button.css'
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button className="button" type="submit" onClick={onClick}>
            {children}
        </button>
    )
}