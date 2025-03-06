'use client'

import { useState } from 'react'

export default function AuthForm({handleSubmit}) {

    const [cred, setCred] = useState({
        email: '',
        password: ''
    });

  return (
    <main>
        <form onSubmit={(e) => handleSubmit(e, cred)}>
            <label>
                <span>Email:</span>
                <input 
                    type="email"
                    name="email"
                    required
                    value={cred.email}
                    placeholder='Email'
                    onChange={(e) => setCred({...cred,email:e.target.value})}
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                    type="password"
                    name="password"
                    required
                    value={cred.password}
                    placeholder='Password'
                    onChange={(e) => setCred({...cred,password:e.target.value})}
                />
            </label>
            <button className="btn-primary">Submit</button>
        </form>
    </main>
  )
}
