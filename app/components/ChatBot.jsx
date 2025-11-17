'use client'

import { X, MessageCircle, Send, Loader } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function ChatBot({ onClose }) {
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! 👋 I\'m Arun\'s AI Assistant. Ask me anything about skills, projects, or services!' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [chatMessages])

  const handleChatSend = async () => {
    if (!chatInput.trim()) return

    const userMessage = chatInput
    setChatMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setChatInput('')
    setChatLoading(true)

    try {
      // TODO: Replace with actual Gemini API call
      const responses = [
        `Great question about ${userMessage}! I'd love to help you with that.`,
        'That\'s an interesting question! Let me provide you with information.',
        'I can help you with that. Here\'s what you need to know...',
      ]
      
      setTimeout(() => {
        setChatMessages(prev => [...prev, { type: 'bot', text: responses[Math.floor(Math.random() * responses.length)] }])
        setChatLoading(false)
      }, 800)
    } catch (error) {
      setChatMessages(prev => [...prev, { type: 'bot', text: 'Sorry, I encountered an error. Please try again.' }])
      setChatLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-96 bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-500/50 rounded-xl shadow-2xl shadow-cyan-400/20 flex flex-col z-50">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <MessageCircle size={20} /> AI Assistant
        </h3>
        <button
          onClick={onClose}
          className="hover:bg-white/20 p-1 rounded transition"
        >
          <X size={20} />
        </button>
      </div>

      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-700 text-gray-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {chatLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 p-3 rounded-lg">
              <Loader size={20} className="animate-spin" />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-slate-700 p-4 flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
          placeholder="Ask me anything..."
          className="flex-1 bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
          disabled={chatLoading}
        />
        <button
          onClick={handleChatSend}
          disabled={chatLoading}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 p-2 rounded transition"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}