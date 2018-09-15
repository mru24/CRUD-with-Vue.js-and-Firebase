import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyCFnJxHqmRQ7O6iAtECae0MRtvHv4lUEb8",
    authDomain: "vue-app-15-09-2018.firebaseapp.com",
    databaseURL: "https://vue-app-15-09-2018.firebaseio.com",
    projectId: "vue-app-15-09-2018",
    storageBucket: "vue-app-15-09-2018.appspot.com",
    messagingSenderId: "484244242026"
  });

export const db = app.database();
export const namesRef = db.ref('names');
