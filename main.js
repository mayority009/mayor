const express = require('express');
const path = require('path');

const app = express();

// Serve static files from dist/renderer
app.use(express.static(path.join(__dirname, 'dist/renderer')));

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/renderer/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
