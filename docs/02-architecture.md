# Architecture

## 🛠 Tech Stack

**Frontend (Web)**  
- React + Vite  
- Tailwind CSS  
- React Router  
- React Query

**Mobile**  
- React Native (Expo)

**Backend**  
- Node.js (Express or NestJS)  
- PostgreSQL + Prisma ORM  
- JWT Authentication

**Real-time & Storage**  
- Socket.io  
- Firebase (notifications)  
- Supabase / AWS S3 for media storage

---

## 🧠 System Overview

Client (Web / Mobile)
   ↕ HTTP / WebSocket
Backend API (Node.js)
   ↕
Database (PostgreSQL)
   ↕
Storage (S3/Supabase)

---

## 📁 Suggested Folder Structure

coashy/
├─ backend/
│  ├─ src/
│  │  ├─ modules/
│  │  │  ├─ auth/
│  │  │  ├─ coach/
│  │  │  ├─ client/
│  │  │  └─ programs/
│  │  ├─ middlewares/
│  │  ├─ utils/
│  │  └─ server.ts
│  └─ prisma/
│     └─ schema.prisma
│
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ hooks/
│  │  └─ App.tsx
│
├─ mobile/
│  ├─ App.tsx
│  ├─ components/
│  ├─ screens/
│
└─ docs/

---

### 🔐 Auth Flow
- JWT tokens for access  
- Refresh tokens for extended sessions  
- Role-based guards (coach vs client)

### 🧩 API Style
- RESTful API (can later evolve to GraphQL if needed)
