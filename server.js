// Student Name: Isela Cruz
// Course: IFT 458
// Date: 10-17-2026

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

app.use(loggerMiddleware);

// Test route to demonstrate the logger middleware
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});