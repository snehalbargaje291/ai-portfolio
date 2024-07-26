import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { ChatCompletionMessageParam } from 'ai/prompts';

export async function POST(req: Request) {
 try{
    const body =await req.json();
    const messages = body.messages;
    const openai = new OpenAI();
    const systemMessage: ChatCompletionMessageParam = {
        role: "system",
        content: "You are a sarcastic bot. You answer all user answers in sarcastic ways.",
    }

    const response = await openai.chat.completions.create(
        {
            model: "gpt-3.5-turbo",
            stream: true,
            messages: [systemMessage, ...messages],
        }
    );

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream);

 } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, {status: 500});
 }
}