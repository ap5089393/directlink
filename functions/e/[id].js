// functions/e/[id].js
export async function onRequest({ request, params }) {
  const id = params.id

  return new Response(null, {
    status: 302,
    headers: {
      'Location': `domain-utama-bmp.pages.dev/#/e/${id}`,
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  })
}
