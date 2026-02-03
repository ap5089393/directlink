// functions/e/[id].js
export async function onRequest(context) {
  const { params, request } = context
  const id = params.id

  const cookie = request.headers.get('cookie') || ''
  let isSite1

  if (cookie.includes('site=1')) {
    isSite1 = true
  } else if (cookie.includes('site=2')) {
    isSite1 = false
  } else {
    // akses pertama → random 50/50
    isSite1 = Math.random() < 0.5
  }

  const site = isSite1 
    ? 'https://l.wl.co/l?u=https://play.filesmoon.site' 
    : 'https://l.wl.co/l?u=https://www5.filesmoon.site'
  const nextCookie = isSite1 ? 'site=2' : 'site=1'

  return new Response(null, {
    status: 302,
    headers: {
      'Location': `${site}/#/e/${id}`,
      'Set-Cookie': `site=${nextCookie}; Path=/; HttpOnly; SameSite=Lax`,
      'Cache-Control': 's-maxage=43200'
    }
  })
}
