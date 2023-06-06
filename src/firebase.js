import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD0sLlj9hmMB-erANy4_9TA-RSDRbcvV3M",
    authDomain: "yt-c23.firebaseapp.com",
    projectId: "yt-c23",
    storageBucket: "yt-c23.appspot.com",
    messagingSenderId: "478681849150",
    appId: "1:478681849150:web:6836f19f47ed0dfb1ba06f"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()