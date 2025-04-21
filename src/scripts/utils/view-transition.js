const handleViewTransition = async (renderPage) => {
  if (!document.startViewTransition) {
    // Fallback untuk browser yang tidak mendukung View Transition API
    renderPage();
    return;
  }

  // Mulai transisi
  const transition = document.startViewTransition(() => {
    // Render konten baru
    renderPage();
  });

  try {
    // Tunggu transisi selesai
    await transition.finished;
  } catch (error) {
    console.error('View Transition error:', error);
  }
};

export default handleViewTransition; 