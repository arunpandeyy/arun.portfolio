export const api = {
  // Projects
  getProjects: async () => {
    const res = await fetch(`/api/projects`)
    if (!res.ok) throw new Error('Failed to fetch projects')
    return res.json()
  },

  getProject: async (id) => {
    const res = await fetch(`/api/projects/${id}`)
    if (!res.ok) throw new Error('Failed to fetch project')
    return res.json()
  },

  // Skills
  getSkills: async () => {
    const res = await fetch(`/api/skills`)
    if (!res.ok) throw new Error('Failed to fetch skills')
    return res.json()
  },

  // Contact
  sendContact: async (data) => {
    const res = await fetch(`/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  },

  // Commands
  getCommand: async (cmd) => {
    const res = await fetch(`/api/commands?cmd=${cmd}`)
    if (!res.ok) throw new Error('Failed to fetch command')
    return res.json()
  }
}