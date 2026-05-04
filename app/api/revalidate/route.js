import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const secret = request.headers.get('x-revalidate-secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  revalidatePath('/')
  revalidatePath('/posts')
  revalidatePath('/posts/[slug]', 'page')

  return NextResponse.json({ revalidated: true, timestamp: Date.now() })
}
