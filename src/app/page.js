import Navbar from "../components/Navbar"
import "./globals.css"

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="bg-white min-h-screen p-10 text-black">
        <h1>MAIN</h1>
      </main>
    </div>
  )
}