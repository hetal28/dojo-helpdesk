'use client'

import AuthForm from '../AuthForm'

export default function Login() {
  
  const handleSubmit = async (e, cred) => {
    e.preventDefault();

    console.log('user login');
  }

  return (
    <main> 
        <h2 className="text-center">Log in</h2>

        <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}
