self.addEventListener('install', evt => {
    console.log('Service Worker installed');
  });
  
  self.addEventListener('activate', evt => {
    console.log('Service Worker activated');
  });
  
  self.addEventListener('fetch', evt => {
    console.log('Service Worker fetching:', evt.request.url);
  });
  