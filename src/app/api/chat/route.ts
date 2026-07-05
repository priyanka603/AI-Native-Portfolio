import { mistral } from '@ai-sdk/mistral';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getInternship';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSports';
import { getWeather } from './tools/getWeather';

export const maxDuration = 30;

// ❌ Pas besoin de l'export ici, Next.js n'aime pas ça
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  const message =
    typeof error === 'string'
      ? error
      : error instanceof Error
        ? error.message
        : JSON.stringify(error);
  // Free-tier Mistral throttles at ~1 request/second; surface it kindly
  if (/rate.?limit|429|too many requests|capacity/i.test(message)) {
    return "I'm getting a lot of questions right now! Give me a few seconds to catch my breath and ask again 😊";
  }
  return message;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getSports,
      getCrazy,
      getInternship,
      getWeather,
    };

    const result = streamText({
      // small-latest streams much faster than large and stays well under the
      // free tier's 1 req/s limit; each question fires 2 sequential calls
      // (tool pick + answer), so retries cover momentary 429s
      model: mistral('mistral-small-latest'),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
      maxRetries: 3,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
