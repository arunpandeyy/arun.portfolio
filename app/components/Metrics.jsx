'use client'

export default function Metrics() {
  const metrics = [
    { value: '100k+', label: 'Active Users', icon: '👥' },
    { value: '$2M+', label: 'TVL Managed', icon: '💰' },
    { value: '50+', label: 'Enterprise Clients', icon: '🏢' },
    { value: '99%', label: 'Uptime', icon: '⚡' },
    { value: '3x', label: 'Faster Development', icon: '🚀' },
    { value: '99%', label: 'Security Rate', icon: '🔒' }
  ]

  return (
    <section className="py-24 border-t border-cyan-500/10">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Impact Metrics
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((metric, i) => (
          <div key={i} className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition">
            <p className="text-4xl mb-2">{metric.icon}</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{metric.value}</p>
            <p className="text-gray-400 text-sm mt-2">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}