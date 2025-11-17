'use client'

import { useState, useEffect, useRef } from 'react'
import { commands } from '../data/commands'

export default function Terminal() {
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'prompt', text: 'arun@blockchain:~$' }
  ])
  const [activeCommand, setActiveCommand] = useState(null)
  const terminalRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])

  const processCommand = (cmd) => {
    const lower = cmd.toLowerCase().trim()

    if (lower === 'clear') {
      setTerminalHistory([{ type: 'prompt', text: 'arun@blockchain:~$' }])
      return
    } else if (lower === '') {
      setTerminalHistory(prev => [...prev, { type: 'prompt', text: 'arun@blockchain:~$' }])
      return
    }

    const output = commands[lower] || `Command not found: '${cmd}'\nType 'help' for available commands`

    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', text: `$ ${cmd}` },
      { type: 'output', text: output },
      { type: 'prompt', text: 'arun@blockchain:~$' }
    ])
    setActiveCommand(lower)
  }

  const handleTerminalKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (terminalInput.trim()) {
        processCommand(terminalInput)
        setTerminalInput('')
      }
    }
  }

  const quickCommands = ['whoami', 'skills', 'projects', 'services', 'metrics', 'connect']

  return (
    <section className="py-24 border-t border-cyan-500/10 pb-12">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">$ Terminal Access</h2>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => processCommand(cmd)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition border ${
              activeCommand === cmd
                ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300'
                : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
          >
            {cmd}
          </button>
        ))}
      </div>

      <div
        ref={terminalRef}
        className="bg-slate-950 border-2 border-cyan-500/50 rounded-lg p-6 max-h-96 overflow-y-auto font-mono text-sm space-y-1 shadow-2xl shadow-cyan-400/20 mb-4"
      >
        {terminalHistory.map((line, i) => (
          <div
            key={i}
            className={
              line.type === 'input'
                ? 'text-cyan-400 font-semibold'
                : line.type === 'prompt'
                ? 'text-cyan-400'
                : 'text-gray-300 whitespace-pre-wrap'
            }
          >
            {line.text}
          </div>
        ))}
        <div className="flex gap-2 text-cyan-400">
          <span>$</span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleTerminalKeyDown}
            className="flex-1 bg-transparent outline-none text-cyan-400 caret-cyan-400"
            placeholder="Type command..."
            autoFocus
          />
        </div>
      </div>

      <p className="text-gray-500 text-sm">💡 Try: whoami, skills, projects, services, metrics, help</p>
    </section>
  )
}