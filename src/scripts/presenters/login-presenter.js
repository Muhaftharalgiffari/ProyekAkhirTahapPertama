import AuthModel from '../models/auth-model';

class LoginPresenter {
  constructor(view) {
    this.view = view;
    this.authModel = new AuthModel();
  }

  init() {
    this._setupForm();
  }

  _showLoading(show = true) {
    const loading = document.querySelector('.loading');
    if (loading) {
      loading.style.display = show ? 'flex' : 'none';
    }
  }

  _showNotification(message, type = 'success') {
    // Hapus notifikasi yang sudah ada jika ada
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type} fade-in`;
    notification.textContent = message;
    
    // Tambahkan notifikasi ke dalam form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.insertAdjacentElement('afterbegin', notification);
    }

    // Hapus notifikasi setelah animasi selesai
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  _setupForm() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Validasi input
      if (!email || !password) {
        this._showNotification('Email dan password harus diisi', 'error');
        return;
      }

      try {
        // Tampilkan loader
        this._showLoading(true);

        const response = await this.authModel.login(email, password);
        
        if (response.error) {
          throw new Error(response.message);
        }

        // Sembunyikan loader
        this._showLoading(false);

        // Tampilkan notifikasi sukses
        this._showNotification('Login berhasil', 'success');

        // Redirect ke home setelah 1 detik
        setTimeout(() => {
          window.location.replace('#/home');
          window.location.reload();
        }, 1000);

      } catch (error) {
        console.error('Login error:', error);
        
        // Sembunyikan loader
        this._showLoading(false);
        
        // Tampilkan notifikasi error
        this._showNotification(error.message || 'Login gagal', 'error');
      }
    });
  }
}

export default LoginPresenter; 