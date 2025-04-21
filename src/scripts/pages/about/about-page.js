export default class AboutPage {
  async render() {
    return `
      <section class="about-page">
        <a href="#about-content" class="skip-link">Langsung ke konten tentang kami</a>
        
        <div class="about-header">
          <div class="header-icon">
            <i class="fas fa-book-open" style="font-family: 'Font Awesome 6 Free';"></i>
          </div>
          <h1>Tentang Map Talers</h1>
          <p class="subtitle">Platform berbagi cerita dan momen berharga dengan lokasi</p>
        </div>

        <div class="about-content" id="about-content" tabindex="-1">
          <div class="about-section mission">
            <div class="section-icon">
              <i class="fas fa-rocket" style="font-family: 'Font Awesome 6 Free';"></i>
            </div>
            <h2>Misi Kami</h2>
            <p>Map Talers hadir untuk menghubungkan dan menginspirasi melalui cerita. Kami percaya setiap orang memiliki cerita unik yang layak dibagikan ke dunia.</p>
          </div>

          <div class="about-section features">
            <div class="section-icon">
              <i class="fas fa-star"></i>
            </div>
            <h2>Fitur Utama</h2>
            <div class="features-grid">
              <div class="feature-card">
                <i class="fas fa-camera"></i>
                <h3>Ambil Foto</h3>
                <p>Abadikan momen spesialmu langsung dari kamera</p>
              </div>
              <div class="feature-card">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Lokasi</h3>
                <p>Tandai lokasi ceritamu di peta</p>
              </div>
              <div class="feature-card">
                <i class="fas fa-share-alt"></i>
                <h3>Bagikan</h3>
                <p>Bagikan ceritamu dengan komunitas</p>
              </div>
              <div class="feature-card">
                <i class="fas fa-heart"></i>
                <h3>Inspirasi</h3>
                <p>Temukan inspirasi dari cerita lain</p>
              </div>
            </div>
          </div>

          <div class="about-section tech">
            <div class="section-icon">
              <i class="fas fa-code"></i>
            </div>
            <h2>Teknologi</h2>
            <div class="tech-grid">
              <div class="tech-card">
                <i class="fab fa-js"></i>
                <h3>JavaScript</h3>
                <p>Modern JavaScript dengan ES6+</p>
              </div>
              <div class="tech-card">
                <i class="fas fa-mobile-alt"></i>
                <h3>Responsive</h3>
                <p>Tampilan responsif di semua perangkat</p>
              </div>
              <div class="tech-card">
                <i class="fas fa-map"></i>
                <h3>Maps API</h3>
                <p>Integrasi dengan OpenStreetMap</p>
              </div>
              <div class="tech-card">
                <i class="fas fa-server"></i>
                <h3>API Integration</h3>
                <p>REST API dengan fitur lengkap</p>
              </div>
            </div>
          </div>

          <div class="about-section credits">
            <div class="section-icon">
              <i class="fas fa-user"></i>
            </div>
            <h2>Dikembangkan Oleh</h2>
            <div class="credits-content">
              <h3>Muh. Afthar algiffari</h3>
              <p class="developer-title">Full Stack Developer</p>
              <p class="developer-description">
                Mahasiswa yang bersemangat dalam pengembangan web dan mobile. 
                Berkomitmen untuk menciptakan aplikasi yang bermanfaat dan mudah digunakan.
              </p>
            </div>
          </div>

          <div class="about-section version">
            <div class="section-icon">
              <i class="fas fa-info-circle"></i>
            </div>
            <h2>Informasi Aplikasi</h2>
            <div class="version-info">
              <p><strong>Versi:</strong> 1.0.0</p>
              <p><strong>Terakhir Diperbarui:</strong> Februari 2024</p>
              <p><strong>Dibuat untuk:</strong> Submission Dicoding</p>
            </div>
          </div>
        </div>

        <footer class="footer">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Tentang Map Talers</h3>
              <p>Map Talers adalah platform berbagi cerita yang memungkinkan kamu membagikan pengalaman, inspirasi, dan momen berharga dalam hidupmu kepada dunia.</p>
            </div>
            <div class="footer-section">
              <h3>Menu Utama</h3>
              <ul class="footer-links">
                <li><a href="#/home">Beranda</a></li>
                <li><a href="#/add-story">Tambah Cerita</a></li>
                <li><a href="#/about">Tentang Kami</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; Map Talers. Dibuat oleh Muh. Afthar algiffari by Dicoding</p>
          </div>
        </footer>
      </section>
    `;
  }

  async afterRender() {
    // Tambahkan kelas active pada link menu About
    const aboutLink = document.querySelector('a[href="#/about"]');
    if (aboutLink) {
      aboutLink.classList.add('active');
    }
  }
}
