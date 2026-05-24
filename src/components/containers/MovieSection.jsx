"use client"

import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import SearchBar from "../UI/SearchBar"
import MovieCard from "../UI/MovieCard"

export default function MovieSection() {
    const [search, setSearch] = useState("")

    //Fetch de movies usando react-query
    const { data: movies = [], isLoading, error } = useQuery({
        queryKey: ["movies"],
        queryFn: async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
            )

            const data = await response.json()
            return data.results
        }
    })
    //Fetch de genres usando react-query
    const { data: genres = [] } = useQuery({
        queryKey: ["genres"],
        queryFn: async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
            )

            const data = await response.json()
            return data.genres
        }
    })
    //Filtragem dos filmes com base no título usando o estado de busca
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    )

    if (isLoading) {
        return <h2 className="text-center mt-10">Carregando filmes...</h2>
    }

    if (error) {
        return (
            <h2 className="text-center mt-10 text-red-500">
                Erro ao carregar filmes.
            </h2>
        )
    }

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} />

            <main className="min-h-screen p-10">
                <h2 className="text-white text-2xl font-bold tracking-tight select-none text-left mb-6 pl-1 border-l-4 border-red-600">
                    Filmes Populares
                </h2>

                {filteredMovies.length > 0 ? (
                    <MovieCard movies={filteredMovies} genres={genres} />
                ) : (
                    <h3 className="text-center text-gray-500">
                        Nenhum filme com esse título encontrado.
                    </h3>
                )}
            </main>
        </div>
    )
}