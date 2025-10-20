const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
res.json({
message: 'Hello from Node.js Demo App!',
timestamp: new Date() .toISOString(),
environment: process.env.NODE_ENV || 'development'
});
});

app.get('/health', (req, res) => {
res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/info', (req, res) => {
res.json({
name: 'Node.js Demo App',
version: '1.0.0',
description: 'A simple Node.js application for CI/CD demo'
});
});

// Export the app for testing
module.exports = app;

// Only start the server if this file is run directly
if (require.main === module) {
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
}
// CI/CD test - Mon Oct 20 11:50:12 UTC 2025
