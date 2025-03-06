import React from 'react'
import Navbar from '../components/Navbar'

export default function TicketLayout({ children }) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}
