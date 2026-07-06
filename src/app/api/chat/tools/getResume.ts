import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool show my resume.',
  parameters: z.object({}),
  execute: async () => {
    return 'My resume is displayed above as a card with a built-in download button. IMPORTANT: do NOT write any markdown links or URLs in your reply — the card already handles the download. Just briefly invite them to check it out.';
  },
});
