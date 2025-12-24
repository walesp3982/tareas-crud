import type React from "react"
import styles from './Button.module.css'
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button className={styles.button} type="submit" onClick={onClick}>
            {children}
        </button>
    )
}