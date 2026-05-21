import '../app/globals.css'

export default async function Movies({ movies }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="bg-zinc-900 p-4 rounded-xl mb-4 w-full h-full flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-auto rounded-lg mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                    <h2 className="text-lg font-bold mb-2 text-white">
                        {movie.title}
                    </h2>
                    <p className="text-sm text-gray-400 mb-2">
                        {movie.release_date}
                    </p>
                </div>
            ))}
        </div>
    )
}