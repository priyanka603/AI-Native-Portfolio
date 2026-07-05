
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will tell the craziest thing I've ever done. Use it when the user asks something like: 'What's the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Packed my life into two suitcases and moved from Indore to Ireland for AI 🇮🇪 — then built an AI-native portfolio that answers questions better than I do 🤖😅";
  },
});
