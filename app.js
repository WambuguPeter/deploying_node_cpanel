const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
