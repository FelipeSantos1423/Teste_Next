"use client"
import '../../app/globals.css'

export default function SearchBar({ search, setSearch }) {
  return (

    <nav className="flex-inline justify-items-center p-6 w-full mb-6 shadow-md"
      style={{ backgroundColor: "var(--nav-color)" }}>

      <h1 className="text-white text-2xl text-center mb-6">
        Catálogo de Filmes
      </h1>

      <div className="flex gap-4">
        <input type="text" placeholder="Buscar filmes..." className="bg-white text-black placeholder:text-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-md p-2 w-100 " value={search} onChange={(e) => setSearch(e.target.value)} />

      </div>
    </nav>
  )
}