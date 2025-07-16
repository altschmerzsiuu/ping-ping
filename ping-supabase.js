require("dotenv").config();
const axios = require("axios");

axios.get(`${process.env.SUPABASE_API_URL}hewan`, {
  headers: {
    apikey: process.env.SUPABASE_API_KEY,
    Authorization: `Bearer ${process.env.SUPABASE_API_KEY}`
  }
})
.then(() => console.log("✅ Supabase Ping Success"))
.catch(err => console.error("❌ Supabase Ping Failed:", err.response?.data || err.message));
