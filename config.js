// Configurazione Firebase, usata da presentazione.html e partecipa.html
// per parlare con il Realtime Database.
//
// DB_PREFIX isola quizinterattivo (v2) dal vecchio quizallievi (v1):
//   v1  usa  sessions/{sid}/...
//   v2  usa  qi/sessions/{sid}/...
// Stesso progetto Firebase quizassegnazioni, zero costi aggiuntivi.

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDkqICLGMN3l03FMWGUwqYwPFMhLV9pLqw",
  authDomain: "quizassegnazioni.firebaseapp.com",
  databaseURL: "https://quizassegnazioni-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quizassegnazioni",
  storageBucket: "quizassegnazioni.firebasestorage.app",
  messagingSenderId: "596173630835",
  appId: "1:596173630835:web:6c9356347c3a6f89fca906"
};

// Prefisso namespace per questo repository.
// NON modificare: cambiarlo a runtime spezza le sessioni in corso.
const DB_PREFIX = 'qiv2';
