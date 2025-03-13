const express = require('express');  // Import Express.js
const app = express();  // Create an Express app

app.use(express.static(__dirname));  // Serve static files (HTML, CSS, JS)

const PORT = process.env.PORT || 8080;  // Default port to 5000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});