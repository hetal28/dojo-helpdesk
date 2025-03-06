import {NextResponse} from 'next/server'

// Force dynamic rendering will result in routes being rendered for each user at request time. 
//This option is equivalent to getServerSideProps() in the pages directory.
export const dynamic = 'force-dynamic' 

export async function GET() {
    const res = await fetch('http://localhost:4000/tickets');

    const tickets = await res.json();

    return NextResponse.json(tickets, {
        status: 200
    })
}  

export async function POST(request) {
    const ticket = await request.json();

    const res = await fetch('http://localhost:4000/tickets',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(ticket)
        });

    const newTicket = await res.json();
    
    return NextResponse.json(newTicket, {
        status: 201
    });
}