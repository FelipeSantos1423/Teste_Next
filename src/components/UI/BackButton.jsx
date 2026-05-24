"use client"
import '../../app/globals.css'

import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()

  function handleBack() {
    router.back()
  }

  return (
    <button onClick={handleBack} className="absolute top-2 left-4 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-900 transition-colors duration-300 cursor-pointer z-10 sm:top-4 sm:left-6 lg:top-6 lg:left-8 mb-4">
      <p className="text-2xl">←</p>
    </button>
  )
}