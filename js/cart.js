const cart = {
    items: JSON.parse(localStorage.getItem('cart')) || [],

    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.save();
        this.updateUI();
    },

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
        this.updateUI();
    },

    updateQuantity(id, delta) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeItem(id);
            }
        }
        this.save();
        this.updateUI();
    },

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    },

    updateUI() {
        const count = this.items.reduce((total, item) => total + item.quantity, 0);
        const cartCountEl = document.querySelector('.cart-count');
        if (cartCountEl) cartCountEl.textContent = count;

        const cartItemsEl = document.getElementById('cart-items');
        const cartTotalEl = document.getElementById('cart-total');
        
        if (cartItemsEl) {
            if (this.items.length === 0) {
                cartItemsEl.innerHTML = '<p class="empty-cart">Giỏ hàng trống.</p>';
            } else {
                cartItemsEl.innerHTML = this.items.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="item-info">
                            <h4>${item.name}</h4>
                            <p>${formatPrice(item.price)}</p>
                            <div class="item-qty">
                                <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="remove-btn" onclick="cart.removeItem(${item.id})">&times;</button>
                    </div>
                `).join('');
            }
        }
        
        if (cartTotalEl) {
            cartTotalEl.textContent = formatPrice(this.getTotal());
        }
    }
};
