# 🚀 Portfolio Setup Instructions for Priyanka

## 📋 Step 1: Install Dependencies

```bash
npm install
```

## 🔐 Step 2: Set Up Environment Variables

Create a file called `.env.local` in the project root:

```env
# Mistral AI API key — the chat won't work without it
MISTRAL_API_KEY=your_actual_mistral_api_key_here

# Optional: GitHub token for the star-count button
GITHUB_TOKEN=your_github_token_here
```

Get a free Mistral API key at https://admin.mistral.ai/organization/api-keys

## 🎯 Step 3: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 🚀 Step 4: Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import the repository at [vercel.com](https://vercel.com)
3. Add the `MISTRAL_API_KEY` environment variable
4. Deploy!

## 🎨 Remaining Personal Touches (TODOs)

- Replace placeholder project images in `src/components/projects/Data.tsx` (search for `TODO`) with your own screenshots — drop them in `public/projects/`
- Replace the memoji avatar with your own photo/memoji if you like:
  - `src/components/presentation.tsx` (profile photo)
  - `src/components/InternshipCard.tsx` (avatar)
  - `public/landing-memojis.png`, `public/final_memojis.webm`, `public/final_memojis_ios.mp4` (hero + talking avatar)
- Update project GitHub links in `Data.tsx` once the repos are public
- Personalize `src/components/sport.tsx` (life outside tech) — currently a general draft
- Optional: set up the Spotify widget (`.env.example` has the variables)
