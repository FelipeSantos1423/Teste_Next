import BackButton from "@/components/UI/BackButton"
import MovieDetailsContainer from "@/components/containers/MovieDetailsContainer"


export default async function MovieDetailsCards({ params }) {
    const { id } = await params
    return (
        <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 flex justify-center items-center">
            <BackButton />
        
            <MovieDetailsContainer id={id} />
        </div>
    )
}