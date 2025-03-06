"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Back from "../[id]/backbtn";

export default function CreateForm() {

    const router = useRouter();
    const [ticket, setTicket] = useState({
        title: '',
        body: '',
        priority: 'low',
        user_email: 'mario@netninja.dev'
    })
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch('http://localhost:4000/tickets',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(ticket)
        });

        if(res.status === 201){            
            router.push("/tickets");
            router.refresh();
        }
    }
  return (
    <main>
        <form className="w-1/2" onSubmit={handleSubmit}>
            <label>
                <span>Title:</span> 
                <input 
                type="text"
                name="title"
                placeholder="Title"
                value={ticket.title}
                required
                onChange={(e) => setTicket({...ticket,title:e.target.value})}
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea 
                    name="body"
                    placeholder="Body"
                    required
                    value={ticket.body}
                    onChange={(e) => setTicket({...ticket,body:e.target.value})}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    name="priority"
                    value={ticket.priority}
                    required
                    onChange={(e) => setTicket({...ticket,priority:e.target.value})}>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button className="btn-primary" disabled={loading}>
                {loading && <span>Adding..</span>}
                {!loading && <span>Add Ticket</span>}
            </button>
            <Back path="/tickets"/>
        </form>
    </main>
  )
}
