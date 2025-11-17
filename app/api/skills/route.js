import { NextResponse } from 'next/server'
import { skills } from '@/app/data/skills'

export async function GET() {
  try {
    return NextResponse.json(skills, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}