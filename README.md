# 🤖 Recruiter AI — Your AI Interview Partner

Recruiter AI is a **fully voice-powered mock interview web app** that simulates realistic, high-pressure interview sessions — with instant feedback and performance scoring.

Built using **Next.js 15**, **Firebase Auth**, **Vapi.ai**, and **Tailwind CSS**, this project showcases how AI can be used to scale personalized, professional prep for technical interviews.

Try it. Talk to it. Get better.

---


## 
Try it here 👉 [https://preppwise.vercel.app](https://preppwise.vercel.app)
---


## ✨ Features

- 🎙️ **Voice Interview Simulation** powered by Vapi.ai, Google Gemini API
- 💬 Real-time **speech transcript capture** and animation
- 📊 Instant **AI-generated feedback** with scoring, strengths, and improvement areas
- 👤 Firebase **Email/Password Auth** and session cookies
- 📚 Clean dashboard with past & suggested interviews
- 📦 Dynamic data fetching and routing with Next.js App Router
- 🌐 Deployed on Vercel for instant global access

---

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router, SSR), Tailwind CSS
- **Authentication**: Firebase Auth with custom session cookies
- **Database**: Firebase Firestore
- **Voice AI**: Vapi SDK (custom workflow)
- **UI Libraries**: Shadcn UI, Sonner for toast notifications
- **Hosting**: Vercel (with environment config)

---

## 🧠 Challenges I Faced & How I Solved Them

### 🔐 1. Firebase Admin SDK with Environment Variables
**Problem**: Multi-line private keys from Firebase were breaking the `.env` format and causing PEM errors.

**Solution**: Escaped `\n` characters manually. Used `"${process.env.FIREBASE_PRIVATE_KEY}"` format and verified line breaks were preserved in runtime.

---

### 📦 2. Deployment Errors on Vercel with Firestore Admin
**Problem**: `FIREBASE_PRIVATE_KEY` parsing failed silently during Vercel deployment.

**Solution**: Made private key and client email public-readable via env and added Vercel secrets manually using the Vercel dashboard for safe interpolation.

---

### 🌐 3. Sign-in/Sign-up Redirect Loop
**Problem**: After login, Vercel still showed old cached pages and forced `/` redirects due to session cookies not updating.

**Solution**: Used `cookies()` from `next/headers` to set & verify real-time session. Also cleared cookies in browser dev tools during debug.

---

### 🧭 4. Dynamic Route 404s (e.g. `/interview/[id]/feedback`)
**Problem**: Even though the folders existed in `app/(root)/interview/[id]/feedback`, pages returned 404 on refresh or direct URL access.

**Solution**: Ensured all route segments matched actual structure, exported `page.tsx` correctly, and used `redirect()` only inside valid layout rendering context.

---

### 📡 5. Real-Time Transcript Management
**Problem**: Speech-to-text wasn’t syncing or displaying properly due to `useEffect` dependencies.

**Solution**: Debounced `transcript` updates using `lastMessage` state with conditional animation triggering.

---

### 📈 6. Git Push Conflicts
**Problem**: GitHub rejected my push due to non-fast-forward changes.

**Solution**: Used `git push origin main --force` after verifying I wanted to override remote history with my local changes.

---

## 🔮 Future Development Plans

- 👥 **Multiple AI personas** for mock interviewers (friendly, tough, behavioral)
- 📊 **Advanced analytics** with score trends and improvement charts
- 🧾 **Resume & portfolio review** feature with AI insights
- 🧑‍💼 **HR dashboard** to assign & review interview results
- 🌎 **Multi-language support** (Spanish, Hindi, etc.)
- 🧠 **Company-specific mock interviews** (e.g., Amazon-style rounds)
- 📱 **React Native mobile version**
- 🎥 **Session recording & playback**
- 🧩 **Import your own question sets** (LeetCode, HackerRank)

---

## 🚀 Local Setup

```bash
git clone https://github.com/saherafr/preppwise.git
cd preppwise
npm install
npm run dev
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
