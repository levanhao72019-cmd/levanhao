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
    // Trong thực tế bạn sẽ dùng: const products = await Product.find();
    // Đây là dữ liệu mẫu đầy đủ
    res.json([
        { id: 1, name: "Áo Đấu Real Madrid Home 2024", category: "club", team: "Real Madrid", price: 850000, image: "assets/real_madrid.png", description: "Bản fan chất lượng cao, vải thoáng khí, logo thêu sắc nét.", badge: "Bán chạy" },
        { id: 2, name: "Áo Đấu Việt Nam Home 2024", category: "national", team: "Việt Nam", price: 650000, image: "assets/vietnam.png", description: "Niềm tự hào dân tộc, thiết kế hiện đại, chất liệu thun lạnh.", badge: "Mới" },
        { id: 3, name: "Áo Đấu Manchester City Home 2024", category: "club", team: "Man City", price: 820000, image: "assets/man_city.png", description: "Thiết kế sky blue đặc trưng, ôm sát cơ thể, thoát mồ hôi tốt.", badge: "Trending" },
        { id: 4, name: "Áo Đấu Manchester United Away 2024", category: "club", team: "Man Utd", price: 790000, image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=600", description: "Màu sắc tối giản, phong cách quỷ đỏ.", badge: "" },
        { id: 5, name: "Áo Đấu Argentina World Cup 2022", category: "national", team: "Argentina", price: 950000, image: "https://images.unsplash.com/photo-1671291880404-067980590ca6?q=80&w=600", description: "Phiên bản 3 sao của nhà vô địch thế giới.", badge: "Hot" },
        { id: 6, name: "Áo Đấu Arsenal Home 2024", category: "club", team: "Arsenal", price: 810000, image: "https://images.unsplash.com/photo-1599408080643-4638706c8b9d?q=80&w=600", description: "Pháo thủ thành London, thiết kế cổ điển.", badge: "" },
        { id: 7, name: "Áo Đấu Pháp Euro 2024", category: "national", team: "Pháp", price: 880000, image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600", description: "Sắc xanh Lam đặc trưng, sang trọng và đẳng cấp.", badge: "" },
        { id: 10, name: "Áo Đấu Inter Miami Home (Messi)", category: "club", team: "Inter Miami", price: 990000, image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600", description: "Sắc hồng rực rỡ, kèm tên và số 10 của GOAT.", badge: "Best Seller" }
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
