document.addEventListener('DOMContentLoaded', () => {
    // Render Products
    renderProducts(products);
    cart.updateUI();
    checkLoginStatus();

    // Event Listeners
    setupEventListeners();
});

function renderProducts(productList) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    if (productList.length === 0) {
        grid.innerHTML = '<p class="no-results">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    grid.innerHTML = productList.map(p => `
        <div class="product-card">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            <img src="${p.image}" alt="${p.name}" class="product-img">
            <div class="product-info">
                <span class="category">${p.category === 'club' ? 'Câu lạc bộ' : 'Đội tuyển QG'}</span>
                <h3>${p.name}</h3>
                <div class="product-price">${formatPrice(p.price)}</div>
                <button class="add-to-cart" onclick="cart.addItem(${JSON.stringify(p).replace(/"/g, '&quot;')})">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('search-input');
    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.team.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    });

    // Filters
    const catFilter = document.getElementById('filter-category');
    catFilter?.addEventListener('change', (e) => {
        const cat = e.target.value;
        const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
        renderProducts(filtered);
    });

    const sortFilter = document.getElementById('sort-price');
    sortFilter?.addEventListener('change', (e) => {
        const sort = e.target.value;
        let sorted = [...products];
        if (sort === 'low') sorted.sort((a, b) => a.price - b.price);
        if (sort === 'high') sorted.sort((a, b) => b.price - a.price);
        renderProducts(sorted);
    });

    // Modals
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const userBtn = document.getElementById('user-btn');
    const authModal = document.getElementById('auth-modal');
    const closeBtns = document.querySelectorAll('.close-modal');

    cartBtn?.addEventListener('click', () => cartModal.classList.add('active'));
    userBtn?.addEventListener('click', () => {
        if (auth.currentUser) {
            if (confirm(`Xin chào ${auth.currentUser.name}, bạn có muốn đăng xuất?`)) {
                auth.logout();
            }
        } else {
            authModal.classList.add('active');
        }
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cartModal.classList.remove('active');
            authModal.classList.remove('active');
        });
    });

    // Auth Switch
    const switchAuth = document.getElementById('switch-auth');
    const authTitle = document.getElementById('auth-title');
    const nameGroup = document.getElementById('name-group');
    const authSubmit = document.getElementById('auth-submit');
    let isLogin = true;

    switchAuth?.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        authTitle.textContent = isLogin ? 'Đăng Nhập' : 'Đăng Ký';
        nameGroup.style.display = isLogin ? 'none' : 'block';
        authSubmit.textContent = isLogin ? 'Đăng Nhập' : 'Đăng Ký';
        switchAuth.textContent = isLogin ? 'Đăng ký ngay' : 'Đăng nhập ngay';
    });

    // Auth Submit
    const authForm = document.getElementById('auth-form');
    authForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        const name = document.getElementById('auth-name').value;

        if (isLogin) {
            const res = auth.login(email, password);
            if (res.success) {
                alert('Chào mừng trở lại!');
                location.reload();
            } else {
                alert(res.message);
            }
        } else {
            const res = auth.register(name, email, password);
            if (res.success) {
                alert(res.message);
                switchAuth.click(); // Switch to login
            } else {
                alert(res.message);
            }
        }
    });

    // Checkout
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn?.addEventListener('click', () => {
        if (cart.items.length === 0) {
            alert('Giỏ hàng trống!');
            return;
        }
        if (!auth.currentUser) {
            alert('Vui lòng đăng nhập để thanh toán!');
            authModal.classList.add('active');
            return;
        }
        alert('Cảm ơn bạn đã đặt hàng! Đơn hàng đang được xử lý (Giả lập).');
        cart.items = [];
        cart.save();
        cart.updateUI();
        cartModal.classList.remove('active');
    });
}

function checkLoginStatus() {
    const userBtn = document.getElementById('user-btn');
    if (auth.currentUser) {
        userBtn.style.color = 'var(--primary)';
        if (auth.isAdmin()) {
            console.log('Admin detected. Redirecting to admin dashboard would happen here.');
            // Add admin link if needed
        }
    }
}
