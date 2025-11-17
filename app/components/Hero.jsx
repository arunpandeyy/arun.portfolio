'use client'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 relative overflow-hidden">
      <div className="text-center z-10">
        <div className="inline-block mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm animate-pulse">$</span>
            <span className="text-cyan-400 font-mono text-sm">
              <span className="inline-block">echo</span>
              <span className="inline-block ml-2">
                <span className="animate-pulse">🚀</span>
                <span className="animate-pulse" style={{animationDelay: '0.1s'}}> Innovative</span>
                <span className="animate-pulse" style={{animationDelay: '0.2s'}}> Solutions</span>
              </span>
            </span>
          </div>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          ARUN PANDEY
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Full-Stack Developer • Web3 Enthusiast • System Architect
        </p>
        
        <div className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed h-20">
          <p className="inline-block border-r-2 border-cyan-400 pr-2 animate-pulse">
            Building scalable, secure, and performant applications...
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl hover:shadow-cyan-500/50 text-white rounded-lg font-semibold transition transform hover:scale-105"
          >
            $ whoami
          </button>
          <button
            className="px-8 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 rounded-lg font-semibold transition transform hover:scale-105"
          >
            $ skills
          </button>
          <button
            className="px-8 py-3 border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 rounded-lg font-semibold transition transform hover:scale-105"
          >
            💬 Chat with AI
          </button>
        </div>
      </div>
    </section>
  )
}