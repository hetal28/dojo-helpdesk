import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../(dashboard)/loading'
import Link from 'next/link'

export const metadata = {
  title: 'Dojo Helpdesk | Tickets',
  description: 'Generated by create next app',
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        </div>
        <Link href="/tickets/create">
            <button className="btn-primary">Create Tickets</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  )
}
