import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Shows a summary of the kind of full-time engineering role I'm looking for, my availability, tech stack, and contact info. Use this tool when the user asks about my job search, whether I'm open to opportunities, or how to hire or contact me.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 💼 **Role**: AI Engineer / GenAI Developer (Full-Time)
- 📅 **Availability**: Immediately available
- 🌍 **Location**: Dublin, Ireland · Remote-friendly
- 🧑‍💻 **Focus**: Generative AI, Agentic AI Workflows, RAG Architectures, LLM Evaluation
- 🛠️ **Stack**: Python, Azure OpenAI, LangChain, LangGraph, FastAPI, FAISS, Pinecone, PostgreSQL, Docker, Azure DevOps
- ✅ **What I bring**: Production AI engineering experience — shipped a multi-agent Azure DevOps automation platform, RAG systems with citation-backed answers, and evaluation harnesses that make LLM outputs reliable enough for real teams.
- 🔥 I care about the unglamorous parts too: evaluation, guardrails, and responsible AI

📬 **Reach me at**:
- Email: priyankamehta2127@gmail.com
- LinkedIn: [linkedin.com/in/priyanka-mehta21](https://linkedin.com/in/priyanka-mehta21)
- GitHub: [github.com/priyanka603](https://github.com/priyanka603)

Let's build something great together ✌️
    `;
  },
});
