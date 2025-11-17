import { NextResponse } from 'next/server'
import { commands } from '@/app/data/commands'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const cmd = searchParams.get('cmd')

    if (cmd && commands[cmd.toLowerCase()]) {
      return NextResponse.json({ output: commands[cmd.toLowerCase()] })
    }

    return NextResponse.json({ commands })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}