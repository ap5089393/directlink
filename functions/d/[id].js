// functions/e/[id].js
export async function onRequest({ params }) {
  // Apapun id yang masuk (params.id), responsnya akan tetap sama
  return new Response(null, {
    status: 302,
    headers: {
      'Location': 'https://www.whatsapp.com/channel/0029VbBW5uiFMqrflYpKvP3i',
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  })
}
