// functions/e/[id].js
export async function onRequest({ params }) {
  // Apapun id yang masuk (params.id), responsnya akan tetap sama
  return new Response(null, {
    status: 302,
    headers: {
      'Location': 'https://www.facebook.com/groups/928931699973721',
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  })
}
