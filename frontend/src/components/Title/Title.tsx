import type React from 'react'
import './Title.css'

interface contentTitle {
    children: React.ReactNode
}


export function Title({ children }: contentTitle) {
    return (
        <div className="title">
            {children}
        </div>
    )
}