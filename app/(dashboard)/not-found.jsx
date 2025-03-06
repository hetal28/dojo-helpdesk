import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem.</h2>
        <p>Requested page was not found</p>
        <p>Go back to <Link href="/">Dashboard</Link></p>
    </main>
  )
}
