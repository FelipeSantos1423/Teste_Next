"use client"

import { useQuery } from "@tanstack/react-query"
import MovieDetails from "../UI/MovieDetails"

export default function MovieDetailsContainer({ id }) {
    const { data: movie, isLoading, error } = useQuery({
        queryKey: ["movie", id],
        queryFn: async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
            )
    
            return response.json()
        }
    })

    if (isLoading) {
        return <h2>Carregando filme...</h2>
    }

    if (error) {
        return <h2>Erro ao carregar filme.</h2>
    }

    console.log(movie)
    return <MovieDetails movie={movie} />
}