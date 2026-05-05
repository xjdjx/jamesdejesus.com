import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const draft = await draftMode()
  draft.disable()

  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  redirect(slug ? `/posts/${slug}` : '/')
}
