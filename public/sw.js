self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // You can ignore the fetch events for now
});

// Query the database every 4 hours
// setInterval(queryDatabase, 1000 * 60 * 60 * 4);
setInterval(queryDatabase, 1000 * 2);

function queryDatabase() {
  showNotification();
  // fetch('/api/database-query')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.newData) {
  //       showNotification();
  //     }
  //   });
}

function showNotification() {
  self.registration.showNotification('New data available', {
    body: 'Click to view',
    icon: '/icon.png',
    tag: 'new-data'
  });
}