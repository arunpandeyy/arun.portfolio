'use client'

import { Code2, Database, Cpu, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'React, Next.js, Node.js, Express', color: 'from-cyan-500 to-blue-500' },
    { icon: Database, title: 'Smart Contracts', desc: 'Web3.js, Solidity, Blockchain', color: 'from-purple-500 to-pink-500' },
    { icon: Cpu, title: 'Backend Systems', desc: 'APIs, Databases, Cloud Infrastructure', color: 'from-green-500 to-cyan-500' },
    { icon: Zap, title: 'Performance', desc: 'Optimization, Scaling, DevOps', color: 'from-yellow-500 to-orange-500' }
  ]

  return (
    <section className="py-24 border-t border-cyan-500/10">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Core Services
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={i}
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition cursor-pointer overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition`}></div>
              <Icon className={`mb-4 group-hover:scale-110 transition`} size={32} style={{background: `linear-gradient(to bottom right, ...)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}