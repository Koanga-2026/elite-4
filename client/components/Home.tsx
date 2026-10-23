import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

//WHAT DO WE WANT TO SEE ON THE HOMEPAGE
//1. Search box - search pokemon (goes to /pokemon/:name)
//2. LINK (styled like a button, reads "Click here to get your team") - goes to "team" page
//3. write <p> to explain the app

function Home() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (search.trim()) navigate(`/pokemon/${search.trim().toLowerCase()}`)
  }

  return (
    <div>
      <h2>🐭 Home</h2>

      {/* 3. Explain the app */}
      <p>
        Build your dream Pokémon team! Search for any Pokémon by name to see
        its stats and type, then add it to your team. You can have up to 6
        Pokémon on your team at a time.
      </p>

      {/* 2. Link to the team page */}
      <Link to="/team" className="team-button">
        Are you ready for your dream team?
      </Link>

      {/* 1. Search box */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Pokémon name: </label>
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="e.g. charmander"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Home

