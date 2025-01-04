import { ZodError } from 'zod'
import { NextRequest, NextResponse } from 'next/server'

import { LeetcoderInsert } from '@/types/supabase.type'
import { LeetcoderInsertSchema } from '@/types/schema/leetcoder.schema'
import { insertLeetcoder } from '@/db/supabase/services/leetcoder.service'

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeetcoderInsert
    body.group_no = Number(body.group_no)

    const validatedData = LeetcoderInsertSchema.parse(body)

    const data = await insertLeetcoder(validatedData)

    console.log('insertLeetcoder data:', data)
    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('/api/request POST API Error:', error)

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: error.errors.map((e) => e.message).join(', '),
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  return NextResponse.json(
    {
      success: true,
      data: id,
    },
    { status: 201 }
  )
}
