import StoryModel from '../../models/story-model';

export default class MapPage {
  constructor() {
    this.map = null;
    this.marker = null;
    this.story = null;
    this.storyModel = new StoryModel();
  }

  async render() {
    return `
      <section class="map-page">
        <div class="map-container" id="map"></div>
        <div class="story-info" id="storyInfo"></div>
      </section>
    `;
  }

  async afterRender() {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const storyId = urlParams.get('id');

    if (storyId) {
      try {
        const response = await this.storyModel.getStoryById(storyId);
        this.story = response.story;
        this._setupMap();
        this._setupStoryInfo();
      } catch (error) {
        console.error('Error loading story:', error);
        alert('Gagal memuat detail cerita');
      }
    }
  }

  async _setupMap() {
    if (!this.story.lat || !this.story.lon) {
      alert('Cerita ini tidak memiliki informasi lokasi');
      window.location.hash = '#/home';
      return;
    }

    // Tunggu hingga container map tersedia
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('Container map tidak ditemukan');
      return;
    }

    // Pastikan container map memiliki dimensi
    mapContainer.style.height = '60vh';
    mapContainer.style.width = '100%';

    // Initialize map
    this.map = L.map('map').setView([this.story.lat, this.story.lon], 13);
    
    // Tambahkan tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(this.map);

    // Add marker
    this.marker = L.marker([this.story.lat, this.story.lon]).addTo(this.map);
    
    // Add popup
    this.marker.bindPopup(`
      <div class="map-popup">
        <img src="${this.story.photoUrl}" alt="${this.story.name}">
        <h3>${this.story.name}</h3>
        <p>${this.story.description}</p>
      </div>
    `).openPopup();

    // Trigger resize event untuk memastikan peta di-render dengan benar
    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
  }

  _setupStoryInfo() {
    const storyInfo = document.getElementById('storyInfo');
    if (!storyInfo) return;

    storyInfo.innerHTML = `
      <div class="story-details">
        <img src="${this.story.photoUrl}" alt="${this.story.name}">
        <div class="story-content">
          <h2>${this.story.name}</h2>
          <p>${this.story.description}</p>
          <div class="story-meta">
            <span class="date">${new Date(this.story.createdAt).toLocaleDateString('id-ID')}</span>
          </div>
        </div>
      </div>
    `;
  }
} 