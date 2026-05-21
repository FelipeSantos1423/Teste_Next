import Navbar from "../components/Navbar"
import "./globals.css"

/*Puxando a chave da API do .env.local para o console, 
para verificar se está funcionando corretamente.
console.log(process.env.NEXT_PUBLIC_API_KEY)*/

//Chamando a função getMovies para buscar os filmes populares da API do TMDB.
async function getMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  )

  const data = await response.json()

  /*Exibindo os resultados no console para verificar se a requisição 
  está funcionando corretamente.
  console.log(data.results)*/

  return data.results
}

getMovies()

export default async function Home() {

  const movies = await getMovies()

  return (
    <div>
      <Navbar />

      <main className="bg-white min-h-screen p-10 text-black">
        <h1>MAIN</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <h2 key={movie.id}>
            {movie.title}
          </h2>
        ))}
        </div>
      </main>
    </div>
  )
}