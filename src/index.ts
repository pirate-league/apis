import { Hono } from 'hono'
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Pirate!')
})

app.get('/name', async(c) => {
  const { text } = await generateText({
    model: openai('gpt-3.5-turbo'),
    prompt: 'Generate a two word pirate ship name',
  });
  return c.newResponse(text);
})

app.get('/image/:name', (c) => {
  // TODO: generate a random pirate image
  return c.text(`Hello ${c.req.param('name')}!`)
})

export default app
