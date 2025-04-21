class LoginPage {
  constructor() {
    this.template = `
      <div class="container">
        <div class="login-container">
          <h1>Login</h1>
          <form id="loginForm">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" required>
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Belum punya akun? <a href="#/register">Daftar</a></p>
        </div>
      </div>
    `;
  }

  render() {
    return this.template;
  }
}

export default LoginPage; 