class RegisterPage {
  constructor() {
    this.template = `
      <div class="container">
        <div class="register-container">
          <h1>Daftar Akun</h1>
          <form id="registerForm">
            <div class="form-group">
              <label for="name">Nama</label>
              <input type="text" id="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" required minlength="8">
              <small>Password minimal 8 karakter</small>
            </div>
            <button type="submit">Daftar</button>
          </form>
          <p>Sudah punya akun? <a href="#/login">Login</a></p>
        </div>
      </div>
    `;
  }

  render() {
    return this.template;
  }
}

export default RegisterPage; 