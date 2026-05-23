
import "./globals.css"
import MovieSection from "@/components/MovieSection"

/*Puxando a chave da API do .env.local para o console, 
para verificar se está funcionando corretamente.
console.log(process.env.NEXT_PUBLIC_API_KEY)*/

//Chamando a função getMovies para buscar os filmes populares da API do TMDB.
async function getMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  )

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes")
  }

  const data = await response.json()

  /*Exibindo os resultados no console para verificar se a requisição 
  está funcionando corretamente.*/
  console.log(data.results)

  return data.results
}
///////////////Fetch de Generos//////////////////////

async function getGenres() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  )
  const data = await response.json()
  console.log(data.genres)
  return data.genres
}


export default async function Home() {

  const movies = await getMovies()
  const genres = await getGenres()

  return (
    <div>
      <MovieSection movies={movies} genres={genres} />
    </div>
  )
}