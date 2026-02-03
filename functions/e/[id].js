// functions/e/[id].js
export async function onRequest({ request, params }) {
  const id = params.id
  const cookie = request.headers.get('cookie') || ''

  let usePlay

  if (cookie.includes('site=play')) {
    usePlay = false
  } else if (cookie.includes('site=www5')) {
    usePlay = true
  } else {
    // akses pertama → random 50/50
    usePlay = Math.random() < 0.5
  }

  const target = usePlay
    ? 'https://play.filesmoon.site'
    : 'https://www5.filesmoon.site'

  const nextCookie = usePlay ? 'site=www5' : 'site=play'

  return new Response(null, {
    status: 302,
    headers: {
      'Location': `${target}/#/e/${id}`,
      'Set-Cookie': `${nextCookie}; Path=/; HttpOnly; SameSite=Lax`,
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  })
}
