import { NextResponse } from 'next/server'
import { projects } from '@/app/data/projects'

export async function GET(request, { params }) {
  try {
    const project = projects.find(p => p.id === parseInt(params.id))
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    return NextResponse.json(project, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}