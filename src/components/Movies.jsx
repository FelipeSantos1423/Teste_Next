 import '../app/globals.css'

 export default async function Movies({ movies }) {
  return (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-zinc-900 p-4 rounded-xl mb-4"
            >
              <h2 className="text-lg font-bold mb-2 text-white">
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
  )
}