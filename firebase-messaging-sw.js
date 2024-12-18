// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAcwYjVF355SAsY9uIKsb4HDM92OCQRbss",
  authDomain: "test-notification-on-web.firebaseapp.com",
  projectId: "test-notification-on-web",
  storageBucket: "test-notification-on-web.appspot.com",
  messagingSenderId: "57779027693",
  appId: "1:57779027693:web:472e654fa7266756ddd6e4",
}); 

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((message) => {
  console.log("Received a background message:", message);

  // Customize notification here
  const notificationTitle = message.notification.title || "Background Notification";
  const notificationOptions = {
    body: message.notification.body || "You have a new message.",
    icon: message.notification.icon || "/firebase-logo.png",
  };

  // Show notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click event
self.addEventListener("notificationclick", (event) => {
  console.log("Notification click received.", event);
  event.notification.close();

  // Perform specific action on click (e.g., open a URL)
  event.waitUntil(
    clients.openWindow("https://test-notification-on-web.firebaseapp.com")
  );
});
