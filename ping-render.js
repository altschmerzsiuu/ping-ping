require("dotenv").config();
const axios = require("axios");

axios.get(process.env.RENDER_PING_URL)
  .then(() => console.log(`✅ [${new Date().toLocaleString()}] Render Ping Success`))
  .catch(err => {
    console.error(`❌ [${new Date().toLocaleString()}] Render Ping Failed`);
    console.error("Status:", err.response?.status);
    console.error("Message:", err.message);
  });
