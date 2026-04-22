# SPORTIFY - Website Thương Mại Điện Tử Quần Áo Bóng Đá

Website chuyên nghiệp cung cấp áo đấu câu lạc bộ và đội tuyển quốc gia với giao diện hiện đại, tối ưu trải nghiệm người dùng.

## 🚀 Tính năng nổi bật
- **Giao diện hiện đại:** Thiết kế Responsive, hỗ trợ đa thiết bị (Mobile, Tablet, Desktop).
- **Trải nghiệm mua sắm:** Tìm kiếm, lọc sản phẩm theo danh mục và giá.
- **Giỏ hàng thông minh:** Thêm, xóa, cập nhật số lượng sản phẩm nhanh chóng.
- **Hệ thống Auth:** Đăng ký/Đăng nhập (sử dụng LocalStorage cho demo).
- **Quản lý đơn hàng:** Quy trình thanh toán giả lập chuyên nghiệp.

## 🛠 Công nghệ sử dụng
- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+), Lucide Icons.
- **Backend:** Node.js, Express (Cấu trúc sẵn sàng).
- **Database:** LocalStorage (Demo) / MongoDB (Sẵn sàng kết nối).

## 📂 Cấu trúc thư mục
- `index.html`, `style.css`, `js/`: Mã nguồn giao diện người dùng (nằm ở thư mục gốc để dễ dàng deploy).
- `/backend`: Mã nguồn máy chủ (Express).
- `/assets`: Hình ảnh sản phẩm và tài nguyên đồ họa.

## 💻 Hướng dẫn chạy dự án

### 1. Chạy Frontend (Demo nhanh)
Bạn chỉ cần mở file `index.html` trực tiếp trên trình duyệt hoặc sử dụng extension **Live Server** trong VS Code.

### 2. Chạy Backend (Yêu cầu Node.js)
1. Truy cập thư mục backend: `cd backend`
2. Cài đặt phụ thuộc: `npm install`
3. Chạy server: `npm run dev`

## 🌐 Hướng dẫn Deploy

### Frontend (GitHub Pages)
1. Đưa toàn bộ mã nguồn lên một repository GitHub mới.
2. Vào phần **Settings** > **Pages**.
3. Chọn branch `main` và thư mục `frontend`.
4. Nhấn **Save**. Trang web của bạn sẽ có link `https://<username>.github.io/<repo-name>/`.

### Backend (Render / Railway)
1. Kết nối tài khoản GitHub với Render/Railway.
2. Tạo **New Web Service**.
3. Chọn repository của bạn.
4. Cấu hình **Build Command**: `npm install` và **Start Command**: `node server.js`.
5. Thêm biến môi trường `MONGODB_URI` nếu sử dụng database thật.

---
© 2024 SPORTIFY. Được thiết kế bởi Antigravity.
