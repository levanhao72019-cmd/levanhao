const products = [
    {
        id: 1,
        name: "Áo Đấu Real Madrid Home 2024",
        category: "club",
        team: "Real Madrid",
        price: 850000,
        image: "assets/real_madrid.png",
        description: "Bản fan chất lượng cao, vải thoáng khí, logo thêu sắc nét.",
        badge: "Bán chạy"
    },
    {
        id: 2,
        name: "Áo Đấu Việt Nam Home 2024",
        category: "national",
        team: "Việt Nam",
        price: 650000,
        image: "assets/vietnam.png",
        description: "Niềm tự hào dân tộc, thiết kế hiện đại, chất liệu thun lạnh.",
        badge: "Mới"
    },
    {
        id: 3,
        name: "Áo Đấu Manchester City Home 2024",
        category: "club",
        team: "Man City",
        price: 820000,
        image: "assets/man_city.png",
        description: "Thiết kế sky blue đặc trưng, ôm sát cơ thể, thoát mồ hôi tốt.",
        badge: "Trending"
    },
    {
        id: 4,
        name: "Áo Đấu Manchester United Away 2024",
        category: "club",
        team: "Man Utd",
        price: 790000,
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=600",
        description: "Màu sắc tối giản, phong cách quỷ đỏ.",
        badge: ""
    },
    {
        id: 5,
        name: "Áo Đấu Argentina World Cup 2022",
        category: "national",
        team: "Argentina",
        price: 950000,
        image: "https://images.unsplash.com/photo-1671291880404-067980590ca6?q=80&w=600",
        description: "Phiên bản 3 sao của nhà vô địch thế giới.",
        badge: "Hot"
    },
    {
        id: 6,
        name: "Áo Đấu Arsenal Home 2024",
        category: "club",
        team: "Arsenal",
        price: 810000,
        image: "https://images.unsplash.com/photo-1599408080643-4638706c8b9d?q=80&w=600",
        description: "Pháo thủ thành London, thiết kế cổ điển.",
        badge: ""
    },
    {
        id: 7,
        name: "Áo Đấu Pháp Euro 2024",
        category: "national",
        team: "Pháp",
        price: 880000,
        image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600",
        description: "Sắc xanh Lam đặc trưng, sang trọng và đẳng cấp.",
        badge: ""
    },
    {
        id: 8,
        name: "Áo Đấu Nhật Bản Special Edition",
        category: "national",
        team: "Nhật Bản",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600",
        description: "Thiết kế anime giới hạn, cực chất cho fan J-League.",
        badge: "Limited"
    },
    {
        id: 9,
        name: "Áo Đấu Barcelona Home 2024",
        category: "club",
        team: "Barca",
        price: 830000,
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=600",
        description: "Blaugrana truyền thống, vải sợi tái chế thân thiện môi trường.",
        badge: ""
    },
    {
        id: 10,
        name: "Áo Đấu Inter Miami Home (Messi)",
        category: "club",
        team: "Inter Miami",
        price: 990000,
        image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600",
        description: "Sắc hồng rực rỡ, kèm tên và số 10 của GOAT.",
        badge: "Best Seller"
    }
];

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
