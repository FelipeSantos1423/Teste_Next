export default function MovieDetails({ movie }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-5xl lg:max-w-7xl w-full bg-zinc-900 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-2xl mt-6">

      <div className="flex justify-center md:justify-start shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-64 md:w-72 lg:w-76 rounded-lg lg:rounded-2xl shadow-md lg:shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 lg:gap-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {movie.title}
        </h1>

        <p className="text-lg lg:text-xl text-gray-400">
          <strong className="text-white">Lançamento:</strong> {movie.release_date}
        </p>

        <p className="text-lg lg:text-xl text-yellow-400">
          <strong className="text-white">Nota:</strong> ⭐ {movie.vote_average?.toFixed(1)} / 10
        </p>

        <p className="text-lg lg:text-xl text-red-400">
          <strong className="text-white">Gênero:</strong>{" "}
          {movie.genres?.map((g) => g.name).join(" • ")}
        </p>

        <p className="text-lg lg:text-xl text-gray-400">
          <strong className="text-white">Duração:</strong> {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
        </p>

        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
          <strong className="text-white">Sinopse:</strong> {movie.overview}
        </p>
      </div>

    </div>
  )
}