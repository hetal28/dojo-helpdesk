import React from 'react'
import Link from 'next/link'

const fetchTickets = async () => {

    await new Promise(resolve => setTimeout(resolve,3000))

    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 //use 0 to opt out of using cache
        }
    });
  
    console.log(res.status)
    if(!res.ok){
        notFound();
    }
    return res.json();
}

export default async function TicketList() {
    const tickets = await fetchTickets();
  return (
    <div>
        {
            tickets.map((ticket) => (
                <div className="card my-5" key={ticket.id}>
                    <h2>{ticket.title}</h2>
                    <p>{ticket.body.substring(0,200)}...<Link href={`/tickets/${ticket.id}`}>Read more</Link></p>
                    <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                </div>
            ))
        }
        {
            tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )
        }
    </div>
  )
}
