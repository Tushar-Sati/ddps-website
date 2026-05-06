# 🌐 DDPS Website

> A modern, full-stack web application built with **Next.js 14**, **TypeScript**, **Supabase**, and **Tailwind CSS** — deployed live on Vercel.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://ddps-website.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 🚀 Live Demo

🔗 **[ddps-website.vercel.app](https://ddps-website.vercel.app)**

---

## 📌 About the Project

DDPS Website is a production-ready full-stack web application featuring a clean, component-driven UI, real-time database integration via Supabase, and server-side rendering powered by Next.js 14's App Router. The project demonstrates modern frontend architecture combined with a scalable PostgreSQL backend.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14 (App Router), TypeScript |
| **Styling** | Tailwind CSS |
| **Backend / DB** | Supabase (PostgreSQL) |
| **Deployment** | Vercel |
| **Language** | TypeScript (strict mode) |

---

## ✨ Features

- ⚡ **Next.js 14 App Router** — server components, layouts, and file-based routing
- 🎨 **Tailwind CSS** — fully responsive, mobile-first design
- 🗄️ **Supabase Integration** — real-time PostgreSQL database with auth-ready setup
- 🔒 **TypeScript** — end-to-end type safety across all components
- 🌍 **Deployed on Vercel** — zero-config CI/CD, live on every push
- 🧩 **Component-driven architecture** — reusable, maintainable UI components

---

## 📁 Project Structure

```
ddps-website/
├── app/                  # Next.js 14 App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── ...              # Other routes
├── components/           # Reusable UI components
├── lib/                  # Supabase client & utilities
├── public/               # Static assets
├── styles/               # Global styles
└── tailwind.config.ts    # Tailwind configuration
```

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Installation

```bash
# Clone the repository
git clone https://github.com/Tushar-Sati/ddps-website.git
cd ddps-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase URL and anon key to .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📦 Deployment

This project is deployed on **Vercel** with automatic CI/CD on every push to `main`.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 👨‍💻 Author

**Tushar Sati**
- 🌐 [Portfolio / Live Projects](https://solar-ai-api-2jlc.onrender.com/)
- 💼 [LinkedIn](https://linkedin.com/in/tushar-sati)
- 🐙 [GitHub](https://github.com/Tushar-Sati)
- 📧 tusharsati77@gmail.com

---

⭐ **If you found this project helpful, consider giving it a star!**
