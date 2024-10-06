import express from 'express'; // Using ES module syntax
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for PORT

// Middleware for logging requests (optional)
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for '${req.url}'`);
    next();
});

app.get('/say', async (req, res) => {
    const { keyword } = req.query; // Destructure keyword from query parameters
    const name = "Arpita Madhukar Kalburgi";

    if (!keyword) {
        return res.status(400).json({ error: 'Keyword parameter is required.' });
    }

    try {
        const lambdaResponse = await axios.get('https://1u2hqtbqlk.execute-api.us-east-1.amazonaws.com/testArp/say', {
            params: { keyword }
        });
        res.json(lambdaResponse.data); // Return response as JSON
    } catch (error) {
        console.error('Error calling the function:', error.message); // Log error message
        res.status(500).json({ error: 'Error calling the function.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
