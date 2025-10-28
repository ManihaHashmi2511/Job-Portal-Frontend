// src/api/config.js

// 1. Read the environment variable from Vite's import.meta.env object.
//    This value will be:
//    - 'http://localhost:8000' during local dev (from your .env file)
//    - 'https://your-backend.vercel.app' in production (from Vercel dashboard)
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

// 2. Export the URL so all other files can import and use it.
export default API_BASE_URL;