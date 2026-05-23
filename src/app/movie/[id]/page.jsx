import BackButton from "@/components/BackButton"
import MovieDetails from "@/components/MovieDetails"

export default async function MovieDetailsCards({ params }) {
    const { id } = await params

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
    )

    const movie = await response.json()

    return (
        
        
        <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 flex justify-center items-center">
            <BackButton />
            
            <MovieDetails movie={movie} />
            
        </div>
    )
}