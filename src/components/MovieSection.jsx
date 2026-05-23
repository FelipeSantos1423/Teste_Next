"use client"

import { useState } from "react"
import SearchBar from "./SearchBar"
import MovieCard from "./MovieCard"

export default function MovieSection({ movies, genres }) {
    const [search, setSearch] = useState("")

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} />

            <main className="bg-white min-h-screen p-10 text-black">
                <h1 className="text-2xl font-bold mb-4 text-center my-2">
                    Filmes Populares
                </h1>

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