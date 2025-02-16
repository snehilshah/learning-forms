export async function GET() {
  return new Response('<h1>Hello World</h1>')
}

export async function POST(request: Request) {
  const comment = await request.json()
  
  console.log(comment)
}
