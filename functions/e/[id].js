// Pastikan binding KV SITE_ROTATOR sudah di-set di Pages Functions

export async function onRequest({ request, params, env }) {
  const id = params.id

  // Ambil hit counter dari KV
  let counter = await env.SITE_ROTATOR.get('counter')
  counter = counter ? parseInt(counter) : 0

  // Tentukan site bergantian
  const site = counter % 2 === 0
    ? 'https://www5.filesmoon.site'
    : 'https://play.filesmoon.site'

  // Simpan counter kembali ke KV
  await env.SITE_ROTATOR.put('counter', (counter + 1).toString())

  // Redirect
  return Response.redirect(`${site}/#/e/${id}`, 302, {
    headers: {
      'Cache-Control': 's-maxage=43200' // cache 12 jam di edge
    }
  })
}
