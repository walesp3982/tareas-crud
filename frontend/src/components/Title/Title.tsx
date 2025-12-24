import type React from 'react'
import styles from './Title.module.css'

interface contentTitle {
    children: React.ReactNode
}


export function Title({ children }: contentTitle) {
    return (
        <div className={styles.title}>
            {children}
        </div>
    )
}