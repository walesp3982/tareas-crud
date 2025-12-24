import type React from "react";
import type { JSX } from "react";
import styles from './Subtitle.module.css'

interface propsSubtitle {
    children: React.ReactNode
}

export function Subtitle({ children }: propsSubtitle): JSX.Element {
    return (<>
        <div className={styles.subtitle}>
            {children}
        </div>
    </>)
}