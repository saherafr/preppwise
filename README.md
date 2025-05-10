# 🤖 RecruiterAI — Your AI Interview Partner

**RecruiterAI (Preppwise)** is a fully voice-powered mock interview web app that simulates realistic, high-pressure interviews — with instant feedback and performance scoring. Built using **Next.js 15**, **Firebase Auth**, **Vapi.ai**, and **Google Gemini Pro**, it showcases how AI can scale personalized, professional interview prep.

🎙️ Try it. Talk to it. Get better.

---

## 🔗 Live Demo  
👉 [https://preppwise.vercel.app](https://preppwise.vercel.app)

---
---

## 🖼️ RecruiterAI Preview

### 🔐 1. Signup & Login
> Firebase Auth with session management
![SignUp](https://github.com/user-attachments/assets/6c24bb96-9e61-4aee-8be8-7bd85ea2dd17)
![SignIn](https://github.com/user-attachments/assets/41f3f9e5-a3a5-4fd6-b655-c82fc029f957)



---

### 📱 2. Mobile Landing
> Responsive UI for quick access to mock interviews

![Mobile Landing](.![IMG_5002 2](https://github.com/user-attachments/assets/b4eb78c2-ed9e-46e8-9ef6-fa9dca8ff3dc)
..)

---

### 🌐 3. Explore Public Interviews
> Company-specific interview sets (e.g., Spotify, TikTok)

![Public Interviews](![IMG_5003 2](https://github.com/user-attachments/assets/3bc2e4c0-6add-4efb-960c-696eb4856cec)
...)

---

### 🎤 4. AI Interview Mode
> Choose between AI Interviewer or Interview Prep
<img width="1440" alt="Screenshot 2025-05-10 at 5 30 39 PM" src="https://github.com/user-attachments/assets/9ad5b085-a0e0-4f85-af53-c6c5a118f46d" />

![Interview Mode](...)

---

### 📊 5. AI Feedback Page
> Google Gemini-generated final score & breakdown
![FeedBack](https://github.com/user-attachments/assets/a33b0e93-8265-4711-acc2-19db0643ab46)

---

## ✨ Features

- 🎙️ **Voice Interview Simulation** using Vapi SDK + Google Gemini Pro API
- 💬 Real-time **speech transcription** with speaking animation
- 🧠 **AI-generated feedback** powered by Gemini for strengths, scoring & improvements
- 👤 **Secure authentication** with Firebase Email/Password + session cookies
- 📚 Dashboard with **past sessions & suggested interviews**
- 🔄 Dynamic routing and SSR via Next.js App Router
- 🌐 Deployed on Vercel for global access

---

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router, SSR), Tailwind CSS
- **Authentication**: Firebase Auth (email/password, session cookies)
- **Database**: Firebase Firestore
- **Voice AI**: Vapi SDK
- **LLM**: Google Gemini Pro API
- **UI Libraries**: Shadcn UI, Sonner (toasts)
- **Hosting**: Vercel

---

## 🧠 Why Google Gemini?

RecruiterAI uses **Google Gemini Pro API** to deliver intelligent, real-time feedback tailored to each user's spoken response. Unlike traditional rule-based systems, Gemini enables:
- 🔍 Contextual scoring of answers
- 📈 Natural-language suggestions
- 🧠 Keyword matching for job-specific feedback

---

## 💪 Challenges I Solved

### 🔐 1. Firebase Admin SDK & PEM Format
**Problem**: Multi-line private keys caused `.env` errors in deployment  
**Fix**: Escaped `\n` manually and wrapped keys with `""` to ensure proper runtime parsing

---

### ⚠️ 2. Vercel Deployment Issues with Firestore Admin
**Problem**: `FIREBASE_PRIVATE_KEY` failed silently  
**Fix**: Added secrets manually in Vercel dashboard & verified key integrity in production

---

### 🔁 3. Sign-in Redirect Loop
**Problem**: Post-login, stale cached data caused redirection issues  
**Fix**: Implemented `cookies()` from `next/headers` for real-time session reads & write logic

---

### 🔍 4. Dynamic Route 404s
**Problem**: Pages like `/interview/[id]/feedback` failed on reload  
**Fix**: Verified correct file structure and export of `page.tsx`; ensured routes followed Next.js App Router conventions

---

### 🎙️ 5. Transcript Sync Errors
**Problem**: Real-time speech transcript was out of sync with audio  
**Fix**: Debounced updates using `lastMessage`, refined animation timing inside `useEffect`

---

### 🔃 6. Git Conflicts on Push
**Problem**: Push rejected due to remote conflicts  
**Fix**: Used `git push origin main --force` after ensuring changes were intended

---

## 🔮 Future Development Plans

- 🧑‍💼 Multiple **AI interviewer personas** (tough, friendly, behavioral)
- 📊 Performance **trend dashboard** with scoring history
- 📄 **Resume & portfolio review** module using Gemini
- 🧠 Company-specific interview modes (Amazon, Meta, etc.)
- 🎥 Session **recording and playback**
- 🌍 Multi-language support (Hindi, Spanish, etc.)
- 📱 Mobile version with React Native
- 🧩 Import custom question sets (LeetCode, HackerRank)
- 👥 HR dashboard to assign and review candidate sessions

---

## 🚀 Local Development

```bash
git clone https://github.com/saherafr/preppwise.git
cd preppwise
npm install
npm run dev

---


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
