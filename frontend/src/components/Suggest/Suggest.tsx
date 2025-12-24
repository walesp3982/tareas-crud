import type { JSX } from "react";
import styles from './Suggest.module.css'

interface propsSuggest {
    children: React.ReactNode
}

export function Suggest({ children }: propsSuggest): JSX.Element {
    return (
        <div className={styles.suggest}>
            {children}
        </div>
    );
}