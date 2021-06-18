import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCkaBmJxwLGZjXcDf2Zi3FmiKl1W2bXqxY",
    authDomain: "e-commerce-dc392.firebaseapp.com",
    projectId: "e-commerce-dc392",
    storageBucket: "e-commerce-dc392.appspot.com",
    messagingSenderId: "1072840747453",
    appId: "1:1072840747453:web:bc426d241b2c55f8298ad4",
    measurementId: "G-48W45ZQSJX"
};

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoggleAuthProvider()
provider.setCustomProvider({ propmt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase