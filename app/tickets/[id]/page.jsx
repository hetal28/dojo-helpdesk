import { notFound } from 'next/navigation';
import React from 'react'
import Back from './backbtn';

export const dynamicParams = true;

export async function generateMetadata({params}) {
    const id = params.id;
    return {
        title: `Dojo Helpdesk | ${id}`
    }
}

//Static rendering
export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets');
    const tickets = await res.json();

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

const fetchTickets = async (id) => {
    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 60 
        }
    });

    if(!res.ok){
        notFound();
    }
    return res.json();
}

export default async function TicketDetails({ params }) {
    const ticket = await fetchTickets(params.id);
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            <Back path='/tickets'/>
        </div>
    </main>
  )
}
