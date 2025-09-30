import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Lotto from './pages/Lotto'

export default function App(){
  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center">
      <div className="w-full max-w-3xl px-4">
        <nav className="py-6 flex justify-between items-center">
          <div className="text-xl font-extrabold">Lotto App</div>
          <div>
            <Link to="/" className="mr-4 underline">Home</Link>
            <Link to="/lotto" className="underline">Lotto Numbers</Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/lotto" element={<Lotto/>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function Home(){
  return (
  <div className="bg-straw-400/90 rounded-lg shadow-md p-8 text-center">
      <h1 className="text-3xl">Welcome</h1>
      <p className="mt-4 font-normal">Go to the Lotto Numbers page to see a message.</p>
    </div>
  )
}
