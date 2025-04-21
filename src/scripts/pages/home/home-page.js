import StoryModel from '../../models/story-model';

export default class HomePage {
  constructor() {
    this.storyModel = new StoryModel();
    this.stories = [];
    this.pageSize = 10; 
  }

  render() {
    return `
      <section class="home-page">
        <a href="#stories-list" class="skip-link">Langsung ke daftar cerita</a>
        <div class="hero">
          <h1>Selamat Datang di Map Talers</h1>
          <p>Bagikan cerita dan pengalamanmu dengan dunia</p>
        </div>

        <div class="stories-container container">
          <div class="stories-header">
            <h2>Cerita Terbaru</h2>
            <a href="#/add-story" class="add-story-btn" aria-label="Tambah cerita baru">
              <i class="fas fa-plus" aria-hidden="true"></i> Tambah Cerita
            </a>
          </div>

          <div class="map-container">
            <div id="stories-map" class="stories-map" role="region" aria-label="Peta lokasi cerita"></div>
          </div>

          <div class="stories-grid" id="stories-list" role="list" aria-label="Daftar cerita" tabindex="-1">
            <div class="loading" id="loadingIndicator" aria-live="polite">
              <div class="spinner" aria-hidden="true"></div>
              <p>Memuat cerita...</p>
            </div>
          </div>
        </div>

        <footer class="footer" role="contentinfo">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Tentang Map Talers</h3>
              <p>Map Talers adalah platform berbagi cerita yang memungkinkan kamu membagikan pengalaman, inspirasi, dan momen berharga dalam hidupmu kepada dunia.</p>
            </div>
            <div class="footer-section">
              <h3>Menu Utama</h3>
              <ul class="footer-links" role="list">
                <li><a href="#/home" aria-label="Beranda">Beranda</a></li>
                <li><a href="#/add-story" aria-label="Tambah cerita">Tambah Cerita</a></li>
                <li><a href="#/about" aria-label="Tentang kami">Tentang Kami</a></li>
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
    try {
      await this._loadStories();
    } catch (error) {
      console.error('Error in afterRender:', error);
      const storiesList = document.getElementById('stories-list');
      if (storiesList) {
        storiesList.innerHTML = `
          <div class="error">
            <p>${error.message || 'Terjadi kesalahan saat memuat cerita'}</p>
            <button onclick="window.location.reload()" class="btn btn-secondary">Coba Lagi</button>
          </div>
        `;
      }
    }
  }

  async _loadStories() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) loadingIndicator.style.display = 'flex';

    try {
      const response = await this.storyModel.getStories(1, this.pageSize);
      const stories = response.listStory || [];

      if (stories.length === 0) {
        const storiesList = document.getElementById('stories-list');
        if (storiesList) {
          storiesList.innerHTML = '<div class="no-stories">Belum ada cerita yang ditambahkan</div>';
        }
        return;
      }

      this.stories = stories;
      await this._renderStories(stories);
    } catch (error) {
      console.error('Error loading stories:', error);
      const storiesList = document.getElementById('stories-list');
      if (storiesList) {
        storiesList.innerHTML = `
          <div class="error">
            <p>${error.message || 'Terjadi kesalahan saat memuat cerita'}</p>
            <button onclick="window.location.reload()" class="btn btn-secondary">Coba Lagi</button>
          </div>
        `;
      }
    } finally {
      if (loadingIndicator) loadingIndicator.style.display = 'none';
    }
  }

  async _renderStories(stories) {
    const storiesList = document.getElementById('stories-list');
    const mapContainer = document.getElementById('stories-map');
    
    if (!storiesList || !mapContainer) {
      console.error('Required elements not found');
      return;
    }

    try {
      // Log stories data
      console.log('Stories data:', stories);
      
      // Filter stories with location
      const storiesWithLocation = stories.filter(story => story.lat && story.lon);
      console.log('Stories with location:', storiesWithLocation);

      // Inisialisasi peta
      const map = L.map('stories-map').setView([-2.548926, 118.014863], 5);

      // Tambahkan tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(map);

      // Konfigurasi default icon menggunakan CDN Leaflet
      const defaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Set default icon untuk semua marker
      L.Marker.prototype.options.icon = defaultIcon;

      // Bersihkan event listener yang ada
      document.querySelectorAll('.view-location-btn').forEach(button => {
        button.removeEventListener('click', this._handleLocationButtonClick);
      });

      const markers = L.markerClusterGroup({
        showCoverageOnHover: true,
        maxClusterRadius: 80,
        spiderfyOnMaxZoom: true,
        chunkedLoading: true,
        zoomToBoundsOnClick: true,
        removeOutsideVisibleBounds: true,
        animate: true,
        animateAddingMarkers: true,
        disableClusteringAtZoom: 16,
        iconCreateFunction: function(cluster) {
          const childCount = cluster.getChildCount();
          let size, className;
          
          if (childCount < 10) {
            size = 35;
            className = 'marker-cluster-small';
          } else if (childCount < 100) {
            size = 45;
            className = 'marker-cluster-medium';
          } else {
            size = 55;
            className = 'marker-cluster-large';
          }

          return L.divIcon({
            html: `<div><span>${childCount}</span></div>`,
            className: `marker-cluster ${className}`,
            iconSize: L.point(size, size)
          });
        }
      });

      const validCoordinates = [];

      stories.forEach(story => {
        if (story.lat && story.lon) {
          const lat = parseFloat(story.lat);
          const lon = parseFloat(story.lon);
          
          if (!isNaN(lat) && !isNaN(lon)) {
            validCoordinates.push([lat, lon]);
            
            const marker = L.marker([lat, lon])
              .on('error', function() {
                console.warn(`Marker icon failed to load for story: ${story.name}`);
              })
              .on('load', function() {
                console.log(`Marker icon successfully loaded for story: ${story.name}`);
              })
              .bindPopup(`
                <div class="map-popup">
                  <img 
                    src="${story.photoUrl}" 
                    alt="Foto story oleh ${story.name}" 
                    loading="lazy"
                    width="150"
                    height="100"
                    onerror="this.style.display='none'"
                  >
                  <h3>${story.name}</h3>
                  <p>${story.description}</p>
                </div>
              `, {
                maxWidth: 300,
                minWidth: 200,
                autoPan: true,
                closeButton: true
              });
            
            markers.addLayer(marker);
          }
        }
      });

      console.log('Valid coordinates found:', validCoordinates);

      // Tambahkan marker cluster ke peta
      map.addLayer(markers);
      console.log('Markers added to map');

      // Sesuaikan bounds peta jika ada koordinat valid
      if (validCoordinates.length > 0) {
        map.fitBounds(L.latLngBounds(validCoordinates), {
          padding: [50, 50],
          maxZoom: 13
        });
        console.log('Map bounds adjusted to fit markers');
      } else {
        console.warn('No valid coordinates found to adjust map bounds');
      }

      // Render stories list
      const storiesHTML = stories.map(story => `
        <div class="story-card" role="article">
          <img 
            src="${story.photoUrl}" 
            alt="Foto story oleh ${story.name}" 
            class="story-image"
            loading="lazy"
            width="300"
            height="200"
          >
          <h3>${story.name}</h3>
          <p>${story.description}</p>
          <div class="story-meta">
            <span class="author">Oleh: ${story.name}</span>
            <span class="date">${new Date(story.createdAt).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            ${story.lat && story.lon ? `
              <button 
                class="view-location-btn" 
                data-lat="${story.lat}" 
                data-lon="${story.lon}"
                aria-label="Lihat lokasi untuk cerita oleh ${story.name}"
              >
                <i class="fas fa-map-marker-alt" aria-hidden="true"></i> Lihat Lokasi
              </button>
            ` : ''}
          </div>
        </div>
      `).join('');

      // Tambahkan stories ke dalam grid
      storiesList.innerHTML = storiesHTML;

      // Tambahkan event listener untuk tombol "Lihat Lokasi"
      this._handleLocationButtonClick = (event) => {
        const button = event.currentTarget;
        const lat = parseFloat(button.dataset.lat);
        const lon = parseFloat(button.dataset.lon);
        
        if (!isNaN(lat) && !isNaN(lon)) {
          map.setView([lat, lon], 15);
          window.scrollTo({
            top: mapContainer.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      };

      document.querySelectorAll('.view-location-btn').forEach(button => {
        button.addEventListener('click', this._handleLocationButtonClick);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
      // Tetap tampilkan daftar cerita meskipun peta gagal dimuat
      const storiesHTML = stories.map(story => `
        <div class="story-card">
          <img src="${story.photoUrl}" alt="Foto story oleh ${story.name}" class="story-image">
          <h3>${story.name}</h3>
          <p>${story.description}</p>
          <div class="story-meta">
            <span class="author">Oleh: ${story.name}</span>
            <span class="date">${new Date(story.createdAt).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </div>
      `).join('');

      storiesList.innerHTML = storiesHTML;
    }
  }
}