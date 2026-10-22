import { useQuery, useState } from '@tanstack/react-query'
import { PokemonDetails } from '../components/PokemonDetails.tsx'
import { fetchPokemonByName } from '../apis/pokemon.ts'
import 

//WHAT DO WE. WANT TO SEE ON THE HOMEPAGE
//1. Search box - search pokemon
//2. BUTTON (reads "Click here to get your team") - Link to "team" page
//3. write <p> to explain the app

function Home() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')

  const { data: pokemon, isPending, isError } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonbyName(name),
    enabled: name !== '',
  })

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  if (search.trim()) setName(search.trim())
  }

  return (
    <div>
      
      <h2>🐭 Home</h2>
      <p>React development has begun!</p>
    
    <button onClick={() => Navigate('/')}>
      Are you ready for your team?
      </button>
      </div>
  )
}

export default Home
