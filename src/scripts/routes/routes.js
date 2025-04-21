import HomePage from '../pages/home/home-page.js';
import AboutPage from '../pages/about/about-page.js';
import LoginPage from '../pages/login/login-page.js';
import RegisterPage from '../pages/register/register-page.js';
import AddStoryPage from '../pages/story/add-story-page.js';
import MapPage from '../pages/story/map-page.js';

const routes = {
  '/': () => new HomePage(),
  '/login': () => new LoginPage(),
  '/register': () => new RegisterPage(),
  '/home': () => new HomePage(),
  '/about': () => new AboutPage(),
  '/add-story': () => new AddStoryPage(),
  '/map/:id': () => new MapPage(),
};

export default routes;
