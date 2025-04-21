// CSS imports
import '../styles/styles.css';
import '../styles/pages/map-page.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import AppManager from './pages/app-manager';
import storyApi from './data/api';
import L from 'leaflet';
import 'leaflet.markercluster';

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

document.addEventListener('DOMContentLoaded', async () => {
  const app = new AppManager({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer')
  });

  // Check auth status
  const token = storyApi.getToken();
  const currentPath = window.location.hash.slice(1) || '/';

  // Jika tidak ada token dan bukan di halaman login/register, redirect ke login
  if (!token && !['/login', '/register'].includes(currentPath)) {
    window.location.hash = '#/login';
  } else {
    // Render halaman pertama kali
    await app.renderPage();
  }

  // Handle hash change
  window.addEventListener('hashchange', async () => {
    const newPath = window.location.hash.slice(1) || '/';
    const token = storyApi.getToken();

    // Jika tidak ada token dan bukan di halaman login/register, redirect ke login
    if (!token && !['/login', '/register'].includes(newPath)) {
      window.location.hash = '#/login';
    } else {
      // Render halaman baru
      await app.renderPage();
    }
  });
});
