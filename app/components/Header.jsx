'use client'

import { Terminal } from 'lucide-react'

export default function Header({ onContactClick }) {
  return (
    <div className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition">
            <Terminal className="text-white" size={24} />
          </div>
          <div>
            <p className="text-cyan-400 font-bold text-sm">arun@mern</p>
            <p className="text-gray-400 text-xs">:~/portfolio</p>
          </div>
        </div>
        <button
          onClick={onContactClick}
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 text-white rounded-lg font-semibold transition transform hover:scale-105"
        >
          Contact & CV
        </button>
      </div>
    </div>
  )
}