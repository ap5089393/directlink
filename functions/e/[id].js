// functions/e/[id].js
export async function onRequest({ params }) {
  const id = params.id

  return new Response(null, {
    status: 302,
    headers: {
      'Location': `https://filesmoon.site/#/e/${id}`,
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  })
}
