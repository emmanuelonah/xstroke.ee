const config = {
    apiKey: "AIzaSyCDHJOXGHOD1Aaf87PRw9G0R58S8RI46C8",
    authDomain: "xstroke-ee.firebaseapp.com",
    databaseURL: "https://xstroke-ee.firebaseio.com",
    projectId: "xstroke-ee",
    storageBucket: "xstroke-ee.appspot.com",
    messagingSenderId: "258650641006",
    appId: "1:258650641006:web:c37b3d78703e79523d8c7f",
    measurementId: "G-597LPMLF5W",
};
firebase.initializeApp(config);
const db = firebase.firestore();
export default firebase;

export { db };
