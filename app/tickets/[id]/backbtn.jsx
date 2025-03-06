'use client'
import { useRouter } from 'next/navigation'

export default function Back(props) {
    const path = props.path;
    const router = useRouter();
  return (
    <div className="flex justify-center my-8">
        <button className='btn-primary btn-center' onClick={() => {router.push(path)}}>Back</button>
    </div>
  )
}
