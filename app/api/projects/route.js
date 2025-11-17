import { NextResponse } from 'next/server'
import { projects } from '@/app/data/projects'

export async function GET() {
  try {
    return NextResponse.json(projects, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    // Add to database
    return NextResponse.json(body, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}