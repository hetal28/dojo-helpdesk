'use client'

export default function Error({error, reset}) {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button className="btn-primary" onClick={() => reset()}>Try Again</button>
    </div>
  )
}
