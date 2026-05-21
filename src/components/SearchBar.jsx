import '../app/globals.css'
export default function SearchBar() {
  return (
    
   <nav className="flex justify-between items-center p-6 w-full"
  style={{ backgroundColor: "var(--red-color)" }}>

  <h1 className="text-white text-2xl font-bold">
    Catálogo de Filmes
  </h1>

  <div className="flex gap-4">
    <input type="text" placeholder="Buscar filmes..."  className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-md p-2"/>

    <button className="bg-white text-red-500 hover:bg-gray-200 rounded-md shadow-md p-2"> Buscar </button>
  </div>
</nav>
  )
}