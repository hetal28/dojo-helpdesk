import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos perspiciatis quo repellat aspernatur distinctio iure sunt cumque laborum. Adipisci. Assumenda quibusdam modi nemo temporibus ad ut atque deserunt, quod ullam adipisci unde asperiores vel laboriosam! Cumque!</p>
    
      <div className="flex justify-center my-8">
        <nav>
          <Link href="/tickets">
            <button className="btn-primary">View Tickets</button>
          </Link>
        </nav>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus iure sequi. Quis quisquam rem minima! Cupiditate nostrum temporibus veritatis. Aliquid, quas. Voluptates voluptatem a exercitationem corrupti deserunt ipsa porro!</p>      
      </div>
      <div className="card">
        <h3>New website is Live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus iure sequi. Quis quisquam rem minima! Cupiditate nostrum temporibus veritatis. Aliquid, quas. Voluptates voluptatem a exercitationem corrupti deserunt ipsa porro!</p>      
      </div>

    </main>
  )
}
