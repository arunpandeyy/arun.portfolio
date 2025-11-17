'use client'

import { useState } from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState(null)

  return (
    <section className="py-24 border-t border-cyan-500/10">
      <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <p className="text-gray-400 text-center mb-12">Click on any skill to expand</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            onClick={() => setExpandedSkill(expandedSkill === i ? null : i)}
            className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition cursor-pointer group overflow-hidden"
          >
            <div className="text-2xl mb-2 group-hover:scale-125 transition">{skill.icon}</div>
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition truncate">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                style={{width: expandedSkill === i ? '100%' : `${skill.level}%`}}
              ></div>
            </div>
            {expandedSkill === i && (
              <div className="mt-3 text-xs text-cyan-300">
                <p className="font-semibold">{skill.category}</p>
                <p className="text-gray-400">Proficiency: {skill.level}%</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}