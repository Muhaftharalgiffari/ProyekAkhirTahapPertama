import storyApi from '../data/api';

class RegisterPresenter {
  constructor(view) {
    this.view = view;
    this.storyApi = storyApi;
  }

  init() {
    this._setupEventListeners();
  }

  _setupEventListeners() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => this._handleRegister(e));
    }
  }

  _showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.marginBottom = '1rem';
    errorElement.style.textAlign = 'center';

    const form = document.getElementById('registerForm');
    const firstChild = form.firstElementChild;
    form.insertBefore(errorElement, firstChild);

    setTimeout(() => {
      errorElement.remove();
    }, 3000);
  }

  async _handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validasi input
    if (!name || !email || !password) {
      this._showError('Semua field harus diisi');
      return;
    }

    if (password.length < 8) {
      this._showError('Password minimal 8 karakter');
      return;
    }

    try {
      const response = await this.storyApi.register(name, email, password);
      
      if (!response.error) {
        alert('Pendaftaran berhasil! Silakan login.');
        window.location.hash = '#/login';
      } else {
        this._showError(response.message);
      }
    } catch (error) {
      this._showError('Terjadi kesalahan saat mendaftar');
      console.error('Register error:', error);
    }
  }
}

export default RegisterPresenter; 