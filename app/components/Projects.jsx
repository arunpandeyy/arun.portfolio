'use client'

import { ChevronDown } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects({ onProjectClick }) {
  return (
    <section className="py-24 border-t border-cyan-500/10">
      <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <p className="text-gray-400 text-center mb-12">Click on any project to see details</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-5 transition"></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-3">{project.emoji}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
              <p className="text-xs text-purple-400 font-mono">{project.stack}</p>
            </div>

            <div className="relative z-10 mt-4 pt-4 border-t border-slate-700/50">
              <ChevronDown 
                size={20} 
                className={`text-gray-500 group-hover:text-cyan-400 transition transform`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}