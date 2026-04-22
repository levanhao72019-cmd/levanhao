const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;
if (mongoURI) {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.log('MongoDB connection error:', err));
} else {
    console.log('No MONGODB_URI provided, running in local/mock mode.');
}

// Models
const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    image: String,
    description: String,
    badge: String
});
const Product = mongoose.model('Product', ProductSchema);

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Sportify Backend is running!</h1><p>API endpoints are available at /api/products</p>');
});

app.get('/api/products', async (req, res) => {
    // In a real app: const products = await Product.find();
    // For demo: return dummy data
    res.json([
        { id: 1, name: "Áo Đấu Real Madrid Home 2024", price: 850000, category: "club" },
        { id: 2, name: "Áo Đấu Việt Nam Home 2024", price: 650000, category: "national" }
    ]);
});

app.post('/api/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        // await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Orders Management (Mock)
app.get('/api/orders', (req, res) => {
    res.json([{ id: 101, total: 1500000, status: 'Pending' }]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
