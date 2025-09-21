// Next.js Route Handlers support: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export async function GET() {
  return Response.json({
    name: 'Hello World!',
  });
}
