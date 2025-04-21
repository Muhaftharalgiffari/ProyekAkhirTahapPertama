const API_BASE_URL = 'https://story-api.dicoding.dev/v1';
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

class StoryModel {
  constructor() {
    this._token = localStorage.getItem('token') || null;
  }

  updateToken(token) {
    this._token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  _getToken() {
    return this._token;
  }

  _handleResponse(response) {
    if (!response.ok) {
      throw new Error(response.statusText || 'Terjadi kesalahan pada server');
    }
    return response.json();
  }

  _validateFile(file) {
    if (!file) {
      throw new Error('File tidak boleh kosong');
    }

    if (file.size > MAX_FILE_SIZE) {
      throw new Error('Ukuran file tidak boleh lebih dari 1MB');
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      throw new Error('Tipe file harus berupa gambar (JPEG/PNG)');
    }
  }

  async addStory(formData) {
    try {
      const photo = formData.get('photo');
      this._validateFile(photo);

      const response = await fetch(`${API_BASE_URL}/stories`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this._token}`,
        },
        body: formData,
      });

      const data = await this._handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error adding story:', error);
      throw new Error(error.message || 'Gagal menambahkan cerita');
    }
  }

  async getStories(page = 1, size = 10, location = 0) {
    try {
      const response = await fetch(`${API_BASE_URL}/stories?page=${page}&size=${size}&location=${location}`, {
        headers: {
          'Authorization': `Bearer ${this._token}`,
        },
      });

      const data = await this._handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error getting stories:', error);
      throw new Error(error.message || 'Gagal memuat cerita');
    }
  }

  async getStoryById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/stories/${id}`, {
        headers: {
          'Authorization': `Bearer ${this._token}`,
        },
      });

      const data = await this._handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error getting story by id:', error);
      throw new Error(error.message || 'Gagal memuat detail cerita');
    }
  }
}

export default StoryModel; 