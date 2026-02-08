📚 Knowledge Base AI - Frontend

Beautiful, responsive React TypeScript interface for AI-powered document chat.

This frontend connects to the Spring Boot backend to allow users to upload PDF documents and have intelligent conversations with them using OpenAI's RAG (Retrieval Augmented Generation) architecture.

🚀 Live Demo

Frontend (Live App): https://knowledge-base-frontend-five.vercel.app

Backend API Status: https://documentserviceapplication-production.up.railway.app/api/documents/health

🛠️ Tech Stack

Framework: React 18 + Vite

Language: TypeScript

Styling: Tailwind CSS

HTTP Client: Axios

Markdown Rendering: react-markdown

Deployment: Vercel

✨ Features

✅ Drag-and-drop Upload: Modern file upload interface for PDF documents.

✅ Real-time Status: Visual feedback for file processing (Uploading → Processing → Ready).

✅ Interactive Chat: ChatGPT-like interface with Markdown support (Bold, Lists, Code).

✅ Context Aware: Chat with all documents or filter by a specific file.

✅ Smart Suggestions: Auto-suggested questions to get started.

✅ Responsive Design: Works beautifully on mobile and desktop.

🎨 Screenshots

Upload Interface                      Chat Interface





(Note: You can replace these placeholder images with actual screenshots of your app later)

🔧 Local Development

Prerequisites

Node.js 18+

npm

Installation

Clone the repository:

git clone [https://github.com/sushmareddy21/knowledge-base-frontend.git](https://github.com/sushmareddy21/knowledge-base-frontend.git)
cd knowledge-base-frontend



Install dependencies:

npm install



Environment Variables

Create a file named .env.local in the root directory to connect to your local backend:

# URL of your running Spring Boot Backend (Local)
VITE_API_URL=http://localhost:8080/api



Run Development Server

npm run dev



Open http://localhost:5173 to view it in the browser.

📦 Deployment

This project is configured for Vercel.

Import GitHub Repository to Vercel.

Framework Preset: Vite.

Add Environment Variable:

VITE_API_URL: https://documentserviceapplication-production.up.railway.app/api

Deploy!

👨‍💻 Author

Sushma Reddy
