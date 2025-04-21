class AboutPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="about-page">
        <div class="about-header">
          <h1>Tentang Story App</h1>
          <p>Story App adalah platform untuk berbagi cerita dan pengalaman seputar Dicoding. Aplikasi ini memungkinkan pengguna untuk berbagi momen mereka melalui foto dan lokasi.</p>
        </div>

        <div class="about-content">
          <div class="about-card">
            <h2>Fitur Utama</h2>
            <div class="about-features">
              <ul class="feature-list">
                <li>Berbagi cerita dengan foto</li>
                <li>Menambahkan lokasi pada cerita</li>
                <li>Melihat cerita dari pengguna lain</li>
                <li>Notifikasi real-time</li>
                <li>Pencarian berdasarkan lokasi</li>
              </ul>
            </div>
          </div>

          <div class="about-card">
            <h2>Teknologi</h2>
            <p>Aplikasi ini dibangun menggunakan teknologi modern:</p>
            <div class="about-features">
              <ul class="feature-list">
                <li>Progressive Web App (PWA)</li>
                <li>Service Worker</li>
                <li>Push Notification</li>
                <li>Responsive Design</li>
                <li>Single Page Application</li>
              </ul>
            </div>
          </div>

          <div class="about-card">
            <h2>Kontak</h2>
            <p>Untuk informasi lebih lanjut, silakan hubungi kami:</p>
            <div class="about-features">
              <ul class="feature-list">
                <li>Email: support@storyapp.com</li>
                <li>Telepon: (021) 123-4567</li>
                <li>Alamat: Jl. Contoh No. 123, Jakarta</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="about-team">
          <h2>Tim Pengembang</h2>
          <div class="team-grid">
            <div class="team-member">
              <img src="/images/team/developer1.jpg" alt="Developer 1">
              <h4>John Doe</h4>
              <p>Lead Developer</p>
            </div>
            <div class="team-member">
              <img src="/images/team/developer2.jpg" alt="Developer 2">
              <h4>Jane Smith</h4>
              <p>UI/UX Designer</p>
            </div>
            <div class="team-member">
              <img src="/images/team/developer3.jpg" alt="Developer 3">
              <h4>Mike Johnson</h4>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('about-page', AboutPage); 