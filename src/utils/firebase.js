import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnLq9kTAXYUt1rOA_AhRd-YAJyefOQSQ8",
  authDomain: "pokedex-project-3244b.firebaseapp.com",
  databaseURL: "https://pokedex-project-3244b.firebaseio.com",
  projectId: "pokedex-project-3244b",
  storageBucket: "pokedex-project-3244b.appspot.com",
  messagingSenderId: "703928357196",
  appId: "1:703928357196:web:6908bf7dd6bcbfb4c67fe9",
  measurementId: "G-KCMBQ5KLD3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseApp