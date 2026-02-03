// functions/e/[id].js
export async function onRequest(context) {
  const { params, request } = context
  const id = params.id

  const cookie = request.headers.get('cookie') || ''
  const isSite1 = cookie.includes('site=1')

  const site = isSite1 ? 'https://l.wl.co/l?u=https://play.filesmoon.site' : 'https://l.wl.co/l?u=https://www5.filesmoon.site'
  const nextCookie = isSite1 ? 'site=2' : 'site=1'

  return new Response(null, {
    status: 302,
    headers: {
      'Location': `${site}/#/e/${id}`,
      'Set-Cookie': `${nextCookie}; Path=/; HttpOnly`,
      'Cache-Control': 's-maxage=43200'
    }
  })
}
