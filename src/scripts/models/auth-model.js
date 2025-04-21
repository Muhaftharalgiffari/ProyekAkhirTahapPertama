const VAPID_PUBLIC_KEY = 'BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk';

class AuthModel {
  constructor() {
    this._token = localStorage.getItem('token') || null;
    this._storyModel = null;
  }

  setStoryModel(storyModel) {
    this._storyModel = storyModel;
  }

  _getToken() {
    return this._token;
  }

  async register(name, email, password) {
    try {
      const response = await fetch('https://story-api.dicoding.dev/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }

  async login(email, password) {
    try {
      const response = await fetch('https://story-api.dicoding.dev/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message);
      }

      this._token = data.loginResult.token;
      localStorage.setItem('token', this._token);

      if (this._storyModel) {
        this._storyModel.updateToken(this._token);
      }

      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  logout() {
    this._token = null;
    localStorage.removeItem('token');
    if (this._storyModel) {
      this._storyModel.updateToken(null);
    }
  }

  isAuthenticated() {
    return !!this._token;
  }

  async subscribePushNotification(subscription) {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/subscribe`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this._getToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      });

      if (!response.ok) {
        throw new Error('Gagal subscribe push notification');
      }

      const responseData = await response.json();
      if (responseData.error) {
        throw new Error(responseData.message);
      }

      return responseData;
    } catch (error) {
      console.error('Error subscribing push notification:', error);
      throw error;
    }
  }

  async unsubscribePushNotification(subscription) {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/subscribe`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this._getToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ endpoint: subscription.endpoint }),
      });

      if (!response.ok) {
        throw new Error('Gagal unsubscribe push notification');
      }

      const responseData = await response.json();
      if (responseData.error) {
        throw new Error(responseData.message);
      }

      return responseData;
    } catch (error) {
      console.error('Error unsubscribing push notification:', error);
      throw error;
    }
  }
}

export default AuthModel; 