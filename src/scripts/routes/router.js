import handleViewTransition from '../utils/view-transition';

const router = async (routes, defaultRoute = '/') => {
  const content = document.querySelector('#content');
  let currentPage = null;

  const loadPage = async (url) => {
    const page = routes[url] || routes[defaultRoute];
    currentPage = new page();

    await handleViewTransition(() => {
      content.innerHTML = currentPage.render();
    });

    await currentPage.afterRender();
    
    // Cleanup resources jika ada
    if (currentPage._cleanupResources) {
      window.addEventListener('hashchange', () => {
        currentPage._cleanupResources();
      });
    }
  };

  // Handle initial load
  await loadPage(window.location.hash.slice(1) || defaultRoute);

  // Handle route changes
  window.addEventListener('hashchange', async () => {
    const hash = window.location.hash.slice(1);
    await loadPage(hash || defaultRoute);
  });
}; 