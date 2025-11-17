'use client'

import { X, Mail, Phone, MapPin, Github, Linkedin, Twitter, Download, ExternalLink, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ContactModal({ onClose }) {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-500/50 rounded-xl p-8 max-w-md w-full shadow-2xl shadow-cyan-400/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact & CV
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4 mb-8">
          {[
            { icon: Mail, label: 'Email', value: 'pandeyarun4499@gmail.com', id: 'email' },
            { icon: Phone, label: 'Phone', value: '+91 8556054499', id: 'phone' },
            { icon: MapPin, label: 'Location', value: 'Mohali, Punjab', id: 'location' }
          ].map((contact) => {
            const Icon = contact.icon
            return (
              <div
                key={contact.id}
                onClick={() => copyToClipboard(contact.value, contact.id)}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="text-cyan-400" size={20} />
                    <div>
                      <p className="text-gray-400 text-xs">{contact.label}</p>
                      <p className="text-white font-semibold text-sm">{contact.value}</p>
                    </div>
                  </div>
                  {copied === contact.id ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-gray-400 group-hover:text-cyan-400 transition" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mb-8">
          <p className="text-gray-400 text-xs mb-3 uppercase font-semibold">Social Links</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Github, label: 'GitHub', link: 'https://github.com' },
              { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
              { icon: Twitter, label: 'Twitter', link: 'https://twitter.com' }
            ].map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition flex flex-col items-center gap-2 group"
                >
                  <Icon className="text-cyan-400 group-hover:scale-110 transition" size={24} />
                  <span className="text-xs text-gray-400">{social.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-gray-400 text-xs uppercase font-semibold">Download CV</p>
          <a
            href="https://drive.google.com/file/d/1234567890/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download CV (PDF)
          </a>
          <a
            href="https://docs.google.com/document/d/1234567890/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 text-cyan-400 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <ExternalLink size={20} />
            View Online Resume
          </a>
        </div>
      </div>
    </div>
  )
}