import CONFIG from '../config';

const BASE_URL = 'https://story-api.dicoding.dev/v1';

class StoryApi {
  constructor() {
    this._token = localStorage.getItem('token') || null;
  }

  setToken(token) {
    this._token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getToken() {
    return this._token;
  }

  authHeader() {
    const token = this.getToken();
    return token ? `Bearer ${token}` : '';
  }

  async _fetchWithTimeout(url, options = {}, timeout = 10000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      clearTimeout(id);
      return response;
    } catch (error) {
      clearTimeout(id);
      if (error.name === 'AbortError') {
        throw new Error('Request timeout. Silakan cek koneksi internet Anda.');
      }
      throw error;
    }
  }

  async register(name, email, password) {
    try {
      const response = await this._fetchWithTimeout(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      return response.json();
    } catch (error) {
      console.error('Register error:', error);
      return { error: true, message: 'Gagal terhubung ke server. Silakan cek koneksi internet Anda.' };
    }
  }

  async login(email, password) {
    try {
      const response = await this._fetchWithTimeout(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!data.error) {
        this.setToken(data.loginResult.token);
      }
      return data;
    } catch (error) {
      console.error('Login error:', error);
      return { error: true, message: 'Gagal terhubung ke server. Silakan cek koneksi internet Anda.' };
    }
  }

  async getStoryById(id) {
    try {
      const response = await fetch(`${BASE_URL}/stories/${id}`, {
        headers: {
          'Authorization': `Bearer ${this._token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Gagal memuat detail cerita');
      }

      return data;
    } catch (error) {
      console.error('Error getting story by id:', error);
      throw error;
    }
  }

  async addStory(formData) {
    try {
      const response = await fetch(`${BASE_URL}/stories`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this._token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Gagal menambahkan cerita');
      }

      return data;
    } catch (error) {
      console.error('Error adding story:', error);
      throw error;
    }
  }

  async subscribePushNotification(subscription) {
    const response = await fetch(`${BASE_URL}/notifications/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authHeader(),
      },
      body: JSON.stringify(subscription),
    });
    return response.json();
  }

  async unsubscribePushNotification(endpoint) {
    const response = await fetch(`${BASE_URL}/notifications/subscribe`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authHeader(),
      },
      body: JSON.stringify({ endpoint }),
    });
    return response.json();
  }
}

const storyApi = new StoryApi();
export default storyApi;