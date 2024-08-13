import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Pirate!')
})

app.get('/name', (c) => {
  // TODO: generate a random pirate name
  return c.newResponse(`Here's you pirate name: lol No Pirate name for you`)
})

app.get('/image/:name', (c) => {
  // TODO: generate a random pirate image
  return c.text(`Hello ${c.req.param('name')}!`)
})

export default app
