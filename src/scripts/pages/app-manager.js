import routes from '../routes/routes';
import storyApi from '../data/api';
import LoginPresenter from '../presenters/login-presenter';
import RegisterPresenter from '../presenters/register-presenter';
import AuthModel from '../models/auth-model';
import StoryModel from '../models/story-model';

class AppManager {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;
  authModel = null;
  storyModel = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    this.authModel = new AuthModel();
    this.storyModel = new StoryModel();
    this.authModel.setStoryModel(this.storyModel);

    const token = this.authModel._getToken();
    if (token) {
      storyApi.setToken(token);
    }

    this._initialAppShell();
  }

  _initialAppShell() {
    this._setupDrawerButton();
    this._setupLogoutLink();
    this._updateMenu();
  }

  _setupDrawerButton() {
  }

  _setupLogoutLink() {
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
      logoutLink.addEventListener('click', async (e) => {
        e.preventDefault();
        await this._handleLogout();
      });
    }
  }

  async _handleLogout() {
    try {
      this.#content.classList.add('fade-out');
      
      await new Promise(resolve => setTimeout(resolve, 150));
      
      this.authModel.logout();
      storyApi.setToken(null);

      this.#navigationDrawer.classList.remove('open');
      this._updateMenu();
      
      if (document.startViewTransition) {
        await document.startViewTransition(async () => {
          window.location.replace('#/login');
        }).finished;
      } else {
        window.location.replace('#/login');
      }

      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        const notification = document.createElement('div');
        notification.className = 'notification success fade-in';
        notification.textContent = 'Anda berhasil logout';
        mainContent.insertAdjacentElement('afterbegin', notification);

        setTimeout(() => {
          notification.classList.add('fade-out');
          setTimeout(() => notification.remove(), 300);
        }, 3000);
      }

      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error('Error during logout:', error);
      
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        const notification = document.createElement('div');
        notification.className = 'notification error fade-in';
        notification.textContent = 'Terjadi kesalahan saat logout';
        mainContent.insertAdjacentElement('afterbegin', notification);

        setTimeout(() => {
          notification.classList.add('fade-out');
          setTimeout(() => notification.remove(), 300);
        }, 3000);
      }
    }
  }

  _updateMenu() {
    const token = this.authModel._getToken();
    const authMenu = document.getElementById('auth-menu');
    const userMenu = document.getElementById('user-menu');
    const currentPath = window.location.hash.slice(1) || '/';
    const brandLink = document.querySelector('.brand-name');
    const navigationDrawer = document.querySelector('.navigation-drawer');

    if (token) {
      brandLink.href = '#/home';
    } else {
      brandLink.href = '#/login';
    }

    const isAuthPage = currentPath === '/login' || currentPath === '/register';

    if (token) {
      if (authMenu) authMenu.style.display = 'none';
      if (userMenu) userMenu.style.display = 'flex';
      if (navigationDrawer) {
        navigationDrawer.classList.remove('auth-only');
      }
    } else {
      if (authMenu) authMenu.style.display = 'flex';
      if (userMenu) userMenu.style.display = 'none';
      if (navigationDrawer) {
        navigationDrawer.classList.add('auth-only');
      }

      const loginLink = document.getElementById('login-link');
      const registerLink = document.getElementById('register-link');

      if (loginLink && registerLink) {
        if (currentPath === '/login') {
          loginLink.style.display = 'none';
          registerLink.style.display = 'flex';
        } else if (currentPath === '/register') {
          loginLink.style.display = 'flex';
          registerLink.style.display = 'none';
        } else {
          loginLink.style.display = 'flex';
          registerLink.style.display = 'flex';
        }
      }
    }

    document.querySelectorAll('.nav-list a').forEach(link => {
      link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.nav-list a[href="#${currentPath}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }

    document.body.classList.toggle('auth-page', isAuthPage);
  }

  _getPageFromPath(path) {
    if (path.startsWith('/map/')) {
      return routes['/map/:id'];
    }
    
    return routes[path];
  }

  async renderPage() {
    try {
      const path = window.location.hash.slice(1).toLowerCase() || '/';
      const token = this.authModel._getToken();

      if (!token && path !== '/login' && path !== '/register') {
        window.location.replace('#/login');
        return;
      }

      if (token && (path === '/login' || path === '/register')) {
        window.location.replace('#/home');
        return;
      }

      const pageFactory = this._getPageFromPath(path);
      if (!pageFactory) {
        console.error('No route found for path:', path);
        return;
      }

      const page = pageFactory();
      const content = await page.render();
      
      if (this.#content) {
        this.#content.classList.add('fade-out');
        
        await new Promise(resolve => setTimeout(resolve, 150));

        if (document.startViewTransition) {
          const transition = document.startViewTransition(async () => {
            this.#content.innerHTML = content;
            
            this.#content.classList.remove('fade-out');
            this.#content.classList.add('fade-in');
            
            if (typeof page.afterRender === 'function') {
              await page.afterRender();
            }
          });

          await transition.finished;
          
          this.#content.classList.remove('fade-in');
        } else {
          this.#content.innerHTML = content;
          
          this.#content.classList.remove('fade-out');
          this.#content.classList.add('fade-in');
          
          if (typeof page.afterRender === 'function') {
            await page.afterRender();
          }
          
          await new Promise(resolve => setTimeout(resolve, 300));
          this.#content.classList.remove('fade-in');
        }
      }
      
      if (path === '/login') {
        new LoginPresenter(page).init();
      } else if (path === '/register') {
        new RegisterPresenter(page).init();
      }
      
      this._updateMenu();
      this._setupLogoutLink();
    } catch (error) {
      console.error('Error rendering page:', error);
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        const notification = document.createElement('div');
        notification.className = 'notification error fade-in';
        notification.textContent = 'Terjadi kesalahan saat memuat halaman';
        mainContent.insertAdjacentElement('afterbegin', notification);

        setTimeout(() => {
          notification.classList.add('fade-out');
          setTimeout(() => notification.remove(), 300);
        }, 3000);
      }
    }
  }

  async _setupPushNotification() {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      console.log('Service Worker atau Push Notification tidak didukung');
      return;
    }

    if (!this.authModel._getToken()) {
      console.log('User belum login, tidak bisa subscribe push notification');
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service Worker berhasil didaftarkan');

      const permissionPopup = document.getElementById('notificationPermission');
      const allowButton = document.getElementById('allowNotification');
      const blockButton = document.getElementById('blockNotification');

      permissionPopup.classList.add('show');

      allowButton.addEventListener('click', async () => {
        permissionPopup.classList.remove('show');
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
          const subscription = await registration.pushManager.getSubscription();
          if (!subscription) {
            const newSubscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
            });

            await this.authModel.subscribePushNotification(newSubscription);
            console.log('Berhasil berlangganan push notification');
          }
        }
      });

      blockButton.addEventListener('click', () => {
        permissionPopup.classList.remove('show');
      });

    } catch (error) {
      console.error('Error setup push notification:', error);
    }
  }

  async _urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async _setupLoading() {
    const loading = document.querySelector('.loading');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const loadingText = document.querySelector('.loading-text');

    if (!loading || !loadingSpinner || !loadingText) {
      console.error('Loading elements not found');
      return;
    }

    this._showLoading = (message = 'Memuat...') => {
      loadingText.textContent = message;
      loading.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };

    this._hideLoading = () => {
      loading.style.display = 'none';
      document.body.style.overflow = '';
    };
  }

  async _showNotification(message, type = 'success') {
    const notification = document.querySelector('.notification');
    if (!notification) {
      console.error('Notification element not found');
      return;
    }

    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.opacity = '1';

    setTimeout(() => {
      notification.style.opacity = '0';
    }, 3000);
  }

  async init() {
    try {
      await this._setupDrawerButton();
      await this._setupNavigation();
      await this._setupPushNotification();
      await this._setupViewTransition();
      await this._setupSkipToContent();
      await this._setupAuth();
      await this._setupNotification();
      await this._setupLoading();
    } catch (error) {
      console.error('Error initializing app:', error);
      this._showNotification('Terjadi kesalahan saat memuat aplikasi', 'error');
    }
  }

  _setupNavigation() {
    const drawerButton = document.getElementById('drawer-button');
    const navigationDrawer = document.getElementById('navigation-drawer');

    if (drawerButton) {
      drawerButton.addEventListener('click', () => {
        navigationDrawer.classList.toggle('active');
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#navigation-drawer') && !e.target.closest('#drawer-button')) {
        navigationDrawer.classList.remove('active');
      }
    });

    const navLinks = document.querySelectorAll('#navigation-drawer a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navigationDrawer.classList.remove('active');
      });
    });
  }
}

export default AppManager; 