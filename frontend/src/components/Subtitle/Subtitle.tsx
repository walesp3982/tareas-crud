import type React from "react";
import type { JSX } from "react";
import './Subtitle.css'

interface propsSubtitle {
    children: React.ReactNode
}

export function Subtitle({ children }: propsSubtitle): JSX.Element {
    return (<>
        <div className="subtitle">
            {children}
        </div>
    </>)
}