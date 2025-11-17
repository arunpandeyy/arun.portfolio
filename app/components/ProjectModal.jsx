'use client'

import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-500/50 rounded-xl p-8 max-w-2xl w-full shadow-2xl shadow-cyan-400/20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="text-6xl mb-3">{project.emoji}</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <X size={28} />
          </button>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{project.details}</p>
        <p className="text-sm text-purple-400 font-mono mb-4">{project.stack}</p>
        <p className="text-sm text-cyan-300 font-semibold mb-6">{project.stats}</p>

        <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 text-white rounded-lg font-semibold transition">
          View Project →
        </button>
      </div>
    </div>
  )
}