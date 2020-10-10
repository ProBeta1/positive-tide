import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhja49sh1JTyWyAHpZeIgUtf2rIeTC20s",
  authDomain: "positive-tide.firebaseapp.com",
  databaseURL: "https://positive-tide.firebaseio.com",
  projectId: "positive-tide",
  storageBucket: "positive-tide.appspot.com",
  messagingSenderId: "40444552970",
  appId: "1:40444552970:web:94505cd60bbc1ff7e53cf3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
