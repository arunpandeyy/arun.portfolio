import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { message } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // TODO: Integrate with Gemini API here
    // const response = await fetch('https://api.gemini.com/...')
    
    const mockResponse = `I'm helping you with: "${message}". This is a placeholder response.`

    return NextResponse.json(
      { response: mockResponse },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}