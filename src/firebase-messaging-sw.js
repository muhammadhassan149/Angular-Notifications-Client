// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAFCSmX4CO9C0d3U2d32SIyhv_-ivJY99E",
  authDomain: "pac-dev-cae65.firebaseapp.com",
  projectId: "pac-dev-cae65",
  storageBucket: "pac-dev-cae65.appspot.com",
  messagingSenderId: "613140894034",
  appId: "1:613140894034:web:a32cdb8f0d45d1f1202a8b",
  measurementId: "G-0JKLFHJJ0Y"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
