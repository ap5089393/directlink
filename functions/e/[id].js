// functions/e/[id].js
export async function onRequest({ request, params }) {
  const id = params.id

  return new Response(null, {
    status: 302,
    headers: {
      'Location': `https://play.filesmoon.site/#/e/${id}`,
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  })
}
