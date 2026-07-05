# 🤖 Priyanka Mehta — AI-Native Portfolio

An AI-powered, interactive portfolio. Instead of a static "About Me" page, visitors chat with my AI avatar — ask about my projects, skills, experience, or how to get in touch, and it answers in real time.

Based on the open-source [AI-native portfolio](https://github.com/yuvraj0412s/ai-native-portfolio) by Yuvraj Singh (MIT License).

## Features

- 🗣️ **Interactive AI Avatar** — real-time conversation about my work and background
- 🧠 **Tool-calling chat** — the AI renders rich cards for projects, skills, resume, and contact info
- 🎨 **Dynamic UI** — Tailwind CSS + Framer Motion animations, fluid cursor, light/dark theme
- 📄 **Resume download** — one click from the chat

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | Next.js, React, Tailwind CSS, Framer Motion |
| Backend | Next.js API Routes, Vercel AI SDK |
| AI | Mistral API (tool-calling chat) |
| Deployment | Vercel |

## Local Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Create `.env.local` in the project root:
   ```env
   MISTRAL_API_KEY="your_mistral_api_key_here"
   GITHUB_TOKEN="your_github_token_here"
   ```
   - Mistral API key: [admin.mistral.ai](https://admin.mistral.ai/organization/api-keys) (free tier available)
   - GitHub token (optional, for the star button): [github.com/settings/tokens](https://github.com/settings/personal-access-tokens)

3. Run the dev server:
   ```sh
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Deploy

Push to GitHub, import into [Vercel](https://vercel.com), and add `MISTRAL_API_KEY` as an environment variable.

## Contact

**Priyanka Mehta** — AI Engineer, Dublin, Ireland

- Email: priyankamehta2127@gmail.com
- LinkedIn: [linkedin.com/in/priyanka-mehta21](https://linkedin.com/in/priyanka-mehta21)
- GitHub: [github.com/priyanka603](https://github.com/priyanka603)

## License

MIT — see [LICENSE](LICENSE).
