const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// Serve static files (like resume)
app.use("/files", express.static(path.join(__dirname, "files")));

// Route to download resume
app.get("/download-cv", (req, res) => {
  const filePath = path.join(__dirname, "files/Sarah_Thomas_Resume.pdf");
  res.download(filePath, "Sarah_Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
