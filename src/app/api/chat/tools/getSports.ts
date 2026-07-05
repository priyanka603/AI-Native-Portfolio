
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool shows what Priyanka's life looks like outside of tech — hobbies, travel, and life in Ireland.",
  parameters: z.object({}),
  execute: async () => {
    return "Here's a glimpse of my life outside of code!";
  },
});
