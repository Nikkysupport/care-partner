self.addEventListener('install', (event) => {
  console.log('Service Worker インストール完了');
});

self.addEventListener('fetch', (event) => {
  // アプリとして認識させるための基本設定
});