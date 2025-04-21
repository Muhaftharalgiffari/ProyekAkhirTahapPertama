import StoryModel from '../../models/story-model';

export default class AddStoryPage {
  constructor() {
    this.videoElement = null;
    this.stream = null;
    this.map = null;
    this.marker = null;
    this.selectedLocation = null;
    this.storyModel = new StoryModel();
    this._cleanup = this._cleanup.bind(this);
  }

  async render() {
    return `
      <section class="add-story-page">
        <div class="add-story-content">
          <h1>Tambah Cerita Baru</h1>
          
          <form id="addStoryForm" class="story-form" aria-label="Form tambah cerita">
            <div class="form-group">
              <label for="description">Deskripsi Cerita</label>
              <textarea 
                id="description" 
                name="description" 
                required 
                placeholder="Tuliskan ceritamu di sini..."
                aria-required="true"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="photo">Foto</label>
              <div class="camera-container" role="region" aria-label="Kamera">
                <video id="camera" playsinline aria-label="Preview kamera" style="display: none;"></video>
                <div id="photoPreview" class="photo-preview" style="display: none;" role="region" aria-label="Preview foto">
                  <img id="previewImage" src="" alt="Preview foto yang diambil">
                </div>
                <div class="camera-controls">
                  <button 
                    type="button" 
                    id="startCameraBtn" 
                    class="btn btn-secondary"
                    aria-label="Buka kamera"
                  >Buka Kamera</button>
                  <button 
                    type="button" 
                    id="captureBtn" 
                    class="btn btn-secondary"
                    aria-label="Ambil foto menggunakan kamera"
                    style="display: none;"
                  >Ambil Foto</button>
                  <button 
                    type="button" 
                    id="closeCameraBtn" 
                    class="btn btn-secondary"
                    aria-label="Tutup kamera"
                    style="display: none;"
                  >Tutup Kamera</button>
                  <button 
                    type="button" 
                    id="retakeBtn" 
                    class="btn btn-secondary" 
                    style="display: none;"
                    aria-label="Ambil ulang foto"
                  >Ambil Ulang</button>
                </div>
                <canvas id="photoCanvas" style="display: none;" aria-hidden="true"></canvas>
              </div>
            </div>

            <div class="form-group">
              <label for="map">Lokasi</label>
              <div id="map" class="map-container" role="region" aria-label="Peta untuk memilih lokasi"></div>
              <p class="location-info" id="locationInfo">Klik pada peta untuk memilih lokasi</p>
            </div>

            <div class="form-actions">
              <button 
                type="submit" 
                class="btn btn-primary"
                aria-label="Simpan cerita baru"
              >Simpan Cerita</button>
              <a 
                href="#/home" 
                class="btn btn-secondary"
                aria-label="Batal dan kembali ke beranda"
              >Batal</a>
            </div>
          </form>
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
    this._setupCamera();
    this._setupMap();
    this._setupForm();
    
    // Tambahkan event listener untuk membersihkan kamera saat berpindah halaman
    window.addEventListener('hashchange', this._cleanup);
    window.addEventListener('beforeunload', this._cleanup);
  }

  _cleanup() {
    // Matikan kamera
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    // Hapus event listeners
    window.removeEventListener('hashchange', this._cleanup);
    window.removeEventListener('beforeunload', this._cleanup);
  }

  _setupCamera() {
    this.videoElement = document.getElementById('camera');
    const startCameraBtn = document.getElementById('startCameraBtn');
    const captureBtn = document.getElementById('captureBtn');
    const closeCameraBtn = document.getElementById('closeCameraBtn');
    const retakeBtn = document.getElementById('retakeBtn');
    const photoPreview = document.getElementById('photoPreview');
    const previewImage = document.getElementById('previewImage');
    const canvas = document.getElementById('photoCanvas');

    // Set fixed dimensions for video and canvas
    const videoWidth = 400;
    const videoHeight = 300;

    this.videoElement.width = videoWidth;
    this.videoElement.height = videoHeight;
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    // Fungsi untuk memastikan video stream dimulai dengan benar
    const startVideoStream = async () => {
      try {
        // Request camera access
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: videoWidth },
            height: { ideal: videoHeight }
          } 
        });
        
        // Stop any existing stream
        if (this.stream) {
          this.stream.getTracks().forEach(track => track.stop());
        }
        
        // Set new stream
        this.stream = stream;
        this.videoElement.srcObject = stream;
        
        // Ensure play() is called after loadedmetadata event
        return new Promise((resolve, reject) => {
          // If video is already loaded, play immediately
          if (this.videoElement.readyState >= 2) {
            this.videoElement.play()
              .then(() => resolve())
              .catch(err => reject(err));
          } else {
            // Otherwise wait for metadata to load
            this.videoElement.addEventListener('loadedmetadata', () => {
              this.videoElement.play()
                .then(() => resolve())
                .catch(err => reject(err));
            }, { once: true });
          }
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Tidak dapat mengakses kamera. Pastikan Anda memberikan izin akses kamera.');
        throw error;
      }
    };

    // Fungsi untuk menutup kamera
    const closeCamera = () => {
      if (this.stream) {
        this.stream.getTracks().forEach(track => track.stop());
        this.stream = null;
      }
      this.videoElement.style.display = 'none';
      captureBtn.style.display = 'none';
      closeCameraBtn.style.display = 'none';
      startCameraBtn.style.display = 'block';
      startCameraBtn.disabled = false;
    };

    // Setup start camera button
    startCameraBtn.addEventListener('click', async () => {
      try {
        startCameraBtn.disabled = true;
        
        // Reset semua tampilan tombol terlebih dahulu
        startCameraBtn.style.display = 'none';
        captureBtn.style.display = 'none';
        closeCameraBtn.style.display = 'none';
        this.videoElement.style.display = 'none';
        
        // Tunggu sebentar untuk memastikan UI sudah direset
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Start camera stream
        await startVideoStream();
        
        // Setelah stream berhasil, tampilkan elemen yang diperlukan
        this.videoElement.style.display = 'block';
        captureBtn.style.display = 'block';
        closeCameraBtn.style.display = 'block';
      } catch (error) {
        console.error('Error starting camera:', error);
        alert('Gagal membuka kamera. Silakan coba lagi.');
        closeCamera();
      }
    });

    // Setup close camera button
    closeCameraBtn.addEventListener('click', closeCamera);

    // Setup capture button
    captureBtn.addEventListener('click', () => {
      const context = canvas.getContext('2d');
      context.drawImage(this.videoElement, 0, 0, videoWidth, videoHeight);
      
      // Convert canvas to image and display preview
      const imageData = canvas.toDataURL('image/jpeg');
      previewImage.src = imageData;
      
      // Show preview and retake button, hide video and capture button
      photoPreview.style.display = 'flex';
      retakeBtn.style.display = 'block';
      this.videoElement.style.display = 'none';
      captureBtn.style.display = 'none';
      closeCameraBtn.style.display = 'none';

      // Matikan kamera setelah mengambil foto
      if (this.stream) {
        this.stream.getTracks().forEach(track => track.stop());
      }
    });

    // Setup retake button
    retakeBtn.addEventListener('click', async () => {
      try {
        retakeBtn.disabled = true;
        
        // Hide preview and show camera controls
        photoPreview.style.display = 'none';
        retakeBtn.style.display = 'none';
        
        // Matikan dulu stream kamera yang ada
        if (this.stream) {
          this.stream.getTracks().forEach(track => track.stop());
          this.stream = null;
        }
        
        // Tunggu sebentar sebelum memulai kamera baru
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Start camera stream
        await startVideoStream();
        
        // Show video and buttons
        this.videoElement.style.display = 'block';
        captureBtn.style.display = 'block';
        closeCameraBtn.style.display = 'block';
        
        retakeBtn.disabled = false;
      } catch (error) {
        console.error('Error restarting camera:', error);
        alert('Gagal memulai ulang kamera. Silakan coba lagi.');
        closeCamera();
        retakeBtn.disabled = false;
      }
    });
  }

  _setupMap() {
    // Create default icon for marker
    const defaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Set default icon for all markers
    L.Marker.prototype.options.icon = defaultIcon;

    // Initialize map centered on Indonesia
    this.map = L.map('map').setView([-6.2088, 106.8456], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);

    // Add click event to map
    this.map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      
      // Remove existing marker if any
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }

      // Add new marker with custom icon
      this.marker = L.marker([lat, lng], { icon: defaultIcon }).addTo(this.map);
      
      // Update selected location
      this.selectedLocation = { lat, lon: lng };
      
      // Update location info text
      document.getElementById('locationInfo').textContent = `Lokasi dipilih: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    });
  }

  _setupForm() {
    const form = document.getElementById('addStoryForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const description = document.getElementById('description').value;
      const canvas = document.getElementById('photoCanvas');
      
      if (!this.selectedLocation) {
        alert('Silakan pilih lokasi di peta');
        return;
      }

      if (!canvas.toDataURL || !canvas.toBlob) {
        alert('Silakan ambil foto terlebih dahulu');
        return;
      }

      try {
        // Convert canvas to blob
        canvas.toBlob(async (blob) => {
          if (!blob) {
            alert('Gagal memproses foto, silakan coba lagi');
            return;
          }

          // Create form data
          const formData = new FormData();
          formData.append('description', description);
          formData.append('photo', blob, 'photo.jpg');
          formData.append('lat', this.selectedLocation.lat);
          formData.append('lon', this.selectedLocation.lon);

          try {
            // Show loading
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Menyimpan...';

            // Submit data
            await this.storyModel.addStory(formData);
            
            // Success message
            alert('Cerita berhasil ditambahkan!');
            
            // Redirect to home
            window.location.hash = '#/home';
          } catch (error) {
            alert(`Gagal menambahkan cerita: ${error.message}`);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Simpan Cerita';
          }
        }, 'image/jpeg', 0.8);
      } catch (error) {
        alert(`Terjadi kesalahan: ${error.message}`);
      }
    });
  }
} 