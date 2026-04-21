import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is not configured' },
        { status: 500 },
      )
    }

    const openai = new OpenAI({ apiKey })
    const { metrics } = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an AI engineering productivity analyst. Given team metrics, produce a single concise insight (2-3 sentences) that highlights the most important pattern and gives an actionable recommendation. Be specific and data-driven.',
        },
        {
          role: 'user',
          content: `Team metrics this week: ${JSON.stringify(metrics)}`,
        },
      ],
      max_tokens: 120,
    })

    const insight =
      completion.choices[0]?.message?.content ?? 'No insight available.'
    return NextResponse.json({ insight })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Failed to generate insight' },
      { status: 500 },
    )
  }
}
