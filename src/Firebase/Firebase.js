import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD6sPOXgdr6sfrCSnxoy6zBQRaY_C1i_Ks",
    authDomain: "poke-hax.firebaseapp.com",
    databaseURL: "https://poke-hax.firebaseio.com",
    projectId: "poke-hax",
    storageBucket: "poke-hax.appspot.com",
    messagingSenderId: "585034603420",
    appId: "1:585034603420:web:c171a5fe0dd0b113c38659"
};

var db = firebase.initializeApp(firebaseConfig);
export default db;
