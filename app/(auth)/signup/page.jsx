'use client'

import AuthForm from '../AuthForm'
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {

  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e, cred) => {
    e.preventDefault();

    const supabase = createClient();
    
    const response = await supabase.auth.signUp({
      email: cred.email,
      password: createClient.password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    });

    console.log("Sign-up response:", JSON.stringify(response));
    if(response.error){
      setError(response.error.message);
    }
    if (! response.error){
      router.push('/verify');
    }
  }

  return (
    <main> 
        <h2 className="text-center">Signup</h2>

        <AuthForm handleSubmit={handleSubmit}/>
        {error && 
          <div className="error">{error}</div>
        }
    </main>
  )
}
