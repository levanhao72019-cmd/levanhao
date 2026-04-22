const auth = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

    register(name, email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email === email)) {
            return { success: false, message: "Email đã được sử dụng." };
        }
        const newUser = { id: Date.now(), name, email, password, role: 'user' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: "Đăng ký thành công!" };
    },

    login(email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [
            { email: 'admin@sportify.com', password: 'admin', name: 'Quản trị viên', role: 'admin' }
        ];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, message: "Email hoặc mật khẩu không chính xác." };
    },

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        location.reload();
    },

    isAdmin() {
        return this.currentUser && this.currentUser.role === 'admin';
    }
};
