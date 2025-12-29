import type React from "react"
import styles from './Button.module.css'
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
    return (
        <button
            className={styles.button}
            type="submit"
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
}