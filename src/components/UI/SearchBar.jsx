"use client"
import '../../app/globals.css'

export default function SearchBar({ search, setSearch }) {
  return (

 <nav className="w-full px-4 pt-2">
  <div 
    className="max-w-7xl mx-auto bg-[var(--nav-color)]  flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-full shadow-xl border border-white/[0.04] backdrop-blur-md"
  >

    <h1 className="text-white text-xl font-extrabold tracking-tight select-none">
      Catálogo de <span className="text-red-600">Filmes</span>
    </h1>

    <div className="w-full sm:w-80 md:w-96">
      <input 
        type="text" 
        placeholder="Buscar filmes..." 
        className="w-full px-5 py-2 text-sm text-white placeholder:text-gray-400 bg-gray-900 border border-white/[0.08] focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 rounded-full transition-all duration-300" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
    </div>

  </div>
</nav>
  )
}