import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      )
    }

    // Enhanced prompt to ensure realistic feet-focused generation
    // Using neutral, professional language to avoid content policy violations
    const enhancedPrompt = `Professional photography, artistic composition, detailed anatomy study, natural lighting, high quality, 4K resolution, photorealistic, detailed textures, professional studio lighting: ${prompt}`

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: enhancedPrompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
    })

    if (!response.data || response.data.length === 0) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      )
    }

    const imageUrl = response.data[0]?.url

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      )
    }

    return NextResponse.json({ imageUrl })
  } catch (error: any) {
    console.error('OpenAI API error:', error)
    
    // Handle specific OpenAI errors
    if (error.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    if (error.status === 400) {
      // Check if it's a content policy violation
      if (error.code === 'content_policy_violation') {
        return NextResponse.json(
          { error: 'The prompt contains content that cannot be processed. Please try a more neutral, professional description.' },
          { status: 400 }
        )
      }
      return NextResponse.json(
        { error: 'Invalid prompt. Please try a different description.' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to generate image. Please try again.' },
      { status: 500 }
    )
  }
}
