import React from 'react'
import Link from 'next/link'

export default function AuthLayout({ children }) {
  return (
    <div>
        <nav>
            <h1>Dojo Helpdesk</h1>
            <Link href="/signup">Sign up</Link> 
            <Link href="/login">Login</Link> 
        </nav>
        {children}
    </div>
  )
}
