import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBsMrIxermC5nBjVzG37oFeIAOZhKlTqaw",
	authDomain: "eventify-auth-abf6c.firebaseapp.com",
	projectId: "eventify-auth-abf6c",
	storageBucket: "eventify-auth-abf6c.appspot.com",
	messagingSenderId: "956639726889",
	appId: "1:956639726889:web:6da59eeae53b89e4d3bb38",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default app
