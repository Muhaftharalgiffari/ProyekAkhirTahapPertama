import HomePage from './pages/home/home-page.js';
import LoginPage from './pages/auth/login-page.js';
import RegisterPage from './pages/auth/register-page.js';
import AddStoryPage from './pages/story/add-story-page.js';
import AboutPage from './pages/about/about-page.js';
import utils from './utils/utils.js';
import './components/app-bar.js';
import './components/app-footer.js';

const mainContent = document.getElementById('main-content');
const loadingElement = document.getElementById('loading');

const showLoading = () => {
  console.log('Showing loading...');
  if (loadingElement) {
    loadingElement.style.display = 'flex';
  } else {
    console.error('Loading element not found!');
  }
};

const hideLoading = () => {
  console.log('Hiding loading...');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
};

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/add-story': AddStoryPage,
  '/about': AboutPage,
};

// Fungsi untuk menangani navigasi dengan View Transition API
async function navigateTo(url) {
  if (!document.startViewTransition) {
    window.location.hash = url;
    return;
  }

  // Hide skip links during transition
  const skipLinks = document.querySelectorAll('.skip-link');
  skipLinks.forEach(link => {
    link.style.display = 'none';
  });

  // Menggunakan View Transition API
  const transition = document.startViewTransition(async () => {
    window.location.hash = url;
    await renderPage();
  });

  // Menangani skip link setelah transisi selesai
  transition.finished.then(() => {
    // Restore skip links
    skipLinks.forEach(link => {
      link.style.display = '';
    });
    
    // Fokus pada elemen utama setelah transisi
    const skipTarget = document.querySelector('[tabindex="-1"]');
    if (skipTarget) {
      // Menunda fokus untuk memastikan elemen sudah di-render
      setTimeout(() => {
        skipTarget.focus({ preventScroll: false });
      }, 100);
    }
  });
}

async function renderPage() {
  const mainContent = document.querySelector('main');
  if (!mainContent) {
    console.error('Main content element not found');
    return;
  }

  const hash = window.location.hash.slice(1) || '/';
  const path = hash.split('/')[0];
  const PageClass = routes[path];
  
  if (!PageClass) {
    mainContent.innerHTML = '<h1>Halaman tidak ditemukan</h1>';
    return;
  }

  try {
    // Tambahkan kelas untuk animasi
    document.documentElement.classList.add('page-transition');
    
    const page = new PageClass();
    mainContent.innerHTML = await page.render();
    
    if (page.afterRender) {
      await page.afterRender();
    }
    
    // Tambahkan event listener untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      // Hapus listener yang ada untuk mencegah penambahan duplikat
      link.removeEventListener('click', handleNavClick);
      // Tambahkan listener baru
      link.addEventListener('click', handleNavClick);
    });
    
    // Aktifkan skip links
    activateSkipLinks();
    
    // Hapus kelas setelah transisi selesai
    setTimeout(() => {
      document.documentElement.classList.remove('page-transition');
    }, 500);
  } catch (error) {
    console.error('Error rendering page:', error);
    mainContent.innerHTML = '<h1>Terjadi kesalahan saat memuat halaman</h1>';
  }
}

function handleNavClick(e) {
  // Jika link adalah skip-link, biarkan berfungsi normal
  if (e.currentTarget.classList.contains('skip-link')) {
    return;
  }
  
  e.preventDefault();
  const url = e.currentTarget.getAttribute('href').substring(1);
  navigateTo(url);
}

function activateSkipLinks() {
  const skipLinks = document.querySelectorAll('.skip-link');
  skipLinks.forEach(link => {
    // Remove existing listeners
    link.removeEventListener('click', skipLinkHandler);
    // Add new listener
    link.addEventListener('click', skipLinkHandler);
  });
}

function skipLinkHandler(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    targetElement.focus();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Inisialisasi aplikasi
window.addEventListener('DOMContentLoaded', async () => {
  await renderPage();
});

window.addEventListener('hashchange', async () => {
  if (!document.startViewTransition) {
    await renderPage();
  }
});

// Export fungsi untuk navigasi
window.app = {
  navigateTo
}; 