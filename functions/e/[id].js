export async function onRequest(context) {
  const { params, request } = context
  const id = params.id || 'default'

  // baca cookie
  const cookie = request.headers.get('cookie') || ''
  const isSite1 = cookie.includes('site=1')

  // pilih site bergantian
  const site = isSite1 ? 'https://play.filesmoon.site' : 'https://www5.filesmoon.site'
  const nextCookie = isSite1 ? 'site=2' : 'site=1'

  // buat halaman HTML redirect tanpa JS
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${site}/#/e/${id}">
  <title>Redirecting...</title>
</head>
<body>
  Redirecting to <a href="${site}/#/e/${id}">${site}/#/e/${id}</a>...
</body>
</html>`

  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'Set-Cookie': `${nextCookie}; Path=/; HttpOnly`,
      'Cache-Control': 's-maxage=43200' // cache 12 jam
    }
  })
}
