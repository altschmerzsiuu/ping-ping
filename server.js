require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// === Ping ke Render ===
app.get("/ping-render", async (req, res) => {
  try {
    await axios.get(process.env.RENDER_PING_URL);
    console.log(`[${new Date().toLocaleString()}] ✅ Render Ping Success`);
    res.status(200).send("Render pinged successfully");
  } catch (err) {
    console.error(`[${new Date().toLocaleString()}] ❌ Render Ping Failed`, err.message);
    res.status(500).send("Render ping failed");
  }
});

// === Ping ke Supabase ===
app.get("/ping-supabase", async (req, res) => {
  const today = new Date().getDate();
  if (today % 2 !== 0) return res.status(200).send("⏭️ Supabase ping skipped (odd day)");

  try {
    await axios.get(`${process.env.SUPABASE_API_URL}hewan`, {
      headers: {
        apikey: process.env.SUPABASE_API_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_API_KEY}`
      }
    });
    console.log(`[${new Date().toLocaleString()}] ✅ Supabase Ping Success`);
    res.status(200).send("Supabase pinged successfully");
  } catch (err) {
    console.error(`[${new Date().toLocaleString()}] ❌ Supabase Ping Failed`, err.message);
    res.status(500).send("Supabase ping failed");
  }
});

// Optional: Endpoint ping untuk test
app.get("/ping", (req, res) => {
  res.send("Ping server is awake!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
