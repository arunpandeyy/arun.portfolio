'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Services from './components/Services'
import Metrics from './components/Metrics'
import Terminal from './components/Terminal'
import ContactModal from './components/ContactModal'
import ChatBot from './components/ChatBot'

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [showChatBot, setShowChatBot] = useState(false)
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Header onContactClick={() => setShowContactModal(true)} />
      
      <div className="pt-24 max-w-6xl mx-auto px-6 pb-12">
        <Hero />
        <Skills />
        <Projects onProjectClick={setExpandedProject} />
        <Services />
        <Metrics />
        <Terminal />
      </div>

      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}

      {expandedProject && (
        <ProjectModal 
          project={expandedProject} 
          onClose={() => setExpandedProject(null)} 
        />
      )}

      {showChatBot && (
        <ChatBot onClose={() => setShowChatBot(false)} />
      )}

      {!showChatBot && (
        <button
          onClick={() => setShowChatBot(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full shadow-lg hover:shadow-purple-500/50 transition hover:scale-110 z-40 animate-pulse"
        >
          💬
        </button>
      )}
    </div>
  )
}